/** 
 * @constructor
 */
const Obstacle = function(){
    this.top = (Math.random() * canvas.height/3) + 20;
    this.bottom = (Math.random() * canvas.height/3) + 20;
    this.x = canvas.width;
    this.width = 20;
    this.color ="hsla(" + hue + ",100%, 50%, 1)";
    this.counted = false;

    //const buildingArrayDown = ["img/tasmantoren.png","img/Duo.png","img/infoversum.png","img/stadshuis.png", "img/der_Aa_kerk.png","img/Groninger_Museum.png","img/martini.png","img/fc_groningen.png"];
    //const buildingArrayTop = ["img/der_Aa_kerk.png","img/Groninger_Museum.png","img/martini.png","img/fc_groningen.png", "img/tasmantoren.png","img/Duo.png","img/infoversum.png","img/stadshuis.png"];
    //this.buildingTop = buildingArrayTop[Math.floor(Math.random()*buildingArrayTop.length)];
    //this.buildingBottom = buildingArrayDown[Math.floor(Math.random()*buildingArrayDown.length)];

Obstacle.prototype.draw = function(building){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top)
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom)
    //let imTop = new Image();
    //imTop.src = this.buildingTop;
    //ctx.drawImage(imTop, this.x, 0);
    //let imBottom = new Image();
    //imBottom.src = this.buildingBottom;
    //ctx.drawImage(imBottom, this.x, canvas.height - 75);
};

Obstacle.prototype.update = function(){
        this.x -= gameSpeed;
        if (!this.counted && this.x < bird.x){
            score++;
            this.counted = true;
        }
        this.draw(); 
    };
};

const obstaclesArray = [];

function handleObstacles(){
    if (frame % 150 === 0){
        obstaclesArray.unshift(new Obstacle());
    }
    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();
    }
    if(obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[i]);
    }
}