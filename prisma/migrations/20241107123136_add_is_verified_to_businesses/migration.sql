/*
  Warnings:

  - You are about to drop the column `location` on the `businesses` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `businesses` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[businessName]` on the table `businesses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `businesses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessName` to the `businesses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `businesses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `businesses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "businesses" DROP COLUMN "location",
DROP COLUMN "name",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "businessName" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "operatingHours" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "profileUrl" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "location",
ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "businesses_businessName_key" ON "businesses"("businessName");
