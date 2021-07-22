
    
async function getData(){
    try{
        let country = document.getElementById('myText').value;
        country = `${country[0].toUpperCase()}${country.slice(1)}`
        console.log(country); 
    document.getElementById('myText').value ="";
    document.getElementById('immune').value ="";
    
         
    let resp = await fetch("https://covid-api.mmediagroup.fr/v1/cases?country="+country);
    let data = await resp.json();

    let confirm = data.All.confirmed; let recover = data.All.recovered;  let deaths =data.All.deaths;  let popul = data.All.population; 
     let capital = data.All.capital_city; let updated = data.All.updated;
     let conti = data.All.continent; 
        document.getElementById('continent').innerHTML = "Continent: "+conti;
        document.getElementById('countryname').innerHTML = "Country: "+country;
        document.getElementById("capital").innerHTML = "Capital: "+capital; 
        document.getElementById("population").innerHTML = "Population: "+popul; 
        document.getElementById("confirmed").innerHTML = "Confirmed Cases: "+confirm;
        document.getElementById("recovered").innerHTML = "Recovered Cases: "+recover;
        document.getElementById("deaths").innerHTML = "Deaths: "+ deaths;
        document.getElementById("updated").innerHTML = "Data Lastly Updated on: "+updated;
     
    }
    catch(error){
        console.log(error);
    }
}
getData();

