/**
 * Csp_Guardar_CompetenciasBlock.java
 * Self generated code for Bussines Object CSP_GUARDAR_COMPETENCIA.
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
package com.meta4.soapservices.services.rpc.csp_guardar_competencia;

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
 * Bean for node Csp_Guardar_Competencias.
 * @author Meta4
 */
public 
class Csp_Guardar_CompetenciasBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GUARDAR_COMPETENCIA";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_GUARDAR_COMPETENCIAS";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Guardar_CompetenciasBlock.class.getName());

    /* item P_PLAN */
    public String p_Plan = null;
    private void setp_Plan(String ai_value)
    {
        p_Plan = ai_value;
    }
    private String getp_Plan()
    {
        return p_Plan;
    }

    /* item P_TIPO */
    public String p_Tipo = null;
    private void setp_Tipo(String ai_value)
    {
        p_Tipo = ai_value;
    }
    private String getp_Tipo()
    {
        return p_Tipo;
    }

    /* item P_EMPLEADO */
    public String p_Empleado = null;
    private void setp_Empleado(String ai_value)
    {
        p_Empleado = ai_value;
    }
    private String getp_Empleado()
    {
        return p_Empleado;
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

    /* item P_FECHA_EVAL */
    public Calendar p_Fecha_Eval = null;
    private void setp_Fecha_Eval(Calendar ai_value)
    {
        p_Fecha_Eval = ai_value;
    }
    private Calendar getp_Fecha_Eval()
    {
        return p_Fecha_Eval;
    }

    /* item P_COMPETENCIA */
    public String p_Competencia = null;
    private void setp_Competencia(String ai_value)
    {
        p_Competencia = ai_value;
    }
    private String getp_Competencia()
    {
        return p_Competencia;
    }

    /* the recordset */
    public Csp_Guardar_CompetenciasRecord[] Csp_Guardar_CompetenciasRecordSet = null;
    private void setCsp_Guardar_CompetenciasRecordSet(Csp_Guardar_CompetenciasRecord[] ai_arg)
    {
        Csp_Guardar_CompetenciasRecordSet = ai_arg;
    }
    private Csp_Guardar_CompetenciasRecord[] getCsp_Guardar_CompetenciasRecordSet()
    {
        return Csp_Guardar_CompetenciasRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Guardar_CompetenciasBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_PLAN.
        if (p_Plan != null)
        {
            htItems.put("P_PLAN", M4BusinessMethodArg.toString(p_Plan));
        }
        // P_TIPO.
        if (p_Tipo != null)
        {
            htItems.put("P_TIPO", M4BusinessMethodArg.toString(p_Tipo));
        }
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }
        // P_EVALUADOR.
        if (p_Evaluador != null)
        {
            htItems.put("P_EVALUADOR", M4BusinessMethodArg.toString(p_Evaluador));
        }
        // P_FECHA_EVAL.
        if (p_Fecha_Eval != null)
        {
            htItems.put("P_FECHA_EVAL", M4BusinessMethodArg.toString(p_Fecha_Eval));
        }
        // P_COMPETENCIA.
        if (p_Competencia != null)
        {
            htItems.put("P_COMPETENCIA", M4BusinessMethodArg.toString(p_Competencia));
        }

        // insert 'block scope' values in CSP_GUARDAR_COMPETENCIAS.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_GUARDAR_COMPETENCIAS.
        if (Csp_Guardar_CompetenciasRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Guardar_CompetenciasRecordSet.length; i++)
        {
            Csp_Guardar_CompetenciasRecord record = Csp_Guardar_CompetenciasRecordSet[i];
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
        // read 'block scope' values in CSP_GUARDAR_COMPETENCIAS.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_PLAN.
        sItemName = "P_PLAN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Plan = sItemValue;
        // read P_TIPO.
        sItemName = "P_TIPO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Tipo = sItemValue;
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;
        // read P_EVALUADOR.
        sItemName = "P_EVALUADOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluador = sItemValue;
        // read P_FECHA_EVAL.
        sItemName = "P_FECHA_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fecha_Eval = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_COMPETENCIA.
        sItemName = "P_COMPETENCIA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Competencia = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Guardar_CompetenciasRecordSet = new Csp_Guardar_CompetenciasRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Guardar_CompetenciasRecord record = new Csp_Guardar_CompetenciasRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Guardar_CompetenciasRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Guardar_CompetenciasBlock */

