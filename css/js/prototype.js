let Animal = {
    walk() {
        console.log("Animal walk")
    }
};
let Rabbit = {
    __port__: Animal
};
Rabbit.walk = function() {
    console.log("Rabbit hopes")
};
Rabbit.walk();
Animal.walk();
