CREATE TABLE producttype (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);
CREATE TABLE pettype (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);
CREATE TABLE vaccinertype (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    pet_type_id INT,
    FOREIGN KEY (pet_type_id) REFERENCES pettype(id) ON DELETE CASCADE
);
CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    quantity INT NOT NULL,
    price INT DEFAULT 100,
    type_id INT,
    pet_type_id INT,
    img VARCHAR(10000),
    pub_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (type_id) REFERENCES producttype(id) ON DELETE CASCADE,
    FOREIGN KEY (pet_type_id) REFERENCES pettype(id) ON DELETE CASCADE
);
CREATE TABLE client (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) DEFAULT '',
    surname VARCHAR(200) DEFAULT '',
    dni INT DEFAULT 0,
    address VARCHAR(200) DEFAULT '',
    email VARCHAR(254) UNIQUE NOT NULL,
    phone VARCHAR(255) DEFAULT '',
    password VARCHAR(128) NOT NULL,
    pets JSON DEFAULT '[]',
    level INT DEFAULT 0,
    last_login DATETIME DEFAULT NULL,
    pub_date DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE pet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    breed VARCHAR(200) DEFAULT '',
    age INT DEFAULT 100,
    owner_id INT,
    vaccines JSON DEFAULT '[]',
    pub_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES pettype(id) ON DELETE CASCADE,
    FOREIGN KEY (owner_id) REFERENCES client(id) ON DELETE CASCADE
);
CREATE TABLE vaccine (
    id INT AUTO_INCREMENT PRIMARY KEY,
    app_date DATETIME NOT NULL,
    type_id INT,
    pet_id INT,
    FOREIGN KEY (type_id) REFERENCES vaccinertype(id) ON DELETE CASCADE,
    FOREIGN KEY (pet_id) REFERENCES pet(id) ON DELETE CASCADE
);
INSERT INTO producttype (name) VALUES ('Alimentos'), ('Accesorios');

-- Obtener todos los registros
SELECT * FROM producttype;

-- Obtener un registro específico por id
SELECT * FROM producttype WHERE id = 1;

UPDATE producttype
SET name = 'Updated Name'
WHERE id = 1;

DELETE FROM producttype
WHERE id = 1;


INSERT INTO pettype (name) VALUES ('Gato'), ('Perro');
-- Obtener todos los registros
SELECT * FROM pettype;

-- Obtener un registro específico por id
SELECT * FROM pettype WHERE id = 1;
UPDATE pettype
SET name = 'Updated Name'
WHERE id = 1;
DELETE FROM pettype
WHERE id = 1;


INSERT INTO vaccinertype (name, pet_type_id) VALUES ('Rabies', 1), ('Feline Leukemia', 2);
-- Obtener todos los registros
SELECT * FROM vaccinertype;

-- Obtener un registro específico por id
SELECT * FROM vaccinertype WHERE id = 1;
UPDATE vaccinertype
SET name = 'Updated Vaccine Name'
WHERE id = 1;
DELETE FROM vaccinertype
WHERE id = 1;

INSERT INTO product (name, description, quantity, price, type_id, pet_type_id, img) 
VALUES ('Dog Food', 'High-quality dog food', 50, 30, 1, 1, 'dog_food.jpg');

-- Obtener todos los registros
SELECT * FROM product;

-- Obtener un registro específico por id
SELECT * FROM product WHERE id = 1;
UPDATE product
SET price = 35
WHERE id = 1;
DELETE FROM product
WHERE id = 1;


INSERT INTO client (name, surname, dni, address, email, phone, password, pets, level) 
VALUES ('John', 'Doe', 12345678, '123 Elm Street', 'john.doe@example.com', '555-1234', 'hashedpassword', '[]', 1);


-- Obtener todos los registros
SELECT * FROM client;

-- Obtener un registro específico por id
SELECT * FROM client WHERE id = 1;


UPDATE client
SET address = '456 Oak Avenue'
WHERE id = 1;


DELETE FROM client
WHERE id = 1;
INSERT INTO pet (name, breed, age, owner_id, vaccines, type_id) 
VALUES ('Rex', 'Labrador', 5, 1, '["Rabies", "Distemper"]', 1);
-- Obtener todos los registros
SELECT * FROM pet;

-- Obtener un registro específico por id
SELECT * FROM pet WHERE id = 1;
 UPDATE pet
SET age = 6
WHERE id = 1;
DELETE FROM pet
WHERE id = 1;


INSERT INTO vaccine (app_date, type_id, pet_id) 
VALUES ('2024-08-01 10:00:00', 1, 1);
-- Obtener todos los registros
SELECT * FROM vaccine;

-- Obtener un registro específico por id
SELECT * FROM vaccine WHERE id = 1;

DELETE FROM vaccine
WHERE id = 1;



