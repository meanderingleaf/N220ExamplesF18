//hardcoded "Dog" object
var myDog = {
    name: "Ada",
    age: 2,
    color: "black",
    bark: function() {
        console.log(this.name + " barks!");
    }
}

myDog.bark();

//A dog template
function Dog(name,age,color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

Dog.prototype.bark = function() {
    console.log(this.name + " barks!");
}

var secondDog = new Dog("Ginny",10,"grey");
secondDog.bark();


//A dog class
class Chien {
    constructor(name,age,color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    bark() {
        console.log(this.name + " barks!");
    }
}

var thirdDog = new Chien("Rowan", 1, "red");
thirdDog.bark();


class RoboDog extends Chien {

    constructor(name,age,color,selector) {
        super(name,age,color);
        this.element = document.querySelector(selector);
        this.form = "dog";
        this.updateUI();

        console.log("Begin transform sequence");
        setTimeout( () => { this.transform("neat") }, 1500);
    }

    transform() {
        console.log(this);
        this.form = "Witch broom motorcyle?";
        console.log(this.name + " has transformed into " + this.form);
        this.updateUI();
    }

    updateUI() {
        this.element.innerHTML = this.name + " is in " + this.form + " form";
    }
}

var fourthDog = new RoboDog("Goddard", .5, "silver", "#roboDog");
fourthDog.bark();