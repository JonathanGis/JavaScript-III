/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global - In the global scope. Any usage of 'this' outside of a specific context.
* 2.  Implicit - Applies to what is 'left of the dot' and can use whatever data is attached to it.
* 3.  New - Uses a constructor function which creates a empty object ({}).
* 4.  Explicit - Uses call, apply, or bind to manipulate the data 'this' is referring to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const randomNumber = function() {
    console.log(this.num);
};

const anyNumber = {
    num: 972
};

window.num = 2500;
randomNumber(anyNumber);

// Principle 2

// code example for Implicit Binding

const houseStats = {
    color: 'white',
    height: 50,
    width: 60,
    sayColor: function() {
        console.log(this.color);
    }
};

houseStats.sayColor();
// Principle 3

// code example for New Binding

const Candy = function(color, flavor) {
    this.color = color;
    this.flavor = flavor;
};

const kitKat = new Candy('black', 'chocolate');

// Principle 4

// code example for Explicit Binding

const sayHi = function() {
    console.log("Hi " + this.name);
};

const frank = {
    name: "frank",
    age: 45,
};

sayHi.call(frank);