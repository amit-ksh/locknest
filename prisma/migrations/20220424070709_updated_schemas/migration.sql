/*
  Warnings:

  - You are about to drop the column `address_line_1` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `address_line_2` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `address_line_3` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `pin_code` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `account_no` on the `BankAccount` table. All the data in the column will be lost.
  - You are about to drop the column `account_type` on the `BankAccount` table. All the data in the column will be lost.
  - You are about to drop the column `bank_name` on the `BankAccount` table. All the data in the column will be lost.
  - You are about to drop the column `branch_address` on the `BankAccount` table. All the data in the column will be lost.
  - You are about to drop the column `iban_code` on the `BankAccount` table. All the data in the column will be lost.
  - You are about to drop the column `swift_code` on the `BankAccount` table. All the data in the column will be lost.
  - You are about to drop the column `card_name` on the `PaymentCard` table. All the data in the column will be lost.
  - You are about to drop the column `cvv` on the `PaymentCard` table. All the data in the column will be lost.
  - You are about to drop the column `expiration_date` on the `PaymentCard` table. All the data in the column will be lost.
  - You are about to drop the column `holder_name` on the `PaymentCard` table. All the data in the column will be lost.
  - You are about to drop the `IDCard` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressLine1` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLine2` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLine3` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pinCode` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountNo` to the `BankAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountType` to the `BankAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankName` to the `BankAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branchAddress` to the `BankAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `holderName` to the `BankAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ibanCode` to the `BankAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `swiftCode` to the `BankAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CVV` to the `PaymentCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardName` to the `PaymentCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `PaymentCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `PaymentCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `holderName` to the `PaymentCard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "IDCard" DROP CONSTRAINT "IDCard_userId_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "address_line_1",
DROP COLUMN "address_line_2",
DROP COLUMN "address_line_3",
DROP COLUMN "pin_code",
ADD COLUMN     "addressLine1" TEXT NOT NULL,
ADD COLUMN     "addressLine2" TEXT NOT NULL,
ADD COLUMN     "addressLine3" TEXT NOT NULL,
ADD COLUMN     "pinCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BankAccount" DROP COLUMN "account_no",
DROP COLUMN "account_type",
DROP COLUMN "bank_name",
DROP COLUMN "branch_address",
DROP COLUMN "iban_code",
DROP COLUMN "swift_code",
ADD COLUMN     "accountNo" TEXT NOT NULL,
ADD COLUMN     "accountType" TEXT NOT NULL,
ADD COLUMN     "bankName" TEXT NOT NULL,
ADD COLUMN     "branchAddress" TEXT NOT NULL,
ADD COLUMN     "holderName" TEXT NOT NULL,
ADD COLUMN     "ibanCode" TEXT NOT NULL,
ADD COLUMN     "swiftCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PaymentCard" DROP COLUMN "card_name",
DROP COLUMN "cvv",
DROP COLUMN "expiration_date",
DROP COLUMN "holder_name",
ADD COLUMN     "CVV" TEXT NOT NULL,
ADD COLUMN     "cardName" TEXT NOT NULL,
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "holderName" TEXT NOT NULL;

-- DropTable
DROP TABLE "IDCard";

-- CreateTable
CREATE TABLE "IdCard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "country" TEXT NOT NULL,
    "placeOfIssue" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "IdCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IdCard" ADD CONSTRAINT "IdCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
