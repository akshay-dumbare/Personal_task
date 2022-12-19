FROM arm64v8/ubuntu:bionic

RUN apt-get clean && apt-get update
RUN apt-get -y install build-essential python3 procps curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install --yes nodejs

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY tsconfig.json webpack.config.ts ./


COPY src src

EXPOSE 3000

CMD npm run watch


