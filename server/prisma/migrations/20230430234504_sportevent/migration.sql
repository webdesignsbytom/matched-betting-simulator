/*
  Warnings:

  - Added the required column `minBet` to the `BookieLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookieLink" ADD COLUMN     "desc" TEXT,
ADD COLUMN     "minBet" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SportEvent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "sportType" TEXT NOT NULL,
    "betTypes" TEXT[],
    "competitors" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SportEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SportEvent_title_key" ON "SportEvent"("title");
