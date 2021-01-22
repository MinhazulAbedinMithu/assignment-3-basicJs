// https://github.com/MinhazulAbedinMithu/assignment-3-basicJs

//1. kilometer to meter convert:
function kilometerToMeter(kilometer){
    if(typeof kilometer === 'number'){
        meter = kilometer * 1000;
        return meter;
    }else{
        return "Unexpected input, Distance must be number value";
    }
}

//2. budget Calculaton for>> watch=50, phone=100, laptop=500.
function budgetCalculator(watch, phone, laptop){
    if(watch%1==0 && phone%1==0 && laptop%1==0){
        watch*=50;
        phone*=100;
        laptop*=500;
        totalPrice = watch + phone + laptop;
        return totalPrice;
    }else{
        return "Unexpected input,number of Product must be Integer number value";
    }
}

//3. hotel cost for>> (1-10)days=100, (11-20)days=80, (21--)days=50.
function hotelCost(days){
    if(typeof days === "number"){
        if(days<=10){
            livingCost = days*100;
        }else if(days<=20){
            livingCost = 10*100;
            days-=10;
            livingCost += days*80;
        }else if(days>20){
            livingCost = 10*100;
            days-=10;
            livingCost += 10*80;
            days-=10;
            livingCost += days*50;
        }
        return livingCost;
    }else{
        return "Unexpected input, Living Days must be number value";
    }
}

//4. show the max string from array:
function megaFriend(friends){
    if(friends.length > 0 && friends.every(function(i){return typeof i==='string';})){
        var biggest = friends[0];
        for(var i=0; i<friends.length; i++){
            var newBiggest = friends[i];
            if((newBiggest.length > biggest.length)){
                biggest = newBiggest;
            }
        }
        return biggest;
    }else{
        return "Unexpected input, Name List element must be a string";
    }
}

//1 input: kilometer to meter>>>
var meter = kilometerToMeter(6.7);
console.log(meter);

//2 input: budgetCalculator>>>
var totalPrice = budgetCalculator(4, 5, 2);
console.log(totalPrice);

//3 input: hotelCost>>>
var livingCost = hotelCost(33);
console.log(livingCost);

//4 input: max element of array>>>
var friendList = ["Alex", "Tushar", "Fahmida", "Minhazul", "Alamin"];
var biggestName = megaFriend(friendList);
console.log(biggestName);