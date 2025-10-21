let onionPerKg = 45 ;
let potatoPerKg =25 ;
let fishPerKg = 1100 ;

let totalTakaInMyPocket = 5000 ;

// then i was bye 10 kg onion and 5 kg potato and 2 kg fish

let onionQuantity = 10 ;
let potatoQuantity = 5 ;
let fishQuantity = 4 ;

let totalOnionPrice = onionPerKg * onionQuantity ;
let totalPotatoPrice = potatoPerKg * potatoQuantity ;
let totalFishPrice = fishPerKg * fishQuantity ;

const totalExpense = totalOnionPrice + totalPotatoPrice + totalFishPrice ;

const nowIHave = totalTakaInMyPocket - totalExpense ;

console .log("Total Expense: " + totalExpense) ;
console .log("Now I Have: " + nowIHave) ;

