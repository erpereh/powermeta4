<%@ page import="com.meta4.m4operations.*, java.util.*, com.meta4.session.*, java.io.*" %>
<%@ page import="com.meta4.taglib.util.M4PresentationUtilTaglib.*" %>
<%@ page import="com.meta4.common.cipher.*" %>
<%@ page import="com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*" %>



<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>
<%
M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
oM4Log.debug("[*] ssco_dynamic_orgchart: enter");
%>


<%
	/**
	*This page controls the function of the organization, is divided into three functions
	* 1- Create orgchart
	* 2- Save typeOrgchart
	* 3- Print PDF orgchart
	*/


	//no cache
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store, no-cache");
	response.setDateHeader("Expires", -1); 	 	 	
	//Caso 413853
	response.setContentType("text/html; charset=UTF-8");

	//stores the function that will be executed
	String ai_type_function = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "paramType");
	
	//this param is used to save type orgchart or print pdf.
	String ai_serialize = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "paramSerialize");

	//path to html or pdf file
	String sHTTPDataFile="";
  
	//create m4session
	M4SessionManager m4session = M4Context.getSession(request);	
	M4Operations m = new M4Operations(request);
		
	//init task and job
	m.initTask("DYNORGCHART");
	

	//select m4obj
	m.createData("SCO_DYN_CHART", "SCO_DYN_CHART", null);              
	
	//variable for arguments
	                                                          
               
			   //If the function of the jsp is to create file hrml with the orgChart			   
			  if(ai_type_function.equals("Create")){
			  
					//read the received parameter 
					String ai_idWU = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "paramWU");
					//decode arg id 
					String s_idWU = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "tcorgchart", ai_idWU);
				
				   if(s_idWU!=null){
						m.beginJob();
						//generate the seed to encode
						String idseed = M4PresentationEncodeUtil.generateSeed(m4session);			
					   
					   java.util.Hashtable htArgs = new java.util.Hashtable(); 
						//put argument to SCO_ESS_INITIALIZE
						htArgs.put("ARG_WORK_UNIT", s_idWU); 
						htArgs.put("ARG_SESSION", idseed); 
										

						//EXECUTE METHOD WITH ARGS
						m.method("SCO_ESS_INITIALIZE", "SCO_DYN_CHART", "SCO_DYN_CHART", "SCO_ESS_INITIALIZE", htArgs);
											
						m.outputDef("SCO_DYN_CHART", "SCO_DYN_CHART!SCO_DYN_CHART[*]");
						m.endJob("");
						 
						StringBuffer sb = new StringBuffer();					
						m.execMethod("SCO_ESS_INITIALIZE", sb);
												  
						//get file html
						sHTTPDataFile = m.getFile("SCO_DYN_CHART", "SCO_DYN_CHART","SCO_DYN_CHART", "0", "SCO_BLOB_HTML");
						if(sHTTPDataFile!=null){
							//open file html with orchart
							File oFile = new File(sHTTPDataFile); 	  
						
							// copy the contents of the file to jsp
							InputStreamReader fr = null;
							BufferedReader br = null;

						
							fr = new InputStreamReader(new FileInputStream(oFile), "UTF-8");
							br = new BufferedReader(fr);
										

							try {						 		         
						
								// read file
								String linea;
								boolean line_bom=true;
								while((linea=br.readLine())!=null){						 													 
									if(!line_bom){//the first line will not copy it, because it is BOM															
										//if we read this line, we copy this this variable to we can save typeOrgChart
										if(linea.equals("<!--END TEMPLATE DONT DELETE THIS LINE IS USED IN JSP-->")){
									
											//get id user. will be used to save type orgchart
											String ai_IdUser = m4session.getIdUser();
											out.println("<script>");
											out.println("var _idUser='"+ai_IdUser+"';");																		
											out.println("</script>");
										}
																
									out.println(linea);																							
									}else{							
										line_bom=false;						
									}					
								}
							}
							catch(Exception e){		
								oM4Log.error("[*] ssco_dynamic_orgchart: Exception while ...", e);							
								e.printStackTrace();
							}finally{						 
								try{                    
									if( null != fr ){   
										fr.close();     
									}                  
								}catch (Exception e2){ 
										oM4Log.error("[*] ssco_dynamic_orgchart: Exception while ...", e2);
										e2.printStackTrace();
								}
							}	
						}else{
							out.println("Error creating file in ssco_dynamic_orgchart");
							oM4Log.error("[*] ssco_dynamic_orgchart: Error creating file in ssco_dynamic_orgchart");
						}											 
					}
				}
               
			   
			   //THIS FUNCTION IS IN dyn_save_type_orgchart.jsp
			   
				//If the function of the jsp is to save typeOrgChart
			/**	if(ai_type_function.equals("Save")){			   														
										
					int posi = 0;
					int posf = 1800;
					int type = 0;
					String send = "";  
					
					//serialization ship parts to avoid restriction of characters
					while (posi < ai_serialize.length()) {
						if (posf >= ai_serialize.length()) {
							//indicates that there are no more parts to send
							type = 1;
							posf = ai_serialize.length();
						}
						//send to peopleNet		
						String part = "";
						part = ai_serialize.substring(posi, posf);
						java.util.Hashtable htArgs = new java.util.Hashtable(); 									
						htArgs.put("ARG_STRING", part); 				
						htArgs.put("ARG_TYPE", ""+type);  				
							 
						//save serializacion in m4obj
						m.method("SCO_SAVE_ANCHOR", "SCO_DYN_CHART", "SCO_DYN_CHART", "SCO_SAVE_ANCHOR", htArgs);
							 						
						m.outputDef("SCO_DYN_CHART", "SCO_DYN_CHART!SCO_DYN_CHART[*]");
						m.endJob("");
							 
						StringBuffer sb = new StringBuffer();
						//recupera resultado
						m.execMethod("SCO_SAVE_ANCHOR", sb);
																					
						posi = posi + 1800;
						posf = posf + 1800;
								 
					}
																				
						out.print("<html>");
						
						out.print("<head>");						
						out.print("<title>Save type OrgChart</title>");
						out.print("<style type='text/css'>");						
						out.print(" body { background-color: #d9deea }");
						out.print("</style>");						
						out.print("</head>");
						
						out.print("<body>");
						int iLanguage = m4session.getLanguageID();
						String zlanguser = CheckConfig.checkLocale(iLanguage);
						
						com.meta4.redirect.M4PropertiesRedirect Tran_tcorgchart = new com.meta4.redirect.M4PropertiesRedirect();
						Tran_tcorgchart.load(application.getResourceAsStream("/translations/tcorgchart_" +zlanguser + ".properties"));
						out.print(Tran_tcorgchart.getProperty("save_ok"));
						
						out.print("</body>");
						out.print("</html>");
									 
				}*/
			  
				//If the function of the jsp is to print pdf
				if(ai_type_function.equals("Print")){			   
					
					int posi = 0;
					int posf = 1800;
					int type = 0;
					String send = ""; 
					//serialization ship parts to avoid restriction of characters
					int ipart = 0;		
					try
					{
					while (posi < ai_serialize.length()) {					
						if (posf >= ai_serialize.length()) {
							//indicates that there are no more parts to send
							type = 1;
							posf = ai_serialize.length();
						}
						m.beginJob();
						//send to peopleNet	
						ipart++;
						String part = "";
						part = ai_serialize.substring(posi, posf);						
						java.util.Hashtable htArgs = new java.util.Hashtable(); 						
						htArgs.put("ARG_STRING", part); 				
						htArgs.put("ARG_TYPE", ""+type);  				
							 
						oM4Log.debug("[*] ssco_dynamic_orgchart: Having a look at the arguments" +ipart);		
						oM4Log.debug("[*] ssco_dynamic_orgchart: " + part);
						//ALIAS METODO, ALIAS M4OBJ,NODE M4OBJ, NOMBRE METODO,ARGS
						m.method("SCO_SAVE_ANCHOR"+ipart, "SCO_DYN_CHART", "SCO_DYN_CHART", "SCO_SAVE_ANCHOR", htArgs);
							 
						//nombre que se relaciona con los datos que se van a cargar,
						m.outputDef("SCO_DYN_CHART", "SCO_DYN_CHART!SCO_DYN_CHART[*]");
						m.endJob("");
							 
						StringBuffer sb = new StringBuffer();
						//recupera resultado
						m.execMethod("SCO_SAVE_ANCHOR"+ipart, sb);							
						posi = posi + 1800;
						posf = posf + 1800;
								 
					}
					
					} catch (Exception e) {
					oM4Log.debug("[*] ssco_dynamic_orgchart: Exception while running the SAVE_ANCHOR ", e);
					}
					
					
					//get file pdf with orgchart
					sHTTPDataFile = m.getFile("SCO_DYN_CHART", "SCO_DYN_CHART","SCO_DYN_CHART", "0", "SCO_BLOB_PDF");						
					if(sHTTPDataFile!=null){	

					// Move file to new directory  	       	      
					boolean success = m4session.transferFileToTempUri(sHTTPDataFile, false);
					
					  if (success) 
				  {
					  int iIndexOf = sHTTPDataFile.lastIndexOf(System.getProperty("file.separator"));
					  sHTTPDataFile = sHTTPDataFile.substring(iIndexOf + 1, sHTTPDataFile.length());
					  
					  sHTTPDataFile = m4session.getUserTempURI() + "/" + sHTTPDataFile; 
					  
					  oM4Log.debug("[*] ssco_dynamic_orgchart: Blob will published at " + sHTTPDataFile );              
				  }else{
						oM4Log.debug("[*] ssco_dynamic_orgchart: Error moving file "+sHTTPDataFile);              
				  }
					
					//out.println("nombre: "+sHTTPDataFile);
					
						
					
						//get blob and 
						//sHTTPDataFile = m4session.publishSessionBlob(request, sHTTPDataFile, true);						
						//out.println(sHTTPDataFile);
						//redirect file pdf with js code
						
						out.println("<html>");																		
						out.println("<body>");																		
						out.println("<script>");																									
						out.println("document.location.href='"+sHTTPDataFile+"';");													
						out.println("</script>");
						out.println("</body>");
						out.println("</html>");		
										
						
					}											
				}
%>
