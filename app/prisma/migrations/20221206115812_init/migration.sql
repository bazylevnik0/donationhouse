/*
  Warnings:

  - You are about to drop the `dBMain` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dBSide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "dBMain";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "dBSide";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "dbMain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "requisites" TEXT NOT NULL,
    "signPut" TEXT NOT NULL,
    "signGet" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "dbSide" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "requisites" TEXT NOT NULL,
    "signPut" TEXT NOT NULL,
    "signGet" TEXT NOT NULL,
    "signDonate" TEXT NOT NULL
);
