/*
  Warnings:

  - You are about to drop the `peserta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `peserta`;

-- CreateTable
CREATE TABLE `Produk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_produk` VARCHAR(191) NOT NULL,
    `nama_produk` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `stok` INTEGER NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `tanggal_input` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Produk_kode_produk_key`(`kode_produk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
