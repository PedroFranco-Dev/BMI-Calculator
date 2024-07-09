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

  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const calcBtn = document.querySelector("#calc-btn");
  const clearBtn = document.querySelector("#clear-btn");

  const bmiNumber = document.querySelector("#bmi-number span");
  const bmiInfo = document.querySelector("#bmi-info span");

  const backBtn = document.querySelector("#back-btn");

  const calcContainer = document.querySelector("#calc-container");
  const resultContainer = document.querySelector("#result-container");


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
    });
};

function clearInputs() {
    heightInput.value = " ";
    weightInput.value = " ";
    bmiNumber.classList = "";
    bmiInfo.classList = "";
};

function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}


[heightInput, weightInput].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updatedValue = validDigits(e.target.value);

    e.target.value = updatedValue
  })
})

function calcBmi(weight, height) {
  const bmi = (weight / (height * height)).toFixed(1);
  return bmi
}

function showOrHideResults() {
  calcContainer.classList.toggle("hide")
  resultContainer.classList.toggle("hide")
}

// Events

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  const weight = +weightInput.value.replace(",",".");
  const height = +heightInput.value.replace(",",".");

  if (!height || !weight) return;

  const bmi = calcBmi(weight, height);
  let info;

 data.forEach((iten) => {
  if (bmi >= iten.min && bmi <= iten.max) {
    info = iten.info;
  }
 });

  if (!info) return;

  bmiNumber.innerText = bmi;
  bmiInfo.innerText = info;

  switch(info) {
    case"Thinnes":
      bmiNumber.classList.add("low");
      bmiInfo.classList.add("low")
      break;
    case"Normal":
      bmiNumber.classList.add("good");
      bmiInfo.classList.add("good");
      break;
    case"Overwheight":
      bmiNumber.classList.add("low");
      bmiInfo.classList.add("low");
      break;
    case"Obesity":
      bmiNumber.classList.add("medium");
      bmiInfo.classList.add("medium");
      break;
    case"Severe Obesity":
      bmiNumber.classList.add("high");
      bmiInfo.classList.add("high");
      break;
  }

  showOrHideResults();
});


clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInputs();
});

backBtn.addEventListener("click", () => {
  showOrHideResults();
  clearInputs();
});


// Initialization
createTable(data)




