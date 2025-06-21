document.addEventListener('DOMContentLoaded', function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectList = document.getElementById('project-list');
            if (!projectList) return;
            projectList.innerHTML = '';
            projects.forEach(project => {
                const item = document.createElement('div');
                item.className = 'project-item';
                item.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectList.appendChild(item);
            });
        });
}); 