// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity= 'go to the office'){
   return `This Monday, I will ${activity}.`;
}
mondayWork();

 function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage:
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are !!!a dedicated programmer!!!"
console.log(wrapAdjective("%")("a dedicated programmer")); // Output: "You are %a dedicated programmer%!"
console.log(wrapAdjective()()); // Output: "You are *special*!"