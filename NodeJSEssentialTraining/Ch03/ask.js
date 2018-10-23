var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your preferred programming language?"
];
var answers = [];

function ask(index) {
    process.stdout.write(`\n\n\n\n ${questions[index]}`);
    process.stdout.write(" > ");
}

process.stdin.on('data', function(data) {
    // process.stdout.write('\n' + data.toString().trim() + '\n')
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function() {
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
    process.stdout.write("\n\n\n\n");
})

ask(0)

// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n\n");