-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "storeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "token" TEXT,
    "country" TEXT,
    "shopifyCurrency" TEXT,
    "squareCurrency" TEXT
);
INSERT INTO "new_Stores" ("country", "id", "name", "shopifyCurrency", "squareCurrency", "storeId", "token", "url") SELECT "country", "id", "name", "shopifyCurrency", "squareCurrency", "storeId", "token", "url" FROM "Stores";
DROP TABLE "Stores";
ALTER TABLE "new_Stores" RENAME TO "Stores";
CREATE UNIQUE INDEX "Stores_id_key" ON "Stores"("id");
CREATE UNIQUE INDEX "Stores_storeId_key" ON "Stores"("storeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
