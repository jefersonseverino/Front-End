var showRecipes =  document.querySelectorAll(".open-recipe");
var closeDetails = document.querySelector(".fa-solid");
var openDetails = document.querySelector(".recipe-details");
var openRecipe = document.querySelectorAll(".recipe");
var recipeData = document.querySelector(".recipe-data");

var data, obj, res;

async function getData(){
    try {
        obj = await fetch('data.json');
        res = await obj.json();  
        return res;
    } catch (error){
        console.log(error);
    }
}

async function renderData(){
    data = await getData();
    
    for(var i = 0;i < showRecipes.length;i++){
        let element = document.getElementById(i);
        element.innerHTML = `
            <h3>${data[i].recipeTitle}</h3>
            <a class="link">Open Recipe</a>
        `
    }

}


renderData();

closeDetails.addEventListener('click', (event) => {
    event.target.parentNode.style.display = 'none';
})

for(let i = 0;i < openRecipe.length;i++){

    openRecipe[i].addEventListener('click',() => {
        openDetails.style.display = 'block';

        var output = `
            <h2> ${data[i].recipeTitle} </h2>
            <li> Type: ${data[i].mealType} </li>
            <li> Serves: ${data[i].numberOfPeople} people</li>
            <li> Difficulty: ${data[i].level} </li>
            <li> List of Ingredients </li>
        `;

        for(let j = 0;j < data[i].listOfIngredients.length;j++){
            output += `<li> ${data[i].listOfIngredients[j]} </li>`;
        }

        output += `<li>Preparation: </li>
        <li> ${data[i].preparationSteps} </li>
        `;

        recipeData.innerHTML = output
    })
}

