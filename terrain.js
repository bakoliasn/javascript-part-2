//comment
function Tile(x,y){
    this.x = x;
    this.y = y;
    this.height = function(){
        var a = Math.random();
        if (a<=0.33){
            return 1;
        }else if (a<=0.66){
            return 2;
        } else {
            return 3;
        }
    };
      this.type = function(){
        var a = Math.random();
        if (a<=0.33){
            return "grass";
        }else if (a<=0.66){
            return "rock";
        } else {
            return "water";
        }
    };
      this.condition = function(){
        var a = Math.random();
        if (a<=0.33){
            return "frozen";
        }else if (a<=0.66){
            return "normal";
        } else {
            return "buring";
        }
    };
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
  
