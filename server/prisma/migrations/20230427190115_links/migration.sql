/*
  Warnings:

  - Added the required column `freeBetAmount` to the `BookieLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookieLink" ADD COLUMN     "freeBetAmount" INTEGER NOT NULL;
