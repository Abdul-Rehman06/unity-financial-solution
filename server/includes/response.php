<?php

function portal_json_response($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

function portal_json_error($message, $status = 400) {
    portal_json_response(['error' => $message], $status);
}

function portal_read_json_body() {
    $raw = file_get_contents('php://input');
    if (!$raw) return [];
    $data = json_decode($raw, true);
    if (!is_array($data)) return [];
    return $data;
}

