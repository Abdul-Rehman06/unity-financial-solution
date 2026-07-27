<?php

function portal_config() {
    $dbHost = getenv('PORTAL_DB_HOST') ?: 'localhost';
    $dbName = getenv('PORTAL_DB_NAME') ?: 'unity_financial_solution';
    $dbUser = getenv('PORTAL_DB_USER') ?: 'root';
    $dbPass = getenv('PORTAL_DB_PASS') ?: '';
    $encryptionKey = getenv('PORTAL_ENCRYPTION_KEY') ?: 'change-this-key';
    $adminUser = getenv('PORTAL_ADMIN_USER') ?: 'admin';
    $adminPassHash = getenv('PORTAL_ADMIN_PASSWORD_HASH') ?: '$2y$10$WaGq1x2QqOnA6MZQH1sJw.MkuJyyBJyJtPfRUn..DsPjvfwO/rPTa';

    $uploadBase = getenv('PORTAL_UPLOAD_BASE');
    if (!$uploadBase) {
        $uploadBase = realpath(__DIR__ . '/../uploads');
        if (!$uploadBase) {
            $uploadBase = __DIR__ . '/../uploads';
        }
    }

    return [
        'db' => [
            'host' => $dbHost,
            'name' => $dbName,
            'user' => $dbUser,
            'pass' => $dbPass,
        ],
        'admin' => [
            'user' => $adminUser,
            'password_hash' => $adminPassHash,
        ],
        'encryption_key' => $encryptionKey,
        'upload_base' => $uploadBase,
        'max_upload_bytes' => 20 * 1024 * 1024,
        'allowed_mimes' => [
            'application/pdf',
            'image/png',
            'image/jpeg',
        ],
    ];
}
