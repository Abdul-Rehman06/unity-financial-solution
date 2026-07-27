<?php

require_once __DIR__ . '/../../includes/bootstrap.php';

portal_require_admin();

$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($_GET['client_uuid'] ?? '')));
if ($clientUuid === '') portal_json_error('Missing client_uuid.');

$stmt = $PORTAL_DB->prepare("SELECT * FROM clients WHERE client_uuid = :uuid LIMIT 1");
$stmt->execute([':uuid' => $clientUuid]);
$client = $stmt->fetch();
if (!$client) portal_json_error('Client not found.', 404);

$client['experian'] = portal_decrypt($client['experian'], $PORTAL_CONFIG);
$client['myfreescore'] = portal_decrypt($client['myfreescore'], $PORTAL_CONFIG);
$client['nav'] = portal_decrypt($client['nav'], $PORTAL_CONFIG);

$docsStmt = $PORTAL_DB->prepare("SELECT id, type, original_filename, stored_filename, filepath, uploaded_at FROM documents WHERE client_uuid=:uuid ORDER BY uploaded_at DESC");
$docsStmt->execute([':uuid' => $clientUuid]);
$docs = $docsStmt->fetchAll();

portal_json_response(['ok' => true, 'client' => $client, 'documents' => $docs]);

