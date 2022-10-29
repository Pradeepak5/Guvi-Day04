window.fetch("https://restcountries.com/v2/all")
.then((response)=>response.json())
.then((data)=>countryFlag(data));

const countryFlag=(data)=>{
    data.forEach((country)=>{
        console.log(country.flag)
        const imageElement= document.createElement('img');
        imageElement.src=country.flag;
        document.getElementById("flag-container").appendChild(imageElement);
    }
)};