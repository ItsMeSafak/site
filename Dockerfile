FROM node:16-alpine AS deps

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
