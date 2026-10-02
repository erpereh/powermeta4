// Funciones necesarias para realizar un menú de intercambio


function mover(menuizq,menuder,todos) {

for(var i=0; i< menuizq.options.length; i++) {
if((menuizq.options[i].selected && menuizq.options[i].value != "") || (todos == true)) {
var no = new Option();
no.value = menuizq.options[i].value;
no.text = menuizq.options[i].text;
menuder.options[menuder.options.length] = no;
menuizq.options[i].value = "";
menuizq.options[i].text = "";
   }
}
reordenar(menuizq);

}


function reordenar(menu)  {

for(var i=0; i< menu.options.length; i++) {
	if(menu.options[i].value == "")  {
		for(var j=i; j< menu.options.length-1; j++)  {
			menu.options[j].value = menu.options[j+1].value;
			menu.options[j].text = menu.options[j+1].text;
		}
	var ln = i;
	break;
    }
}
if(ln < menu.options.length)  {
menu.options.length -= 1;
reordenar(menu);
}


}