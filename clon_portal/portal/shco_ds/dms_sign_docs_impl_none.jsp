<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dms_sign_docs_impl_none.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<script language="javascript">


    // FUNCIONES PUBLICAS
    // ------------------
    
	//Función de inicialización 
	//Útil para inicializar cualquier componente de firma en cliente
    function initialize()
    {
    }

	//Función que debe devolver un array con los certificados válidos de firma para poder
	//ser seleccionados desde la página.
	function getValidCertificates()
    {	  
      /*var arrValidCertificates = new Array(...);
      return arrValidCertificates;
	  */
    }

   
	//Función de firmado de un documento, con un certificado.Debe devolver la firma.
	//  url : URL donde se encuentra el documento a firmar (visible desde el cliente)
	//  certificate: Certificado con el que firmar. Uno de los devueltos en getValidCertificates()
	//  mod: Modo de firma  "1"=Paralelo, "2"=Secuencial
    function signOne(url,certificate, mod)        
    {    

       /*var sign = "";
	   Código de firma...         
       return sign;
	   */

   }



</script>
