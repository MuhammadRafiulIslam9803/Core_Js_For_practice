let availableAmount = 1000 ;

const byeABerger = true ;
let ExpensiveBergerPrice =550 ;
let standardBergerPrice = 250 ;

const wantToByeExpensiveBerger = true
const wantToByeStandardBerger = false

if (byeABerger){
    if (wantToByeExpensiveBerger){
        if (availableAmount >= ExpensiveBergerPrice){
            availableAmount -= ExpensiveBergerPrice ;
            console.log("Here is your Expensive Berger and we have free sprite For you")
            console.log("And thats your return amount : " + availableAmount , "our Expensive Berger Price is : " + ExpensiveBergerPrice ,"Thank you for visiting us , Have a nice day")
        }
    }

    else if (wantToByeStandardBerger){
        if (availableAmount >= standardBergerPrice){
            availableAmount -= standardBergerPrice ;
            console.log("Here is your Standard Berger and we have free candy For you")
            console.log("And thats your return amount : " + availableAmount , "our Standard Berger Price is : " + standardBergerPrice ,"Thank you for visiting us , Have a nice day")
        }
  }
} 
else{
    console.log("Thank you sir for visiting us")
}