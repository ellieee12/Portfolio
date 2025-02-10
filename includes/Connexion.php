
<?php

class Connexion{
    private static $instance;
    private $linkpdo;
    private $server = "localhost";
    private $db = "projects";
    private $login="root";
    private $mdp = "";

    private function __construct(){
        try{
            $this->linkpdo=new PDO("mysql:host=".$this->server.";dbname=".$this->db,$this->login,$this->mdp);
        }catch(Exception $e){
            die("Erreur : ".$e->getMessage());
        }
    }

    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new Connexion();
        }
        return self::$instance;
    }

    public function getLinkpdo() {
        return $this->linkpdo;
    }

}