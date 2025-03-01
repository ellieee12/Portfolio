function generateNav(){
    let nav = document.getElementById("nav");
    let p = document.createElement("p");
    p.innerText = "ELLISA EE";
    let div = document.createElement("div");
    let aboutMe = createLink("About Me","#about-me");
    let etudes = createLink("Etudes en France","#etudes");
    let comp = createLink("Projets","#div-projets");
    let benevol = createLink("Bénévolat","#benevolat");
    let contact = createLink("Contact","#contact");

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

document.addEventListener("DOMContentLoaded",generateNav);