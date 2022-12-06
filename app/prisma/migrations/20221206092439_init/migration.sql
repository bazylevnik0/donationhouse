-- CreateTable
CREATE TABLE "DBMain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adress" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "requisites" TEXT NOT NULL,
    "signPut" TEXT NOT NULL,
    "signGet" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DBSide" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adress" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "requisites" TEXT NOT NULL,
    "signPut" TEXT NOT NULL,
    "signGet" TEXT NOT NULL,
    "signDonate" TEXT NOT NULL
);
