const human = {
    name: "Sai",
    age: 12,
    sex: 'male',
    eat: () => {
        console.log("This human is eating");
    }
}

function Human(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

class Animals {
    static count = 0;
    constructor(name,age,sex,status){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.status = status;
        Animals.count++;
    }
    eat(){
        if(!this.status){
            console.log(`This ${this.name} cannot eat anymore, it is already dead`);
            return 0;
        }
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        if(!this.status){
            console.log(`This ${this.name} cannot sleep anymore, it is already dead`);
            return 0;
        }
        console.log(`This ${this.name} is sleeping`);
    }
    get allData (){
        console.log(`Name is ${this.name}.\nAge is ${this.age}.\n${this.sex}.\n${this.status}`);
    }
}

class Rabbit extends Animals{
    constructor(name,age,sex,status,speed){
        super(name,age,sex,status);
        this.speed = speed;
    }

    run(){
        if(!this.status){
            console.log(`This ${this.name} cannot run anymore, it is already dead`);
            return 0;
        }
        console.log(`This ${this.name} is running at ${this.speed} mph`);
    }
}
class Mongoose extends Animals{
    constructor(name,age,sex,status,speed){
        super(name,age,sex,status);
        this.speed = speed;
    }
    run(){
        if(!this.status){
            console.log(`This ${this.name} cannot run anymore, it is already dead`);
            return 0;
        }
        console.log(`This ${this.name} is running at ${this.speed} mph`);
    }
    set detail(detail){
        const data = detail.split(' ');
        this.name = data[0];
        this.age = data[1];
        this.sex = data[2];
        this.status = data[3];
        this.speed = data[4];
    }
}

const rabbit = new Rabbit('buny',12,'male',true,34);
const mongoose = new Mongoose('Rock',8,'female',true,12);
mongoose.detail = 'Alien 7 male true 20';
mongoose.allData;