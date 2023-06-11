/*
  Warnings:

  - You are about to drop the column `access_token` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_access_token_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "access_token";
