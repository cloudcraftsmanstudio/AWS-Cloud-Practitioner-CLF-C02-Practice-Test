export type QuestionType = 'multiple-choice' | 'multiple-answers';

export interface Question {
    type: QuestionType;
    question: string;
    options: string[];
    correctAnswers: string[];
    explanation: string;
    wrongOptionsExplanation: {
        [key: string]: string;
    };
}

export interface QuizState {
    currentQuestionIndex: number;
    selectedOptions: number[];
    attempts: number;
    readonly maxAttempts: number;
}

export interface DOMElements {
    questionNumber: HTMLElement;
    questionText: HTMLElement;
    optionsContainer: HTMLElement;
    submitBtn: HTMLButtonElement;
    feedbackContainer: HTMLElement;
    resultIcon: HTMLElement;
    feedbackText: HTMLElement;
    explanation: HTMLElement;
    wrongOptions: HTMLElement;
    nextQuestionBtn: HTMLButtonElement;
    prevBtn: HTMLButtonElement;
    nextBtn: HTMLButtonElement;
    jumpInput: HTMLInputElement;
    jumpBtn: HTMLButtonElement;
}
