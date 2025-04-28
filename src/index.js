
const threshold = 0.9; 
let model;

const loadModel = async () => {
    model = await toxicity.load(threshold);
};

loadModel(); 

const analyzeToxicity = async (text) => {
    if (!model) {
        console.log("Modelo todavía cargando...");
        return;
    }

    const predictions = await model.classify([text]); // Ponemos el texto en un array
    const resultsContainer = document.getElementById('results');

    resultsContainer.textContent = JSON.stringify(predictions, null, 2);
};

const button = document.getElementById('analyzeButton');
button.addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() !== '') {
        analyzeToxicity(inputText);
    } else {
        alert('Por favor ingresa un texto.');
    }
});
