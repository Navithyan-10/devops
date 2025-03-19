FROM node:14  # Outdated base image with potential vulnerabilities

WORKDIR /app
COPY . ./

RUN npm install
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*  # No specific version control for dependencies

EXPOSE 3000
CMD ["node", "app.js"]
