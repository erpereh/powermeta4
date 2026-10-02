/**
 * Csp_Lista_Empl_Depen_RrhhBlock.java
 * Self generated code for Bussines Object CSP_LISTA_EMPL_DEPEN_RRHH.
 *
 * Copyright Meta4 Spain S.A.
 * Centro Europa Empresarial - Edf. Roma
 * C/ Rozabella, 8
 * 28230 Las Rozas - Madrid
 * Spain
 *
 * Private and Confidential
 * The information contained in this document is the property of Meta4 Spain S.A.
 * It is for the exclusive use of designated employees
 * and not for distribution without prior written authorization.
 */
package com.meta4.soapservices.services.rpc.csp_lista_empl_depen_rrhh;

import org.w3c.dom.Node;
import java.util.Hashtable;
import java.util.Calendar;
import javax.activation.DataHandler;

import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.types.M4FileDataSource;

import com.meta4.common.utils.logsystem.M4LogManager;
import com.meta4.common.utils.logsystem.M4ILogger;


/**
 * Bean for node Csp_Lista_Empl_Depen_Rrhh.
 * @author Meta4
 */
public 
class Csp_Lista_Empl_Depen_RrhhBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_LISTA_EMPL_DEPEN_RRHH";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_LISTA_EMPL_DEPEN_RRHH";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Lista_Empl_Depen_RrhhBlock.class.getName());

    /* item P_AREA */
    public String p_Area = null;
    private void setp_Area(String ai_value)
    {
        p_Area = ai_value;
    }
    private String getp_Area()
    {
        return p_Area;
    }

    /* item P_UNIDAD */
    public String p_Unidad = null;
    private void setp_Unidad(String ai_value)
    {
        p_Unidad = ai_value;
    }
    private String getp_Unidad()
    {
        return p_Unidad;
    }

    /* item P_SERVICIO */
    public String p_Servicio = null;
    private void setp_Servicio(String ai_value)
    {
        p_Servicio = ai_value;
    }
    private String getp_Servicio()
    {
        return p_Servicio;
    }

    /* item P_ANNO_EVAL */
    public Double p_Anno_Eval = null;
    private void setp_Anno_Eval(Double ai_value)
    {
        p_Anno_Eval = ai_value;
    }
    private Double getp_Anno_Eval()
    {
        return p_Anno_Eval;
    }

    /* item P_DIRECCION */
    public String p_Direccion = null;
    private void setp_Direccion(String ai_value)
    {
        p_Direccion = ai_value;
    }
    private String getp_Direccion()
    {
        return p_Direccion;
    }

    /* item P_EVALUADOR */
    public String p_Evaluador = null;
    private void setp_Evaluador(String ai_value)
    {
        p_Evaluador = ai_value;
    }
    private String getp_Evaluador()
    {
        return p_Evaluador;
    }

    /* item EXECUTEREPORT */
    public String executereport = null;
    private void setexecutereport(String ai_value)
    {
        executereport = ai_value;
    }
    private String getexecutereport()
    {
        return executereport;
    }

    /* item P_ID_EVAL_PLAN */
    public String p_Id_Eval_Plan = null;
    private void setp_Id_Eval_Plan(String ai_value)
    {
        p_Id_Eval_Plan = ai_value;
    }
    private String getp_Id_Eval_Plan()
    {
        return p_Id_Eval_Plan;
    }

    /* item P_DT_START_PROC */
    public Calendar p_Dt_Start_Proc = null;
    private void setp_Dt_Start_Proc(Calendar ai_value)
    {
        p_Dt_Start_Proc = ai_value;
    }
    private Calendar getp_Dt_Start_Proc()
    {
        return p_Dt_Start_Proc;
    }

    /* item EXECUTEREPORTSERVER */
    public String executereportserver = null;
    private void setexecutereportserver(String ai_value)
    {
        executereportserver = ai_value;
    }
    private String getexecutereportserver()
    {
        return executereportserver;
    }

    /* item P_SOCIEDAD */
    public String p_Sociedad = null;
    private void setp_Sociedad(String ai_value)
    {
        p_Sociedad = ai_value;
    }
    private String getp_Sociedad()
    {
        return p_Sociedad;
    }

    /* the recordset */
    public Csp_Lista_Empl_Depen_RrhhRecord[] Csp_Lista_Empl_Depen_RrhhRecordSet = null;
    private void setCsp_Lista_Empl_Depen_RrhhRecordSet(Csp_Lista_Empl_Depen_RrhhRecord[] ai_arg)
    {
        Csp_Lista_Empl_Depen_RrhhRecordSet = ai_arg;
    }
    private Csp_Lista_Empl_Depen_RrhhRecord[] getCsp_Lista_Empl_Depen_RrhhRecordSet()
    {
        return Csp_Lista_Empl_Depen_RrhhRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Lista_Empl_Depen_RrhhBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_AREA.
        if (p_Area != null)
        {
            htItems.put("P_AREA", M4BusinessMethodArg.toString(p_Area));
        }
        // P_UNIDAD.
        if (p_Unidad != null)
        {
            htItems.put("P_UNIDAD", M4BusinessMethodArg.toString(p_Unidad));
        }
        // P_SERVICIO.
        if (p_Servicio != null)
        {
            htItems.put("P_SERVICIO", M4BusinessMethodArg.toString(p_Servicio));
        }
        // P_ANNO_EVAL.
		if (p_Anno_Eval != null)
    	{
			htItems.put("P_ANNO_EVAL", M4BusinessMethodArg.toString(p_Anno_Eval));
    	}

        // P_DIRECCION.
        if (p_Direccion != null)
        {
            htItems.put("P_DIRECCION", M4BusinessMethodArg.toString(p_Direccion));
        }
        // P_EVALUADOR.
        if (p_Evaluador != null)
        {
            htItems.put("P_EVALUADOR", M4BusinessMethodArg.toString(p_Evaluador));
        }
        // EXECUTEREPORT.
        if (executereport != null)
        {
            htItems.put("EXECUTEREPORT", M4BusinessMethodArg.toString(executereport));
        }
        // P_ID_EVAL_PLAN.
        if (p_Id_Eval_Plan != null)
        {
            htItems.put("P_ID_EVAL_PLAN", M4BusinessMethodArg.toString(p_Id_Eval_Plan));
        }
        // P_DT_START_PROC.
        if (p_Dt_Start_Proc != null)
        {
            htItems.put("P_DT_START_PROC", M4BusinessMethodArg.toString(p_Dt_Start_Proc));
        }
        // EXECUTEREPORTSERVER.
        if (executereportserver != null)
        {
            htItems.put("EXECUTEREPORTSERVER", M4BusinessMethodArg.toString(executereportserver));
        }
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }

        // insert 'block scope' values in CSP_LISTA_EMPL_DEPEN_RRHH.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_LISTA_EMPL_DEPEN_RRHH.
        if (Csp_Lista_Empl_Depen_RrhhRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Lista_Empl_Depen_RrhhRecordSet.length; i++)
        {
            Csp_Lista_Empl_Depen_RrhhRecord record = Csp_Lista_Empl_Depen_RrhhRecordSet[i];
            if (record==null)
            {
                throw M4SoapException.makeException("NULL input value for record[" + i + "] in node \"" + NODE_NAME + "\".");
            }
                        
            record.writeOperations(ai_m4Op);
        }

    } /* end of method writeOperations */


    /**
     *
     */
    void 
    readOperations(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_node) 
    throws Exception
    {
        // read 'block scope' values in CSP_LISTA_EMPL_DEPEN_RRHH.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_AREA.
        sItemName = "P_AREA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Area = sItemValue;
        // read P_UNIDAD.
        sItemName = "P_UNIDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Unidad = sItemValue;
        // read P_SERVICIO.
        sItemName = "P_SERVICIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Servicio = sItemValue;
        // read P_ANNO_EVAL.
        sItemName = "P_ANNO_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anno_Eval = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_DIRECCION.
        sItemName = "P_DIRECCION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Direccion = sItemValue;
        // read P_EVALUADOR.
        sItemName = "P_EVALUADOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluador = sItemValue;
        // read EXECUTEREPORT.
        sItemName = "EXECUTEREPORT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        executereport = sItemValue;
        // read P_ID_EVAL_PLAN.
        sItemName = "P_ID_EVAL_PLAN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Eval_Plan = sItemValue;
        // read P_DT_START_PROC.
        sItemName = "P_DT_START_PROC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start_Proc = M4BusinessMethodArg.toCalendar(sItemValue);
        // read EXECUTEREPORTSERVER.
        sItemName = "EXECUTEREPORTSERVER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        executereportserver = sItemValue;
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Lista_Empl_Depen_RrhhRecordSet = new Csp_Lista_Empl_Depen_RrhhRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Lista_Empl_Depen_RrhhRecord record = new Csp_Lista_Empl_Depen_RrhhRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Lista_Empl_Depen_RrhhRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Lista_Empl_Depen_RrhhBlock */

