import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"

class TriviaService {
  constructor() {

  }
  async getTrivia() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=12&type=boolean')
    const newTrivia = response.data.results.map(trivia => new Trivia(trivia))
    AppState.triviaQuestions = newTrivia
  }
}

export const triviaService = new TriviaService()