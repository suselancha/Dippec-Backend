-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL,
    "legajo" INTEGER NOT NULL,
    "dni" INTEGER NOT NULL,
    "cuil" INTEGER NOT NULL,
    "apellido" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "ubigeo_provincia" INTEGER,
    "ubigeo_departamento" INTEGER,
    "ubigeo_localidad" INTEGER,
    "provincia" TEXT,
    "departamento" TEXT,
    "localidad" TEXT,
    "telefono" TEXT,
    "celular" TEXT,
    "correo" TEXT,
    "obra_social" TEXT,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_legajo_key" ON "Staff"("legajo");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_dni_key" ON "Staff"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_cuil_key" ON "Staff"("cuil");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_correo_key" ON "Staff"("correo");
