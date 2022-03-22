// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - 42)
}

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(begin, destination){
    return Math.abs(begin - destination) * 264
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    } else if (distance <= 2000){
        return 0.02 * (distance - 400)
    } else if (distance <= 2500){
        return 25
    } else {
        return "cannot travel that far"
    }
}