/*
  Warnings:

  - You are about to drop the column `expirationMonth` on the `IdCard` table. All the data in the column will be lost.
  - You are about to drop the column `expirationYear` on the `IdCard` table. All the data in the column will be lost.
  - You are about to drop the column `issueMonth` on the `IdCard` table. All the data in the column will be lost.
  - You are about to drop the column `issueYear` on the `IdCard` table. All the data in the column will be lost.
  - You are about to drop the column `expirationMonth` on the `PaymentCard` table. All the data in the column will be lost.
  - You are about to drop the column `expirationYear` on the `PaymentCard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IdCard" DROP COLUMN "expirationMonth",
DROP COLUMN "expirationYear",
DROP COLUMN "issueMonth",
DROP COLUMN "issueYear",
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PaymentCard" DROP COLUMN "expirationMonth",
DROP COLUMN "expirationYear",
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
