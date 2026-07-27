<?php

require_once __DIR__ . '/../../includes/bootstrap.php';

portal_require_admin();

$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($_GET['client_uuid'] ?? '')));
if ($clientUuid === '') portal_json_error('Missing client_uuid.');

$stmt = $PORTAL_DB->prepare("SELECT * FROM clients WHERE client_uuid=:uuid LIMIT 1");
$stmt->execute([':uuid' => $clientUuid]);
$client = $stmt->fetch();
if (!$client) portal_json_error('Client not found.', 404);

$docsStmt = $PORTAL_DB->prepare("SELECT * FROM documents WHERE client_uuid=:uuid");
$docsStmt->execute([':uuid' => $clientUuid]);
$docs = $docsStmt->fetchAll();

$client['experian'] = portal_decrypt($client['experian'], $PORTAL_CONFIG);
$client['myfreescore'] = portal_decrypt($client['myfreescore'], $PORTAL_CONFIG);
$client['nav'] = portal_decrypt($client['nav'], $PORTAL_CONFIG);

$payload = ['client' => $client, 'documents' => $docs];

if (!class_exists('ZipArchive')) {
    header('Content-Type: application/json');
    header('Content-Disposition: attachment; filename="client_' . $clientUuid . '_export.json"');
    echo json_encode($payload, JSON_PRETTY_PRINT) ?: '{}';
    exit;
}

$tmpDir = sys_get_temp_dir();
$zipPath = $tmpDir . DIRECTORY_SEPARATOR . 'client_' . $clientUuid . '_' . time() . '.zip';
$zip = new ZipArchive();
if ($zip->open($zipPath, ZipArchive::CREATE) !== true) {
    portal_json_error('Unable to create zip.', 500);
}

$json = json_encode($payload, JSON_PRETTY_PRINT);
$zip->addFromString('client.json', $json ?: '{}');

$base = realpath($PORTAL_CONFIG['upload_base']);
foreach ($docs as $doc) {
    $full = realpath(dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . $doc['filepath']);
    if (!$full) continue;
    if ($base && strpos($full, $base) !== 0) continue;
    $zip->addFile($full, 'documents/' . $doc['type'] . '/' . $doc['original_filename']);
}

$zip->close();

header('Content-Type: application/zip');
header('Content-Disposition: attachment; filename="client_' . $clientUuid . '_export.zip"');
header('Content-Length: ' . filesize($zipPath));
readfile($zipPath);
unlink($zipPath);
exit;
