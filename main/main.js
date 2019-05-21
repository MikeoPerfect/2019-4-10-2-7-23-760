module.exports = function main(inputs) {
    // write your code here...
   const {distance = 0, parkTime = 0} = inputs;
    let price = 6 + parkTime * 0.25;
    if (distance >= 2 && distance <= 8) 
        price = price + ((distance - 2) * 0.8);
    else if(distance > 8) 
        price = price + 6 * 0.8+ ((distance - 8) * 1.2);
    price = Math.round(price);
    return price;
};

