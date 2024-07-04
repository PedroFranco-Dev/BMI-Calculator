//IBM DATA (I take this info on Ethernet)
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Less than 18.5",
      info: "Thinnes",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Between 18,5 and 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Between 25,0 and 29,9",
      info: "Overwheight",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Between 30,0 and 39,9",
      info: "Obesity",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Bigger then 40,0",
      info: "Severe Obesity",
      obesity: "III",
    },
  ];

// Elements

  const bmiTable = document.querySelector(".bmi-table");

  const heightInput = document.querySelector("height");
  const weightInput = document.querySelector("weight");
  const calcBtn = document.querySelector("#calc-btn");
  const clearBtn = document.querySelector("#clear-btn");

// Functions

function createTable(data) {
    data.forEach((iten) => {
        const div = document.createElement("div");
        div.classList.add("table-data");

        const classification = document.createElement("p");
        classification.innerText = iten.classification;

        const info = document.createElement("p");
        info.innerText = iten.info;

        const obesity = document.createElement("p");
        obesity.innerText = iten.obesity;

        div.appendChild(classification);
        div.appendChild(info);
        div.appendChild(obesity);

        bmiTable.appendChild(div);
    })
}

// Events



// Initialization
createTable(data)




