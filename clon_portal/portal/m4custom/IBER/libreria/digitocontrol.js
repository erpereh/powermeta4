//Librería que se utiliza para el cálculo del Dígito de Control de una sucursal y un número de cuenta


function calculodc(bancoagencia,numerocuenta){
var DC="";
DC = calculo(bancoagencia) + calculo(numerocuenta);
//alert("DC =" + DC);
return DC;
}

function calculo(parametro){
var acumulado = 0;

for (i=0; i < parametro.length; i++){
   
   var NumPeso=parametro.length-i;
   
   if (NumPeso==1) {
     var mnPeso=6 ;      //unidad
   }                           
   if  (NumPeso==2){ 
     var mnPeso=3;       //decena
   }
   if (NumPeso==3){ 
     var mnPeso=7;       //centena 
   }
   if (NumPeso==4){
     var mnPeso=9;       //unidad de millar
   }
   if (NumPeso==5){ 
     var mnPeso=10;     //decena de millar
   }
   if (NumPeso==6){ 
     var mnPeso=5;       //centena de millar
   }
   if (NumPeso==7){
     var mnPeso=8;       //unidad de millón
   }
   if (NumPeso==8){ 
     var mnPeso=4;       //decena de millón
   }
   if (NumPeso==9){ 
     var mnPeso=2;       //centena de millón
   }
   if (NumPeso==10){ 
     var mnPeso=1;       //unidad de millar de millón
   }
   acumulado = acumulado + parseFloat(parametro.substr(i,1))*mnPeso;

//la función substr se va quedando con cada uno de los dígitos de parametro, los cuales, convertidos a float
//son multiplicados por su peso correspondiente, mnPeso, y se van sumando. La suma se encuentra en acumulado

}

acumulado=11- (acumulado % 11);    //% devuelve el resto de dividir mnAcumulado entre 11

if (acumulado==10){
   acumulado=1;
}
if (acumulado==11){
   acumulado=0;
}

//alert(acumulado);
//return DigitoControl;
var stracumulado = new String(acumulado);
//alert(stracumulado.toString());
return stracumulado.toString();
}

function comprobarnifNoInfo(sNIF) {
	var sCadenaNif = sNIF;
	var sNumNif;
	var nNumNif;
	var sBlanco = "";
	var nLetraNif;
	var sLetraNif;
	var sLetraNifCalc;	
	var expRegInicioCero = /^0+/;
	var expRegFinNum = /[0-9]$/;
	var mLetras = new Array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");
	sCadenaNif = sCadenaNif.replace(expRegInicioCero,sBlanco);
	sNumNif = sCadenaNif;
	sLetraNif = sNumNif.substr(sNumNif.length-1,sNumNif.length);

	if (sNumNif.match(expRegFinNum) == null){
		//Termina con letra. Selecciono el número.
		sLetraNif = sNumNif.substr(sNumNif.length-1,sNumNif.length);
		sNumNif = sNumNif.substr(0,sNumNif.length-1);
		nLongitud = sNumNif.length-1;
	}

	nLongitud = sNumNif.length;
	var expRegNum = new RegExp("^\\d{" + nLongitud +",}$");
	
	if (!expRegNum.test(sNumNif)) {
		//Es letra el digito insertado--> Error.
		alert("Error: Formato NIF incorrecto");
		return 0;
	}
	
	nNumNif = parseInt(sNumNif,10);	
	nLetraNif = sNumNif - (23 * Math.floor(nNumNif/23));
	sLetraNifCalc = mLetras[nLetraNif];	
	sLetraNif = sLetraNif.toUpperCase();	

	if (sLetraNif != sLetraNifCalc) {
		alert("Error: La letra o el número del NIF es incorrecto. Revise los datos introducidos");
		return 0;
	}	
	return 1;
}
