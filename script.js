
const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Нижний Новгород"];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temp = prompt(`Введите температуру в городе ${cities[i]}:`);
    temp = Number(temp);
    temperatures.push(temp);
}

const container = document.getElementById("temperature-container");
const list = document.createElement("ul");

for (let i = 0; i < cities.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
    list.appendChild(listItem);
}
container.appendChild(list);

let maxTemp = Math.max(...temperatures);
let minTemp = Math.min(...temperatures);

document.getElementById("min-temperature").textContent = `Минимальная температура: ${minTemp}°C`;
document.getElementById("max-temperature").textContent = `Максимальная температура: ${maxTemp}°C`;
