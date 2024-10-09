# Menggunakan base image Node.js versi terbaru (Node.js 20) berbasis Alpine
FROM node:20-alpine

# Mengatur working directory di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json ke dalam container untuk menginstal dependencies
COPY package*.json ./

# Menginstal dependencies dan PM2 secara global
RUN npm install --production && npm install pm2 -g

# Menyalin seluruh kode sumber ke dalam container
COPY . .

# Menentukan port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan aplikasi dengan PM2 saat container di-start
CMD ["pm2-runtime", "start", "index.js", "--name", "my-node-app"]