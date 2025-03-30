-- CreateTable
CREATE TABLE "PracticeEntry" (
    "id" SERIAL NOT NULL,
    "piece" TEXT NOT NULL,
    "composer" TEXT NOT NULL,
    "focusArea" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PracticeEntry_pkey" PRIMARY KEY ("id")
);
