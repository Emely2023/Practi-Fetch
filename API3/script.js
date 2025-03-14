

// consultar la api de dragon ball utilizando fetch

const getDragonBallCharacters = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) throw new Error('Error al obtener los datos');
        
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
console.log( data.results)
        data.forEach(emely => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
               
   
                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${emely.title}</h2>
                        <p class="text-gray-700">${emely.completed}</p>
                    </div>
                </div>  
            `;

            cardsParent.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
};


const getDragonBallCharacters2 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};

getDragonBallCharacters();

getDragonBallCharacters2();