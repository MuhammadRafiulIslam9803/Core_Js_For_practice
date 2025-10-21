let availableAmount = 6000;

let expensiveBergerPrice = 550;
let standardBergerPrice = 250;
let wantToByeExpensiveBerger;
let byeABerger;


availableAmount >= standardBergerPrice ? byeABerger = true : false;
wantToByeExpensiveBerger = availableAmount >= expensiveBergerPrice ? true : false;




if (byeABerger) {
    if (wantToByeExpensiveBerger) {
        if (availableAmount >= expensiveBergerPrice) {
            availableAmount -= expensiveBergerPrice;
            console.log("Here is your Expensive Berger and we have free sprite For you")
            console.log("And thats your return amount : " + availableAmount, "our Expensive Berger Price is : " + expensiveBergerPrice, "Thank you Sir , Have a nice day")
            availableAmount <= 50 ? console.log( 'take it as a tip ') : console.log("Take 50 taka as a tip for your service ", availableAmount-= 50 ,"Sir thats your return Amount Take it " );
        }
    }

    else if (!wantToByeExpensiveBerger && availableAmount >= standardBergerPrice) {
        if (availableAmount >= standardBergerPrice) {
            availableAmount -= standardBergerPrice;
            console.log("Here is your Standard Berger and we have free candy For you")
            console.log("And thats your return amount : " + availableAmount, "our Standard Berger Price is : " + standardBergerPrice, "Thank you Sir , Have a nice day")
            availableAmount <= 50 ? console.log( 'take it as a tip ') : console.log("Take 50 taka as a tip for your service ", availableAmount-= 50 ,"Sir thats your return Amount Take it " );
        }
    }

}
else {
    console.log(availableAmount, ", In this price we Do not have any Berger for you sorry Sir Have a nice day")
}