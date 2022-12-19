fetch("https://api.github.com/users/l0st-idi0t/repos")
.then(response => response.json())
    .then(data => {
        let grid = document.querySelector('.grid');

        for (let i = 0; i < data.length; i++) {
            let newCell = document.createElement('div');
            newCell.onclick = () => {
                location.href = `${data[i].html_url}`;
            }
            newCell.classList.add('grid-item');

            newCell.innerHTML = `
                <h1>${data[i].name}</h1>
                <p>${data[i].description}</p>
            `;
            grid.appendChild(newCell);
        }
    }
);
