-- CreateTable
CREATE TABLE "SecureNote" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SecureNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentCard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "holder_name" TEXT NOT NULL,
    "card_name" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL,
    "notes" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PaymentCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "branch_address" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "account_no" TEXT NOT NULL,
    "pin" TEXT NOT NULL,
    "swift_code" TEXT NOT NULL,
    "iban_code" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "address_line_1" TEXT NOT NULL,
    "address_line_2" TEXT NOT NULL,
    "address_line_3" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pin_code" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IDCard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "issue_date" TIMESTAMP(3) NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL,
    "country" TEXT NOT NULL,
    "place_of_issue" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "IDCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SecureNote" ADD CONSTRAINT "SecureNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentCard" ADD CONSTRAINT "PaymentCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankAccount" ADD CONSTRAINT "BankAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IDCard" ADD CONSTRAINT "IDCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
