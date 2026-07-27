<?php

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/response.php';
require_once __DIR__ . '/crypto.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/auth.php';

header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: same-origin');

$PORTAL_CONFIG = portal_config();
$PORTAL_DB = portal_db($PORTAL_CONFIG);
