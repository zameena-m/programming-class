var submit = document.getElementById('submit');
submit.onclick = tipCalculate;

function tipCalculate(){
  console.log("TIP CALCULATE");


var totalBill = document.getElementById('bill').value;
var tipPerc = getPercChecked();


if(!isNaN(totalBill)){
	var tipAmount = Math.floor(totalBill * tipPerc*100) /100;
	var roundedAmount = tipAmount.toFixed(2);
	var tipBox = document.getElementById('tipamount');
	tipBox.innerHTML='$' + roundedAmount;

	} else {
		alert('Please enter numeric values only, bishhh');
	}

}


function getPercChecked(){

		var percBtns = document.getElementsByClassName('tip-btn');
		for (var i=0; i <percBtns.length; i++) {
			if(percBtns[i].checked == true){
				return percBtns[i].value; 


			}

		}
}