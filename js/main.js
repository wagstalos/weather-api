function loadWeather() {
  fetch(
    "https://api.hgbrasil.com/weather?format=json-cors&key=6d114bb7&user_ip=remote"
  )
    .then((res) => res.json())
    .then((data) => {

      const content = data.results;
      const forecast = content.forecast;
      const elementBody = document.getElementsByClassName('bg');
      const iconNight = document.getElementsByClassName('wi-night-clear');
      const iconDay = document.getElementsByClassName('wi-day-sunny');

      //console.log(content);
      temp.innerHTML = `${content.temp}`;
      nightOrDay.innerHTML = `${content.currently}`;
      max.innerHTML = `${content.forecast[0].max}º`;
      min.innerHTML = `${content.forecast[0].min}º`;
      city.innerHTML = `${content.city}`;
      description.innerHTML = `${content.description}`;
      wind.innerHTML = `${content.wind_speedy}`;
      humidity.innerHTML = `${content.humidity}%`;



    for (let contador = 0; contador < forecast.length; contador++) {
      // This is for-loop
      const div_master = document.createElement("div");
      const div_1 = document.createElement("p");
      const div_2 = document.createElement("span");
      const div_3 = document.createElement("span");
      div_1.innerHTML = forecast[contador].weekday;
      div_2.innerHTML = `${forecast[contador].min}º/`;
      div_3.innerHTML = `${forecast[contador].max}º`;
      div1.appendChild(div_master); 
      div_master.appendChild(div_1); 
      div_master.appendChild(div_2); 
      div_master.appendChild(div_3); 
    }
    console.log(forecast);

      if(content.currently === 'dia' || content.currently === 'day' ){
        elementBody[0].classList.add('bg-day');
        iconNight[0].style.display = "none";
        iconDay[0].style.display = "block";
        
      }else{
        elementBody[0].classList.add('bg-night');
        iconNight[0].style.display = "block";
        iconDay[0].style.display = "none";

      }

    })
    .catch((err) => console.log("ERROR: ", err));
}

loadWeather();
