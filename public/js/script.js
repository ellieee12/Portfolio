const baseURL = "http://localhost:8000/";
const resource = "projects.php";

function getAllProjects(){
    let data = fetch(baseURL + resource)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
    });
}

document.getElementById("try").addEventListener("click",getAllProjects);