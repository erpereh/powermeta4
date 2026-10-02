	<!-- Recuperacion de parametros. -->
	<%@ page  import="com.meta4.utilities.*" %>
	<% 

		Generatablaparametros zobjtabla = new Generatablaparametros(request);
		Hashtable zhash = zobjtabla.getTablaHash();
		
		String ztipopersist = (String) zhash.get("ztipopersist");
		if ((ztipopersist==null)||(ztipopersist.equals("")))
		{
			 ztipopersist=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipopersist");
		} 
		
				
		String znodo = "SSM_VACANT";
		String znodo_2 = "SSM_JOB_POST";
		
		if (ztipopersist.equals("wiz1"))
		{
			String znumvac = (String) zhash.get("znumvac");
			String znompuesto = (String) zhash.get("znompuesto");
			String zpuesto = (String) zhash.get("zpuesto");
			String zmovnac = (String) zhash.get("zmovnac");
			String zmovint = (String) zhash.get("zmovint");
			String zfechaincorp = (String) zhash.get("zfechaincorp");
			String zfechalimite = (String) zhash.get("zfechalimite");
			String zedadmin = (String) zhash.get("zedadmin");
			String zedadmax = (String) zhash.get("zedadmax");
			String zworkunit = (String) zhash.get("zworkunit");
			String znomworkunit = (String) zhash.get("znomworkunit");
			String zlocation = (String) zhash.get("zlocation");
			String znomlocation = (String) zhash.get("znomlocation");
			String zsalmin = (String) zhash.get("zsalmin");
			String zsalmax = (String) zhash.get("zsalmax");
			String ztiposal = (String) zhash.get("ztiposal");
			String znomtiposal = (String) zhash.get("znomtiposal");
			String zconsiderations = (String) zhash.get("zconsiderations");
			
			M4SessionCl zsesion2 = M4Context.getM4SessionCl(request);
			String zIdPerson2 = zsesion.getBagEntries("zIdPerson");
					
			try {
				M4Operations m = new M4Operations(request);
				m.setItem(zsubsesion,znodo,"","ID_PERSON",zIdPerson2);
				
				m.setItem(zsubsesion,znodo,"","NUM_VACANTES",znumvac);
				m.setItem(zsubsesion,znodo,"","PUESTO",zpuesto);
				m.setItem(zsubsesion,znodo,"","WORKUNIT",zworkunit);
				m.setItem(zsubsesion,znodo,"","LOCATION",zlocation);
				m.setItem(zsubsesion,znodo,"","MOVINT",zmovint);  
				m.setItem(zsubsesion,znodo,"","MOVNAC",zmovnac);    
				m.setItem(zsubsesion,znodo,"","FECHA_INCORP",zfechaincorp);
				m.setItem(zsubsesion,znodo,"","FECHA_LIMITE",zfechalimite);
				m.setItem(zsubsesion,znodo,"","SUELDO_MAXIMO",zsalmax);
				m.setItem(zsubsesion,znodo,"","SUELDO_MINIMO",zsalmin);
				m.setItem(zsubsesion,znodo,"","EDAD_MAXIMA",zedadmax);
				m.setItem(zsubsesion,znodo,"","EDAD_MINIMA",zedadmin);
				m.setItem(zsubsesion,znodo,"","TIPO_SALARIO",ztiposal);
				m.setItem(zsubsesion,znodo,"","CONSIDERATIONS",zconsiderations);
								
			} catch(Exception e) {}	
		}	
		else if (ztipopersist.equals("wiz2"))
		{
			String puesto=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Job");
			String familia=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Fam");
			if (familia=="ALL" || familia.equals("ALL"))
			{ familia=""; }
			
			String sector=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Sec");
			String utime=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"UTime");
			String pmtime=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PMTime");
			String requerido=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req");
			String pais=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Pais");
			
			try {
				M4Operations m = new M4Operations(request);
				m.setItem(zsubsesion,znodo,"","PUESTO",puesto);
				m.setItem(zsubsesion,znodo,"","FAMILIA",familia);  
				m.setItem(zsubsesion,znodo,"","SECTOR",sector);
				m.setItem(zsubsesion,znodo,"","UNITTIME",utime);
				m.setItem(zsubsesion,znodo,"","PERIODOMINIMO",pmtime);                
				m.setItem(zsubsesion,znodo,"","PAIS",pais);
				m.setItem(zsubsesion,znodo,"","REQUERIDO",requerido);
			} catch(Exception e) {}
			
		}
		else if (ztipopersist.equals("wiz3"))
		{
			String tipocert=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TipoCert");
			String entidad=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Entidad");
			String pais=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Pais");
			String requerido=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req");
			
			try {
				M4Operations m = new M4Operations(request);
				m.setItem(zsubsesion,znodo,"","TIPO_CERTIFICADO",tipocert);
				m.setItem(zsubsesion,znodo,"","ENTIDAD_EMISORA",entidad);  
				m.setItem(zsubsesion,znodo,"","PAIS",pais);
				m.setItem(zsubsesion,znodo,"","REQUERIDO",requerido);
			} catch(Exception e) {}
		}
		else if (ztipopersist.equals("wiz4"))
		{
			String titulacion=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Titulacion");
			String especialidad=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Especialidad");
			String tipoest=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TipoEst");
			String requerido=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req");
			
			try {
				M4Operations m = new M4Operations(request);
				m.setItem(zsubsesion,znodo,"","TITULACION",titulacion);
				m.setItem(zsubsesion,znodo,"","ESPECIALIDAD",especialidad);  
				m.setItem(zsubsesion,znodo,"","TIPO_ESTUDIOS",tipoest);
				m.setItem(zsubsesion,znodo,"","REQUERIDO",requerido);
			} catch(Exception e) {}
		}
		else if (ztipopersist.equals("wiz5"))
		{
			String obligacion=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Obligacion");
			String timeneed=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TimeNeed");
			String freq=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Freq");
			
			try {
				M4Operations m = new M4Operations(request);
				m.setItem(zsubsesion,znodo,"","OBLIGACION",obligacion);  
				m.setItem(zsubsesion,znodo,"","TIEMPO_NECESITADO",timeneed);
				m.setItem(zsubsesion,znodo,"","FRECUENCIA",freq);
			} catch(Exception e) {}
		}
		else if (ztipopersist.equals("wiz6"))
		{
			String idioma=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Idioma");
			String nread=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nRead");
			String nwrite=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nWrite");
			String nspeak=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nSpeak");
			String requerido=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req");
			
			try {
				M4Operations m = new M4Operations(request);
				m.setItem(zsubsesion,znodo,"","IDIOMA",idioma);
				m.setItem(zsubsesion,znodo,"","NLECTURA",nread);  
				m.setItem(zsubsesion,znodo,"","NESCRITURA",nwrite);
				m.setItem(zsubsesion,znodo,"","NCONVERSACION",nspeak);
				m.setItem(zsubsesion,znodo,"","REQUERIDO",requerido);
			} catch(Exception e) {}
		}
		
		else if (ztipopersist.equals("wiz7"))
		{
			
			String niv=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Nivel");
			String conoc=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Comp");
			String peso=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Peso");
			if ((peso==null)||(peso.equals(""))) peso="100";
			
			
			try {
				M4Operations m = new M4Operations(request);
				m.setItem(zsubsesion,znodo,"","CONOCIMIENTO",conoc);
				m.setItem(zsubsesion,znodo,"","NIVEL",niv);
				m.setItem(zsubsesion,znodo,"","PESOW",peso);
			} catch(Exception e) {}
		
		}
	%>	

