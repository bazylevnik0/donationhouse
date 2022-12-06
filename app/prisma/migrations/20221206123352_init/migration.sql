/*
  Warnings:

  - You are about to drop the column `adress` on the `dbMain` table. All the data in the column will be lost.
  - You are about to drop the column `adress` on the `dbSide` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_dbMain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "requisites" TEXT NOT NULL DEFAULT '',
    "signPut" TEXT NOT NULL DEFAULT '',
    "signGet" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_dbMain" ("id", "phone", "requisites", "signGet", "signPut") SELECT "id", "phone", "requisites", "signGet", "signPut" FROM "dbMain";
DROP TABLE "dbMain";
ALTER TABLE "new_dbMain" RENAME TO "dbMain";
CREATE TABLE "new_dbSide" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "requisites" TEXT NOT NULL DEFAULT '',
    "signPut" TEXT NOT NULL DEFAULT '',
    "signGet" TEXT NOT NULL DEFAULT '',
    "signDonate" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_dbSide" ("id", "phone", "requisites", "signDonate", "signGet", "signPut") SELECT "id", "phone", "requisites", "signDonate", "signGet", "signPut" FROM "dbSide";
DROP TABLE "dbSide";
ALTER TABLE "new_dbSide" RENAME TO "dbSide";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
