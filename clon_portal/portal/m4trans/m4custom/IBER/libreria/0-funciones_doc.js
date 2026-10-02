var gsFrm =""; // nombre formulario
var gsIdDoc = ""; // nombre input ID Doc
var gaButtons = new Array(); // nos creamos un array global con los botones

// esta funcion se encarga de recoger los inputs que despues se van a manejar
// 1º 'nombre formulario'
// 2º 'nombre input ID Doc'
// 3º 'nombre boton asignar'
// 4º 'nombre boton ver'
// 5º 'nombre boton borrar'
function ssco_set_inputs(sargs)
{
  var args = ssco_set_inputs.arguments;
  
  gsFrm = args[0];  
  gsIdDoc = args[1]; 
  
  gaButtons[0] = args[2]; // boton de asignar
  gaButtons[1] = args[3]; // boton de ver 
  gaButtons[2] = args[4]; // boton de borrar

  // ponemos el estado de cada uno
  ssco_set_status();
}

function ssco_set_status()
{
  var siddoc = document.forms[gsFrm].elements[gsIdDoc].value; //identificador del documento

  document.forms[gsFrm].elements[gaButtons[0]].disabled="";
  
  if (siddoc!="" && siddoc!="0" && siddoc!=null)
    {
      document.forms[gsFrm].elements[gaButtons[1]].disabled="";
      document.forms[gsFrm].elements[gaButtons[1]].style.color = '';
      document.forms[gsFrm].elements[gaButtons[2]].disabled="";
      document.forms[gsFrm].elements[gaButtons[2]].style.color = '';
    }
  else
    {
      document.forms[gsFrm].elements[gaButtons[1]].disabled="disabled";
      document.forms[gsFrm].elements[gaButtons[1]].style.color = 'graytext';
      document.forms[gsFrm].elements[gaButtons[2]].disabled="disabled";
      document.forms[gsFrm].elements[gaButtons[2]].style.color = 'graytext';
    }
  // esta función se debe crear en la pagina jsp y debe servir para cambiar el texto de la etiqueta que indica si hay documento asociado
  ssco_change_text();  
}

// funcion para apertura de una ventana a partir de una clase ventana
function opendialogdoc(surl, nwidth, nheight)
{
  this.m4prop_surl = surl;
  this.m4prop_nwidth = nwidth;
  this.m4prop_nheight = nheight;
  
// Centrado en la ventana principal (la que me crea)
  this.m4prop_nleft = (screen.availWidth - this.m4prop_nwidth)/2;
  this.m4prop_ntop =(screen.availHeight - this.m4prop_nheight)/2;

  var attr = "left=" + this.m4prop_nleft + ",top=" + this.m4prop_ntop + ",resizable=" + this.m4prop_resizable + ",scrollbars=" + this.m4prop_scrollbars + ",width=" + this.m4prop_nwidth + ",height=" + this.m4prop_nheight + ",status=" + this.m4prop_status + ",directories=" + this.m4prop_directories + ",location=" + this.m4prop_location + ",menubar=" + this.m4prop_menubar + ",titlebar=" + this.m4prop_titlebar + ",toolbar=" + this.m4prop_toolbar;

// Genero el dialogo
  var sidwindow = (this.m4prop_usewindowid == true)?this.m4prop_sidpage:this.m4prop_sname;
  this.m4prop_owin= window.open(this.m4prop_surl, sidwindow, attr);
}

// definicion de la clase ventana
function class_mywindowdoc(oparam,sidpage)
{
  this.m4prop_sidpage = sidpage; // identificador de la instancia de la clase
  this.m4prop_sobjname = "mywindowdoc"; // nombre del objeto
  this.m4prop_areturnedValue = oparam; // parametros de entrada salida
  this.m4prop_surl = ""; // pagina de navegacion
  this.m4prop_nwidth = 0; // tamaño
  this.m4prop_nheight = 0; // tamaño
  this.m4prop_nleft = 0; // posicion
  this.m4prop_ntop = 0; // posicion
  this.m4prop_resizable = "yes"; // tamaño modificable
  this.m4prop_scrollbars = "yes"; // admite scrollbars
  this.m4prop_directories = "no"; // barra de directorios
  this.m4prop_location = "no"; // barra de direcciones
  this.m4prop_menubar = "no"; // barra de menu
  this.m4prop_titlebar = "no"; // barra de título
  this.m4prop_status = "no"; // barra de estados
  this.m4prop_toolbar = "no"; // barra de herramientas
  this.m4prop_usewindowid = false;

  var dnow = new Date();
  this.m4prop_sname = (dnow).getSeconds().toString(); // segundo de construccion de la pagina
  this.m4prop_owin = ""; //
  this.m4mtd_opendialogdoc = opendialogdoc; // metodo de creacion de una ventana
}

// esta funcion es la encargada de crear una instancia de la clase dialogwindowdoc
// rellenar sus propiedades y mandar ejecutarla
function mywindowdoc(sact,surl,oobj)
{
  var aparam = new Array;
  aparam[0] = oobj; // nos guardamos el objeto
  
  // llamada al constructor de la clase ventana
  owindowdoc = new class_mywindowdoc(aparam, surl);

  // tamaño por defecto de la ventana
  var nx = 800;
  var ny = 600;
  if (sact != "view")
    {
      owindowdoc.m4prop_resizable = "no";
      owindowdoc.m4prop_scrollbars = "no";
    }
  if (sact == "del")
    {
      nx = 400;
      ny = 100;
    }
  if (sact == "asig")
    {
      nx = 500;
      ny = 180;
    }

  // mostrar la ventana
  owindowdoc.m4mtd_opendialogdoc(surl,nx,ny); 
  
}

// esta funcion recibe los siguientes argumentos: (los 3 primeros son obligatorios)
// 1º 'view' || 'asig' || 'del'
// 2º '' || 'formulario'
// 3º '' || 'nombre input ID Doc' donde se encuentra el ID del documento
function ssco_manage_document(sargs)
{
  var args = ssco_manage_document.arguments;
  var spage = "";
  var sFrm = gsFrm;
  var sIdDoc = gsIdDoc;
  
  var saction = args[0]; // primero miramos la accion a realizar
 
  if (saction == "asig")
    {
      // asignar un documento: debemos devolver el ID Documento 
      spage = "/servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp";
    }
  else if (saction == "view")  
    {
      // ver un documento: puede ser global o local
      spage = "/servlet/CheckSecurity/JSP/sse_g0/ssco_view_document.jsp";
      if (args.length > 1)
        {
          // nos pasan el formulario y el Id doc de forma local
          sFrm = args[1];
          sIdDoc = args[2];
        }
    }

  else if (saction == "del")
    {
      // lo único que hacemos es poner el input a 0 para indicar que se ha borrado
      document.forms[gsFrm].elements[gsIdDoc].value="0";
      document.forms[gsFrm].elements[gsIdDoc].onchange();
    }

  if ((saction == "view") || (saction == "asig"))
    {
      var siddoc = document.forms[sFrm].elements[sIdDoc].value; //identificador del documento
      spage = spage + "?IDDoc=" + siddoc;
      var oobj = document.forms[sFrm].elements[sIdDoc]; //objeto

      // llamamos a la funcion mywindowdoc        
      mywindowdoc(saction,spage,oobj);
    }
}

// devolucion de argumentos en la página que ha llamado (madre)
function returnvaluesdoc(args)
{
  // vamos a devolver valores a los objetos de la llamada origen
  if (typeof(opener.owindowdoc) == "object")
    {
      var nobj = opener.owindowdoc.m4prop_areturnedValue.length;
      for (var i = 0; i < nobj; i++)
        {
          if (args[i][1])
            {
              opener.owindowdoc.m4prop_areturnedValue[i].value = args[i][0]; // modificamos el valor del objeto
            }  
          opener.owindowdoc.m4prop_areturnedValue[i].onchange(); //ejecutamos el codigo asociado el evento del onchange
        }
    }
  setTimeout("window.close()", 500);
}
