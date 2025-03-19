const url = "https://raw.githubusercontent.com/Ryshh/portfolio-json/refs/heads/main/portfolio.json"

function CreateProjectCard(data)
{
    let temakorok = ""

    data.topics.forEach(temakor => {
        temakorok += `<li>${temakor}</li>`
    });  

    console.log(data.repo_link);
    console.log(data.site_link);
    
    

    return `<div class="project-container">
                <div class="project-layout">
                    <div class="project-img">
                        <img id="img-${data.id}" src="${data.photo_url}" alt="">
                    </div>
                    <div class="project-description">
                        <h3>${data.title}</h3>
                        <hr>
                        <p>Témakörök</p>
                        <ul>
                            ${temakorok}
                        </ul>

                        <div class="project-links">
                            <a href="${data.repo_link}" target="_blank" style="text-align: right;">Github link</a>
                            <a href="${data.site_link}" target="_blank" style="text-align: right;">Weboldal</a>
                        </div>
                    </div>
                </div>
            </div>`
}

function Render(json)
{
    const container = document.getElementById("projects")

    json.forEach(data => {
        container.innerHTML += CreateProjectCard(data)
    });
}

getData(url, Render)