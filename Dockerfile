FROM node:14-alpine3.15
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN npm install 
COPY . ./
CMD ["npm", "start"]“