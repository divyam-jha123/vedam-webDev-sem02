const input = document.getElementById("city-input");
const btn = document.querySelector(".btn");
// const temperature = document.querySelector('.temp');
// const location = document.querySelector('.city');

btn.addEventListener("click", () => {
  const city = input.value;
  console.log(city);

  const data = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3ce538f4d49b45d7a4c65047262301&q=${city}&aqi=no`,
      );

      
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log("city not found");
    }
  };

  data();
});
