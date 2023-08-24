CREATE DATABASE nodejsangular;
USE nodejsangular;
CREATE TABLE account (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    password varchar(50) NOT NULL,
    role varchar(50) NOT NULL DEFAULT "role",
    created_at date ,
    last_login datetime 
);


CREATE TABLE category (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL UNIQUE,
    status varchar(20)
);

CREATE TABLE product (
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(120) NOT NULL,
    price float NOT NULL,
    sale_price float NOT NULL DEFAULT 0,
    image varchar(200) NOT NULL,
    category_id int NOT NULL ,
    FOREIGN KEY (category_id) REFERENCES category(id),
    status tinyint NOT NULL DEFAULT 1,
    description text NOT NULL,
    created_at date 
);

CREATE TABLE favourite (
    id int PRIMARY KEY AUTO_INCREMENT,
    account_id int NOT NULL ,
    FOREIGN KEY (account_id) REFERENCES account(id),
    product_id int NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(id),
    created_at date
);

-- account
INSERT INTO account (name, email, password) VALUES('nam', "nam@gmail.com", "123");
INSERT INTO account (name, email, password) VALUES('khoi', "khoi@gmail.com", "456");
INSERT INTO account (name, email, password) VALUES('quang', "quang@gmail.com", "333");

-- category
INSERT INTO category(name) VALUES ('Dried');
INSERT INTO category(name) VALUES ('Fruits');
INSERT INTO category(name) VALUES ('Juice');
INSERT INTO category(name) VALUES ('Vegetables');


-- product
INSERT INTO product (name, price, sale_price, image, category_id, description) VALUES ('Orange Juice',15.00, 12.00,'http://tk-themes.net/html-organik/images/shop/shop_1.jpg', '3','Relish the goodness of hand-picked oranges from the finest orchards. Foster a healthy lifestyle with the benefits of oranges. 100 percent orange juice with no added sugar for a healthy you.');
INSERT INTO product (name, price, image, category_id, description) VALUES ('Aurore Grape',9.00,'http://tk-themes.net/html-organik/images/shop/shop_2.jpg', '2','Relish the goodness of hand-picked oranges from the finest orchards. Foster a healthy lifestyle with the benefits of oranges. 100 percent orange juice with no added sugar for a healthy you.');
INSERT INTO product (name, price, image, category_id, description) VALUES ('Blueberry Jam',15.00,'http://tk-themes.net/html-organik/images/shop/shop_3.jpg', '1','Relish the goodness of hand-picked oranges from the finest orchards. Foster a healthy lifestyle with the benefits of oranges. 100 percent orange juice with no added sugar for a healthy you.');
INSERT INTO product (name, price, image, category_id, description) VALUES ('PassionFruit',35.00,'http://tk-themes.net/html-organik/images/shop/shop_4.jpg', '2','Relish the goodness of hand-picked oranges from the finest orchards. Foster a healthy lifestyle with the benefits of oranges. 100 percent orange juice with no added sugar for a healthy you.');
INSERT INTO product (name, price, image, category_id, description) VALUES ('Carot',12.00,'http://tk-themes.net/html-organik/images/shop/shop_5.jpg', '4','Relish the goodness of hand-picked oranges from the finest orchards. Foster a healthy lifestyle with the benefits of oranges. 100 percent orange juice with no added sugar for a healthy you.');
INSERT INTO product (name, price, image, category_id, description) VALUES ('Sprouting Broccoli',6.00,'http://tk-themes.net/html-organik/images/shop/shop_6.jpg', '4','Relish the goodness of hand-picked oranges from the finest orchards. Foster a healthy lifestyle with the benefits of oranges. 100 percent orange juice with no added sugar for a healthy you.');
INSERT INTO product (name, price, image, category_id, description) VALUES ('Chinese Cabbage',9.00,'http://tk-themes.net/html-organik/images/shop/shop_7.jpg', '4','Relish the goodness of hand-picked oranges from the finest orchards. Foster a healthy lifestyle with the benefits of oranges. 100 percent orange juice with no added sugar for a healthy you.');
INSERT INTO product (name, price, image, category_id, description) VALUES ('Tieton Cherry',9.00,'http://tk-themes.net/html-organik/images/shop/shop_8.jpg', '2','Relish the goodness of hand-picked oranges from the finest orchards. Foster a healthy lifestyle with the benefits of oranges. 100 percent orange juice with no added sugar for a healthy you.');

-- favorite
INSERT INTO favourite( account_id,  product_id) VALUES (1, 9);
INSERT INTO favourite( account_id,  product_id) VALUES (2, 10);
INSERT INTO favourite( account_id,  product_id) VALUES (3, 11);





-- alter
ALTER TABLE product ALTER COLUMN created_at SET DEFAULT current_date();
ALTER TABLE favourite ALTER COLUMN created_at SET DEFAULT current_date();

ALTER TABLE account ALTER COLUMN last_login SET DEFAULT current_date();
ALTER TABLE account ALTER COLUMN created_at SET DEFAULT current_date();


ALTER TABLE product 
ADD amount int DEFAULT 1;


