import { Question, QuizState, DOMElements } from './types.js';
import { questions } from './data/questions.js';
import { IMAGES } from './config/paths.js';

class QuizApp {
    private questions: Question[];
    private state: QuizState;
    private elements: DOMElements;

    constructor() {
        this.questions = questions;
        this.state = {
            currentQuestionIndex: 0,
            selectedOptions: [],
            attempts: 0,
            maxAttempts: 2
        };
        
        this.elements = this.initializeElements();
        this.bindEvents();
        this.loadQuestion();
    }

    private initializeElements(): DOMElements {
        return {
            questionNumber: document.querySelector('.question-number') as HTMLElement,
            questionText: document.querySelector('.question-text') as HTMLElement,
            optionsContainer: document.querySelector('.options-container') as HTMLElement,
            submitBtn: document.querySelector('.submit-btn') as HTMLButtonElement,
            feedbackContainer: document.querySelector('.feedback-container') as HTMLElement,
            resultIcon: document.querySelector('.result-icon') as HTMLElement,
            feedbackText: document.querySelector('.feedback-text') as HTMLElement,
            explanation: document.querySelector('.explanation') as HTMLElement,
            wrongOptions: document.querySelector('.wrong-options') as HTMLElement,
            nextQuestionBtn: document.querySelector('.next-question-btn') as HTMLButtonElement,
            prevBtn: document.querySelector('.prev-btn') as HTMLButtonElement,
            nextBtn: document.querySelector('.next-btn') as HTMLButtonElement,
            jumpInput: document.querySelector('.jump-to input') as HTMLInputElement,
            jumpBtn: document.querySelector('.jump-to button') as HTMLButtonElement
        };
    }

    private bindEvents(): void {
        this.elements.prevBtn.addEventListener('click', () => this.goToQuestion(this.state.currentQuestionIndex - 1));
        this.elements.nextBtn.addEventListener('click', () => this.goToQuestion(this.state.currentQuestionIndex + 1));
        this.elements.jumpBtn.addEventListener('click', () => this.handleJump());
        this.elements.submitBtn.addEventListener('click', () => this.checkAnswer());
        this.elements.nextQuestionBtn.addEventListener('click', () => this.goToQuestion(this.state.currentQuestionIndex + 1));
    }

    private loadQuestion(): void {
        const question = this.questions[this.state.currentQuestionIndex];
        this.elements.questionNumber.textContent = `Question ${this.state.currentQuestionIndex + 1} of ${this.questions.length}`;
        this.elements.questionText.textContent = question.question;
        this.elements.optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(optionElement, index));
            if (this.state.selectedOptions.includes(index)) {
                optionElement.classList.add('selected');
            }
            this.elements.optionsContainer.appendChild(optionElement);
        });

        this.updateNavigation();
        this.elements.feedbackContainer.classList.add('hidden');
        this.elements.submitBtn.disabled = false;
        this.state.attempts = 0;
    }

    private selectOption(optionElement: HTMLElement, index: number): void {
        const question = this.questions[this.state.currentQuestionIndex];
        if (question.type === 'multiple-choice') {
            this.elements.optionsContainer.querySelectorAll('.option')
                .forEach(opt => opt.classList.remove('selected'));
            this.state.selectedOptions = [index];
        } else {
            const selectedIndex = this.state.selectedOptions.indexOf(index);
            if (selectedIndex === -1) {
                this.state.selectedOptions.push(index);
            } else {
                this.state.selectedOptions.splice(selectedIndex, 1);
            }
        }
        optionElement.classList.toggle('selected');
    }

    private checkAnswer(): void {
        const question = this.questions[this.state.currentQuestionIndex];
        const selectedAnswers = this.state.selectedOptions.map(index => question.options[index]);
        const isCorrect = question.correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
            selectedAnswers.every(answer => question.correctAnswers.includes(answer));

        this.state.attempts++;
        
        if (isCorrect) {
            this.showFeedback(true);
        } else if (this.state.attempts >= this.state.maxAttempts) {
            this.showFeedback(false, true);
        } else {
            this.showFeedback(false, false);
        }
    }

    private showFeedback(isCorrect: boolean, isFinalAttempt: boolean = false): void {
        const question = this.questions[this.state.currentQuestionIndex];
        const overlay = document.createElement('div');
        overlay.classList.add('popup-overlay');
        document.body.appendChild(overlay);

        const popup = document.createElement('div');
        popup.classList.add('incorrect-popup');
        
        if (isCorrect) {
            popup.innerHTML = `
                <div class="incorrect-popup-content">
                    <img src="${IMAGES.CORRECT_FIRST_ATTEMPT}" class="animated-character" alt="Correct!">
                    <div class="incorrect-message" style="color: #4bb543;">Excellent! That's correct!</div>
                    <div class="explanation-text">${question.explanation}</div>
                </div>
            `;
        } else if (isFinalAttempt) {
            popup.innerHTML = `
                <div class="incorrect-popup-content">
                    <img src="${IMAGES.CORRECT_ANSWER}" class="animated-character" alt="Correct Answer">
                    <div class="incorrect-message">Here's the correct answer:</div>
                    <div class="explanation-text">
                        <strong>Correct Answer:</strong><br>
                        ${question.correctAnswers.join(', ')}<br><br>
                        <strong>Explanation:</strong><br>
                        ${question.explanation}
                    </div>
                </div>
            `;
        } else {
            const selectedAnswer = question.options[this.state.selectedOptions[0]];
            const wrongExplanation = question.wrongOptionsExplanation[selectedAnswer] || 'Try again!';
            
            popup.innerHTML = `
                <div class="incorrect-popup-content">
                    <img src="${IMAGES.INCORRECT_FIRST_ATTEMPT}" class="animated-character" alt="Try Again">
                    <div class="incorrect-message">Oops! That's not correct</div>
                    <div class="explanation-text">${wrongExplanation}</div>
                    <div class="attempt-text">You have one more attempt!</div>
                </div>
            `;
        }
        
        document.body.appendChild(popup);
        this.handlePopupClose(overlay, popup, isCorrect);
    }

    private handlePopupClose(overlay: HTMLElement, popup: HTMLElement, isCorrect: boolean): void {
        overlay.addEventListener('click', () => {
            popup.remove();
            overlay.remove();
            this.elements.submitBtn.disabled = isCorrect;
        });
    }

    private goToQuestion(index: number): void {
        if (index >= 0 && index < this.questions.length) {
            this.state.currentQuestionIndex = index;
            this.state.selectedOptions = [];
            this.loadQuestion();
        }
    }

    private handleJump(): void {
        const questionNumber = parseInt(this.elements.jumpInput.value);
        if (!isNaN(questionNumber) && questionNumber >= 1 && questionNumber <= this.questions.length) {
            this.goToQuestion(questionNumber - 1);
        }
    }

    private updateNavigation(): void {
        this.elements.prevBtn.disabled = this.state.currentQuestionIndex === 0;
        this.elements.nextBtn.disabled = this.state.currentQuestionIndex === this.questions.length - 1;
    }
}

// Initialize the app
new QuizApp();
