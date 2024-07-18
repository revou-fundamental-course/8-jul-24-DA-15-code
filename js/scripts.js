// ini javascript

function updateResult() {
  var weightValue = document.getElementById("input-berat-badan");
  console.log(weightValue);
  var heightValue = document.getElementById("#input-tinggi-badan");
  console.log(heightValue);
  var result = document.getElementById("#result");

  var height = parseFloat(weightValue.value);
  var weight = parseFloat(weightValue.value);

  if (weightValue === "" || weightValue < 0 || isNaN(weightValue)) {
    //Nan  !== NaN
    result.innerHTML = "Silahkan Masukkan Berat Badan yang Benar!";
  } else if (heightValue === "" || heightValue < 0 || isNaN(weightValu)) {
    result.innerHTML = "Silahkan Masukkan Tinggi Badan yang Benar!";
  } else {
    //Calculate BMI
    let result = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(
      2
    );

    //Display the Result
    result.innerHTML = "<span>${bmi}</span>";

    //Display End Message
    if (bmi < 18.5) {
      message.innerHTML = "Anda Kekurangan Berat Badan";
    } else if (((bmi) => 18.5) && bmi < 25) {
      message.innerHTML = "Berat dan Tinggi Anda Normal";
    } else if (bmi > 24.9 && bmi < 30) {
      message.innerHTML = " Anda Mengalami Obesitas Ringan atau Tingkat I";
    } else {
      message.innerHTML = "Anda Mengalami Obesitas Tinggi atau Tingkat II";
    }
  }
}
