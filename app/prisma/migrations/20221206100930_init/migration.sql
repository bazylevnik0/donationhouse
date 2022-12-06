/*
  Warnings:

  - You are about to drop the `DBMain` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DBSide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DBMain";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DBSide";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "dBMain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "requisites" TEXT NOT NULL,
    "signPut" TEXT NOT NULL,
    "signGet" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "dBSide" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "requisites" TEXT NOT NULL,
    "signPut" TEXT NOT NULL,
    "signGet" TEXT NOT NULL,
    "signDonate" TEXT NOT NULL
);
