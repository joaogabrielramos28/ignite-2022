/*
  Warnings:

  - Changed the type of `age` on the `dogs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Age" AS ENUM ('CHILD', 'YOUNG', 'AGED');

-- AlterTable
ALTER TABLE "dogs" DROP COLUMN "age",
ADD COLUMN     "age" "Age" NOT NULL;
