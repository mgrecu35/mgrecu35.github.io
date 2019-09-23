function P2d(x,y) {
    this.x = x;
    this.y = y;
   // document.write(x);
    //return this;
}

function Direction(mux,muy)
{
    this.x=mux;
    this.y=muy;
}
function mTriangle(A,B,C)
{
    this.A=A;
    this.B=B;
    this.C=C;
}
function dTriangle(T)
{
    strokeWeight(1);
    line(T.A.x,T.A.y,T.B.x,T.B.y);
    line(T.B.x,T.B.y,T.C.x,T.C.y);
    line(T.C.x,T.C.y,T.A.x,T.A.y);
    textSize(20);
    text("A",T.A.x-12,T.A.y+35);
    text("B",T.B.x-12,T.B.y+35);
    text("C",T.C.x-12,T.C.y-15);
}

function dTriangleN(T)
{
    strokeWeight(1);
    line(T.A.x,T.A.y,T.B.x,T.B.y);
    line(T.B.x,T.B.y,T.C.x,T.C.y);
    line(T.C.x,T.C.y,T.A.x,T.A.y);
    textSize(20);
    text("C",T.C.x-12,T.C.y+35);
    text("B",T.B.x-12,T.B.y+35);
    text("A",T.A.x-12,T.A.y-15);
}

function midLine(A,B)
{
    var x=(A.x+B.x)/2;
    var y=(A.y+B.y)/2;
    var M=new P2d(x,y);
    return M;
}

function getDir(A,B)
{
    var d=Math.sqrt((B.x-A.x)*(B.x-A.x)+(B.y-A.y)*(B.y-A.y));
    var mux=(B.x-A.x)/d;
    var muy=(B.y-A.y)/d;
    
    var dirE=new Direction(mux,muy);
    return dirE;
}
