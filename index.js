const question = require("./questionOption");

const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const chalk = require("chalk");
let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.yellow

var answer = ""; 
var qNo = 1;
var score = 0;
var username = "";
var notes = "";

var getQuestions = () =>{
    var data = question.filter((o) => o.no == qNo);
    data.forEach(nq => {
        console.log(cyan(`\nNo : ${nq.no}`));
        console.log(yellow(`Question : ${nq.q}`));
        console.log(cyan(`\na : ${nq.a}`));
        console.log(cyan(`b : ${nq.b}`));
        console.log(cyan(`c : ${nq.c}`));
        console.log(cyan(`d : ${nq.d}`));
        answer = nq.ans;
        notes = nq.note;
    })
};

var checkAnswer = () => {
    if(qNo <= 20){
        rl.question(title("\nGive Answer : "),(ans) => {
            if(ans == "a" || ans == "b" || ans == "c" || ans == "d"){
                if(ans == answer){
                    score += 5;
                    console.log(green("\nRight Answer : " + ans));
                    console.log(blueBright("Your Score : " + score));
                    qNo += 1;
                    repeat();
                }else{
                    score -= 2;
                    console.log(red("\nWrong Answer : " + ans));
                    console.log(blueBright("Your Score : " + score));
                    console.log(green("\nDiscriptions: " + notes));
                    qNo += 1;
                    repeat();
                }
            }else{
                console.log(red("\nWrong Choice, Please try again"));
                repeat();
            }
        });
    }else{
        console.log(cyan("\nComplete Quiz...Thank You For Playing"));
        console.log(title(`\nUserName : ${username} \nYour Final Score Is : ${score}`));
        if(score==100){
          console.log(green("Well Done! You Give All Answer Correctly."))
        }
        rl.close();
    }
};

var repeat = () => {
    getQuestions();
    checkAnswer();
};

console.log(title("Welcome To General Knowledge Base Questions Quiz... And Check Your General Knowledge"));
rl.question(title("\nPlease Enter Your Name : "),(ans) => {
    username = ans;
    console.log(green("hello",username))
    console.log("\nThere will be 20 questions.\nAnswer them with option[a,b,c,d]", "\n")
  console.log(cyan("+5 points for correct answer. -2 for wrong answer.\n"))

    repeat();
});
