<?php

function portal_crypto_key($config) {
    return hash('sha256', $config['encryption_key'], true);
}

function portal_encrypt($plaintext, $config) {
    if ($plaintext === null) return null;
    $plaintext = (string)$plaintext;
    if ($plaintext === '') return '';
    $key = portal_crypto_key($config);
    $iv = random_bytes(12);
    $tag = '';
    $cipher = openssl_encrypt($plaintext, 'aes-256-gcm', $key, OPENSSL_RAW_DATA, $iv, $tag);
    if ($cipher === false) return null;
    return base64_encode($iv) . ':' . base64_encode($tag) . ':' . base64_encode($cipher);
}

function portal_decrypt($payload, $config) {
    if ($payload === null) return null;
    $payload = (string)$payload;
    if ($payload === '') return '';
    $parts = explode(':', $payload);
    if (count($parts) !== 3) return null;
    $iv = base64_decode($parts[0]);
    $tag = base64_decode($parts[1]);
    $cipher = base64_decode($parts[2]);
    $key = portal_crypto_key($config);
    $plain = openssl_decrypt($cipher, 'aes-256-gcm', $key, OPENSSL_RAW_DATA, $iv, $tag);
    if ($plain === false) return null;
    return $plain;
}

