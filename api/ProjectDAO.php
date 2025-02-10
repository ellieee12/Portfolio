<?php

class ProjectDAO{
    private PDO $linkpdo;
    public function __construct(){
        $this->linkpdo= Connexion::getInstance()->getLinkpdo();
    }
    public function getAllProjects(){
        $query = "SELECT * FROM project";
    }
}