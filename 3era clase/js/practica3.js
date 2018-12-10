//eventos con el mouse

function over(){
    var grande=document.getElementById("grande");
    grande.src=this.src;
}

function out(){
    var grande=document.getElementById("grande");
    grande.src="img/sinfoto.jpg"
}

document.getElementById("img1");
img1.onmouseover=over;
img1.onmouseout=out;

for (let i = 0; i <=4; i++) {
    var img=document.getElementById("img"+i)
    img.onmouseover=over;
    img.onmouseout=out;
    
}