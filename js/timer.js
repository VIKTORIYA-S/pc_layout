const daysBlock = document.querySelector(".timer__days");
const hoursBlock = document.querySelector(".timer__hours");
const minutesBlock = document.querySelector(".timer__minutes");
const secondsBlock = document.querySelector(".timer__seconds");

let interval;

 const numWords = (value, words) => {
        // избывиться от отрицательных чисел и от сотен
        value = Math.abs(value) % 100;
        // console.log(value);

        // избывиться от десятков, т.е. оставить только единицы
        const lastNum = value % 10;
        // console.log(lastNum);
        if (value > 10 && value < 20) {return words[2];}
        if (lastNum === 1) {return words[0];}
        if (lastNum > 1 && lastNum < 5) {return words[1];}
        return words[2];
//   return words[
//     num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10]
//   ];
};

const updateTime = () => {
  const date = new Date();
  const deadline = new Date("2025 november 13").getTime();
  const timeRemeining = (deadline - date) / 1000;

  const days = Math.floor(timeRemeining / 60 / 60 / 24);
  const hours = Math.floor((timeRemeining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemeining / 60) % 60);
//   const seconds = date.getSeconds();
    const seconds = Math.floor(timeRemeining % 60);

    const formatDays = days < 10 ? "0" + days : days;
  const formatHours = hours < 10 ? "0" + hours : hours;
  const formatMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formatSeconds = seconds < 10 ? "0" + seconds : seconds;

    daysBlock.textContent = formatDays;
  hoursBlock.textContent = formatHours;
  minutesBlock.textContent = formatMinutes;
  secondsBlock.textContent = formatSeconds;

    daysBlock.nextElementSibling.textContent = numWords(days, ["день", "дня", "дней"]);
    hoursBlock.nextElementSibling.textContent = numWords(hours, ["час", "часа", "часов"]);
  minutesBlock.nextElementSibling.textContent = numWords(minutes, ["минута", "минуты", "минут"]);
  secondsBlock.nextElementSibling.textContent = numWords(seconds, ["секунда", "секунды", "секунд"]);

//   console.log(timeRemeining);

if (daysBlock.textContent = "00") {
    daysBlock.style.color = "#ff0000";
  }

if (timeRemeining <= 0) {
    clearInterval(interval);
    daysBlock.textContent = "00";
    daysBlock.style.color = "#ff0000";
    hoursBlock.textContent = "00";
    hoursBlock.style.color = "#ff0000";
    minutesBlock.textContent = "00";
    minutesBlock.style.color = "#ff0000";
    secondsBlock.textContent = "00";
    secondsBlock.style.color = "#ff0000";
  }
};
updateTime();
interval = setInterval(updateTime, 500);

//   const date = new Date().getTime();
//   const deadline = new Date('2026 january 1').getTime();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    // console.log(date);
    // console.log(deadline);
    // console.log(deadline - date);

// ["день", "дня", "дней"];
// ["час", "часа", "часов"];
// ["минута", "минуты", "минут"];
// ["секунда", "секунды", "секунд"];

// console.log(numWords(19, ["секунда", "секунды", "секунд"])); // 21 день
// console.log(numWords(-21, ["секунда", "секунды", "секунд"])); // 21 день
// console.log(numWords(1021, ["секунда", "секунды", "секунд"])); // 21 день
