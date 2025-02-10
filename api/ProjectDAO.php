<?php
include_once '../includes/Connexion.php';
class ProjectDAO{
    private PDO $linkpdo;
    public function __construct(){
        $this->linkpdo= Connexion::getInstance()->getLinkpdo();
    }
    public function getAllProjects(){
        $query = "SELECT * FROM project";
        $req = $this->linkpdo->prepare($query);
        $req->execute();
        $arr = array();
        while($donnees=$req->fetch()){
            $date_debut = date('Y-m',$donnees['date_debut']);
            $date_fin = date('Y-m',$donnees['date_fin']);
            $queryTags = "SELECT t.title FROM project_tag p, tag t WHERE p.id_tag=t.id_tag AND p.id_project=:id";
            $reqTags = $this->linkpdo->prepare($queryTags);
            $reqTags->execute(array('id'=>$donnees['id_project']));
            $arrTags = array();
            while($donneesTags=$reqTags->fetch()){
                array_push($arrTags,$donneesTags['title']);
            }
            $project=array(
                'id'=>$donnees['id_project'],
                'title'=>$donnees['title'],
                'description'=>$donnees['description'],
                'photo'=>$donnees['photo'],
                'site_project'=>$donnees['site_project'],
                'date_debut'=>$date_debut,
                'date_fin'=>$date_fin,
                'tags'=>$arrTags
            );
            array_push($arr,$project);
        }
        return $arr;
    }
}