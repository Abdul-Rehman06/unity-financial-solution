<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$body = portal_read_json_body();
$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($body['client_uuid'] ?? '')));
$street = trim((string)($body['street'] ?? ''));
$street2 = trim((string)($body['street2'] ?? ''));
$city = trim((string)($body['city'] ?? ''));
$state = trim((string)($body['state'] ?? ''));
$zip = trim((string)($body['zip'] ?? ''));

if ($clientUuid === '') portal_json_error('Missing client session.');
if ($street === '' || $city === '' || $state === '' || $zip === '') portal_json_error('Address fields are required.');

$stmt = $PORTAL_DB->prepare('UPDATE clients SET street=:street, street2=:street2, city=:city, state=:state, zip=:zip WHERE client_uuid=:uuid');
$stmt->execute([
    ':street' => $street,
    ':street2' => $street2,
    ':city' => $city,
    ':state' => $state,
    ':zip' => $zip,
    ':uuid' => $clientUuid,
]);

portal_json_response(['ok' => true]);

