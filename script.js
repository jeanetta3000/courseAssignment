const url = "https://cataas.com/api/cats?tags=cute";

const restultsContainer = document.querySelector(".results");

async function getCats() {

     const response = await fetch(url);

     const results = await response.json();

     const facts = results;

     console.log(results);

     for (let i = 0; i < facts; i++){
         console.log(facts[i].tags);   
        
        restultsContainer.innerHTML += `<div class="results">${facts[i].id}</div>`
        
        }

}

getCats()