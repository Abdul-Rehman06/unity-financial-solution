<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));
$signature = (string)($body['signature'] ?? '');

if ($clientUuid === '') portal_json_error('Missing client session.');
if ($signature === '') portal_json_error('Signature is required.');

$stmt = $PORTAL_DB->prepare('UPDATE clients SET signature=:signature WHERE client_uuid=:uuid');
$stmt->execute([':signature' => $signature, ':uuid' => $clientUuid]);

portal_json_response(['ok' => true]);

