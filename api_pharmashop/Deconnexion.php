<?php
/* Handle CORS */

// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: PUT, POST,DELETE');

// Additional headers which may be sent along with the CORS request
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

// Set the age to 1 day to improve speed/caching.
header('Access-Control-Max-Age: 86400');
if (($_SERVER['REQUEST_METHOD']) == 'POST') {
    
session_start();
session_destroy();
// header("Location: login.php"); // Redirige l'utilisateur vers la page de connexion
exit;
}
?>
