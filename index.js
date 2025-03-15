// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective ( star = "*") {
    return function (adj = "special") {
        return `You are ${star}${adj}${star}!`
    }
}
console.log(wrapAdjective("||")("a hard worker"));
wrapAdjective("||")("a dedicated programmer");
