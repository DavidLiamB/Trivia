import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawTrivia() {
  let contents = ''
  AppState.triviaQuestions.forEach(trivia => contents += trivia.triviaCard)
  setHTML('triviaArea', contents)
}
export class TriviasController {
  constructor() {
    this.getTrivia()
    AppState.on('triviaQuestions', _drawTrivia)
  }

  async getTrivia() {
    try {
      await triviaService.getTrivia()
      Pop.success('Trivia got')
    } catch (error) {
      Pop.error(error.message)
      console.error(error.message)
    }
  }

  checkClicked(findQuestion, answer) {
    // debugger
    const foundQuestion = AppState.triviaQuestions.find(question => question.id == findQuestion)
    // @ts-ignore
    if (foundQuestion.correct != answer) {
      Pop.error('you suck loser')
      return
    }
    Pop.success('coooool!!!!')
  }
}