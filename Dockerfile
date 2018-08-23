FROM cargo.caicloudprivatetest.com/caicloud/node:8.9-alpine
COPY . /app
WORKDIR /app
RUN yarn install
CMD ["npm", "run", "start"]