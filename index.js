import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import produkRoutes from "./src/routes/routesProduk.js";

const app = express();
const prisma = new PrismaClient;

app.use(express.json());
app.use(cors()); // aktifkan cors agar bisa diakses dari frontend react

app.use('/api/produk', produkRoutes);

app.get('/', (req, res) => {
    res.send('API produk berjalan');
})

// jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port${PORT}`);
});