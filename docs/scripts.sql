CREATE TABLE "ProductType"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "ProductType" ADD PRIMARY KEY("id");
CREATE TABLE "Product"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "quantity" BIGINT NOT NULL,
    "price" BIGINT NOT NULL,
    "type" BIGINT NOT NULL,
    "pet_type" BIGINT NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "pub_date" DATE NOT NULL
);
ALTER TABLE
    "Product" ADD PRIMARY KEY("id");
CREATE TABLE "User"(
    "id" BIGINT NOT NULL,
    "type" BIGINT NOT NULL,
    "dni" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" CHAR(255) NOT NULL,
    "pet" BIGINT NULL,
    "pub_date" DATE NOT NULL
);
ALTER TABLE
    "User" ADD PRIMARY KEY("id");
CREATE TABLE "Pet"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" BIGINT NOT NULL,
    "breed" VARCHAR(255) NOT NULL,
    "age" BIGINT NOT NULL,
    "vaccines" JSON NOT NULL,
    "pub_date" DATE NOT NULL
);
ALTER TABLE
    "Pet" ADD PRIMARY KEY("id");
CREATE TABLE "UserType"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "UserType" ADD PRIMARY KEY("id");
CREATE TABLE "PetType"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "PetType" ADD PRIMARY KEY("id");
ALTER TABLE
    "User" ADD CONSTRAINT "user_pet_foreign" FOREIGN KEY("pet") REFERENCES "Pet"("id");
ALTER TABLE
    "Product" ADD CONSTRAINT "product_pet_type_foreign" FOREIGN KEY("pet_type") REFERENCES "PetType"("id");
ALTER TABLE
    "Product" ADD CONSTRAINT "product_type_foreign" FOREIGN KEY("type") REFERENCES "ProductType"("id");
ALTER TABLE
    "User" ADD CONSTRAINT "user_type_foreign" FOREIGN KEY("type") REFERENCES "UserType"("id");
ALTER TABLE
    "Pet" ADD CONSTRAINT "pet_type_foreign" FOREIGN KEY("type") REFERENCES "PetType"("id");