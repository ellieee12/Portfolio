const baseURL = "http://localhost:8000/";
const resource = "projects.php";
function generateNav(){
    let nav = document.getElementById("nav");
    let p = document.createElement("p");
    p.innerText = "ELLISA EE";
    let div = document.createElement("div");
    let aboutMe = createLink("About Me","index.html");
    let etudes = createLink("Etudes en France","#");
    let comp = createLink("Compétences","#");
    let benevol = createLink("Bénévolat","#");
    let contact = createLink("Contact","#");

    nav.appendChild(p);
    div.appendChild(aboutMe);
    div.appendChild(etudes);
    div.appendChild(comp);
    div.appendChild(benevol);
    div.appendChild(contact);
    nav.appendChild(div);
}

function createLink(text,url){
    let link = document.createElement("a");
    link.innerText = text;
    link.setAttribute("href",url);
    return link;
}
function getAllProjects(){
    let data = fetch(baseURL + resource)
    .then(response=>response.json())
    .then(data=>{
        buildProjects(data.data);
    });
}
function buildProjects(data){
    console.log(data);
    let div = document.getElementById("div-projets");
    for (let i = 0 ; i <data.length ; i++){
        console.log(data);
        let divProjet = document.createElement("div");
        let divTagsText = document.createElement("div");
        let divTags = document.createElement("div");
        let divText = document.createElement("div");
        let divImg = document.createElement("div");
        divImg.setAttribute("class","div-projets-img");
        divText.setAttribute("class","div-projets-text");
        divTags.setAttribute("class","div-projets-tags");
        divTagsText.setAttribute("class","div-projets-tags-text");
        divProjet.setAttribute("class","div-projets-projet");
        for (let j = 0 ; j < data[i].tags.length ; j++){
            let tag = document.createElement("p");
            tag.innerText = data[i].tags[j];
            divTags.appendChild(tag);
        }
        //create contents for image
        let img = document.createElement("img");
        img.setAttribute("src",data[i].photo);
        divImg.appendChild(img);
        //create contents for title and description 
        let p = document.createElement("h3");
        p.innerText = data[i].title;
        let text = document.createElement("p");
        divText.appendChild(p);
        divText.appendChild(text);
        let btn = document.createElement("button");
        let a = document.createElement("a");
        a.setAttribute("href",data[i].site_projet);
        a.innerText = "Voir le projet";
        btn.appendChild(a);
        divText.appendChild(btn);

        text.innerText = data[i].description;
        divTagsText.appendChild(divTags);
        divTagsText.appendChild(divText);

        divProjet.appendChild(divImg);
        divProjet.appendChild(divTagsText);
        div.appendChild(divProjet);
    }
    
}

document.addEventListener("DOMContentLoaded",generateNav);
buildProjects(getAllProjects());
document.getElementById("div-linkedin").addEventListener('click',function(){
    window.location.href="https://www.linkedin.com/in/ellisa-ee-982103213/";
});

