-- CreateTable
CREATE TABLE "Newsletter" (
    "id" SERIAL NOT NULL,
    "emailAddress" TEXT NOT NULL,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_emailAddress_key" ON "Newsletter"("emailAddress");
