###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:16 As development

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install

USER node

###################
# BUILD FOR PRODUCTION
###################
FROM node:16 As build

WORKDIR /usr/src/app

COPY package*.json ./

COPY --from=development /usr/src/app/node_modules ./node_modules

COPY . .

RUN npm run build

ENV NODE_ENV production

USER node

###################
# PRODUCTION
###################

FROM nginx:alpine As server

COPY  --from=build /usr/src/app/dist ./dist
COPY default.conf /etc/nginx/conf.d/

EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]

