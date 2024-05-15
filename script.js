document.addEventListener("DOMContentLoaded", function() {
    let projects = [
        { name: "Projekt 1", description: "En kort beskrivning av Projekt 1.", image:"assets/image1.png", gitHubLink: "https://github.com/username/project1" },
        { name: "Projekt 2", description: "En kort beskrivning av Projekt 2.", image:"assets/image2.png", gitHubLink: "https://github.com/username/project2" },
        { name: "Projekt 3", description: "En kort beskrivning av Projekt 3.", image:"assets/image3.png", gitHubLink: "https://github.com/username/project3" },

        // Lägg till fler projekt här
    ];

    let projectList = document.getElementById("project-list");

    function goToGitHub(event) {
        let projectIndex = event.target.dataset.projectIndex;
        let project = projects[projectIndex];
        window.open(project.gitHubLink, '_blank');
    }

    projects.forEach(function(project, index) {
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

        let githubLink = document.createElement("button");
        githubLink.textContent = "GitHub Repo";
        githubLink.classList.add("github-button");            
        githubLink.dataset.projectIndex = index;
        githubLink.addEventListener("click", goToGitHub);

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
