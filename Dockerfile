FROM node:18
# Create app directory
RUN mkdir /app
WORKDIR /app
COPY package*.json /app/ 
RUN npm install
# Bundle app source
COPY . /app

ENV NODE_ENV QA
ENV PORT 3002
EXPOSE 3002
CMD [ "npm", "run", "dev" ] 