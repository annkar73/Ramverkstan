document.addEventListener("DOMContentLoaded", function() {
    let projects = [
        { name: "Projekt 1", description: "En kort beskrivning av Projekt 1." },
        { name: "Projekt 2", description: "En kort beskrivning av Projekt 2." },
        { name: "Projekt 3", description: "En kort beskrivning av Projekt 3." },

        // Lägg till fler projekt här
    ];

    let projectList = document.getElementById("project-list");

    projects.forEach(function(project) {
        let projectItem = document.createElement("div");
        projectItem.classList.add("project-item"); 
        
        let projectName = document.createElement("h3");
        projectName.textContent = project.name;
        
        let projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        
        projectItem.appendChild(projectName);
        projectItem.appendChild(projectDescription);
        
        projectList.appendChild(projectItem);
    });
});
