<?php

require_once __DIR__ . '/../../includes/bootstrap.php';

portal_require_admin();

$q = trim((string)($_GET['q'] ?? ''));
$status = trim((string)($_GET['status'] ?? ''));

$sql = "SELECT id, client_uuid, first_name, last_name, phone, email, status, created_at, submitted_at FROM clients";
$where = [];
$params = [];

if ($q !== '') {
    $where[] = "(client_uuid LIKE :q OR first_name LIKE :q OR last_name LIKE :q OR email LIKE :q OR phone LIKE :q)";
    $params[':q'] = '%' . $q . '%';
}

if ($status !== '') {
    $where[] = "status = :status";
    $params[':status'] = $status;
}

if (count($where) > 0) {
    $sql .= " WHERE " . implode(' AND ', $where);
}

$sql .= " ORDER BY created_at DESC LIMIT 500";

$stmt = $PORTAL_DB->prepare($sql);
$stmt->execute($params);
$rows = $stmt->fetchAll();

portal_json_response(['ok' => true, 'clients' => $rows]);

