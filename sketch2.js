var x=100;
function setup() {
    // put setup code here
    var myCanvas =  createCanvas(600, 400);
    myCanvas.parent("myCanvas");
    slider = createSlider(50, 300,100);
    slider.position(50, 50);
    slider.style('rotate','-90deg');
    slider.size(250);
    
    //slider.style('width', '250px');
    
    //slider.style('orient','30deg');
}


function draw() {
    // put drawing code here
    clear();
    strokeWeight(1);
    var A=new P2d(50,300);
    var B=new P2d(300,310);
    var C=new P2d(x,100)
    
    var T=new mTriangle(A,B,C);
    var mAB=midLine(A,B);
    var mBC=midLine(B,C);
    var mCA=midLine(C,A);
    dTriangle(T);
   
    x = slider.value();
    var muAC=getDir(A,C);
    var muAB=getDir(A,B);
    var muBC=getDir(B,C);
    var t=200.0;
    var P=new P2d(B.x+muAC.x*t,B.y+muAC.y*t);
    var P2=new P2d(B.x+muAB.x*t,B.y+muAB.y*t);
    
    line(B.x,B.y,P.x,P.y);
    text("P",P.x+12,P.y);
    line(B.x,B.y,P2.x,P2.y);
    text("P2",P2.x+12,P2.y);
    var a1=Math.atan2(muAC.y,muAC.x);
    var a2=Math.atan2(muAB.y,muAB.x);
    var a3=Math.atan2(muBC.y,muBC.x);
   
    fill('lightgreen');
    arc(A.x,A.y,60,60,a1,a2);
    arc(B.x,B.y,60,60,a1,a2);
    fill('red');
    arc(B.x,B.y,60,60,a3,a1);
    a3=Math.atan2(-muBC.y,-muBC.x);
    a2=Math.atan2(-muAC.y,-muAC.x);
    arc(C.x,C.y,60,60,a3,a2);
    fill('black');
    x = slider.value();

    C.x=x;
}
