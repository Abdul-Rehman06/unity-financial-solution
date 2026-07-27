<?php

require_once __DIR__ . '/../../includes/bootstrap.php';

portal_require_admin();

portal_json_response([
    'ok' => true,
    'user' => (string)($_SESSION['portal_admin_user'] ?? ''),
]);

