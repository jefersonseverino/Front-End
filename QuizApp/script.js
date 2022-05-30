
let anime = {
    "response_code" : 0,
    "results":[
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"The heroine of &quot;Humanity Has Declined&quot; is a mediator between humans and what?",
            "correct_answer":"Fairies",
            "incorrect_answers":["Elves","The Earth","Animals"],
            "answers":["Elves","The Earth","Fairies","Animals"]},
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"In &quot;A Certain Magical Index,&quot; what is Accelerator able to control?",
            "correct_answer":"Vectors",
            "incorrect_answers":["Velocity","Quantums","Wormholes"],
            "answers":["Vectors","Velocity","Wormholes","Quantums"]},
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"In &quot;JoJo&#039;s Bizarre Adventure&quot;, which of the following Stands does NOT have a time-based ability?",
            "correct_answer":"20th Century Boys",
            "incorrect_answers":["Made in Heaven","Star Platinum","The World"],
            "answers":["The World","20th Century boys","Made in Heaven","Start Platinum"]},
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"In &quot;To Love-Ru&quot;, who is the first to hear of Yami&#039;s past from her?",
            "correct_answer":"Rito",
            "incorrect_answers":["Mikan","Lala","Haruna"],
            "answers":["Lala","Mikan","Rito","Haruna"]},
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"Which JoJo&#039;s Bizarre Adventure character possesses the Stand named Silver Chariot?",
            "correct_answer":"Jean Pierre Polnareff",
            "incorrect_answers":["Noriaki Kakyoin","Hol Horse","Hermes Costello"],
            "answers":["Hol Horse","Jean Pierre Polnareff","Hermes Costello","Noriaki Kakyoin"]}
        ]
    };

//let anime_problems = anime.results[0].correct_answer;
//console.log(anime_problems);

let question = 1;
let correct_answers = 0;
let total_questions = anime.results.length;
let selected = false;
let correct_answer =  anime.results[question - 1].correct_answer;
console.log(correct_answer);

let option_a = document.getElementById('a');
let option_b = document.getElementById('b');
let option_c = document.getElementById('c');
let option_d = document.getElementById('d');
let next = document.getElementById('check');

option_a.addEventListener('click', Check_a);
option_b.addEventListener('click', Check_b);
option_c.addEventListener('click', Check_c);
option_d.addEventListener('click', Check_d);


document.getElementById('question-title').innerHTML = "Question " + question + "/" + total_questions;
document.getElementById('question-statement').innerHTML = question + ") " + anime.results[question - 1].question;

for(let i = 1;i <= 4;i++){
   document.getElementById('option-'+i).innerHTML = anime.results[question - 1].answers[i - 1];
}

function Next(){
    question++;

    if(question > 5){
        Final();
    }else{
        document.getElementById('question-title').innerHTML = "Question " + question + "/" + total_questions;
        document.getElementById('question-statement').innerHTML = question + ") " + anime.results[question - 1].question;
        correct_answer = anime.results[question - 1].correct_answer;
        for(let i = 1;i <= 4;i++){
            document.getElementById('option-'+i).innerHTML = anime.results[question - 1].answers[i - 1];
        }
        console.log(correct_answers);
    }
}

function Check_a(){
    console.log(anime.results[question - 1].answers[0]);
    if(correct_answer == anime.results[question - 1].answers[0]) correct_answers++;
    Next();
}

function Check_b(){
    if(correct_answer == anime.results[question - 1].answers[1]) correct_answers++;
    Next();
}

function Check_c(){
    if(correct_answer == anime.results[question - 1].answers[2]) correct_answers++;
    Next();
}

function Check_d(){
    if(correct_answer == anime.results[question - 1].answers[3]) correct_answers++;
    Next();
}

function Final(){
    document.getElementById('question-title').innerHTML = 'Score = ' + correct_answers + '/' + total_questions;

    if(correct_answers > 2){
        document.getElementById('question-statement').innerHTML = 'You have been aproved!'
    }else{
        document.getElementById('question-statement').innerHTML = 'You have failed!'
    }

}