<?php

require_once __DIR__ . '/../../includes/bootstrap.php';

portal_require_admin();

$stmt = $PORTAL_DB->prepare("SELECT id, client_uuid, first_name, last_name, phone, email, street, street2, city, state, zip, referral, status, created_at, submitted_at FROM clients ORDER BY created_at DESC");
$stmt->execute();
$rows = $stmt->fetchAll();

header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename=\"clients-export.csv\"');

$out = fopen('php://output', 'w');
fputcsv($out, array_keys($rows[0] ?? ['id' => '', 'client_uuid' => '']));
foreach ($rows as $r) {
    fputcsv($out, $r);
}
fclose($out);
exit;

