let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Exercise 1: displayGroceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Exercise 2: cloneGroceries
const cloneGroceries = () => {
    // 1. Copying a Primitive (Pass by Value)
    let user = client; 
    client = "Betty";
    // Prediction: user will still be "John".
    // Why: Strings are primitives. When you set user = client, JS copies the actual value. 
    // They point to different spots in memory.
    console.log(`User: ${user}, Client: ${client}`);

    // 2. Copying an Object (Pass by Reference)
    let shopping = groceries;
    
    // Change totalPrice to 35$
    groceries.totalPrice = "35$";
    // Prediction: shopping.totalPrice will also be "35$".
    // Why: Objects are stored by reference. 'shopping' and 'groceries' point to the 
    // exact same memory address. Changing one affects the other.

    // Change paid to false
    groceries.other.paid = false;
    // Prediction: shopping.other.paid will also be false.
    // Why: Same as above. Even nested objects are part of the same reference chain.
    
    console.log("Shopping Object Total Price:", shopping.totalPrice);
    console.log("Shopping Object Paid Status:", shopping.other.paid);
};

// Invoke the functions
displayGroceries();
cloneGroceries();

