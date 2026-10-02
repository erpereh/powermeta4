/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Funciones de efectos luminosos
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4ie_light.js
	@(#)Date: 23/03/2002 
*/
//------------------------*--
//FUNCION: m4luz
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA: objeto
//--------------------------*
function m4luz(objeto){
	objeto.style.filter= "light(enabled=1)";
	objeto.filters.light.addAmbient(200,200,200,100);
	objeto.filters.light.addPoint(50,40,40,0,40,100,100);
}
//--------------------------*
//FUNCION: m4oscuridad
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA: objeto
//--------------------------*
function m4oscuridad(objeto){
	objeto.style.filter="light(enabled=0)";
	objeto.style.filter="shadow(enabled=0)";
}
//--------------------------*
//FUNCION: m4luzgenerico
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA: objeto,R,G,B,X,Y,Z
//X -->  Coordena x del punto de luz 
//Y -->  Coordena y del punto de luz
//Z -->  Coordena z del punto de luz
//R -->  rojo (0-255)
//G -->  verde (0-255)
//B -->  azul (0-255)
//--------------------------*
function m4luzgenerico(objeto,R,G,B,X,Y,Z){
	objeto.style.filter= "light(enabled=1)";
	objeto.filters.light.addAmbient(130,255,255,100);
	objeto.filters.light.addPoint(X,Y,Z,R,G,B,255);
}
//--------------------------*
//FUNCION: m4sombra
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA:objeto
//--------------------------*
function m4sombra(objeto){
	objeto.style.filter="shadow(color=#BBDDFF,direction=90,enabled=1)";
}	
//--------------------------*
//FUNCION: m4luznoname
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA:objeto
//--------------------------*
function m4luznoname(objeto){
	objeto.style.filter= "light(enabled=1)";
	objeto.filters.light.addAmbient(255,255,255,100);
	objeto.filters.light.addPoint(50,40,40,0,40,100,100);
}
//--------------------------*
//FUNCION: m4ambientegenerico
//FECHA: 28/07/2000
//PARAMETROS DE ENTRADA: objeto,R,G,B,I
//--------------------------*
function m4ambientegenerico(objeto,R,G,B,I){
	objeto.style.filter= "light(enabled=1)";
	objeto.filters.light.addAmbient(R,G,B,I);
	objeto.filters.light.addPoint(50,40,40,0,40,100,100);
}

//--------------------------------------------------------
//FUNCION: m4luztotal
//FECHA: 20/10/2000
//PARAMETROS DE ENTRADA: objeto,ra,ga,ba,xp,yp,zp,rp,gp,bp
//--------------------------------------------------------
function m4luztotal (objeto,ra,ga,ba,xp,yp,zp,rp,gp,bp){
  if(document.all){  
     var num_arg = m4luztotal.arguments.length;
     var color_amb = false;
     var coord_punto = false;
     var color_punto = false;
     var RA = 255;
     var GA = 255;
     var BA = 255;
     var IA = 100;
     var XP = 50;
     var YP = 40;
     var ZP = 40;
     var RP = 0;
     var GP = 40;
     var BP = 100;
     var IP = 100;
   if (num_arg == 0) {
        alert ("Debe seleccionar un objeto de tipo imagen, en la llamada a la funcion") }
    else if (num_arg == 1) {
        objeto.style.filter = "light(enabled=1)";
        objeto.filters.light.addAmbient(RA,GA,BA,IA);
         objeto.filters.light.addPoint(XP,YP,ZP,RP,GP,BP,IP);
       }
  else if (num_arg > 1) {
              if ((typeof(ra)!= "string") && (typeof(ga)!= "string") && (typeof(ba) != "string")) { color_amb =true};
              if ((typeof(xp)!= "string") && (typeof(yp)!= "string") && (typeof(zp)!= "string")) { coord_punto = true};
			  if ((typeof(rp)!= "string") && (typeof(gp)!= "string") && (typeof(bp)!= "string")) { color_punto = true};
	}
    if (color_amb == true) {
         if ((coord_punto == false) && (color_punto == false)) {
                objeto.style.filter = "light(enabled=1)";
                objeto.filters.light.addAmbient(ra,ga,ba,IA);
                objeto.filters.light.addPoint(XP,YP,ZP,RP,GP,BP,IP);
              }
               if ((coord_punto == false) && (color_punto == true)) {
                  objeto.style.filter = "light(enabled=1)";
                  objeto.filters.light.addAmbient(ra,ga,ba,IA);
                  objeto.filters.light.addPoint(XP,YP,ZP,rp,gp,bp,IP);
                  }
                    if ((coord_punto == true) && (color_punto == false)) {
                      objeto.style.filter = "light(enabled=1)";
                      objeto.filters.light.addAmbient(ra,ga,ba,IA);
                      objeto.filters.light.addPoint(xp,yp,zp,RP,GP,BP,IP);
                      }
                        if ((coord_punto == true) && (color_punto == true)) {
                          objeto.style.filter = "light(enabled=1)";
                          objeto.filters.light.addAmbient(ra,ga,ba,IA);
                          objeto.filters.light.addPoint(xp,yp,zp,rp,gp,bp,IP);
                          }
           }
      else if (color_amb == false) {
               if ((coord_punto == false) && (color_punto == true)) {
                  objeto.style.filter = "light(enabled=1)";
                  objeto.filters.light.addAmbient(RA,GA,BA,IA);
                  objeto.filters.light.addPoint(XP,YP,ZP,rp,gp,bp,IP);
                  }
                    if ((coord_punto == true) && (color_punto == false)) {
                      objeto.style.filter = "light(enabled=1)";
                      objeto.filters.light.addAmbient(RA,GA,BA,IA);
                      objeto.filters.light.addPoint(xp,yp,zp,RP,GP,BP,IP);
                      }
                          if ((coord_punto == true) && (color_punto == true)) {
                         objeto.style.filter = "light(enabled=1)";
                         objeto.filters.light.addAmbient(RA,GA,BA,IA);
                         objeto.filters.light.addPoint(xp,yp,zp,rp,gp,bp,IP);
                          }
           }
      }
}   
