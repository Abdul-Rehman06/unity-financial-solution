<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));
$myfreescore = (string)($body['myfreescore'] ?? '');

if ($clientUuid === '') portal_json_error('Missing client session.');

$enc = portal_encrypt($myfreescore, $PORTAL_CONFIG);
if ($enc === null) portal_json_error('Encryption failed.', 500);

$stmt = $PORTAL_DB->prepare('UPDATE clients SET myfreescore=:myfreescore WHERE client_uuid=:uuid');
$stmt->execute([':myfreescore' => $enc, ':uuid' => $clientUuid]);

portal_json_response(['ok' => true]);

