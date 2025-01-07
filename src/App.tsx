import './index.css'

import { Button } from './components/ui/button'
import { ArrowLeft, Mic, Volume2 } from 'lucide-react'
import { Progress } from './components/ui/progress'
import { Card, CardContent } from './components/ui/card'

function App() {
  return (
    <div>
      <div>
        <Button><ArrowLeft/></Button>
      </div>

      <div>
        <h1>Bora praticar</h1>
      </div>

      <div>
        Você está na frase 1 <span> de 5</span>
        <Progress/>
      </div>
      <Card className='bg-white'>
        <CardContent>
          Good morning, I would like a coffee with milk, please
          <Button><Volume2/>Ouvir</Button>
        </CardContent>
      </Card>
      <div>
        <h2>Tente pronunciar a frase</h2>
        <text>Nos avaliaremos sua pronuncia e caso necessite apontaremos onde pode melhorar</text>
        <Button><Mic/>Toque para falar</Button>
        <Button>Pular para a próxima</Button>
      </div>
    </div>
  )
}

export default App
