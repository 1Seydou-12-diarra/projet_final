<?php      

/* Handle CORS */

// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: PUT, GET,POST');

// Additional headers which may be sent along with the CORS request
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

// Set the age to 1 day to improve speed/caching.
header('Access-Control-Max-Age: 86400');

require 'db.php';
$data =json_decode(file_get_contents('php://input'));
 if ($_SERVER['REQUEST_METHOD'] == 'POST') {
if(!isset($data['user_id']) || !isset($data['produit_id']) || !isset($data['mode_paiement'])) {
    http_response_code(400);
    echo json_encode(array('message' => 'Des informations sont manquantes pour créer la commande.'));
    return;
  }

  // Vérification de l'authentification de l'utilisateur
  if (!est_authentifie($data['user_id'])) {
    http_response_code(401);
    echo json_encode(array('message' => 'L\'utilisateur n\'est pas authentifié.'));
    return;
  }

  // Insertion de la commande dans la base de données
  $requete = $bdd->prepare('INSERT INTO commande (date, mode_paiement, statut, produit_id, user_id) VALUES (NOW(), ?, ?, ?, ?)');
  $requete->execute(array($data['mode_paiement'], 'en attente', $data['produit_id'], $data['user_id']));

  // Renvoi de la réponse
  http_response_code(201);
  echo json_encode(array('message' => 'La commande a été créée avec succès.'));
}
?>