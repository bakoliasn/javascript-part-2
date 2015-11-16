//comment
function randomHeight(){
        var a = Math.random();
        if (a<=0.33){
            return 1;
        }else if (a<=0.66){
            return 2;
        } else {
            return 3;
        }
    }
function randomType(){
        var a = Math.random();
        if (a<=0.33){
            return "grass";
        }else if (a<=0.66){
            return "rock";
        } else {
            return "water";
        }
    }
function randomCondition(){
        var a = Math.random();
        if (a<=0.33){
            return "frozen";
        }else if (a<=0.66){
            return "normal";
        } else {
            return "buring";
        }
    }
function Tile(x,y){
    this.x = x;
    this.y = y;
    this.height = randomHeight();
    this.type = randomType();
    this.condition = randomCondition();
}

Tile.prototype  = {
  freeze: function(){
      if(this.condition === "burning"){
          this.condition = "normal";
      }else if (this.condition === "normal"){
          this.condition = "freezing";
      }else{
          this.height++;
      }
  },
  burn: function(){
      if(this.condition === "frozen"){
          this.condition = "normal";
      }else if (this.condition === "normal"){
          this.condition = "burning";
      }else if (this.condition === "burning" && this.height > 0){
          this.height--;
      }
      }
  };
  var array = [];
for (var i = 0; i < 20; i++){
    array.push([]);
    for (var j = 0; j < 20; j++){
        array[i].push(new Tile(i,j));
    }
    
}
console.log(array);