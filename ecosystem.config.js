module.exports = {
    apps: [
      {
        name: "host-express",
        script: "./index.js",
        instances: 1,           // Jumlah instance (gunakan 'max' untuk scale otomatis)
        autorestart: true,      // Restart otomatis jika aplikasi crash
        watch: false,           // Tidak memantau perubahan file (disarankan untuk production)
        max_memory_restart: "200M",  // Restart jika penggunaan memori melebihi 200MB
        env: {
          NODE_ENV: "production",    // Environment variable untuk production
          PORT: 3000
        }
      }
    ]
  };