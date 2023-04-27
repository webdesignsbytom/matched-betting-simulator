-- CreateEnum
CREATE TYPE "BetTypes" AS ENUM ('FREEBET', 'SNR', 'SR', 'ACCUM');

-- CreateTable
CREATE TABLE "BookieLink" (
    "id" SERIAL NOT NULL,
    "bookieName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "betType" TEXT NOT NULL,
    "stakeRequired" INTEGER NOT NULL,
    "potentialProfit" DECIMAL(65,30) NOT NULL,
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "BookieLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookieLink_url_key" ON "BookieLink"("url");
