
let anime = {
    "response_code" : 0,
    "results":[
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"The heroine of &quot;Humanity Has Declined&quot; is a mediator between humans and what?",
            "correct_answer":"Fairies",
            "incorrect_answers":["Elves","The Earth","Animals"]},
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"In &quot;A Certain Magical Index,&quot; what is Accelerator able to control?",
            "correct_answer":"Vectors",
            "incorrect_answers":["Velocity","Quantums","Wormholes"]},
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"In &quot;JoJo&#039;s Bizarre Adventure&quot;, which of the following Stands does NOT have a time-based ability?",
            "correct_answer":"20th Century Boy",
            "incorrect_answers":["Made in Heaven","Star Platinum","The World"]},
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"In &quot;To Love-Ru&quot;, who is the first to hear of Yami&#039;s past from her?",
            "correct_answer":"Rito",
            "incorrect_answers":["Mikan","Lala","Haruna"]},
        {
            "category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"Which JoJo&#039;s Bizarre Adventure character possesses the Stand named Silver Chariot?",
            "correct_answer":"Jean Pierre Polnareff",
            "incorrect_answers":["Noriaki Kakyoin","Hol Horse","Hermes Costello"]}
        ]
    };

//let anime_problems = anime.results[0].correct_answer;
//console.log(anime_problems);

let question = 1;
let correct_answers = 0;
let total_questions = anime.results.length;


document.getElementById('question-title').innerHTML = "Question " + question + "/" + total_questions;
document.getElementById('question-statement').innerHTML = question + ") " + anime.results[question].question;

for(let i = 0;i < total_questions;i++){
    document.getElementById('a' + i).innerHTML = ''+anime.results[question].type;
}
