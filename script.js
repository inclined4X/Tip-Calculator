function calculateTip(){



    //getting the elements of all the inputs
    const billAmountInput = document.getElementById('billAmount');
    const serviceRatingSelect = document.getElementById('ServiceRating');
    const splitCountInput = document.getElementById('splitCount');
    const mealTypeSelect = document.getElementById('mealType');


    // getting the IDs of the empty divs which displays the results
    const tipAmountOutput = document.getElementById('tipAmount');
    const totalAmountOutput = document.getElementById('totalAmount');
    const amountPerPersonOutput = document.getElementById('amountPerPerson');


    // changes that has to do with cconverting strings to numbers etc
    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseFloat(serviceRatingSelect.value);
    const splitCount = parseInt(splitCountInput.value);
    const mealType  = mealTypeSelect.value;


    //conditions for empty inputs
    if(isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)){
        tipAmountOutput.textContent = "Please Enter Valid Inputs";
        totalAmountOutput.textContent = "";
        amountPerPersonOutput.textContent = "";
        return;
    }


//  for service rating when any of the option value is chosen
    let tip;
    switch(serviceRating){
        // case 1
        case 1:
            tip = billAmount * 0.05;
            break;
        // Case 2
        case 2:
            tip = billAmount * 0.10;
            break;
        // Case 3
        case 3:
            tip = billAmount * 0.15;
            break;
        // case 4
        case 4:
            tip = billAmount * 0.20;
            break;
    }

    let totalAmount = billAmount + tip;
    let amountPerPerson =  totalAmount / splitCount;





}


const calculateBtn = document.getElementById('calculateBtn').addEventListener('click', calculateTip);