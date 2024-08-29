import { Trivia } from "./components"
import { Deck } from "./components/Deck"
import LetterBtn from "./components/LetterBtn"
import { Dice } from "./components/Dice"

function App() {

  return (
    <div className="flex flex-col items-center">
      <h1 className=" text-5xl font-bold mt-5">Nebulash</h1>
      <Deck/>

      <div className="flex flex-row gap-5">
        <Dice/>
        <Trivia/>
        <LetterBtn/>
      </div>
      
    </div>
  )
}

export default App
