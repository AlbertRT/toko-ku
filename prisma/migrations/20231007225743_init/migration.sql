/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "node_id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "toko_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Toko" (
    "id" SERIAL NOT NULL,
    "node_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Toko_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Toko_node_id_key" ON "Toko"("node_id");

-- CreateIndex
CREATE UNIQUE INDEX "Toko_contact_key" ON "Toko"("contact");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_toko_id_fkey" FOREIGN KEY ("toko_id") REFERENCES "Toko"("node_id") ON DELETE RESTRICT ON UPDATE CASCADE;
