let availableAmount = 0;

const byeABerger = true;
let ExpensiveBergerPrice = 550;
let standardBergerPrice = 250;

const wantToByeExpensiveBerger = true
const wantToByeStandardBerger = false

if (byeABerger) {
    if (wantToByeExpensiveBerger && availableAmount >= ExpensiveBergerPrice) {
        if (availableAmount >= ExpensiveBergerPrice) {
            availableAmount -= ExpensiveBergerPrice;
            console.log("Here is your Expensive Berger and we have free sprite For you")
            console.log("And thats your return amount : " + availableAmount, "our Expensive Berger Price is : " + ExpensiveBergerPrice, "Thank you Sir , Have a nice day")
        }
    }

    else if (wantToByeStandardBerger && availableAmount >= standardBergerPrice) {
        if (availableAmount >= standardBergerPrice) {
            availableAmount -= standardBergerPrice;
            console.log("Here is your Standard Berger and we have free candy For you")
            console.log("And thats your return amount : " + availableAmount, "our Standard Berger Price is : " + standardBergerPrice, "Thank you Sir , Have a nice day")
        }
    }
    else {
        console.log( availableAmount , ", In this price we Do not have any Berger for you sorry Sir Have a nice day" )
    }
}
else{
    console.log("Thanks for visiting , Have a nice day ")
}