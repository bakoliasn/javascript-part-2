// comment
function Warrior (name, gender){
    this.gender = gender;
    this.name = name;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.round(10*Math.random());
}
Warrior.prototype = {
    fight: function(){
        console.log(this.name + " rushes to the arena with " + this.weapon);
    },
    
    faceOff: function(opponent){
        if(this.power > opponent.power){
            console.log(this.name + " kills " + opponent.name + " with a " + this.weapon);
        }else if(this.power === opponent.power){
            console.log("It is a tie... Both fights DIE!!");
        } else {
            console.log(opponent.name + " kills " + this.name + " with a" + opponent.weapon);
        }
    }
};

var w1 = new Warrior("steve", "M");
var w2 = new Warrior("james", "M");
var w3 = new Warrior("jessica", "F");