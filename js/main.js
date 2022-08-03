function loadWeather() {
  fetch(
    "https://api.hgbrasil.com/weather?format=json-cors&key=6d114bb7&user_ip=remote"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results.humidity);

      const content = data.results;
      console.log(content);
      temp.innerHTML = `${content.temp}`;
      nightOrDay.innerHTML = `${content.currently}`;
      max.innerHTML = `${content.forecast[0].max}º`;
      min.innerHTML = `${content.forecast[0].min}º`;
      city.innerHTML = `${content.city}`;
      description.innerHTML = `${content.description}`;
      wind.innerHTML = `${content.wind_speedy}`;
      humidity.innerHTML = `${content.humidity}%`;

      var elementBody = document.getElementsByClassName('bg');
      var iconNight = document.getElementsByClassName('wi-night-clear');
      var iconDay = document.getElementsByClassName('wi-day-sunny');

      if(content.currently === 'dia'){
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
