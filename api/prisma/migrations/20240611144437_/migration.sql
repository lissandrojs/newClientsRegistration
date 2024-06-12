-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "publicPlace" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_cpf_key" ON "Client"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Address_id_client_key" ON "Address"("id_client");

-- CreateIndex
CREATE INDEX "Phone_id_client_idx" ON "Phone"("id_client");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
