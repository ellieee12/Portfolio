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
        console.log(data);
    });
}

document.addEventListener("DOMContentLoaded",generateNav);