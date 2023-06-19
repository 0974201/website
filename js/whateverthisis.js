async function get_projects(){
    try {
        const response = await fetch('https://raw.githubusercontent.com/0974201/website/main/projecten.json'); //github link gebruikt want cors
        const projecten = await response.json();

        console.log(`${JSON.stringify(projecten)}`);

        make_article(projecten)

    } catch(error) {
        const err = document.querySelector("#content")
        const txt = document.createElement('p');

        txt.textContent = error;
        err.appendChild(txt);

        console.log(error);
    }
}

function make_article(obj){
    const shit = document.querySelector("#content");
    const projecten = obj.projecten;
    console.log(projecten);

    for(const project of projecten){
        const art = document.createElement("article");
        art.id = "proj";
        let title = document.createElement('h1');
        let thumb = document.createElement('img');
        let text = document.createElement('span');
        let link = document.createElement('a');

        title.innerHTML = project.naam;
        thumb.innerHTML = project.thumbnail;
        thumb.src = project.thumbnail;
        text.innerHTML = project.tekst + '<br/>';
        link.href = project.link;
        link.target = "_blank";
        link.innerHTML = '<i class="fa-brands fa-github"></i>' + " github";
        
        art.appendChild(title);
        art.appendChild(thumb);
        art.appendChild(text);
        art.appendChild(link);

        shit.appendChild(art);
    }
}

document.addEventListener('DOMContentLoaded', get_projects);