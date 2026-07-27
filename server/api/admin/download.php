<?php

require_once __DIR__ . '/../../includes/bootstrap.php';

portal_require_admin();

$docId = (int)($_GET['id'] ?? 0);
if ($docId <= 0) portal_json_error('Missing document id.');

$stmt = $PORTAL_DB->prepare("SELECT * FROM documents WHERE id=:id LIMIT 1");
$stmt->execute([':id' => $docId]);
$doc = $stmt->fetch();
if (!$doc) portal_json_error('Document not found.', 404);

$base = realpath($PORTAL_CONFIG['upload_base']);
if (!$base) portal_json_error('Upload base not available.', 500);

$full = realpath(dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . $doc['filepath']);
if (!$full) portal_json_error('File not found.', 404);

if (strpos($full, $base) !== 0) portal_json_error('Invalid file path.', 400);

$name = $doc['original_filename'];
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . str_replace('"', '', $name) . '"');
header('Content-Length: ' . filesize($full));
readfile($full);
exit;

