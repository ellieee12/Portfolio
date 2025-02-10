<?php
include_once 'ProjectDAO.php';
function delivrer_reponse($status_code,$status_message,$data){
    // Parametrage entete HTTP
    http_response_code($status_code);
    //header("HTTP/1.1 $this->status_code $this->status_message"); //Permet de personnaliser le message associé au code HTTP
    header("Content-Type:application/json; charset=utf-8");//Indique au client le format de la réponse
    $response['status_code'] = $status_code;
    $response['status_message'] = $status_message;
    $response['data'] = $data;
    /// Mapping de la réponse au format JSON
    $json_response = json_encode($response);
    if($json_response===false)
    die('json encode ERROR : '.json_last_error_msg());
    /// Affichage de la réponse (Retourné au client)
    echo $json_response;
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$dao  = new ProjectDAO();
$http_method = $_SERVER['REQUEST_METHOD'];
if ($http_method == 'GET') {
    $matching_data = $dao->getAllProjects();
    if (empty($matching_data)) {
        delivrer_reponse(404,'No projects found',$matching_data);
    }else{
        delivrer_reponse(200,'Projects found',$matching_data);
    }
}
