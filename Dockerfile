FROM node:18

COPY ./package.json /myFolder/
COPY ./yarn.lock /myFolder/
# 커서 위치 /myfolder 뒤로 변경
WORKDIR /myFolder/
RUN yarn install

COPY . /myFolder/

CMD yarn start:dev


