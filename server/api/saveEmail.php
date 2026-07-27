<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));
$email = trim((string)($body['email'] ?? ''));

if ($clientUuid === '') portal_json_error('Missing client session.');
if ($email === '') portal_json_error('Email address is required.');

$stmt = $PORTAL_DB->prepare('UPDATE clients SET email=:email WHERE client_uuid=:uuid');
$stmt->execute([':email' => $email, ':uuid' => $clientUuid]);

portal_json_response(['ok' => true]);

