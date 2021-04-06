let distance;
let distanceFeet;

// returns distance in blocks
 function distanceFromHqInBlocks(pickupStreet) {
    //subtract pickup street from the headquarter location of 42nd street

    const headquarters = 42;

    //math absolute returns absolute value. accounting for pickup streets higher than 42
    distance = Math.abs(headquarters - pickupStreet);
    return distance;
 }


 //distance in feet away
 function distanceFromHqInFeet(pickupStreet) {
     //call first function to get the distance
    distanceFromHqInBlocks(pickupStreet);

    // converting blocks to feet. each block is 264 feet
    distance = distance * 264

    return distance;
 }

//returns the distance travelled in feet
 function distanceTravelledInFeet(start, destination) {
    distanceFeet = Math.abs(start - destination);
    distanceFeet = distanceFeet * 264;

    return distanceFeet;
 }

 //fair for distance
 function calculatesFarePrice(start, destination) {
     
    //call distance travelled function
    distanceTravelledInFeet(start, destination);

    let fair;

    if (distanceFeet > 2500) {
        //if the distance is more the 2500 feet
        fair = 'cannot travel that far';
    } else if (distanceFeet > 2000) {
        //fair is $25 flat for distances between 2500-2000
        fair = 25;
    } else if (distanceFeet >= 400) {
        //2 cents per foot distances between 400-2000. 
        //distance - 400 since the first 400 ft are free
        //multiply by 2 to figure out cents
        // divide by 100 to convert to dollars
        fair = ((distanceFeet - 400) * 2) / 100
    } else {
        //fair is free for under 400 ft
        fair = 0;
    }

    return fair;
 }