<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));
if ($clientUuid === '') portal_json_error('Missing client session.');

$stmt = $PORTAL_DB->prepare("UPDATE clients SET status='submitted', submitted_at=NOW() WHERE client_uuid=:uuid");
$stmt->execute([':uuid' => $clientUuid]);

portal_json_response(['ok' => true]);

