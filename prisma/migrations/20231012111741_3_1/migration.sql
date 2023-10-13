/*
  Warnings:

  - You are about to drop the column `price_suffic` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price_suffic",
ADD COLUMN     "price_suffix" TEXT NOT NULL DEFAULT '/item';
