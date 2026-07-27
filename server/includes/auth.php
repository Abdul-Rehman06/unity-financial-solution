<?php

function portal_session_start() {
    if (session_status() === PHP_SESSION_ACTIVE) return;
    $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'domain' => '',
        'secure' => $secure,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function portal_admin_login($config, $username, $password) {
    portal_session_start();

    $expectedUser = (string)($config['admin']['user'] ?? 'admin');
    $hash = (string)($config['admin']['password_hash'] ?? '');
    if ($hash === '') return false;
    if (!hash_equals($expectedUser, (string)$username)) return false;
    if (!password_verify((string)$password, $hash)) return false;

    session_regenerate_id(true);
    $_SESSION['portal_admin'] = true;
    $_SESSION['portal_admin_user'] = $expectedUser;
    return true;
}

function portal_admin_logout() {
    portal_session_start();
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
    }
    session_destroy();
}

function portal_require_admin() {
    portal_session_start();
    if (empty($_SESSION['portal_admin'])) {
        portal_json_error('Unauthorized', 401);
    }
}

