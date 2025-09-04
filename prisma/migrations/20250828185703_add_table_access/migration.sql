-- CreateTable
CREATE TABLE "public"."accesses" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "lat" TEXT,
    "lng" TEXT,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accesses_pkey" PRIMARY KEY ("id")
);
