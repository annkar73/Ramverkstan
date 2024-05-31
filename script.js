
document.addEventListener("DOMContentLoaded", function() {
    let projects = [
        { name: "Projekt 1", description: "En kort beskrivning av Projekt 1.", image:"assets/image1.png", caption: "En bild av Projekt 1" },
        { name: "Projekt 2", description: "En kort beskrivning av Projekt 2.", image:"assets/image2.png", caption: "En bild av Projekt 2"},
        { name: "Projekt 3", description: "En kort beskrivning av Projekt 3.", image:"assets/image3.png", caption: "En bild av Projekt 3"},

        // Lägg till fler projekt här
    ];
// hamburgarmenyns beteende i mobil
    console.log('javascript loaded');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('#mainNav ul');

    menuToggle.addEventListener('click', function () {
        console.log('Menu toggle clicked');
        if (menu.classList.contains("menu-closed")) {
            console.log('Menu is closed, open it');
            menu.classList.remove("menu-closed");
            menu.classList.add("menu-open");
            console.log('Menu has been opened');
        } else {
            console.log('Menu is open, close it');
            menu.classList.remove("menu-open");
            menu.classList.add("menu-closed");
            console.log('menu has been closed');
        }
    });
// slut på hantering av hamburgarmeny

// lägger till innehåll från arrayen projects i projektlistan
    let projectList = document.getElementById("project-list");

    projects.forEach(function(project, index) {
        let projectItem = document.createElement("div");
        projectItem.classList.add("project-item"); 

        let projectImageContainer = document.createElement("div");
        projectImageContainer.classList.add("project-image");

        let projectFigure = document.createElement("figure");
        projectFigure.classList.add("project-figure");
        let projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.name;

        let projectCaption = document.createElement("figcaption");
        projectCaption.textContent = project.caption;
        projectCaption.classList.add("image-caption")
        
        let projectName = document.createElement("h3");
        projectName.textContent = project.name;
        
        let projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        let projectContent = document.createElement("div");
        projectContent.classList.add("project-content");
        projectContent.appendChild(projectName);
        projectContent.appendChild(projectDescription);

        
        projectFigure.appendChild(projectImage);
        projectFigure.appendChild(projectCaption);

        projectItem.appendChild(projectImageContainer);
        projectItem.appendChild(projectContent);

        projectImageContainer.appendChild(projectFigure);

        projectList.appendChild(projectItem);
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('gallery-slide');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000);
}

// slut på infogande i projektlistan