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


    // changes that has to do wwith cconverting strings to numbers etc
    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseFloat(serviceRatingSelect.value);
    const splitCount = parseInt(splitCountInput.value);
    const mealType  = mealTypeSelect





}


const calculateBtn = document.getElementById('calculateBtn').addEventListener('click', calculateTip);