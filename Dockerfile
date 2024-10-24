# Basic image
FROM node:20.12.2

# Installing supervisor to manage two services
RUN apt-get update && apt-get install -y supervisor bash

# Working directory
WORKDIR /app

# Copy and install dependencies for the backend (Express)
COPY ./back/package*.json ./back/
WORKDIR /app/back
RUN npm install && npm cache clean --force

WORKDIR /app

# Copy the entire backend code
COPY ./back ./back/

# Copy and install dependencies for the frontend (Angular)
COPY ./front/package*.json ./front/
WORKDIR /app/front
RUN npm install --legacy-peer-deps && npm cache clean --force

WORKDIR /app

# Copy the entire frontend code
COPY ./front ./front/

# Copy the configuration for supervisord
COPY ./supervisord.conf /etc/supervisord.conf

# Open ports for backend and frontend
EXPOSE 3000 4200

# Run supervisor to manage both services
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
