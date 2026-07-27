<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$first = trim((string)($body['first_name'] ?? ''));
$last = trim((string)($body['last_name'] ?? ''));
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));

if ($first === '' || $last === '') {
    portal_json_error('First name and last name are required.');
}

if ($clientUuid === '') {
    $clientUuid = bin2hex(random_bytes(16));
    $stmt = $PORTAL_DB->prepare('INSERT INTO clients (client_uuid, first_name, last_name) VALUES (:uuid, :first, :last)');
    $stmt->execute([':uuid' => $clientUuid, ':first' => $first, ':last' => $last]);
    portal_json_response(['client_uuid' => $clientUuid]);
}

$stmt = $PORTAL_DB->prepare('UPDATE clients SET first_name = :first, last_name = :last WHERE client_uuid = :uuid');
$stmt->execute([':first' => $first, ':last' => $last, ':uuid' => $clientUuid]);
portal_json_response(['client_uuid' => $clientUuid]);

