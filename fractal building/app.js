var objects = [];
const PI2 = Math.PI * 2

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));



    }

    resize() {
        this.stageWidth = window.innerWidth;
        this.stageHeight = window.innerHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);


        drawFractals(this.ctx, 3, [100, 100], 1);

    }



}

function drawBox(ctx, pos, dir) {
    this.ctx = ctx;
    this.pos = pos;
    this.dir = dir;
    console.log(this.pos)
    this.ctx.fillstyle = 'black';
    this.ctx.beginPath();
    this.ctx.moveTo(this.posx, this.posy);
    this.ctx.lineTo(this.posx, this.posy + 10);
    this.ctx.lineTo(this.posx + 10, this.posy + 10);
    this.ctx.lineTo(this.posx + 10, this.posy);
    this.ctx.fill();

    if (this.dir == 0) {
        this.newposx = this.pos[0] + 10;
        this.newposy = this.pos[0];
    } else if (this.dir == 1) {
        this.newposx = this.pos[0];
        this.newposy = this.pos[0] - 10;
    } else if (this.dir == 2) {
        this.newposx = this.pos[0] - 10;
        this.newposy = this.pos[0];
    } else if (this.dir == 3) {
        this.newposx = this.pos[0];
        this.newposy = this.pos[0] + 10;
    }

    this.newpos = [this.newposx, this.newposy];

    return [this.newpos, this.dir]
}

function drawFractals(ctx, k, pos, dir) {

    this.ctx = ctx;
    this.pos = pos;
    this.posx = pos[0];
    this.posy = pos[1];
    this.dir = dir;


    if (k > 1) {
        this.pos = [this.posx, this.posy];
        this.return = drawFractals(this.ctx, k - 1, this.pos, this.dir);
        this.pos = this.return[1];
        this.dir = this.return[0];
        this.dir = (this.dir + 1) % 4
        this.return = drawFractals(this.ctx, k - 1, this.pos, this.dir);
        this.pos = this.return[1];
        this.dir = this.return[0];
    } else {
        this.pos = [this.posx, this.posy];
        this.return = drawBox(this.ctx, this.pos, this.dir);
        this.pos = this.return[0];
        this.dir = this.return[1];
    }
    return [this.dir, this.pos]
}

window.onload = () => {
    new App()
}