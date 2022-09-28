const BMIData = [
  { name: "Skinny", color: "midnightblue", range: [0, 18.5] },
  { name: "Good health", color: "green", range: [18.5, 25] },
  { name: "Overweight", color: "lightcoral", range: [25, 30] },
  { name: "Moderate obesity", color: "orange", range: [30, 35] },
  { name: "Severe obesity", color: "crimson", range: [35, 40] },
  { name: "Morbid obesity", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form = document.querySelector(".container__form");
const inputs = document.querySelectorAll("input");
const ibmValue = document.querySelector(".container__result-value");
const resultText = document.querySelector(".container__result-text");


const handleForm = (e) => {
    e.preventDefault()
    const height = inputs[0].value
    const weight = inputs[1].value

    if(!height || !weight || height <= 0 || height <= 0 ){
        handleError();
        return;
    } else {
        const bmi = calculateBMI(height, weight)
        
        showResult(bmi)
    }
};

/**
 * Function to display an error message
 */
const handleError = () => {
    ibmValue.textContent = "Damn it's wrong !";
    ibmValue.style.color = "inherit";
    resultText.textContent = "Fill in the fields correctly !"
}

const calculateBMI = (height, weight) => {
    return (weight / Math.pow(height / 100, 2)).toFixed(1)
};

const showResult = (bmi) => {
    const rank = BMIData.find(data => {
        if(bmi >= data.range[0] && bmi <= data.range[1]) return data;
        else if (typeof data.range === "number" && bmi >= data.range) return data;
    })
    ibmValue.textContent = bmi;
    ibmValue.style.color = rank.color;
    resultText.textContent = `Result : ${rank.name}`;

}
form.addEventListener("submit", handleForm);

