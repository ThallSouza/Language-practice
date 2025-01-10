
function Speech (startRecognition) {
    // Verifique se a API está disponível no navegador
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeet
    
    if (!SpeechRecognition) {
        alert("Seu navegador não suporta reconhecimento de fala.");
    } else {
        const recognition = new SpeechRecognition();
    
        // Configurações da API
        recognition.lang = "en-US"; // Idioma inglês
        recognition.interimResults = false; // Apenas resultados finais
        recognition.maxAlternatives = 1;
    
        // Eventos importantes
        recognition.onresult = (event) => {
            const spokenText = event.results[0][0].transcript;
            console.log("Você disse:", spokenText);
            // Compare a fala do usuário com a frase original
            checkPronunciation(spokenText);
        };
    
        recognition.onerror = (event) => {
            console.error("Erro no reconhecimento de fala:", event.error);
        };
    
        // Função para iniciar o reconhecimento
        const startRecognition = () => {
            recognition.start();
        };
    }
    
    const checkPronunciation = (spokenText) => {
        const targetText = "Good morning, I would like a coffee with milk, please";
    
        // Comparar palavras (use uma biblioteca para melhorar isso, como `string-similarity`)
        const spokenWords = spokenText.toLowerCase().split(" ");
        const targetWords = targetText.toLowerCase().split(" ");
       
        const incorrectWords = targetWords.filter(
            (word, index) => word !== spokenWords[index]
        );
    
        if (incorrectWords.length === 0) {
            alert("Parabéns! Você pronunciou corretamente.");
        } else {
            alert(`Palavras incorretas: ${incorrectWords.join(", ")}`);
        }
    };

}  

export default Speech

