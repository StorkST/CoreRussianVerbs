FROM node:alpine as builder
WORKDIR /app
# copy both packages and lock file
COPY package*.json ./
RUN npm install
# before this we created layer which changes rarely, so it will be reused in subsequent builds.
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html