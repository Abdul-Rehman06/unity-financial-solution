<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));
$experian = (string)($body['experian'] ?? '');

if ($clientUuid === '') portal_json_error('Missing client session.');

$enc = portal_encrypt($experian, $PORTAL_CONFIG);
if ($enc === null) portal_json_error('Encryption failed.', 500);

$stmt = $PORTAL_DB->prepare('UPDATE clients SET experian=:experian WHERE client_uuid=:uuid');
$stmt->execute([':experian' => $enc, ':uuid' => $clientUuid]);

portal_json_response(['ok' => true]);

