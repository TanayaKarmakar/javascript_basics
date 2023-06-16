let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "sticks"],
    toppings: ["chocolate", "peanuts"]
};



let order = (fruit_name, call_production) => {
    console.log("Order placed, please call production");
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);  
};

let production = () => {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("Fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log("The machine was started");
                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[0]}`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(() => {
                                console.log("Serve icecreame");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};

order(0,production);