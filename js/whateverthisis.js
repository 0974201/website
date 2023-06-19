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
        const title = document.createElement('h1');
        const thumb = document.createElement('img');
        const text = document.createElement('span');
        const link = document.createElement('b');
        const url = document.createElement('a');

        title.innerHTML = project.naam;
        thumb.innerHTML = project.thumbnail;
        thumb.src = project.thumbnail;
        text.innerHTML = project.tekst + '<br/><br/>';
        link.innerHTML = "Link: "
        url.href = project.link;
        url.target = "_blank";
        url.innerHTML = '<i class="fa-brands fa-github"></i>' + " github" + '<br/><br/>';
        
        art.appendChild(title);
        art.appendChild(thumb);
        art.appendChild(text);
        art.appendChild(link);
        art.appendChild(url);

        shit.appendChild(art);
    }
}

document.addEventListener('DOMContentLoaded', get_projects);