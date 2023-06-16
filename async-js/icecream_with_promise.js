let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "sticks"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_opened = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_opened) {
            setTimeout(() => {
                resolve(work());
            }, time); 
        } else {
            reject(console.log("Our shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
.then(() => {
    return order(0000, () => console.log("production has started"));     
})
.then(() => {
    return order(2000, () => console.log("The fruit was chopped"));
})
.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`));
})
.then(() => {
    return order(1000, () => console.log("The machine was started"));
})
.then(() => {
    return order(2000, () => console.log(`${stocks.holder[0]} was selected`));
})
.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was selected`));
})
.then(() => {
    return order(1000, () => console.log("Icecream was served"));
})
.catch(() => {
    console.log("Customer has left");
})
.finally(() => console.log("day ended, shop is closed"));
