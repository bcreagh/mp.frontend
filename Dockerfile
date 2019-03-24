FROM nginx
ADD dist/mp-frontend /usr/share/nginx/html
ADD docker.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80