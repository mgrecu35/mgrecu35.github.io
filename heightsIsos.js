var x=100;
function setup() {
    // put setup code here
    var myCanvas =  createCanvas(600, 350);
    myCanvas.parent("myCanvas");
    slider = createSlider(80, 210,100);
    slider.position(80, 50);
    slider.style('rotate','-90deg');
    slider.size(130);
    
    //slider.style('width', '250px');
    
    //slider.style('orient','30deg');
}


function draw() {
    // put drawing code here
    clear();
    strokeWeight(1);
    var B=new P2d(50,300);
    var A=new P2d(x,100)
    var C=new P2d(50+2*(x-50),300);
    var T=new mTriangle(A,B,C);
    var mAB=midLine(A,B);
    var mBC=midLine(B,C);
    var mCA=midLine(C,A);
    dTriangleN(T);
   
    x = slider.value();
    var muBA=getDir(B,A);
    var muBC=getDir(B,C);
    var muCA=getDir(C,A);
    
    
    var a1=Math.atan2(muBA.y,muBA.x);
    var a2=Math.atan2(muBC.y,muBC.x);

    var a3=Math.atan2(muBA.y,-muBA.x);
    var a4=Math.atan2(muBC.y,-muBC.x);
    
    fill('lightgreen');
    arc(B.x,B.y,60,60,a1,a2);
    arc(C.x,C.y,60,60,a4,a3);
    fill('black');
    var t=perp(C,B,A);
    line(C.x,C.y,C.x-t*muBA.y,C.y+t*muBA.x);
    text("P",C.x-t*muBA.y-20,C.y+t*muBA.x)
    var t2=perp(B,A,C);
    line(B.x,B.y,B.x+t2*muCA.y,B.y-t2*muCA.x);
    text("N",B.x+t2*muCA.y+20,B.y-t2*muCA.x);
    C.x=x;
}

function perp(C,B,A){
    var t=-100;
    var muBA=getDir(B,A);
    //    line(C.x,C.y,C.x-t*muBA.y,C.y+t*muBA.x);
    t=(C.x-B.x)*muBA.y-(C.y-B.y)*muBA.x;
    return t;
}
