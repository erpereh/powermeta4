// esta funcion se encarga de recoger los inputs que después se van a manejar
// args[0] 'prefijo del nombre de los inputs, por ejemplo: SCO_ID_DOC_1,SCO_ID_DOC_2,...
function set_inputs(sargs)
{
  var args = set_inputs.arguments;
  
  var sValueNM = args[0];
 
  var sValueNMAttach = args[0] + "_ATTACH";
  var sValueNMView = args[0] + "_VIEW";
  var sValueNMDelete = args[0] + "_DELETE";
  var sValueNMInfo = args[0] + "_INFO";
  
  var sIdDoc = document.getElementById(sValueNM).value; //identificador del documento 
  
  if (sIdDoc!="" && sIdDoc!="0" && sIdDoc!=null && sIdDoc!="null") 
    {
    document.getElementById(sValueNMAttach).disabled="disabled"; 
    document.getElementById(sValueNMView).disabled="";     
    document.getElementById(sValueNMDelete).disabled="";
    document.getElementById(sValueNMInfo).disabled="";
    }
  else
    {
    document.getElementById(sValueNMAttach).disabled=""; 
    document.getElementById(sValueNMView).disabled="disabled";
    document.getElementById(sValueNMDelete).disabled="disabled";
    document.getElementById(sValueNMInfo).disabled="disabled";
    }
}

// esta funcion se encarga de habilitar o deshabilitar los inputs para adjuntar el fichero de firma
function set_inputs_sign()
{
  var sComment = document.getElementById("zCOMMENT").value;
  // si el comentario viene con un espacio lo elimino
  if (sComment==" ") 
    {
	document.getElementById("zCOMMENT").value="";
	}
  // si esta marcada la check adjuntar fichero de firma habilito las cajas de texto fichero de firma y comentario
  if (document.getElementById("zATTACHFILE").checked==false) 
    {  
    document.getElementById("DOCSIGNREQUEST").disabled=true;
    document.getElementById("zCOMMENT").disabled=true;
    }
  else
    {
    document.getElementById("DOCSIGNREQUEST").disabled=false;
    document.getElementById("zCOMMENT").disabled=false;
    }
}

// funcion para apertura de una ventana a partir de una clase ventana
function opendialogdoc(surl, nwidth, nheight)
{
  this.m4prop_surl = surl;
  this.m4prop_nwidth = nwidth;
  this.m4prop_nheight = nheight;
  
// centrado en la ventana principal (la que me crea)
  this.m4prop_nleft = (screen.availWidth - this.m4prop_nwidth)/2;
  this.m4prop_ntop =(screen.availHeight - this.m4prop_nheight)/2;

  var attr = "left=" + this.m4prop_nleft + ",top=" + this.m4prop_ntop + ",resizable=" + this.m4prop_resizable + ",scrollbars=" + this.m4prop_scrollbars + ",width=" + this.m4prop_nwidth + ",height=" + this.m4prop_nheight + ",status=" + this.m4prop_status + ",directories=" + this.m4prop_directories + ",location=" + this.m4prop_location + ",menubar=" + this.m4prop_menubar + ",titlebar=" + this.m4prop_titlebar + ",toolbar=" + this.m4prop_toolbar;

// genero el dialogo
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
  var nx = (0.80) * screen.availWidth;
  var ny = (0.80) * screen.availHeight;

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
      nx = 600;
      ny = 260;
    }
  if (sact == "signature")
    {
      nx = 800;
      ny = 540;
    }
	
  // mostrar la ventana
  owindowdoc.m4mtd_opendialogdoc(surl,nx,ny); 
}

function manage_document(sargs)
{
  var args = manage_document.arguments;
  var spage = "";
  
  var saction = args[0]; // miramos la accion a realizar
  var ssubsesion = args[1]; // miramos la subsesion donde vamos a grabar
  var sstylesheet = args[2]; // miramos la página de estilo
  var sNMInputIDDOC = args[3]; // miramos el identificador del input del documento
  
  if (saction == "signature")
    {
	  // ver datos de la firma
      spage = "/servlet/CheckSecurity/JSP/tc_docs/tc_doc_signature.jsp";
    }
   
  else if (saction == "asig")
    {
      // asignar un documento
      spage = "/servlet/CheckSecurity/JSP/tc_docs/tc_doc_mod.jsp";
    }
    
  else if (saction == "viewcompat")  
    {
      // ver un documento (antigua pagina)
     spage = "/servlet/CheckSecurity/JSP/tc_docs/tc_doc_view.jsp";
    }
  else if (saction == "view")  
    {
      // ver un documento
	    spage = "/servlet/DocumentViewer";
    }
  else if (saction == "del")
    { 
      msgDeleteDoc = m4getmessage("_sl_co_doc_6");  
      if ( confirm(msgDeleteDoc) == true)
	  {

   	     // lo único que hacemos es poner el input a 0 para indicar que se ha borrado, también borramos el título
         
		 document.getElementById(sNMInputIDDOC).value = null;
     document.getElementById(sNMInputIDDOC+"_TITLE").value = "";  
   	  
		 var sValueNMAttach = sNMInputIDDOC + "_ATTACH";
		 var sValueNMView = sNMInputIDDOC + "_VIEW";
		 var sValueNMDelete = sNMInputIDDOC + "_DELETE";
		 var sValueNMInfo = sNMInputIDDOC + "_INFO";
		 set_inputs(sNMInputIDDOC);
		 
	  }
  	  var sValueNMTitle = sNMInputIDDOC + "_TITLE";
	  document.getElementById(sValueNMTitle).focus();
    }
  if (saction == "asig")
    {
      var siddoc = document.getElementById(sNMInputIDDOC).value; //identificador del documento
      
      spage = spage + "?IDDoc=" + siddoc;
      spage = spage + "&subsesion=" + ssubsesion;
      spage = spage + "&stylesheet=" + sstylesheet;
	  spage = spage + "&NMInputIDDOC=" + sNMInputIDDOC;
	  	  
	  var oobj = document.getElementById(sNMInputIDDOC); //objeto
	  
      var sValueNMTitle = sNMInputIDDOC + "_TITLE";
	  document.getElementById(sValueNMTitle).focus();
	  
      // llamamos a la funcion mywindowdoc        
      mywindowdoc(saction,spage,oobj); 
    }
  if (saction == "view") 
    {
      var siddoc = document.getElementById(sNMInputIDDOC).value; //identificador del documento

      // protect against no parameter
      if (siddoc == null || siddoc == "null" ) siddoc = "";
      
      spage = spage + "?IDDoc=" + siddoc;
	  spage = spage + "&subsesion=" + ssubsesion;
      spage = spage + "&stylesheet=" + sstylesheet;
	  
	  var oobj = document.getElementById(sNMInputIDDOC); //objeto

	  var sValueNMTitle = sNMInputIDDOC + "_TITLE";
	  document.getElementById(sValueNMTitle).focus();
	 
      // llamamos a la funcion mywindowdoc        
      mywindowdoc(saction,spage,oobj);
    }
   if (saction == "signature") 
    {
      var siddoc = document.getElementById(sNMInputIDDOC).value; //identificador del documento
	  
      spage = spage + "?IDDoc=" + siddoc;
      spage = spage + "&stylesheet=" + sstylesheet;  

	  var oobj = document.getElementById(sNMInputIDDOC); //objeto
	  
      var sValueNMTitle = sNMInputIDDOC + "_TITLE";
	  document.getElementById(sValueNMTitle).focus();
	  
      // llamamos a la funcion mywindowdoc        
      mywindowdoc(saction,spage,oobj);
    }
}

// devolucion de argumentos en la página que ha llamado (madre)
// args[0] 'identificador del documento
// args[1] 'título del documento
// args[2] 'prefijo del nombre de los inputs, por ejemplo: SCO_ID_DOC_1,SCO_ID_DOC_2,...
// args[3] '0:read-only 1:read-write
function returnvaluesdoc(args)
{
  // recogemos el valor del título que se introduce en la pantalla donde adjuntamos el documento
  var sValueNMTitle = args[2] + "_TITLE";
  opener.document.getElementById(sValueNMTitle).value = args[1];
  opener.document.getElementById(sValueNMTitle).focus();
  
  // recogemos el valor del identificador 
  var sValueNM = args[2];
  opener.document.getElementById(sValueNM).value = args[0];
  
  // con el prefijo pasado montamos los nombres de los inputs para habilitarlos o deshabilitarlos 
  var sValueNMAttach = args[2] + "_ATTACH";
  var sValueNMView = args[2] + "_VIEW";
  var sValueNMDelete = args[2] + "_DELETE";
  var sValueNMInfo = args[2] + "_INFO";
 
  //var sIdDoc = opener.document.getElementById(sValueNMTitle).value; //identificador del documento  
  var sIdDoc = opener.document.getElementById(sValueNM).value; //identificador del documento 
 
  // establecemos el estado de los botones dependiendo si del iddoc y del titledoc
  if (sIdDoc!="" && sIdDoc!="0" && sIdDoc!=null && sIdDoc!="null")
    {
	opener.document.getElementById(sValueNMAttach).disabled="disabled"; 
    opener.document.getElementById(sValueNMView).disabled="";     
    opener.document.getElementById(sValueNMDelete).disabled="";
    opener.document.getElementById(sValueNMInfo).disabled="";
	}
  else
    if (args[1]!="" && args[1]!="0" && args[1]!=null && args[1]!="null")
      {
	  opener.document.getElementById(sValueNMAttach).disabled=""; 
      opener.document.getElementById(sValueNMView).disabled="";
      opener.document.getElementById(sValueNMDelete).disabled="";
      opener.document.getElementById(sValueNMInfo).disabled="disabled";
	  }
	else
	  {
	  opener.document.getElementById(sValueNMAttach).disabled=""; 
      opener.document.getElementById(sValueNMView).disabled="disabled";
      opener.document.getElementById(sValueNMDelete).disabled="disabled";
      opener.document.getElementById(sValueNMInfo).disabled="disabled";
	  }
	   
  // vamos a devolver valores a los objetos de la llamada origen
  if (typeof(opener.owindowdoc) == "object")
    {
      var nobj = opener.owindowdoc.m4prop_areturnedValue.length;
      
	  for (var i = 0; i < nobj; i++)
        {
          if (args[i] > 0)
            {
			  opener.owindowdoc.m4prop_areturnedValue[i].value = args[i]; // modificamos el valor del objeto
            }  
        }
    }

  setTimeout("window.close()", 500);
}

// esta funcion muestra el documento que se le pasa como parámetro 
function m4opendocument_tech(siddoc)
{
  var spage = "/servlet/CheckSecurity/JSP/tc_docs/tc_doc_view.jsp";
  spage = "/servlet/DocumentViewer";
  spage = spage + "?IDDoc=" + siddoc;       
  mywindowdoc("view",spage,null);
}

// esta funcion descarga el documento que se le pasa como parámetro 
function m4downloaddocument_tech(siddoc,sfile,sstylesheet)
{
  var spage = "/servlet/CheckSecurity/JSP/tc_docs/tc_doc_download.jsp";
  spage = spage + "?IDDoc=" + siddoc;  
  spage = spage + "&file=" + sfile;
  spage = spage + "&stylesheet=" + sstylesheet;
  mywindowdoc("download",spage,null);
}
