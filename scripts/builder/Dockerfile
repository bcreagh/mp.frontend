FROM node

RUN npm install -g @angular/cli \
  && mkdir /mp.frontend

WORKDIR /mp.frontend

ENTRYPOINT ["./scripts/builder/entrypoint.sh"]
