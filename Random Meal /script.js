var data;

var randomMeal = document.querySelector(".random");
var meal = document.querySelector(".random-meal");

async function getData(){
    try{
        const obj = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const res = await obj.json();
        return res;    
    } catch(error){
        console.log(error);
    }
}


async function renderData(){
    data = await getData();
    var mealDetais = data.meals[0];
    console.log(mealDetais);
    /* console.log(data.meals[0].strMealThumb); */

    var output = '';
    
    output += `
                <img src="${mealDetais.strMealThumb}">
                <h1> ${mealDetais.strMeal} </h1>
                <h2> Category: ${mealDetais.strCategory} </h2>
                <h2> Area: ${mealDetais.strArea} </h2>

                <h2>Ingredients List: </h2>

               `;

    for(let i = 1;i <= 20;i++){
        if(mealDetais["strIngredient" + i] != ""){
            output += `<li> ${mealDetais["strMeasure" + i]} ${mealDetais["strIngredient" + i]}</li>`
        }
    }

    var youtubeLink = mealDetais.strYoutube;
    youtubeLink = String(youtubeLink);
    youtubeLink = youtubeLink.replace("watch?v=","embed/");
    //console.log(youtubeLink);

    output += `
        <h2> Instructions: </h2>
        <p> ${mealDetais.strInstructions} </p>

        <iframe src="${youtubeLink}" allowfullscreen>

        </iframe>
    `;

    meal.innerHTML = output;

}

randomMeal.addEventListener('click', () => {
    renderData();
})
