-- SQL script to create the mentalAidPal database and tables for MySQL
-- Paste this into phpMyAdmin SQL tab or run with your MySQL client.

CREATE DATABASE IF NOT EXISTS `mentalaidpal` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mentalaidpal`;

-- users
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(200) NOT NULL,
  `role` VARCHAR(32) NOT NULL,
  `username` VARCHAR(120) DEFAULT NULL,
  `password_hash` VARCHAR(200) DEFAULT NULL,
  `university` VARCHAR(200) DEFAULT NULL,
  `biography` TEXT,
  `terminal_illness` VARCHAR(200) DEFAULT NULL,
  `stigma` VARCHAR(200) DEFAULT NULL,
  `disability` VARCHAR(200) DEFAULT NULL,
  `age` INT DEFAULT NULL,
  `nrc` VARCHAR(60) DEFAULT NULL,
  `school_id` VARCHAR(120) DEFAULT NULL,
  `year_of_study` VARCHAR(60) DEFAULT NULL,
  `reg_number` VARCHAR(120) DEFAULT NULL,
  `years_experience` VARCHAR(60) DEFAULT NULL,
  `home_address` VARCHAR(300) DEFAULT NULL,
  `recommendation_path` VARCHAR(500) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- reports
CREATE TABLE IF NOT EXISTS `reports` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT DEFAULT NULL,
  `type` VARCHAR(50) NOT NULL,
  `title` VARCHAR(250) NOT NULL,
  `details` TEXT,
  `university` VARCHAR(200) DEFAULT NULL,
  `anonymous` TINYINT(1) DEFAULT 0,
  `status` VARCHAR(50) DEFAULT 'open',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- notices
CREATE TABLE IF NOT EXISTS `notices` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `chancellor_id` INT DEFAULT NULL,
  `title` VARCHAR(250) NOT NULL,
  `body` TEXT NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`chancellor_id`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- events
CREATE TABLE IF NOT EXISTS `events` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `chancellor_id` INT DEFAULT NULL,
  `title` VARCHAR(250) NOT NULL,
  `description` TEXT,
  `start_time` DATETIME DEFAULT NULL,
  `end_time` DATETIME DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`chancellor_id`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- communities
CREATE TABLE IF NOT EXISTS `communities` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `university` VARCHAR(200) NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `description` TEXT,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
