let availableAmount = 200;

let expensiveBergerPrice = 550;
let standardBergerPrice = 250;
let wantToByeExpensiveBerger;
let byeABerger;


availableAmount >= standardBergerPrice ? byeABerger = true : false;
wantToByeExpensiveBerger = availableAmount >= expensiveBergerPrice ? true : false;




if (byeABerger) {
    if (wantToByeExpensiveBerger && availableAmount >= expensiveBergerPrice) {
        if (availableAmount >= expensiveBergerPrice) {
            availableAmount -= expensiveBergerPrice;
            console.log("Here is your Expensive Berger and we have free sprite For you")
            console.log("And thats your return amount : " + availableAmount, "our Expensive Berger Price is : " + expensiveBergerPrice, "Thank you Sir , Have a nice day")
        }
    }

    else if (!wantToByeExpensiveBerger && availableAmount >= standardBergerPrice) {
        if (availableAmount >= standardBergerPrice) {
            availableAmount -= standardBergerPrice;
            console.log("Here is your Standard Berger and we have free candy For you")
            console.log("And thats your return amount : " + availableAmount, "our Standard Berger Price is : " + standardBergerPrice, "Thank you Sir , Have a nice day")
        }
    }

}
else {
    console.log(availableAmount, ", In this price we Do not have any Berger for you sorry Sir Have a nice day")
}