-- CreateTable
CREATE TABLE "public"."cliks" (
    "id" TEXT NOT NULL,
    "linkId" TEXT NOT NULL,
    "accessId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cliks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."cliks" ADD CONSTRAINT "cliks_accessId_fkey" FOREIGN KEY ("accessId") REFERENCES "public"."accesses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
