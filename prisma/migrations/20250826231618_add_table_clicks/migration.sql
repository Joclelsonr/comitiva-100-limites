-- CreateTable
CREATE TABLE "public"."cliks" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "linkId" TEXT NOT NULL,
    "lat" TEXT,
    "lng" TEXT,
    "ipAddress" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cliks_pkey" PRIMARY KEY ("id")
);
