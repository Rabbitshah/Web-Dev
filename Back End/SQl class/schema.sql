use delta_app;

CREATE TABLE IF NOT EXISTS user(
    id VARCHAR(50) primary key,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE not null,
    password VARCHAR(50) not null
);

SHOW TABLES;