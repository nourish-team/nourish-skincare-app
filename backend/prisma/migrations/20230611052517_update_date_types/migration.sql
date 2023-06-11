/*
  Warnings:

  - Added the required column `users_id` to the `routines` table without a default value. This is not possible if the table is not empty.
  - Made the column `routine_name` on table `routines` required. This step will fail if there are existing NULL values in that column.
  - Made the column `skin_type` on table `routines` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "journals" ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT,
ALTER COLUMN "updated_at" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "likes" ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT,
ALTER COLUMN "updated_at" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT,
ALTER COLUMN "updated_at" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "routines" ADD COLUMN     "users_id" INTEGER NOT NULL,
ALTER COLUMN "routine_name" SET NOT NULL,
ALTER COLUMN "skin_type" SET NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT,
ALTER COLUMN "updated_at" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT,
ALTER COLUMN "updated_at" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "routines" ADD CONSTRAINT "routines_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
