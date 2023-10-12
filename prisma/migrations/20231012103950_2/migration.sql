-- CreateTable
CREATE TABLE "Merchant" (
    "id" SERIAL NOT NULL,
    "node_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "toko_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "node_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "merchant_name" TEXT NOT NULL,
    "merchant_id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "price_suffic" TEXT NOT NULL DEFAULT '/item',
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_node_id_key" ON "Merchant"("node_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_node_id_key" ON "Product"("node_id");

-- AddForeignKey
ALTER TABLE "Merchant" ADD CONSTRAINT "Merchant_toko_id_fkey" FOREIGN KEY ("toko_id") REFERENCES "Toko"("node_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_merchant_id_fkey" FOREIGN KEY ("merchant_id") REFERENCES "Merchant"("node_id") ON DELETE RESTRICT ON UPDATE CASCADE;
