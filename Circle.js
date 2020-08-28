class Circle {
    constructor(x,y,radius,color,speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    draw(canvas){
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move(){
        this.y += this.speed;
    }
}
