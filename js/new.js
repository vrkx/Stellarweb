
async function fetchData() {
    try {
        const response = await fetch('/Stellarweb/json/News.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


function displayData(data) {

    const itemsContainer = document.getElementById('items');
    data.items.forEach(item => {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = item.color;

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.description;


        
        const content = document.createElement('div');
        content.innerHTML = `<h2>${item.Title}</h2><p>${item.description}</p> <p class="date">${item.date}</p>`;
        
        box.appendChild(image);
        box.appendChild(content);
        itemsContainer.appendChild(box);
    });
}


fetchData();