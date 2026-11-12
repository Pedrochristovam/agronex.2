-- AlterEnum
ALTER TYPE "RoleType" ADD VALUE 'VETERINARIAN';

-- CreateTable
CREATE TABLE "veterinarians" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "full_name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "crmv" TEXT NOT NULL,
    "crmv_state" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,
    "attendance_mode" TEXT NOT NULL DEFAULT 'BOTH',
    "specialties" JSONB,
    "service_regions" JSONB,
    "cadastral_status" "CadastralStatus" NOT NULL DEFAULT 'PENDING',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "veterinarians_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "veterinarians_user_id_key" ON "veterinarians"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "veterinarians_document_key" ON "veterinarians"("document");

-- CreateIndex
CREATE UNIQUE INDEX "veterinarians_crmv_key" ON "veterinarians"("crmv");

-- CreateIndex
CREATE INDEX "veterinarians_crmv_state_idx" ON "veterinarians"("crmv_state");

-- CreateIndex
CREATE INDEX "veterinarians_cadastral_status_idx" ON "veterinarians"("cadastral_status");

-- CreateIndex
CREATE INDEX "veterinarians_active_idx" ON "veterinarians"("active");

-- AddForeignKey
ALTER TABLE "veterinarians" ADD CONSTRAINT "veterinarians_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
