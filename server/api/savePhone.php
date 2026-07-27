<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));
$phone = trim((string)($body['phone'] ?? ''));

if ($clientUuid === '') portal_json_error('Missing client session.');
if ($phone === '') portal_json_error('Phone number is required.');

$stmt = $PORTAL_DB->prepare('UPDATE clients SET phone=:phone WHERE client_uuid=:uuid');
$stmt->execute([':phone' => $phone, ':uuid' => $clientUuid]);

portal_json_response(['ok' => true]);

