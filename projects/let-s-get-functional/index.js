// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./dahlak-keleta2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
       if (customer.gender === "male"){
           return true;
       } else {
           return false;
       }
    })
    return males.length;
};

var femaleCount = function(array){
    let females = _.reduce(array, function(acc, current, index){
        if(current.gender === "female"){
            acc += 1;
        }
        return acc;
    }, 0);
    return females;
};

var oldestCustomer = function(array){
    let oldestCust = _.reduce(array, function(previous, current){
        
        if(previous.age > current.age){
            return previous;
        }else{
            return current;
        }
        
    });

    return oldestCust.name;
};

var youngestCustomer = function(array){
    let youngCust = _.reduce(array, function(previous, current){
        
        if(previous.age < current.age){
            return previous;
        }else{
            return current;
        }
        
    });

    return youngCust.name;
};

var averageBalance = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let realNumber = Number(array[i].balance.slice(1).replace(',', ''));
        sum += realNumber
    }
    let averageBal = sum / array.length;
    return averageBal;
};


var firstLetterCount = function(array, letter){
   var firstLetter = _.reduce(array, function(prev, curr){
       if(curr.name[0].toLowerCase() === letter.toLowerCase()){
         prev += 1;

       }
       return prev;
   },0);
    return firstLetter;
};

var friendFirstLetterCount = function(array, customer, letter){
    var customerList = _.filter(array, function(custObj){
        if(custObj.name === customer) {
            return true;
        }
        return false;
            
    })
    var friends = customerList[0].friends;

    var startsWith = _.reduce(friends, function(startsWith, friend){
    
        if(friend.name[0].toLowerCase() === letter.toLowerCase()){
            startsWith += 1;
        }
        return startsWith;
    }, 0);
    return startsWith;
};

var friendsCount = function(array, name){
//return arr who has olga in friend arr using filter if name true, push in new arr
    var friends = _.filter(array, function(custObj){
        if(custObj.friends === name){
            return true;
        }
        return false;
    })
//itterate thru that arr and find cust string names that have olga as friends using map and return it
    var friendList = _.map(friends, function(friends){
        if(friends.friendname){
            return true;
        }
        return false;
    })
    return friendList;
    
};

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
