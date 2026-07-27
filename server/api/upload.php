<?php

require_once __DIR__ . '/../includes/bootstrap.php';

$clientUuid = preg_replace('/[^a-f0-9]/', '', strtolower((string)($_POST['client_uuid'] ?? '')));
$type = (string)($_POST['type'] ?? '');

if ($clientUuid === '') portal_json_error('Missing client session.');
if ($type === '') portal_json_error('Missing document type.');
if (!isset($_FILES['file'])) portal_json_error('Missing file.');

$file = $_FILES['file'];
if (!is_array($file) || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
    portal_json_error('Upload failed.');
}

$size = (int)($file['size'] ?? 0);
if ($size <= 0 || $size > (int)$PORTAL_CONFIG['max_upload_bytes']) {
    portal_json_error('File too large.');
}

$tmp = (string)($file['tmp_name'] ?? '');
if ($tmp === '' || !is_uploaded_file($tmp)) {
    portal_json_error('Invalid upload.');
}

$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo->file($tmp);
if (!in_array($mime, $PORTAL_CONFIG['allowed_mimes'], true)) {
    portal_json_error('Invalid file type.');
}

$origName = (string)($file['name'] ?? 'file');
$ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
if ($ext === '') {
    if ($mime === 'application/pdf') $ext = 'pdf';
    if ($mime === 'image/png') $ext = 'png';
    if ($mime === 'image/jpeg') $ext = 'jpg';
}

$safeType = preg_replace('/[^a-z0-9_-]/', '', strtolower($type));
if ($safeType === '') portal_json_error('Invalid document type.');

$base = rtrim((string)$PORTAL_CONFIG['upload_base'], '/\\');
$clientDir = $base . DIRECTORY_SEPARATOR . 'client_' . $clientUuid;
$typeDir = $clientDir . DIRECTORY_SEPARATOR . $safeType;
if (!is_dir($typeDir)) {
    if (!mkdir($typeDir, 0775, true)) {
        portal_json_error('Unable to create upload directory.', 500);
    }
}

$stored = bin2hex(random_bytes(12)) . '.' . $ext;
$dest = $typeDir . DIRECTORY_SEPARATOR . $stored;
if (!move_uploaded_file($tmp, $dest)) {
    portal_json_error('Unable to store file.', 500);
}

$relPath = 'uploads/client_' . $clientUuid . '/' . $safeType . '/' . $stored;

$stmt = $PORTAL_DB->prepare('INSERT INTO documents (client_uuid, type, original_filename, stored_filename, filepath) VALUES (:uuid, :type, :orig, :stored, :path)');
$stmt->execute([
    ':uuid' => $clientUuid,
    ':type' => $safeType,
    ':orig' => $origName,
    ':stored' => $stored,
    ':path' => $relPath,
]);

portal_json_response(['ok' => true, 'filename' => $origName, 'stored_filename' => $stored, 'filepath' => $relPath]);

