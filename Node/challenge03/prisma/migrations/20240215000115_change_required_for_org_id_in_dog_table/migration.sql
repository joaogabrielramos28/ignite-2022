/*
  Warnings:

  - Made the column `orgId` on table `dogs` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "dogs" DROP CONSTRAINT "dogs_orgId_fkey";

-- AlterTable
ALTER TABLE "dogs" ALTER COLUMN "orgId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "orgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
