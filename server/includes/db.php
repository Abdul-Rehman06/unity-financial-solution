<?php

function portal_db($config) {
    static $pdo = null;
    if ($pdo) return $pdo;

    $db = $config['db'];
    $dsn = "mysql:host={$db['host']};dbname={$db['name']};charset=utf8mb4";
    try {
        $pdo = new PDO($dsn, $db['user'], $db['pass'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (Throwable $e) {
        portal_json_error('Database connection failed.', 500);
    }

    portal_db_migrate($pdo);
    return $pdo;
}

function portal_db_migrate($pdo) {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS clients (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            client_uuid CHAR(32) NOT NULL UNIQUE,
            first_name VARCHAR(120) NULL,
            last_name VARCHAR(120) NULL,
            phone VARCHAR(40) NULL,
            email VARCHAR(255) NULL,
            street VARCHAR(255) NULL,
            street2 VARCHAR(255) NULL,
            city VARCHAR(120) NULL,
            state VARCHAR(80) NULL,
            zip VARCHAR(30) NULL,
            experian MEDIUMTEXT NULL,
            myfreescore MEDIUMTEXT NULL,
            nav MEDIUMTEXT NULL,
            referral VARCHAR(255) NULL,
            signature MEDIUMTEXT NULL,
            status VARCHAR(40) NOT NULL DEFAULT 'draft',
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            submitted_at TIMESTAMP NULL DEFAULT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS documents (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            client_uuid CHAR(32) NOT NULL,
            type VARCHAR(80) NOT NULL,
            original_filename VARCHAR(255) NOT NULL,
            stored_filename VARCHAR(255) NOT NULL,
            filepath VARCHAR(600) NOT NULL,
            uploaded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_client_uuid (client_uuid),
            INDEX idx_type (type)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ");
}

