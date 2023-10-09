import { generateId } from "../utils/GenerateId.js"

export class Trivia {
  constructor(data) {
    this.id = generateId()
    this.question = `` + data.question
    this.correct = data.correct_answer
    this.incorrects = data.incorrect_answers
  }

  get triviaCard() {
    return `
    <div class="col-4 p-3">
        <div class="card p-2 text-light">
          <p>${this.question}</p>
          <button onclick="app.TriviasController.checkClicked('${this.id}','True')" class="btn btn-info mb-1">True</button>
          <button onclick="app.TriviasController.checkClicked('${this.id}','False')" class="btn btn-info md-1">False</button>
        </div>
      </div>
      `
  }
}

const t = {
  "category": "Mythology",
  "type": "boolean",
  "difficulty": "easy",
  "question": "In Norse mythology, Thor once dressed as a woman.",
  "correct_answer": "True",
  "incorrect_answers": [
    "False"
  ]
}