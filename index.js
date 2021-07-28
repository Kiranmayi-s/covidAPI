  //async function is used to fetch the data from server
  
    async function getData(){
    try{
        //using classname the value of country entered will be taken and processed to get the data
        let country = document.getElementsByClassName('myText')[0].value;
        country = country[0].toUpperCase()+country.slice(1);
        console.log(country); 
    document.getElementsByClassName('myText')[0].value ="";
    document.getElementsByClassName('main').innerHTML ="";
     
    let resp = await fetch("https://covid-api.mmediagroup.fr/v1/cases?country="+country);
    let data = await resp.json();

    let confirm = data.All.confirmed; let recover = data.All.recovered;  let deaths =data.All.deaths;  let popul = data.All.population; 
     let capital = data.All.capital_city; let updated = data.All.updated;
     let conti = data.All.continent; 
     //the data will be displayed using classname
        document.getElementsByClassName('main')[0].innerHTML = "Continent: "+conti;
        document.getElementsByClassName('main')[1].innerHTML = "Country: "+country;
        document.getElementsByClassName('main')[2].innerHTML = "Capital: "+capital; 
        document.getElementsByClassName('main')[3].innerHTML = "Population: "+popul; 
        document.getElementsByClassName('main')[4].innerHTML = "Confirmed Cases: "+confirm;
        document.getElementsByClassName('main')[5].innerHTML = "Recovered Cases: "+recover;
        document.getElementsByClassName('main')[6].innerHTML = "Deaths: "+ deaths;
        document.getElementsByClassName('main')[7].innerHTML = "Data Lastly Updated on: "+updated;
    }
    catch(error){
        console.log(error);
    }
}
getData();
