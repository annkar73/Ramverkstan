document.addEventListener("DOMContentLoaded", function() {
    let projects = [
        { name: "Projekt 1", description: "En kort beskrivning av Projekt 1.", image:"assets/image1.png", gitHubLink: "https://github.com/username/project1" },
        { name: "Projekt 2", description: "En kort beskrivning av Projekt 2.", image:"assets/image2.png", gitHubLink: "https://github.com/username/project2" },
        { name: "Projekt 3", description: "En kort beskrivning av Projekt 3.", image:"assets/image3.png", gitHubLink: "https://github.com/username/project3" },

        // Lägg till fler projekt här
    ];

    let projectList = document.getElementById("project-list");

    projects.forEach(function(project) {
        let projectItem = document.createElement("div");
        projectItem.classList.add("project-item"); 

        let projectImageContainer = document.createElement("div");
        projectImageContainer.classList.add("project-image");

        let projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.name;

        
        let projectName = document.createElement("h3");
        projectName.textContent = project.name;
        
        let projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        let githubLink = document.createElement("a");
        githubLink.href = project.githubLink;
        githubLink.textContent = "GitHub Repo";

        let projectContent = document.createElement("div");
        projectContent.classList.add("project-content");
        projectContent.appendChild(projectName);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(githubLink);

        
        projectImageContainer.appendChild(projectImage);
        projectItem.appendChild(projectImageContainer);
        projectItem.appendChild(projectContent);

        
        projectList.appendChild(projectItem);
    });
});
