function one(call_two) {
    console.log("Function 1 is complete call 2");
    call_two();
}

function two() {
    console.log("Calling function 2");
}

one(two);