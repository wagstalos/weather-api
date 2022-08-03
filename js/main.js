function loadWeather() {
    fetch("https://api.hgbrasil.com/weather?format=json-cors&key=6d114bb7")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results.humidity);

        const content = data.results;
        console.log(content);
        temp.innerHTML = `${content.temp}`;
        max.innerHTML = `${content.forecast[0].max}º`;
        min.innerHTML = `${content.forecast[0].min}º`;
        city.innerHTML = `${content.city}`;
        description.innerHTML = `${content.description}`;
        wind.innerHTML = `${content.wind_speedy}`;
        humidity.innerHTML = `${content.humidity}%`;

      })
      .catch((err) => console.log("ERROR: ", err));
  }

  loadWeather();