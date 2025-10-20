import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();


//  GET semua peserta
router.get("/", async (req, res) => {
    try {
        const produk = await prisma.produk.findMany();
        res.json(produk);
    } catch (error) {
        res.status(500).json({ message: "terjadi kesalahan pada server"});

    }
});

// GET peserta By Id
router.get("/:id", async (req, res) => {
    const produk = await prisma.produk.findUnique({
        where: {id: parseInt(req.params.id)},
    })

    if (!produk) {
        return res.status(404).json({ message: "Produk tidak di temukan"});

    }

    res.json(produk);
});

//create produk
// POST untuk tambah peserta
router.post("/", async (req, res) => {
    const { kode_produk, nama_produk, kategori, harga, stok, deskripsi } = req.body;

    try {
        const newProduk = await prisma.produk.create({
            data: {
                kode_produk,
                nama_produk, 
                kategori, 
                harga: parseFloat(harga), 
                stok: parseInt(stok),
                deskripsi
            },
        });
        res.status(201).json(newProduk);
    } catch (error) {
        res.status(400).json({ message: "Gagal menambahkan produk", error})
    }
});

// PUT untuk edit peserta
router.put("/:id", async (req, res) => {
    const { kode_produk, nama_produk, kategori, harga, stok, deskripsi } = req.body;

    try {

        const editProduk = await prisma.produk.update({
            where: {id: parseInt(req.params.id)},
            data: {
                kode_produk,
                nama_produk, 
                kategori, 
                harga: parseFloat(harga), 
                stok: parseInt(stok),
                deskripsi
            },
        });

        res.json(editProduk);
    } catch (error) {
        res.status(400).json({ message: "Gagal mengupdate produk", error});
    }
});

// DELETE menghapus peserta
router.delete("/:id", async (req, res) => {
    try {
        await prisma.produk.delete({
            where: {id: parseInt(req.params.id)},
        });
        res.json({ message: "Produk berhasil dihapus"})
    } catch (error) {
        res.status(404).json({ message:"Produk tidak ditemukan", error})
    }
});

export default router;
