import './index.css'

import { Button } from './components/ui/button'
import { ArrowLeft, Mic, Volume2 } from 'lucide-react'
import { Progress } from './components/ui/progress'
import { Card, CardContent } from './components/ui/card'

// Verifique se a API está disponível no navegador
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

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

function App() {
  return (
    <div className='container mx-md'>
      <div className='flex flex-col gap-8  p-6'>
        <div>
          <Button size='icon'><ArrowLeft/></Button>
        </div>

        <div className='flex flex-col gap-2'>
          <div>
            <h1 className='text-xl font-semibold text-neutral-950'>Bora praticar</h1>
          </div>

          <div>
            <text className='text-sm text-neutral-950'>Você está na frase 1 <span className='text-neutral-400'> de 5</span></text>
            <Progress/>
          </div>
        </div>
      
        <Card className='bg-white shadow-none p-4'>
          <CardContent className='flex flex-col p-0'>
            <text className='text-2xl font-semibold text-neutral-400'>Good morning, I would like a coffee with milk, please</text>
            <Button variant='link' className='text-blue-500 hover:text-blue-700 place-self-start px-0 gap-1'><Volume2/>Ouvir</Button>
          </CardContent>
        </Card>
      </div>
      
      <div className='flex flex-col gap-8  p-6'>
        <div>
          <h2 className='text-base font-semibold text-neutral-950 mb-1'>Tente pronunciar a frase</h2>
          <text className='text-sm text-neutral-400'>Nos avaliaremos sua pronuncia e caso necessite apontaremos onde pode melhorar</text>
        </div>
        <div className='flex flex-col gap-6'>
          <Button onClick={startRecognition} variant="outline"><Mic/>Toque para falar</Button>
          <Button variant="ghost" className='text-blue-500 hover:text-blue-700 hover:bg-neutral-50'>Pular para a próxima</Button>
        </div>
      </div>
    </div>
  )
}

export default App
