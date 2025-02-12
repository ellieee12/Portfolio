DROP TABLE IF EXISTS project_tag;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS tag;

CREATE TABLE project (
    id_project int,
    title varchar(500),
    description tinytext,
    photo varchar(500),
    site_project varchar(500),
    date_debut date,
    date_fin date,
    primary key(id_project)
);

CREATE TABLE tag (
	id_tag int,
    title varchar(500),
    primary key(id_tag)
);

CREATE TABLE project_tag (
  	id_project int not null,
    id_tag int not null,
    primary key (id_project, id_tag), 
    foreign key (id_project) references project(id_project),
    foreign key (id_tag) references tag(id_tag)
);

INSERT INTO project(id_project,title,description,photo,site_project,date_debut,date_fin)
VALUES (1, 'Application de gestion de biens immobiliers',
        'Application de gestion des biens immobiliers permettant aux propriétaires de gérer leurs locations. Implémentation de CRUD via API, d''architecture DAO/MVC et de méthodologie SCRUM.',
        './images/default.png', './projects.html', '2024-10-01', '2024-12-01');
INSERT INTO project(id_project,title,description,photo,site_project,date_debut,date_fin)
VALUES (2, 'Application de gestion d''une équipe sportive',
        'Application de gestion d''une équipe de Takraw intégrant les opérations CRUD via API. Conception d''une base de données MySQL avec accès sécurisé via PDO pour une gestion efficace des informations.',
        './images/default.png', './projects.html', '2024-10-01', '2024-12-01');
INSERT INTO project(id_project,title,description,photo,site_project,date_debut,date_fin)
VALUES (3, 'Analyse des algorithmes de plus court chemin en graphes',
        'Analyse et comparaison des algorithmes de Dijkstra et Bellman-Ford, avec génération et visualisation de graphes via NetworkX en Python pour l''étude des plus courts chemins.',
        './images/default.png', './projects.html', '2024-05-01', '2024-06-01');
INSERT INTO project(id_project,title,description,photo,site_project,date_debut,date_fin)
VALUES (4, 'Application de géolocalisation',
        'Étude et extraction des données de trames GPS NMEA 0183, avec enregistrement des résultats dans des fichiers structurés. Développement d''une application de géolocalisation en C, documentée avec Doxygen.',
        './images/default.png', './projects.html', '2024-03-01', '2024-04-01');

INSERT INTO tag(id_tag,title) VALUES (1,'Java');
INSERT INTO tag(id_tag,title) VALUES (2,'MySQL');
INSERT INTO tag(id_tag,title) VALUES (3,'HTML');
INSERT INTO tag(id_tag,title) VALUES (4,'CSS');
INSERT INTO tag(id_tag,title) VALUES (5,'PHP');
INSERT INTO tag(id_tag,title) VALUES (6,'JavaScript');
INSERT INTO tag(id_tag,title) VALUES (7,'Python');
INSERT INTO tag(id_tag,title) VALUES (8,'C');
INSERT INTO tag(id_tag,title) VALUES (9,'Doxygen');

INSERT INTO project_tag(id_project,id_tag) VALUES (1,1);
INSERT INTO project_tag(id_project,id_tag) VALUES (1,2);
INSERT INTO project_tag(id_project,id_tag) VALUES (1,3);
INSERT INTO project_tag(id_project,id_tag) VALUES (2,3);
INSERT INTO project_tag(id_project,id_tag) VALUES (2,4);
INSERT INTO project_tag(id_project,id_tag) VALUES (2,5);
INSERT INTO project_tag(id_project,id_tag) VALUES (2,2);
INSERT INTO project_tag(id_project,id_tag) VALUES (2,6);
INSERT INTO project_tag(id_project,id_tag) VALUES (3,7);
INSERT INTO project_tag(id_project,id_tag) VALUES (4,8);
INSERT INTO project_tag(id_project,id_tag) VALUES (4,9);
