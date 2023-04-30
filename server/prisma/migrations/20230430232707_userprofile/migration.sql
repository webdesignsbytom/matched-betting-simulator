/*
  Warnings:

  - Added the required column `category` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerName` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('GENERAL', 'EVENTS', 'NEWBIES');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "category" "Category" NOT NULL,
ADD COLUMN     "ownerName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "biography" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "profileImgUrl" TEXT NOT NULL DEFAULT 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg';
