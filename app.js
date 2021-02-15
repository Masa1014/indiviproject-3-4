const quiz = [
  {
    question: 'What team won the very first NBA game?',
    answers: [ 'Toront Huskies', 'Chicago Stags', 'New York Knicks', 'Philadelphia Warriors'],
    correct: 'New York Knicks'
  }, {
    question: 'What NBA player scored 100 points on March 2, 1962?',
    answers: ['Wilt Chamberlain', 'Kareem Abdul-Jabbar', 'Elgin Baylor', 'Bill Russell'],
    correct: 'Wilt Chamberlain'
  }, {
    question: 'Who was the first player in NBA history to be elected league MVP by a unanimous vote?',
    answers: [ 'Michael Jordan', 'Lebron James', 'Magic Johnson', 'Stephen Curry'],
    correct: 'Stephen Curry'
  }, {
    question: 'What new kind of shot did Joe Fulks score a record 63 points with in one game in 1949?',
    answers: [ 'Three-Point Shot', 'Jump Shot', 'Free Throw', 'Hook Shot'],
    correct: 'Jump Shot'
  }

];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {

    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('correct!');
    score++;
  } else {
    $window.alert('Incorrect!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = ' Your score is ' + score + '/' + quizLen ;

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}

function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "We accepted your score ";
    if(x > 4) throw "number was too high";
  }
  catch(err) {
    message.innerHTML = "Your quiz is completed. " + err;
  }
}
