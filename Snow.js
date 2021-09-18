class Snow
{
    constructor(x, y, width, height)
    {
        var options = {isStatic: false, restitution: 0.2, friction: 0.5, density: 0.3};
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image = loadImage("snow4.webp");

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}