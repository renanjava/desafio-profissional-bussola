# Use a imagem base do Node.js
FROM node:14

# Crie e defina o diretório de trabalho da aplicação dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante do código fonte da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação NestJS será executada (opcional, dependendo da sua configuração)
EXPOSE 3000

# Comando para executar a aplicação NestJS
CMD ["npm", "run", "start"]
