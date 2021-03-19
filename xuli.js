var i=0;
const thoigian=4000;
var listanh=[];
listanh[0]="./images/giaodien1.jpg";
listanh[1]="./images/giaodien2.jpg";
listanh[2]="./images/giaodien3.jpg";
function thaydoianh() {
	let anhid=document.getElementById('anhid').src=listanh[i];
	if (i < listanh.length - 1) {
		i++;
	}else{
		i=0;
	}
	console.log("i thứ ",i);
	return setTimeout(thaydoianh,thoigian);
	//setTimeout("thaydoianh",thoigian);

}
// window.onload=thaydoianh;
thaydoianh();