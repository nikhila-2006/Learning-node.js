class Mammal {
    constructor(name){
        this.name=name;
        this.type="Warm-blooded animals";
    }
    eat(){
        console.log("I am Eating, dont disturb me");
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("bow.....bow");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow...meow");
    }
}