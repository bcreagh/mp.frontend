FROM node

RUN npm install -g @angular/cli \
  && mkdir /mp.frontend

WORKDIR /mp.frontend

ENTRYPOINT ["./infrastructure/builder/entrypoint.sh"]
