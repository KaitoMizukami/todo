FROM nginx:latest

COPY ./../ui/dist /usr/share/nginx/html/todo
COPY ./containers/web-server/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]