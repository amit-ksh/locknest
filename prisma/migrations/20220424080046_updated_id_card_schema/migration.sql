/*
  Warnings:

  - You are about to drop the column `expirationDate` on the `IdCard` table. All the data in the column will be lost.
  - You are about to drop the column `issueDate` on the `IdCard` table. All the data in the column will be lost.
  - Added the required column `expirationMonth` to the `IdCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationYear` to the `IdCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issueMonth` to the `IdCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issueYear` to the `IdCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IdCard" DROP COLUMN "expirationDate",
DROP COLUMN "issueDate",
ADD COLUMN     "expirationMonth" INTEGER NOT NULL,
ADD COLUMN     "expirationYear" INTEGER NOT NULL,
ADD COLUMN     "issueMonth" INTEGER NOT NULL,
ADD COLUMN     "issueYear" INTEGER NOT NULL;
