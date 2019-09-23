var x=100;
function setup() {
    // put setup code here
    var myCanvas =  createCanvas(400, 400);
    myCanvas.parent("myCanvas");
    slider = createSlider(50, 300,100);
    slider.position(50, 50);
    slider.style('rotate','-90deg');
    slider.size(250);
    var doc = new jsPDF()

    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
    //slider.style('width', '250px');
    
    //slider.style('orient','30deg');
}

function draw() {
    // put drawing code here
    clear();
    strokeWeight(1);
    var A=new P2d(50,300);
    var B=new P2d(300,300);
    var C=new P2d(x,100)
    //strokeWeight(1);
    //line(A.x,A.y,B.x,B.y);
    //line(B.x,B.y,C.x,C.y);
    //line(C.x,C.y,A.x,A.y);
    var T=new mTriangle(A,B,C);
    var mAB=midLine(A,B);
    var mBC=midLine(B,C);
    var mCA=midLine(C,A);
    dTriangle(T);
    line(C.x,C.y,mAB.x,mAB.y);
    line(A.x,A.y,mBC.x,mBC.y);
    line(B.x,B.y,mCA.x,mCA.y);
    x = slider.value();

    C.x=x;
}
