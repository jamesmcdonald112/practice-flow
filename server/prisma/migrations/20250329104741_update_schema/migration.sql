/*
  Warnings:

  - Added the required column `duration` to the `PracticeEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PracticeEntry" ADD COLUMN     "duration" INTEGER NOT NULL;
