/*
  Warnings:

  - Added the required column `created_by` to the `Proyect` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `proyect` ADD COLUMN `created_by` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Proyect` ADD CONSTRAINT `Proyect_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
