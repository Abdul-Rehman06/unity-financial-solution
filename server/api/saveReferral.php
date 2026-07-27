<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));
$referral = trim((string)($body['referral'] ?? ''));

if ($clientUuid === '') portal_json_error('Missing client session.');

$stmt = $PORTAL_DB->prepare('UPDATE clients SET referral=:referral WHERE client_uuid=:uuid');
$stmt->execute([':referral' => $referral, ':uuid' => $clientUuid]);

portal_json_response(['ok' => true]);

