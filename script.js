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

    fetch('./publications.json')
        .then(response => {
            if (!response.ok) throw new Error('논문 데이터를 불러올 수 없습니다.');
            return response.json();
        })
        .then(publications => {
            const publicationList = document.getElementById('publication-list');
            if (!publicationList) return;
            publicationList.innerHTML = '';
            publications.forEach(pub => {
                const item = document.createElement('div');
                item.className = 'publication-item';
                item.innerHTML = `
                    <h3>${pub.title}</h3>
                    <p><strong>Authors:</strong> ${pub.authors}</p>
                    <p><strong>Conference:</strong> ${pub.conference}</p>
                    <p><strong>Status:</strong> <span class="status status-${pub.status.toLowerCase().replace(/ /g, '-')}">${pub.status}</span></p>
                    <a href="${pub.link}">View Details</a>
                `;
                publicationList.appendChild(item);
            });
        })
        .catch(error => {
            const publicationList = document.getElementById('publication-list');
            if (publicationList) {
                publicationList.innerHTML = `<div style='color:red;'>${error.message}</div>`;
            }
        });
}); 