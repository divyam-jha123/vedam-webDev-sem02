const input = document.getElementById("city-input");
const btn = document.querySelector(".btn");
const temp = document.querySelector(".temp");
const place = document.querySelector(".city");
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const icon = document.querySelector(".img");
const weatherCondition = document.querySelector(".weather");
// const temperature = document.querySelector('.temp');
// const location = document.querySelector('.city');

btn.addEventListener("click", () => {
  const city = input.value;


  const fetchAPI = async () => {

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3ce538f4d49b45d7a4c65047262301&q=${city}&aqi=no`,
      );

      if (!response.ok) {
        throw new Error("city not found...");
      }
      
      const jsonData = await response.json();

      return jsonData;



    } catch (error) {
      alert("something wrong");
    }
  }

  const updateDom = async () => {

    const jsonData = await fetchAPI();
    console.log(jsonData);

      // place update
      place.innerText = jsonData.location.name;

      // temperature update
    temp.innerText = `${jsonData.current.temp_c}\u00B0C`;

      // date and time update
      const dateTimeArray = jsonData.location.localtime.split(" ");
      date.innerText = dateTimeArray[0];
      time.innerText = dateTimeArray[1];

      // icon and condition update
      icon.src = jsonData.current.condition.icon;
      weatherCondition.innerText = jsonData.current.condition.text;

      // finding daate and day from the epoch data
      const epochTime = jsonData.location.localtime_epoch;
      const dateFromEpoch = new Date(epochTime * 1000);

      const dayFromEpoc = dateFromEpoch.toLocaleString('en-IN', {
        'weekday': "long",
      });

      day.innerText = dayFromEpoc;
  }
  updateDom();
  input.value = '';
});
