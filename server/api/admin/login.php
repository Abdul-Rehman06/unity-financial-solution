<?php

require_once __DIR__ . '/../../includes/bootstrap.php';

$body = portal_read_json_body();
$username = (string)($body['username'] ?? '');
$password = (string)($body['password'] ?? '');

if ($username === '' || $password === '') {
    portal_json_error('Username and password are required.');
}

$ok = portal_admin_login($PORTAL_CONFIG, $username, $password);
if (!$ok) {
    portal_json_error('Invalid credentials.', 401);
}

portal_json_response(['ok' => true]);

