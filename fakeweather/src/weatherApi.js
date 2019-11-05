var weatherApi = function (cityName) {
    var morningWeatherStatus = ['sunny', 'partially cloudy', 'cloudy', 'rainy', 'stormy', 'windy', 'snowy'];
    var eveningWeatherStatus = ['full moon', 'partially cloudy', 'cloudy', 'rainy', 'stormy', 'windy', 'snowy'];
    var cityTime = 0;

    if (cityName) {
      for (let i = 0; i < cityName.length; i++) {
        cityTime += cityName.charCodeAt(i);
      }
      cityTime = (cityTime + new Date().getHours()) % 24;

      if (cityTime < 7 && cityTime > 19) {
        return morningWeatherStatus[cityTime % morningWeatherStatus.length];
      }

      return eveningWeatherStatus[cityTime % eveningWeatherStatus.length];
    }
  }

export default weatherApi;