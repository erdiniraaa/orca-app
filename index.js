const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// serve public folder
app.use(express.static("public"));

// API endpoint berisi sambutan kelompok ORCA
app.get("/api/info", (req, res) => {
  res.json({
    message: "Selamat datang! Kami dari Kelompok ORCA — Nira dan Ficha.",
    description: "Aplikasi sederhana ini dibuat untuk memenuhi Tugas 12, yaitu membuat aplikasi menggunakan layanan PaaS gratis Railway.",
    purpose: "Tujuan aplikasi ini adalah menampilkan sambutan kelompok serta waktu server secara real-time.",
    serverTime: new Date().toLocaleString()
  });
});

// menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
