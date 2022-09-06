class Dice {
    constructor(faces){
        this.faces = faces;
    }

    GetRandomNumber(min, max){
        min = 1;
        max = Math.floor(this.faces);
        return Math.floor(Math.random() * (max - min)) + min
    }

    Roll(){
        console.log("Roll: " + this.GetRandomNumber(1,this.faces))
    }
}

//Example

var d6 = new Dice(6);
d6.Roll();

var d100 = new Dice(100);
d100.Roll();