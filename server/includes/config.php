<?php

function portal_env($key, $fallback = null) {
    $v = getenv($key);
    if ($v !== false && $v !== null && $v !== '') return $v;
    if (isset($_SERVER[$key]) && $_SERVER[$key] !== '') return $_SERVER[$key];
    if (isset($_ENV[$key]) && $_ENV[$key] !== '') return $_ENV[$key];
    return $fallback;
}

function portal_config() {
    $dbHost = portal_env('PORTAL_DB_HOST', 'localhost');
    $dbName = portal_env('PORTAL_DB_NAME', 'unity_financial_solution');
    $dbUser = portal_env('PORTAL_DB_USER', 'root');
    $dbPass = portal_env('PORTAL_DB_PASS', '');
    $encryptionKey = portal_env('PORTAL_ENCRYPTION_KEY', 'change-this-key');
    $adminUser = portal_env('PORTAL_ADMIN_USER', 'admin');
    $adminPassHash = portal_env('PORTAL_ADMIN_PASSWORD_HASH', '$2y$10$WaGq1x2QqOnA6MZQH1sJw.MkuJyyBJyJtPfRUn..DsPjvfwO/rPTa');

    $uploadBase = portal_env('PORTAL_UPLOAD_BASE', null);
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
