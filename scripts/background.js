const canvas = document.getElementById("stars");
const ctx = canvas.getContext('2d');

//needed here to have the canvas fill the page
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

let screen, starArry;

// set the properties of the animation

let params = {speed: 5, count:400, life: 5 };

setup();
update();

window.onresize = function () {
    setup();
}
//function the makes stars at random locations
//has a function to move the stars as well

function Star(){
    this.x = Math.random()* canvas.width;
    this.y = Math.random()* canvas.hight;
    this.z = Math.random()* canvas.width;

    this.move = function(){
        this.z -= params.speed;

        //reset z if needed
        if(this.z <= 0){
            this.z = canvas.width;
        }
    };

    this.show = function (){
        let x,y,radius, opacity;

        radius = canvas.width / this.z;

        x = (this.x - screen.c[0]) * radius;
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * radius;
        y = y + screen.c[1];

        //makes a soft fading effect 
        opacity = radius > params.life ? (2 - radius / params.life) *1.5:1;

        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255, "+opacity+")";
        ctx.arc(x,y,radius,0,Math.PI *2);
        ctx.fill();
    };
}

function setup(){

    screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth*.5, window.innerHeight*.5]
    };
    window.cancelAnimationFrame(update);

    canvas.width = screen.w;
    canvas.hight = screen.h;

    starArry = [];

    for(let i = 0; i < params.count; i++){
        starArry[i] = new Star();
    }
    
}

function update(){
    //fill background black
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    starArry.forEach(function (s) {
        s.show();
        s.move();
    });

    window.requestAnimationFrame(update);
}