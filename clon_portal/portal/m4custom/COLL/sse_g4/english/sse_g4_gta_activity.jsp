<!-- GTA view activity for employees in SSE: sse_g4_gta_activity.jsp -->
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<%@ page import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.savparams.*" %>
		<%@ page import="com.meta4.valuetables.basic.*, com.meta4.utilities.*,com.meta4.configuration.*,com.meta4.taglib.util.*" %>
		<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
		<link href="/css/autocompleter.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
		<script type="text/javascript" src="/libreria/funciones_filter.js"></script>
		<script type="text/javascript" src="/libreria/mootools.js"></script>
		<script type="text/javascript" src="/libreria/sco_incidences_link.js"></script>
		<script type="text/javascript" src="/library/m4valdata.js"></script>
		<script type="text/javascript" src="/library/m4val.js"></script>
		<script type="text/javascript" src="/library/m4gen.js"></script>
		<script type="text/javascript" src="/library/m4gen_mt.js"></script>
		<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
		<script type="text/javascript" src="/libreria/meta4list.js"></script>
		<script type="text/javascript" src="/javascripts/Autocompleter.js"></script>
		<script type="text/javascript" src="/javascripts/Autocompleter.Request.js"></script>
		<script type="text/javascript" src="/javascripts/Observer.js"></script>
		<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
		<%
			String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
			String estado 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
			if ((estado==null)||(estado.equals("")))
			{
				estado="0";
			}
			
			M4SessionCl oSession 	= M4Context.getM4SessionCl(request);
			String sIdPerson 		= oSession.getBagEntries("zIdPerson");
		%>
		<%@ include file="../../shco_g0/shco_gen_formats.jsp" %>
		<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
		<%@ include file="../../sse_generico/francais/generico_links.jsp" %>

		<%
		//Variables to load the M4O
			String sChannelID   			= "SSE_H_HR_VENT_ACTIV_INDIV"; 
			
			String sRootNode				= "SSE_H_HR_VENT_ACTIV_INDIV_ROOT";
			String sLoadMainMethod 			= sChannelID + "!" + sRootNode + ".SSM_H_HR_VENT_ACTIV_MAIN_LOAD";
			
			String sLabelNode 				= "SSE_H_HR_VENT_ACTIV_LABELS";
			String sOutDefLabel				= sChannelID + "!" + sLabelNode + "[*]";	

			String sWUNode 					= "SSE_H_HR_VENT_ACTIV_WU";
			String sOutDefWU				= sChannelID + "!" + sWUNode + "[*]";			
			String sComunWU 				= sWUNode + ":" + sChannelID + "!" + sWUNode + "[&VAR.m4lix]" + ".";
			String sIdWu 					= sComunWU + "STD_ID_WORK_UNIT";
			String sNmWu 					= sComunWU + "STD_N_WORK_UNIT";	

			String sMainNode 				= "SSE_H_HR_VENT_ACTIV_INDIV";
			String sMainDefRoot				= sChannelID + "!" + sMainNode + "[*]";	
			String sComunMain 				= sMainNode + ":" + sChannelID + "!" + sMainNode + "[&VAR.m4lix]" + ".";
			String sComunMainNode			= sMainNode + ":" + sChannelID + "!" + sMainNode + "[0]" + ".";	
			String sDtStart 				= sComunMainNode + "DT_START_P";

		%>
			<m4:startpage m4task="<%=sChannelID%>"/>
			<m4:beginjob/>
				<m4:datadef m4o="<%=sChannelID%>" m4name="<%=sChannelID%>"/>
				<m4:exec m4method="<%=sLoadMainMethod%>"></m4:exec>	
				<m4:outputdef m4alias="<%=sRootNode%>"><m4:param name="m4name0" value="<%=sOutDefLabel%>"/></m4:outputdef>
				<m4:outputdef m4alias="<%=sLabelNode%>"><m4:param name="m4name0" value="<%=sOutDefLabel%>"/></m4:outputdef>
				<m4:outputdef m4alias="<%=sMainNode%>"><m4:param name="m4name0" value="<%=sMainDefRoot%>"/></m4:outputdef>
				<m4:outputdef m4alias="<%=sWUNode%>"><m4:param name="m4name0" value="<%=sOutDefWU%>"/></m4:outputdef>
			<m4:endjob/>
		<%
			//we get the logs, labels and counter in java format
			M4Operations Oper 				= new M4Operations(request);
			AbstractFormater oFmt 			= new DefaultFormater(request); // new SimpleFormater(null, null, null); //
			OperationsIterator cLabels 		= new OperationsIterator(Oper, oFmt, sLabelNode, sChannelID, sLabelNode);
			OperationsIterator cRoot 		= new OperationsIterator(Oper, oFmt, sRootNode, sChannelID, sRootNode);	
			OperationsIterator cMain 		= new OperationsIterator(Oper, oFmt, sMainNode, sChannelID, sMainNode);	
			OperationsData oLabelValues 	= cLabels.get();
			OperationsData oRootValues 		= cRoot.get();
			OperationsData oMainValues 		= cMain.get();

			int nCountWU 					= Oper.getCount(sWUNode,sChannelID,sWUNode);
			String	sCountWU 				= String.valueOf(nCountWU);	

			//Translations
			String zlanguser = zlanguser 	= zsesion.getBagEntries("lang");
			if ((zlanguser==null)||(zlanguser.equals("")))
			{
				zlanguser = "fr";
			}
			java.util.Properties Tran_mss_g4_activity = new Properties();
			Tran_mss_g4_activity.load(application.getResourceAsStream("/translations/sse_g4_gta_activity_"+zlanguser+".properties"));
		%>

		<script type="text/javascript">
			//global variables
			var bValAfterChange 		= <m4:getapplparam section="PORTAL_PARAM" key="SSM_GENVAL_VAL_AFTER_CHANGE" output="page" />; 
			//by app param: if false then we validate in each key up event

			var ReturnedValues 			= new Array();
			
			var IdParams				= new Array('SCO_ORD_SAISIE','SCO_DURATION','SCO_PERCENTAGE','SCO_ID_ACTIVITY','SCO_N_ACTIVITY','SCO_QUANTITY','SCO_ID_WORK_UNITY','SCO_COMMENT','SCO_ID_ANALYTICAL_CODE1','SCO_ID_ANALYTICAL_CODE2','SCO_ID_ANALYTICAL_CODE3','SCO_ID_ANALYTICAL_CODE4','SCO_ID_ANALYTICAL_CODE5','SCO_ID_ANALYTICAL_CODE6','SCO_ID_ANALYTICAL_CODE7','SCO_ID_ANALYTICAL_CODE8','SCO_ID_ANALYTICAL_CODE9');

			var sTimeSpan				= "";
			var sTypeSaisie				= "";

			//to hidde/show
			var showMode 				= 'table-cell';
			if (document.all) showMode 	= 'block';	 
			// However, IE5 at least does not render table cells correctly using the style 'table-cell', but does when the style 'block' is used, so handle this
			//number of register selected
	
			function formatDate(DateArg,Type)
			{
				if (Type==1)
				{
					var annee 	= DateArg.substring(0,4);
					var mois	= DateArg.substring(5,7);
					var jour	= DateArg.substring(8,10);	
					DateArg 	= jour + "-" + mois +"-"+ annee;
				}
				if (Type==2)
				{
					var jour 	= DateArg.substring(0,2);
					var mois	= DateArg.substring(3,5);
					var annee	= DateArg.substring(6,10);	
					DateArg 	= annee + "-" + mois +"-"+ jour;
				}
				return(DateArg);
			}
			
			var IdButton 	= "Button";
			var ActionType	= new Array("LOAD","SAVE","COMP","KEY");
			var ActionImg	= new Array('/iconos/icono_anterior_36_36.gif','/iconos/lu_ok_128.png','/iconos/lu_gear_2_128.png','/iconos/frm_key.png');
			function startAction(sActionTp)
			{
				$(IdButton+sActionTp).src 			= "/iconos/cargando.gif";
			}	

			function endAction(sActionTp)
			{
				$(IdButton+sActionTp).src 			= ActionImg[ActionType.indexOf(sActionTp)];
			}

			var MinSize = 0;
			function GestionWindowSize()
			{
				if (MinSize < document.body.scrollHeight)
				{
					MinSize = document.body.scrollHeight;
				}
				parent.$('pageBodyFrame').style.height = Math.max(document.body.scrollHeight,MinSize)+"px";
			}
			
			function load()
			{
				//load the Activity that match the filter
				$('divResult').style.display = showMode;
				jsonActions("LOAD","");
			}
			
			function ControlPercent(Value)
			{
				var Express = /^[0-9]{1,3}(\.[0-9]{2})?$/g;
				var Result	= Express.test(Value);
				return(Result);
			}

			function ControlDuration(Value)
			{
				if (sTimeSpan=="1")
				{
					var Express = /^[0-9]{2}:[0-9]{2}$/g;
				}
				else
				{
					var Express = /^[0-9]{1,3}(\.[0-9]{2})?$/g;
				}
				var Result	= Express.test(Value);
				return(Result);
			}
			
			function Save()
			{
				var Parametre 	= "{SAVE";
				var RowsCount 	= $('ActivityTable').rows.length;
				var ParamLength	= IdParams.length;
				
				for(jta=1;jta<RowsCount;jta++)
				{
				
					IndiceRec = "{" + jta + "*";
					
					for (taj=0;taj<ParamLength;taj++)
					{
						ParamId = IdParams[taj] + "_" + jta;
						if ($(ParamId))
						{
							ParamValue = $(ParamId).value;
							if ((IdParams[taj] == 'SCO_PERCENTAGE')&&(sTypeSaisie=="P"))
							{
								Retour = ControlPercent(ParamValue);
								if (Retour==false)
								{
									alert('<%=Tran_mss_g4_activity.getProperty("error.Line")%>'+jta+'<%=Tran_mss_g4_activity.getProperty("error.Percent")%>');
									return;
								}
							}
							
							if ((IdParams[taj] == 'SCO_DURATION')&&(sTypeSaisie=="D"))
							{
								if (sTimeSpan=="1")
								{
									errorMsg = '<%=Tran_mss_g4_activity.getProperty("error.DurHour")%>';
								}
								else
								{
									errorMsg = '<%=Tran_mss_g4_activity.getProperty("error.Duration")%>';
								}
								Retour = ControlDuration(ParamValue);
								if (Retour==false)
								{
									alert('<%=Tran_mss_g4_activity.getProperty("error.Line")%>'+jta+errorMsg);
									return;
								}
							}
							
							if (IdParams[taj] == 'SCO_ID_ACTIVITY')
							{
								if ((ParamValue=='')||(ParamValue==null)||(ParamValue=='null'))
								{
									alert('<%=Tran_mss_g4_activity.getProperty("error.Line")%>'+jta+'<%=Tran_mss_g4_activity.getProperty("error.Activity")%>');
									return;
								}
							}

							Parametre += IndiceRec + IdParams[taj] + "=" + ParamValue;
						}
					}
				}
				jsonActions("SAVE",Parametre);
			}

			function CompleteKey()
			{
				var Parametre 	= "{COMPLETE";
				var RowsCount 	= $('ActivityTable').rows.length;
				var ParamLength	= IdParams.length;
				
				for(jta=1;jta<RowsCount;jta++)
				{
				
					IndiceRec = "{" + jta + "*";
					
					for (taj=0;taj<ParamLength;taj++)
					{
						ParamId = IdParams[taj] + "_" + jta;
						if ($(ParamId).style.display=='')
						{
							ParamValue = $(ParamId).value;
							Parametre += IndiceRec + IdParams[taj] + "=" + ParamValue;
						}
					}
				}
				jsonActions("COMP",Parametre);
			}
			
			function SaveKey()
			{
				var Parametre 	= "{SAVE";
				var RowsCount 	= $('ActivityTable').rows.length;
				var ParamLength	= IdParams.length;
				
				for(jta=1;jta<RowsCount;jta++)
				{
				
					IndiceRec = "{" + jta + "*";
					
					for (taj=0;taj<ParamLength;taj++)
					{
						ParamId = IdParams[taj] + "_" + jta;
						if ($(ParamId))
						{
							ParamValue = $(ParamId).value;
							if ((IdParams[taj] == 'SCO_PERCENTAGE')&&(sTypeSaisie=="P"))
							{
								Retour = ControlPercent(ParamValue);
								if (Retour==false)
								{
									alert('<%=Tran_mss_g4_activity.getProperty("error.Line")%>'+jta+'<%=Tran_mss_g4_activity.getProperty("error.Percent")%>');
									return;
								}
							}
							
							if ((IdParams[taj] == 'SCO_DURATION')&&(sTypeSaisie=="D"))
							{
								if (sTimeSpan=="1")
								{
									errorMsg = '<%=Tran_mss_g4_activity.getProperty("error.DurHour")%>';
								}
								else
								{
									errorMsg = '<%=Tran_mss_g4_activity.getProperty("error.Duration")%>';
								}
								Retour = ControlDuration(ParamValue);
								if (Retour==false)
								{
									alert('<%=Tran_mss_g4_activity.getProperty("error.Line")%>'+jta+errorMsg);
									return;
								}
							}
							
							if (IdParams[taj] == 'SCO_ID_ACTIVITY')
							{
								if ((ParamValue=='')||(ParamValue==null)||(ParamValue=='null'))
								{
									alert('<%=Tran_mss_g4_activity.getProperty("error.Line")%>'+jta+'<%=Tran_mss_g4_activity.getProperty("error.Activity")%>');
									return;
								}
							}

							Parametre += IndiceRec + IdParams[taj] + "=" + ParamValue;
						}
					}
				}
				jsonActions("KEY",Parametre);
			}
			
			function jsonActions(sActionTp,Parametre)
			{
			//make all the json actions in the page

			//parameters of the call
				var sUrl 	= "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_activity_actions.jsp";
				var sParams = "ActionTp="+sActionTp ;
				sParams += "&DtStart="+$('dDtStart').value;
				sParams += "&ID_HR="+'<%=sIdPerson%>';
				if ((Parametre != '')&&(Parametre != null))
				{
					sParams += "&Parametre=" + Parametre;
				}
				
				//prompt("url to send ",sUrl + '?' + sParams); //descoment this line to capure the parameters and debug the destination page		
				var jsonRequest = new Request.JSON({
									url: sUrl,
									data: sParams,
									onCancel: function(jsonObj)
												{
													alert('Error: findValueForEmployeeAndConcept: Request.JSON oncancel');
													endAction(sActionTp);
												},
									onSuccess: function(jsonObj)
												{
													if (jsonObj!=null)
													{
														ReturnedValues = jsonObj;

														if(ReturnedValues.MsgLog!="")
														{
															alert(ReturnedValues.MsgLog);
														}
													//if we have to load
														if ((sActionTp=="LOAD")||(sActionTp=="COMP"))
														{
															putRegistersInTable();
															GestionWindowSize();
														}
													}
													else
													{
														alert('Error: loadEmployees: onSuccess. Return object is null');
													}			
													endAction(sActionTp);
												},
									onFailure: function(xhr)
												{
													alert('Error: findValueForEmployeeAndConcept: Request.JSON onFailure' + xhr.responseText);
													endAction(sActionTp);
												},
									onException: function(jsonObj)
												{
													alert('Error: findValueForEmployeeAndConcept: Request.JSON onException');
													endAction(sActionTp);
												}			
									});
				jsonRequest.post();
				startAction(sActionTp);
				
			}

			function putRegistersInTable()
			{
			//put the registers loaded into the table

				sIdEmployee 	= ReturnedValues.IdEmployee;
				sNmEmployee 	= ReturnedValues.NmEmployee;
				sOrEmployee 	= ReturnedValues.OrEmployee;
				sIdPrevEmployee = ReturnedValues.IdPrevEmployee;
				sNmPrevEmployee = ReturnedValues.NmPrevEmployee;
				sIdNextEmployee = ReturnedValues.IdNextEmployee;
				sNmNextEmployee = ReturnedValues.NmNextEmployee;
				sStartDate 		= formatDate(ReturnedValues.StartDate,1);
				sEndDate 		= formatDate(ReturnedValues.EndDate,1);
				sPeriodType 	= ReturnedValues.PeriodType;
				sNmPeriodType 	= ReturnedValues.NmPeriodType;
				sTotalTime 		= ReturnedValues.TotalTime;
				sTypeSaisie 	= ReturnedValues.TypeSaisie;
				sTimeSpan 		= ReturnedValues.TimeSpan;
				snCount 		= ReturnedValues.nCount;
				snInfoCount		= ReturnedValues.nInfoCount;
				
				if (snInfoCount==0)
				{
					returnToFilter();
					return;
				}
				
				$('InfoEmployee').innerHTML = "<B><u>"+sNmPeriodType + "</u></B>";
				$('IdEmployee').value		= sIdEmployee;
				$('OrEmployee').value		= sOrEmployee;
				$('PeriodDate').innerHTML 	= "<b>" + "<%=Tran_mss_g4_activity.getProperty("info.PeriodStart")%>" + " " + sStartDate + " " + "<%=Tran_mss_g4_activity.getProperty("info.PeriodEnd")%>" + " " + sEndDate + "</b>";
				$('StartDate').value 		= sStartDate;
				$('EndDate').value 			= sEndDate;
				$('TotalTime').innerHTML 	= "<u>" + "<%=Tran_mss_g4_activity.getProperty("info.ImpTime")%>" + "</u>&nbsp;" + sTotalTime;

				$('PrevID').value  			= sIdPrevEmployee;
				$('NextID').value 			= sIdNextEmployee;
				$('PrevNM').value  			= sNmPrevEmployee;
				$('NextNM').value 			= sNmNextEmployee;
				$('PrevID').style.display 	= ((sIdPrevEmployee == null)||(sIdPrevEmployee == '')) ? 'none' : '';
				$('NextID').style.display 	= ((sIdNextEmployee == null)||(sIdNextEmployee == '')) ? 'none' : '';

			//first we clean the table
				cleanActivityTable();

				var indexFin = ReturnedValues.listHrVent.length;
				
			//num registers selected
				GestionListeDeroulante(ReturnedValues.listWorkUnity,'SCO_ID_WORK_UNITY_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode1,'SCO_ID_ANALYTICAL_CODE1_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode2,'SCO_ID_ANALYTICAL_CODE2_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode3,'SCO_ID_ANALYTICAL_CODE3_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode4,'SCO_ID_ANALYTICAL_CODE4_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode5,'SCO_ID_ANALYTICAL_CODE5_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode6,'SCO_ID_ANALYTICAL_CODE6_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode7,'SCO_ID_ANALYTICAL_CODE7_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode8,'SCO_ID_ANALYTICAL_CODE8_XXXX');
				GestionListeDeroulante(ReturnedValues.listAnaCode9,'SCO_ID_ANALYTICAL_CODE9_XXXX');
				
				if ((sPeriodType=='')||(sPeriodType== null))
				{
					$('ResultActionLine1').style.display 	= 'none';
					$('ResultActionLine2').style.display 	= 'none';
					$('ActivityTitle').style.display 		= 'none';
				}
				else
				{
					$('ResultActionLine1').style.display 	= '';
					$('ResultActionLine2').style.display 	= '';
					$('ActivityTitle').style.display 		= '';
					
				//we loop the result array and put each result in a row
					for (i=0;i<indexFin;i++)
					{
						addRowToActivityTable();

						StrI								= i+1;
						$('SCO_DURATION_'+StrI).value 		= ReturnedValues.listHrVent[i].sDuration;
						$('SCO_PERCENTAGE_'+StrI).value 	= ReturnedValues.listHrVent[i].sPercent;
						$('SCO_ID_ACTIVITY_'+StrI).value 	= ReturnedValues.listHrVent[i].sIdActivity;
						$('SCO_N_ACTIVITY_'+StrI).value 	= ReturnedValues.listHrVent[i].sNmActivity;
						$('SCO_QUANTITY_'+StrI).value 		= ReturnedValues.listHrVent[i].sQuantity;
						$('SCO_COMMENT_'+StrI).value 		= ReturnedValues.listHrVent[i].sComment;
						m4chercheOption('SCO_ID_WORK_UNITY_'+StrI,ReturnedValues.listHrVent[i].sUnity);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE1_'+StrI,ReturnedValues.listHrVent[i].sAnaCode1);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE2_'+StrI,ReturnedValues.listHrVent[i].sAnaCode2);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE3_'+StrI,ReturnedValues.listHrVent[i].sAnaCode3);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE4_'+StrI,ReturnedValues.listHrVent[i].sAnaCode4);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE5_'+StrI,ReturnedValues.listHrVent[i].sAnaCode5);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE6_'+StrI,ReturnedValues.listHrVent[i].sAnaCode6);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE7_'+StrI,ReturnedValues.listHrVent[i].sAnaCode7);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE8_'+StrI,ReturnedValues.listHrVent[i].sAnaCode8);
						m4chercheOption('SCO_ID_ANALYTICAL_CODE9_'+StrI,ReturnedValues.listHrVent[i].sAnaCode9);
					}

					if (indexFin == 0)
					{
						//addRowToActivityTable();
						$('ActivityTitle').style.display = 'none';
					}

					GestionAffichListe(ReturnedValues.listWorkUnity.length,'SCO_ID_WORK_UNITY');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE1');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE2');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE3');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE4');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE5');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE6');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE7');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE8');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE9');
					GestionTypeSaisie()
				}
			}	

			function GestionListeDeroulante(IdObjet,IdSelect)
			{
				VideListeDeroulante(IdSelect)
				if (IdObjet.length > 0)
				{
					var ListeDeroulante = $(IdSelect);
					for (j=0;j<IdObjet.length;j++)
					{
						var NvelleOption		= document.createElement("option");
						NvelleOption.value		= IdObjet[j].IdCode ;
						NvelleOption.text  		= IdObjet[j].NmCode;
						if(!document.all)
						{
						  before = ListeDeroulante.options[j+1]; 
						}else
						{
						  before = j+1;
						}
						ListeDeroulante.add(NvelleOption,before);
					}
				}
			}
			
			function VideListeDeroulante(IdSelect)
			{
				var Longueur = $(IdSelect).length-1;
				if (Longueur > 0)
				{
					while (Longueur > 0)
					{
						$(IdSelect).removeChild($(IdSelect).options[Longueur]);
						Longueur --;
					}
				}
			}
			
			function GestionAffichageAnaCodes(Type)
			{
				if (Type=='0')
				{
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE1');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE2');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE3');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE4');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE5');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE6');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE7');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE8');
					GestionAffichListe(0,'SCO_ID_ANALYTICAL_CODE9');
				}
				else
				{
					GestionAffichListe(ReturnedValues.listAnaCode1.length,'SCO_ID_ANALYTICAL_CODE1');
					GestionAffichListe(ReturnedValues.listAnaCode2.length,'SCO_ID_ANALYTICAL_CODE2');
					GestionAffichListe(ReturnedValues.listAnaCode3.length,'SCO_ID_ANALYTICAL_CODE3');
					GestionAffichListe(ReturnedValues.listAnaCode4.length,'SCO_ID_ANALYTICAL_CODE4');
					GestionAffichListe(ReturnedValues.listAnaCode5.length,'SCO_ID_ANALYTICAL_CODE5');
					GestionAffichListe(ReturnedValues.listAnaCode6.length,'SCO_ID_ANALYTICAL_CODE6');
					GestionAffichListe(ReturnedValues.listAnaCode7.length,'SCO_ID_ANALYTICAL_CODE7');
					GestionAffichListe(ReturnedValues.listAnaCode8.length,'SCO_ID_ANALYTICAL_CODE8');
					GestionAffichListe(ReturnedValues.listAnaCode9.length,'SCO_ID_ANALYTICAL_CODE9');
				}
			}
			
			function AnaCodesVisibility()
			{
				Visibilitiy = $('ANA_CODES_VIS').value;
				Visibilitiy = (Visibilitiy=='0') ? '1' : '0';
				GestionAffichageAnaCodes(Visibilitiy);
				$('ANA_CODES_VIS').value = Visibilitiy;
			}
			
			function GestionAffichListe(LongueurObjet,IdSelect)
			{
				if (LongueurObjet == 0)
				{
					visibility = 'none';
				}
				else
				{
					visibility = '';
				}
				$('title_' + IdSelect).style.display = visibility;
				Compteur = document.getElementsByName('col_' + IdSelect).length;
				for (jta=0;jta < Compteur;jta++)
				{
					document.getElementsByName('col_' + IdSelect)[jta].style.display = visibility;
				}
			}

			function cleanActivityTable()
			{
			//Delete all the rows in the Timesheet table, except the header, and all the registers in the window table
				var nNumRows = $('ActivityTable').rows.length;
				for (i=nNumRows-1;i>0;i--)
				{
					$('ActivityTable').deleteRow(i);
				}
			}	

			function addRowToActivityTable()
			{
				var tableOrig 	= $('HiddenActivityTable');
				var tableDest 	= $('ActivityTable');

				var rowCount 	= tableDest.rows.length;
				var row 		= tableDest.insertRow(rowCount);

				//row.className 	= "tablaestadosceldatitulo"
				var colCount 	= tableOrig.rows[0].cells.length;
				var code;

				for (var i=0; i<colCount; i++)
				{
					var newcell 				= row.insertCell(i);
					newcell.id 					= tableOrig.rows[0].cells[i].id;
					newcell.name 				= tableOrig.rows[0].cells[i].name;
					newcell.display 			= tableOrig.rows[0].cells[i].display;
					newcell.className 			= "fuentevalor";
					newcell.style.whiteSpace 	= "nowrap";
					newcell.style.textAlign 	= "center";
					code 						= tableOrig.rows[0].cells[i].innerHTML;
					code 						= code.replace(/XXXX/g,tableDest.rows.length-1);
					newcell.innerHTML 			= code;
				}
				$('SCO_ORD_SAISIE_'+rowCount).value 	= rowCount;

				IdActivity	= 'SCO_ID_ACTIVITY_' + rowCount;
				NActivity 	= 'SCO_N_ACTIVITY_' + rowCount;
				IdWorkUnity	= 'SCO_ID_WORK_UNITY_'+ rowCount;
				//Activity autocompletion lists
				window.addEvent(
					'domready', 
					function ()
					{
						var InitVariable 	= $('IdEmployee').value + "," + $('OrEmployee').value + ",," + formatDate($('dDtStart').value,2) + ",," + formatDate($('dDtStart').value,2);
						//alert(InitVariable);
						var oListEmpl = new M4List({//Initialize Activity list
							meta4Object: 'SRCO_TK_MT_VW_H_HR_ACTI',
							nodeQBF: 'SRCO_TK_QBF_VW_H_HR_ACTI',
							nodeTR: 'SRCO_TK_MT_VW_H_HR_ACTI',
							listMethod: 'SSE_LIST',
							initValue: '',
							eventAttributesChanged: 'onChangeActivity',
							secondaryTI: '',
							listMethodArguments: 'ARG_STD_ID_HR,ARG_STD_OR_HR_PERIOD,ARG_SCO_ID_ACTIVITY,ARG_DT_START,ARG_ID_ORGANIZATION,ARG_DT_END',
							resultItems: 'SCO_N_ACTIVITY,SCO_ID_ACTIVITY,SCO_ID_WORK_UNITY',
							mainFilterElement: 'SRCO_TK_QBF_VW_H_HR_ACTI.SCO_N_ACTIVITY',
							secondaryFilterElements: InitVariable,
							maxRecords: 5,
							labelHelp: "<%=Tran_mss_g4_activity.getProperty("list.HelpActivity")%>",
							labelLoading: "<%=Tran_mss_g4_activity.getProperty("list.Loading")%>",
							labelAndMore: "AND MORE",
							labelNoMatch: "<%=Tran_mss_g4_activity.getProperty("list.NoMatchActivity")%>"
						});
						
						$('SRCO_TK_QBF_VW_H_HR_ACTI.SCO_N_ACTIVITY').id = NActivity;
						
						$(NActivity).addEvent('keydown', TabUnable);

						$(NActivity).addEvent(
							'onChangeActivity', 
							function()
							{
								$('SCO_ID_ACTIVITY_' + rowCount).value 	= this.get('m4SCO_ID_ACTIVITY');
								WorkUnity 	= this.get('m4SCO_ID_WORK_UNITY');
								if ((WorkUnity=='null')||($(NActivity).value=='')||(WorkUnity==null))
								{
									WorkUnity = '';
								}
								m4chercheOption($('SCO_ID_WORK_UNITY_'+ rowCount),WorkUnity);
							}
						);		
					}
				);
			}
			
			function TabUnable(event)
			{
				if (event.code==9)
				{	
					event.code = 0;
					window.event.returnValue = false;
				}
				if (event.code==13)
				{	
					IdElement = this.id;
					IdElement = IdElement.substr(15,IdElement.length-15);
					for(jta=IdParams.indexOf('SCO_N_ACTIVITY')+1;jta<IdParams.length;jta++)
					{
						if ($(IdParams[jta]+"_"+IdElement))
						{
							$(IdParams[jta]+"_"+IdElement).focus();
							break;
						}
					}
				}
			}
			
			function ChangePeriod(Type)
			{
				$('dDtStart').value = (Type==1) ? m4AddDays($('EndDate').value,1) : m4AddDays($('StartDate').value,-1);
				void load();
			}

			function m4chercheOption(oselect,sidoption)
			{
				var numinc = $(oselect).options.length;
				for (var ni=0; ni < numinc ; ni++ )
				{
					if ($(oselect).options[ni].value == sidoption)
					{
						$(oselect).selectedIndex = ni;
						break;
					}
				}
			}

			function GestionTypeSaisie()
			{
				AffichDuree 	= (sTypeSaisie=='D') ? 1 : 0;
				AffichPercent 	= (sTypeSaisie=='P') ? 1 : 0;
				GestionAffichListe(AffichDuree,'SCO_DURATION');
				GestionAffichListe(AffichPercent,'SCO_PERCENTAGE');
			}

			function AddNewLine()
			{
				addRowToActivityTable();
				VisAnaCodes = $('ANA_CODES_VIS').value;
				GestionAffichageAnaCodes(VisAnaCodes);
				GestionTypeSaisie();
				$('ActivityTitle').style.display = '';
				GestionWindowSize();
			}
			
			function DeleteLine(Object)
			{
				$('ActivityTable').deleteRow($(Object).value);
				Compteur = document.getElementsByName('SCO_ORD_SAISIE').length;
				for (jta=0;jta<Compteur;jta++)
				{
					document.getElementsByName('SCO_ORD_SAISIE')[jta].value = jta+1;
				}
				if (Compteur==1)
				{
					$('ActivityTitle').style.display = 'none';
				}
				GestionWindowSize();
			}

		</script>

		<title><%=Tran_mss_g4_activity.getProperty("page.title")%></title>

	</head>

	<body onload="load();">

		<div id="divDescription" style="overflow:hidden; height:auto" >
			<table width="100%">
				<tr>
					<td class="titulofuncional" colspan="2"><%=Tran_mss_g4_activity.getProperty("head.title")%></td>
				</tr>
				<tr>
					<td>
						<img src="/iconos/noname_listado_110_125.gif"  alt="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%>" />
					</td>
					<td>
						<div class="descripcionfuncional"><%=Tran_mss_g4_activity.getProperty("desc.line")%><br/>
						</div>
					</td>
				</tr>
			</table>
		</div>

		<form action="" method="post" name="NombreFormulario" id="NombreFormulario" >

			<input type="hidden" id="dDtStart" value="<m4:item m4name="<%=sDtStart%>" htmlsafe="true"/>"/>

			<div id="filterString" style="display:none" >
				<table width="100%" cellspacing="0" border="0">
					<tr>
						<td id="FiltreTxt" class="fuentevalor2">&nbsp;</td>
					</tr>
					<tr>
						<td align="center">&nbsp;
							<a id="btReturnToFilter" title="<%=Tran_mss_g4_activity.getProperty("bt.returnToFilter")%>" href="javascript:returnToFilter();" >
								<img id="ButtonLOAD"  alt="<%=Tran_mss_g4_activity.getProperty("bt.returnToFilter")%>" src="/iconos/icono_anterior_36_36.gif"   />
							</a>
						</td>
					</tr>
					<tr>
						<td class="separadorlinea2" colspan="2">
							<hr />
						</td>
					</tr>
				</table>
				<BR>
			</div>

			<div id="divResult" class="fuentecampo" style="display:none">
				<table class = "tablaestados" width="100%" cellspacing="0" border="0">
					<tr class = "titulofuncional" id="ResultId">
						<td width="5%">
							<a href="javascript:ChangeID(-1)" id="PrevID" title="<%=Tran_mss_g4_activity.getProperty("bt.PrevID")%>" value="">
								<img src="/iconos/lu_nor_rew_24.png" alt="<%=Tran_mss_g4_activity.getProperty("bt.PrevID")%>" />
							</a>
							&nbsp;
							<input type="hidden" id="PrevNM" value=""/>
						</td>
						<td id="InfoEmployee" width="40%" align="center" nowrap>&nbsp;</td>
						<input type="hidden" id="IdEmployee" value=""/>
						<input type="hidden" id="OrEmployee" value=""/>
						<td width="5%">
							<a  href="javascript:ChangeID(1)" id="NextID" title="<%=Tran_mss_g4_activity.getProperty("bt.NextID")%>" value="">
								<img src="/iconos/lu_nor_for_24.png" alt="<%=Tran_mss_g4_activity.getProperty("bt.NextID")%>" />
							</a>
							<input type="hidden" id="NextNM" value=""/>
						</td>
						<td colspan="2">&nbsp;</td>
					</tr>

					<tr id="ResultActionLine1" class="fuentecampo">
						<td>&nbsp;&nbsp;
							<a  href="javascript:ChangePeriod(-1)" id="StartDate" title="<%=Tran_mss_g4_activity.getProperty("bt.PrevPeriod")%>" value="">
								<img src="/iconos/icono_formacion_eliminar_11_12.gif" alt="<%=Tran_mss_g4_activity.getProperty("bt.PrevPeriod")%>" />
							</a>
						</td>
						<td id="PeriodDate" align="center">&nbsp;</td>
						<td>&nbsp;&nbsp;
							<a  href="javascript:ChangePeriod(1)" id="EndDate" title="<%=Tran_mss_g4_activity.getProperty("bt.NextPeriod")%>" value="">
								<img src="/iconos/icono_formacion_anadir_11_12.gif" alt="<%=Tran_mss_g4_activity.getProperty("bt.NextPeriod")%>" />
							</a>
						</td>
						<td align="center">&nbsp;
							<a  href="javascript:AnaCodesVisibility()" title="<%=Tran_mss_g4_activity.getProperty("bt.AnalyticalCodes")%>" value="">
								<img src="/iconos/lu_nor_info_24.png" width="30" height="30" alt="<%=Tran_mss_g4_activity.getProperty("bt.AnalyticalCodes")%>" />
							</a>
							<input type="hidden" id="ANA_CODES_VIS" value="0" />
						</td>
						<td align="left">
							<a  href="javascript:SaveKey()" title="<%=Tran_mss_g4_activity.getProperty("bt.SaveKey")%>" value="">
								<img id="ButtonKEY" src="/iconos/frm_key.png" width="36" height="36" alt="<%=Tran_mss_g4_activity.getProperty("bt.SaveKey")%>" />
							</a>
						</td>
					</tr>

					<tr id="ResultActionLine2" class="fuentecampo">
						<td align="left">
							<a  href="javascript:AddNewLine()" title="<%=Tran_mss_g4_activity.getProperty("bt.AddNewLine")%>" value="">
								<img src="/iconos/select_all.gif" width="36" height="36" alt="<%=Tran_mss_g4_activity.getProperty("bt.AddNewLine")%>" />
							</a>
						</td>
						<td id="TotalTime" class="fuentecampo" colspan="2">&nbsp;</td>
						<td align="center">&nbsp;
							<a  href="javascript:CompleteKey()" title="<%=Tran_mss_g4_activity.getProperty("bt.CompleteKey")%>" value="">
								<img id="ButtonCOMP" src="/iconos/lu_gear_2_128.png" width="36" height="36" alt="<%=Tran_mss_g4_activity.getProperty("bt.CompleteKey")%>" />
							</a>
						</td>
						<td align="left">
							<a  href="javascript:Save()" title="<%=Tran_mss_g4_activity.getProperty("bt.Save")%>" value="">
								<img id="ButtonSAVE" src="/iconos/lu_ok_128.png" width="36" height="36" alt="<%=Tran_mss_g4_activity.getProperty("bt.Save")%>" />
							</a>
						</td>
					</tr>
				</table>

				<table class = "tablaestados" width="100%" cellspacing="0" border="0">
					<tr>
						<td>
							<table id="ActivityTable" class="tablaestados" border="0" cellspacing="0"  cellpadding="3" >
							<!-- Header -->
								<tr class = "tablaestadosceldatitulo" id="ActivityTitle" style="text-align:center;white-space:nowrap">
									<td id="title_DELETE">&nbsp;</td>
									<td id="title_SCO_DURATION">&nbsp;<%=oLabelValues.getLabel("SSM_DURATION")%></td>
									<td id="title_SCO_PERCENTAGE">&nbsp;<%=oLabelValues.getLabel("SSM_PERCENTAGE")%></td>			
									<td id="title_SCO_ID_ACTIVITY">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ACTIVITY")%></td>
									<td id="title_SCO_QUANTITY">&nbsp;<%=oLabelValues.getLabel("SSM_QUANTITY")%></td>	
									<td id="title_SCO_ID_WORK_UNITY">&nbsp;<%=oLabelValues.getLabel("SSM_ID_WORK_UNITY")%></td>	
									<td id="title_SCO_COMMENT">&nbsp;<%=oLabelValues.getLabel("SSM_COMMENT")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE1">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE1")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE2">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE2")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE3">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE3")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE4">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE4")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE5">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE5")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE6">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE6")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE7">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE7")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE8">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE8")%></td>	
									<td id="title_SCO_ID_ANALYTICAL_CODE9">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE9")%></td>	
								</tr>
							</table>

						<!-- Hidden Values table: with a row that will be used like a template -->
						<!-- The string XXXX will be replace by the row number-->
							<table id="HiddenActivityTable" style="display:none"  width="100%">
							<!-- Template row -->
								<tr class = "tablaestadosceldatitulo">
									<td id="col_DELETE" name="col_DELETE">
										<a  href="javascript:Delete" onclick="javascript:DeleteLine(this.id);" id="SCO_ORD_SAISIE_XXXX" name="SCO_ORD_SAISIE" title="<%=Tran_mss_g4_activity.getProperty("bt.DeleteLine")%>" value="">
											<img src="/iconos/lu_close_1_24.png" alt="<%=Tran_mss_g4_activity.getProperty("bt.DeleteLine")%>" />
										</a>
									</td>	
									<td id="col_SCO_DURATION" name="col_SCO_DURATION">
										<input class="fuenteformulario" type="text" id="SCO_DURATION_XXXX" maxlength="5" size="5" value="" />
									</td>
									<td id="col_SCO_PERCENTAGE" name="col_SCO_PERCENTAGE">
										<input class="fuenteformulario" type="text" id="SCO_PERCENTAGE_XXXX" maxlength="5" size="5" value="" />
									</td>
									<td id="col_SCO_ID_ACTIVITY" name="col_SCO_ID_ACTIVITY">
										<input type="hidden" id="SCO_ID_ACTIVITY_XXXX" maxlength="50" size="50" value="" />
										<input class="fuenteformulario" type="text" id="SRCO_TK_QBF_VW_H_HR_ACTI.SCO_N_ACTIVITY" maxlength="50" size="50" value="" />
									</td>
									<td id="col_SCO_QUANTITY" name="col_SCO_QUANTITY">
										<input class="fuenteformulario" type="text" id="SCO_QUANTITY_XXXX" maxlength="9" size="9" value="" />
									</td>
									<td id="col_SCO_ID_WORK_UNITY" name="col_SCO_ID_WORK_UNITY">
										<select id="SCO_ID_WORK_UNITY_XXXX" class="fuenteformulario" disabled="disabled">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_WORK_UNITY")%></option>
										</select>
									</td>
									<td id="col_SCO_COMMENT" name="col_SCO_COMMENT">
										<input class="fuenteformulario" type="text" id="SCO_COMMENT_XXXX" maxlength="254" size="54" value="" />
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE1" name="col_SCO_ID_ANALYTICAL_CODE1">
										<select id="SCO_ID_ANALYTICAL_CODE1_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE1")%></option>
										</select>
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE2" name="col_SCO_ID_ANALYTICAL_CODE2">
										<select id="SCO_ID_ANALYTICAL_CODE2_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE2")%></option>
										</select>
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE3" name="col_SCO_ID_ANALYTICAL_CODE3">
										<select id="SCO_ID_ANALYTICAL_CODE3_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE3")%></option>
										</select>
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE4" name="col_SCO_ID_ANALYTICAL_CODE4">
										<select id="SCO_ID_ANALYTICAL_CODE4_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE4")%></option>
										</select>
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE5" name="col_SCO_ID_ANALYTICAL_CODE5">
										<select id="SCO_ID_ANALYTICAL_CODE5_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE5")%></option>
										</select>
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE6" name="col_SCO_ID_ANALYTICAL_CODE6">
										<select id="SCO_ID_ANALYTICAL_CODE6_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE6")%></option>
										</select>
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE7" name="col_SCO_ID_ANALYTICAL_CODE7">
										<select id="SCO_ID_ANALYTICAL_CODE7_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE7")%></option>
										</select>
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE8" name="col_SCO_ID_ANALYTICAL_CODE8">
										<select id="SCO_ID_ANALYTICAL_CODE8_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE8")%></option>
										</select>
									</td>
									<td id="col_SCO_ID_ANALYTICAL_CODE9" name="col_SCO_ID_ANALYTICAL_CODE9">
										<select id="SCO_ID_ANALYTICAL_CODE9_XXXX" class="fuenteformulario">
											<option value="">&nbsp;<%=oLabelValues.getLabel("SSM_ID_ANALYTICAL_CODE9")%></option>
										</select>
									</td>
								</tr>
							</table>	
						</td>
					</tr>
				</table>
			</div>

			<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>

	</body>
<m4:endpage/>
</html>