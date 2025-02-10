CREATE TABLE project (
  	id_project int auto_increment,
    title varchar(500),
    description tinytext,
    photo varchar(500),
    site_project varchar(500),
    date_debut date,
    date_fin date,
    primary key(id_project)
);

CREATE TABLE tag (
	id_tag int auto_increment,
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