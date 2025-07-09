document.addEventListener('DOMContentLoaded', function() {
    fetch('./projects.json')
        .then(response => {
            if (!response.ok) throw new Error('프로젝트 데이터를 불러올 수 없습니다.');
            return response.json();
        })
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
                    <a href="${project.link}">View Project</a>
                `;
                projectList.appendChild(item);
            });
        })
        .catch(error => {
            const projectList = document.getElementById('project-list');
            if (projectList) {
                projectList.innerHTML = `<div style='color:red;'>${error.message}</div>`;
            }
        });
}); 