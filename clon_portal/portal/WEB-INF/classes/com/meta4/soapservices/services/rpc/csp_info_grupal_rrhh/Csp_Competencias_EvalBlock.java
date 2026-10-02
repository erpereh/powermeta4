/**
 * Csp_Competencias_EvalBlock.java
 * Self generated code for Bussines Object CSP_INFO_GRUPAL_RRHH.
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
package com.meta4.soapservices.services.rpc.csp_info_grupal_rrhh;

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
 * Bean for node Csp_Competencias_Eval.
 * @author Meta4
 */
public 
class Csp_Competencias_EvalBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_INFO_GRUPAL_RRHH";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_COMPETENCIAS_EVAL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Competencias_EvalBlock.class.getName());

    /* item P_ID_PLAN */
    public String p_Id_Plan = null;
    private void setp_Id_Plan(String ai_value)
    {
        p_Id_Plan = ai_value;
    }
    private String getp_Id_Plan()
    {
        return p_Id_Plan;
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

    /* item P_ID_EMPLEADO */
    public String p_Id_Empleado = null;
    private void setp_Id_Empleado(String ai_value)
    {
        p_Id_Empleado = ai_value;
    }
    private String getp_Id_Empleado()
    {
        return p_Id_Empleado;
    }

    /* the recordset */
    public Csp_Competencias_EvalRecord[] Csp_Competencias_EvalRecordSet = null;
    private void setCsp_Competencias_EvalRecordSet(Csp_Competencias_EvalRecord[] ai_arg)
    {
        Csp_Competencias_EvalRecordSet = ai_arg;
    }
    private Csp_Competencias_EvalRecord[] getCsp_Competencias_EvalRecordSet()
    {
        return Csp_Competencias_EvalRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Competencias_EvalBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_PLAN.
        if (p_Id_Plan != null)
        {
            htItems.put("P_ID_PLAN", M4BusinessMethodArg.toString(p_Id_Plan));
        }
        // P_FECHA_EVAL.
        if (p_Fecha_Eval != null)
        {
            htItems.put("P_FECHA_EVAL", M4BusinessMethodArg.toString(p_Fecha_Eval));
        }
        // P_ID_EMPLEADO.
        if (p_Id_Empleado != null)
        {
            htItems.put("P_ID_EMPLEADO", M4BusinessMethodArg.toString(p_Id_Empleado));
        }

        // insert 'block scope' values in CSP_COMPETENCIAS_EVAL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_COMPETENCIAS_EVAL.
        if (Csp_Competencias_EvalRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Competencias_EvalRecordSet.length; i++)
        {
            Csp_Competencias_EvalRecord record = Csp_Competencias_EvalRecordSet[i];
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
        // read 'block scope' values in CSP_COMPETENCIAS_EVAL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_PLAN.
        sItemName = "P_ID_PLAN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Plan = sItemValue;
        // read P_FECHA_EVAL.
        sItemName = "P_FECHA_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fecha_Eval = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_ID_EMPLEADO.
        sItemName = "P_ID_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Competencias_EvalRecordSet = new Csp_Competencias_EvalRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Competencias_EvalRecord record = new Csp_Competencias_EvalRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Competencias_EvalRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Competencias_EvalBlock */

