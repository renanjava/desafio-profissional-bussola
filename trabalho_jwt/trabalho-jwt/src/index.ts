import express, { Request, Response, NextFunction } from 'express';

// Classe para representar o log de requisição
class RequestLog {
  constructor(
    public routeName: string,
    public method: string,
    public responseTime: number,
  ) {}
}

// Array para armazenar os logs de requisição
const requestLogs: RequestLog[] = [];

// Função para calcular o tempo de resposta
function calculateResponseTime(startTime: [number, number]): number {
  const diff = process.hrtime(startTime);
  return diff[0] * 1e3 + diff[1] * 1e-6;
}

// Middleware para registrar o tempo de início da requisição
const startTimeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  (req as any).startTime = process.hrtime();
  next();
};

// Middleware para calcular e registrar o tempo de resposta
const responseTimeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.on('finish', () => {
    const responseTime = calculateResponseTime((req as any).startTime);
    const routeName = req.route?.path || req.url;
    const method = req.method;

    const log = new RequestLog(routeName, method, responseTime);
    requestLogs.push(log);
  });
  next();
};

// Criar uma aplicação Express
const app = express();

// Aplicar middlewares globais
app.use(startTimeMiddleware);
app.use(responseTimeMiddleware);

// Exemplo de rota GET
app.get('/example1', (req: Request, res: Response) => {
  res.send('Example 1');
});

// Exemplo de rota POST
app.post('/example2', (req: Request, res: Response) => {
  res.send('Example 2');
});

// Rota para retornar os logs de requisição
app.get('/logs', (req: Request, res: Response) => {
  res.json(requestLogs);
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
