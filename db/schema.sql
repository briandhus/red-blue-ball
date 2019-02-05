DROP DATABASE IF EXISTS coloredBalls;

CREATE DATABASE coloredBalls;

use coloredBalls;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hashed_id VARCHAR NOT NULL,
);