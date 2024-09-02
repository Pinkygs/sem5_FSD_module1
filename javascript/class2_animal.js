class Animal {
    constructor() {
        this.legs = 4; // Corrected from "nodegs" to "legs"
    }

    print_legs() {
        console.log("Number of legs:", this.legs);
    }
}

// Create an instance of Animal
let someAnimal = new Animal();
someAnimal.print_legs(); // Output: Number of legs: 4

// Define the Dog class, which extends Animal
class Dog extends Animal {
    constructor() {
        super(); // Call the parent class (Animal) constructor
        this.breed = "Rottweiler"; // Using this to assign the breed to the instance
    }
}

// Create an instance of Dog
let myDog = new Dog();
myDog.print_legs(); // Output: Number of legs: 4
console.log("Breed:", myDog.breed); // Output: Breed: Rottweiler

// Old Version
class OldDog { constructor() { this.breed = "Unknown"; } bark() { console.log("Woof!"); } }
class OldCat { constructor() { this.color = "Unknown"; } meow() { console.log("Meow!"); } }

// New Version
class NewDog { constructor(breed = "Rottweiler") { this.breed = breed; } bark() { console.log("Woof!"); } }
class NewCat { constructor(color = "Black") { this.color = color; } meow() { console.log("Meow!"); } }

// Usage
let oldDog = new OldDog(); oldDog.bark();
let newDog = new NewDog(); newDog.bark();
let oldCat = new OldCat(); oldCat.meow();
let newCat = new NewCat(); newCat.meow();