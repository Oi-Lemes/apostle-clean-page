<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Mock implementation for demonstration
// In production, this would integrate with a real payment processor

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Generate a mock PIX code and transaction hash
    $pixCode = '00020126580014BR.GOV.BCB.PIX013636c4b8b5-4c4e-4b1a-9b2a-1234567890ab5204000053039865802BR5925FILEMON ESTUDO DE BIBLIA6009SAO PAULO62070503***6304' . strtoupper(substr(md5(time()), 0, 4));
    
    $response = [
        'success' => true,
        'hash' => md5(time() . rand()),
        'pix' => [
            'pix_qr_code' => $pixCode,
            'expiration_date' => date('Y-m-d H:i:s', strtotime('+5 minutes'))
        ]
    ];
    
    echo json_encode($response);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'check_status') {
    // Mock payment status check
    // In production, this would check the actual payment status
    $response = [
        'payment_status' => 'pending' // Change to 'paid' to simulate successful payment
    ];
    
    echo json_encode($response);
    exit;
}

http_response_code(404);
echo json_encode(['error' => 'Not found']);
?>