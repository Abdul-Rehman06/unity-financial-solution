<?php

require_once __DIR__ . '/../../includes/bootstrap.php';

portal_admin_logout();
portal_json_response(['ok' => true]);

