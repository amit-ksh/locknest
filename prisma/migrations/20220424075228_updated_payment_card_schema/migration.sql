/*
  Warnings:

  - You are about to drop the column `expirationDate` on the `PaymentCard` table. All the data in the column will be lost.
  - Added the required column `expirationMonth` to the `PaymentCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationYear` to the `PaymentCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PaymentCard" DROP COLUMN "expirationDate",
ADD COLUMN     "expirationMonth" INTEGER NOT NULL,
ADD COLUMN     "expirationYear" INTEGER NOT NULL;
