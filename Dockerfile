FROM nginx:alpine

COPY dist/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]