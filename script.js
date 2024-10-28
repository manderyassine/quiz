function evaluateQuiz() {
    let score = 0;

    const answers = {
        q1: "1956",
        q2: "2019",
        q3: "15 oct 1963"
    };

    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    formData.forEach((value, key) => {
        if (value === answers[key]) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${Object.keys(answers).length}`);
}
