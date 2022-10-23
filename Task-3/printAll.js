window.fetch("https://restcountries.com/v2/all")
.then((response)=>response.json())
.then((data)=>countryDetails(data));

const countryDetails=(data)=>{
    data.forEach((country)=>{
        console.log("Name : ",country.name);
        console.log("Region : ",country.region);
        console.log("Sub-Region : ",country.subregion);
        console.log("Population : ",country.population);
    }
)};