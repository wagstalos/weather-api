function loadWeather() {
  let baseURL = "https://api.hgbrasil.com/weather?format=json-cors&key=6d114bb7&user_ip=remote";
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const content = data.results;
      const forecast = content.forecast;
      const elementBody = document.getElementsByClassName("bg");
      const iconNight = document.getElementsByClassName("wi-night-clear");
      const iconDay = document.getElementsByClassName("wi-day-sunny");

      console.log(content);
      temp.textContent = `${content.temp}`;
      nightOrDay.innerHTML = `${content.currently}`;
      max.textContent = `${content.forecast[0].max}º`;
      min.textContent = `${content.forecast[0].min}º`;
      city.textContent = `${content.city}`;
      description.textContent = `${content.description}`;
      wind.textContent = `${content.wind_speedy}`;
      humidity.textContent = `${content.humidity}%`;

      for (let contador = 0; contador < forecast.length; contador++) {
        // This is for-loop
        const div_master = document.createElement("div");
        const icon = document.createElement("i");
        const dayOfWeek = document.createElement("p");
        const tempMin = document.createElement("span");
        const tempMax = document.createElement("span");
        
        dayOfWeek.textContent = forecast[contador].weekday;
        tempMin.textContent = `${forecast[contador].min}º/`;
        tempMax.textContent = `${forecast[contador].max}º`;
        
        div1.appendChild(div_master);
        div_master.appendChild(icon);
        div_master.appendChild(dayOfWeek);
        div_master.appendChild(tempMin);
        div_master.appendChild(tempMax);

        var iconWeather = forecast[contador].description;
        icon.classList.add("wi");

        if (iconWeather === "Tempo nublado" || iconWeather === "Day mostly cloudy" ) {
          icon.classList.add("wi-cloudy");
        } else if (iconWeather === "Chuvas esparsas" || iconWeather === "Scattered showers") {
          icon.classList.add("wi-showers");
        } else if (iconWeather === "Chuva" || iconWeather === "Thundershowers") {
          icon.classList.add("wi-rain");
        } else if (iconWeather === "Parcialmente nublado" || iconWeather === "Night partly cloudy") {
          icon.classList.add("wi-cloud");
        }else if( iconWeather === "Tempo limpo" || iconWeather === "Night Mostly cloudy"){
          icon.classList.add("wi-day-sunny");
          iconDay[1].style.display = "block";
        }else {
          icon.classList.add("wi-na");
        }
        //console.log(content.currently);
      }

      console.log(forecast);

      // if (content.currently === "dia" || content.currently === "day") {
      //   elementBody[0].classList.add("bg-day");
      //   iconNight[0].style.display = "none";
      //   iconDay[0].style.display = "block";

      //   if (iconWeather === "Tempo limpo") {
      //     icon.classList.add("wi-cloudy");
      //   }
      // } else {
      //   elementBody[0].classList.add("bg-night");
      //   iconNight[0].style.display = "block";
      //   iconDay[0].style.display = "none";
      // }

      if(content.condition_slug === "cloudly_day" || content.condition_slug === "cloud" || content.condition_slug === "cloudly_night"){
          elementBody[0].classList.add("bg-scattered-rains");
          const iconConditionSlug = document.createElement("i");
          iconConditionSlug.classList.add("wi");
          condition_slug.appendChild(iconConditionSlug);
          iconConditionSlug.classList.add("wi-cloudy");
      } 
      else if(content.condition_slug === "clear_day"){
          elementBody[0].classList.add("bg-day");
          const iconConditionSlug = document.createElement("i");
          iconConditionSlug.classList.add("wi");
          condition_slug.appendChild(iconConditionSlug);
          iconConditionSlug.classList.add("wi-day-sunny");
      }
      else if(content.condition_slug === "clear_night"){
          elementBody[0].classList.add("bg-night");
          const iconConditionSlug = document.createElement("i");
          iconConditionSlug.classList.add("wi");
          condition_slug.appendChild(iconConditionSlug);
          iconConditionSlug.classList.add("wi-night-clear");
      }
      else if(content.condition_slug === "fog"){
          elementBody[0].classList.add("bg-scattered-rains");
          const iconConditionSlug = document.createElement("i");
          iconConditionSlug.classList.add("wi");
          condition_slug.appendChild(iconConditionSlug);
          iconConditionSlug.classList.add("wi-fog");
    }
      else if(content.condition_slug === "rain"){
          elementBody[0].classList.add("bg-scattered-rains");
          const iconConditionSlug = document.createElement("i");
          iconConditionSlug.classList.add("wi");
          condition_slug.appendChild(iconConditionSlug);
          iconConditionSlug.classList.add("wi-rain");
      }else{
          elementBody[0].classList.add("bg-neutral");
          const iconConditionSlug = document.createElement("i");
          iconConditionSlug.classList.add("wi");
          condition_slug.appendChild(iconConditionSlug);
          iconConditionSlug.classList.add("na");
        }

    })
    .catch((err) => console.log("ERROR: ", err));
}

loadWeather();
