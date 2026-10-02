/**
 * Csp_Guardar_Feedback_EmpBlock.java
 * Self generated code for Bussines Object CSP_GUARDAR_FEEDBACK_EMP.
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
package com.meta4.soapservices.services.rpc.csp_guardar_feedback_emp;

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
 * Bean for node Csp_Guardar_Feedback_Emp.
 * @author Meta4
 */
public 
class Csp_Guardar_Feedback_EmpBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GUARDAR_FEEDBACK_EMP";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_GUARDAR_FEEDBACK_EMP";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Guardar_Feedback_EmpBlock.class.getName());

    /* item P_DT_START */
    public Calendar p_Dt_Start = null;
    private void setp_Dt_Start(Calendar ai_value)
    {
        p_Dt_Start = ai_value;
    }
    private Calendar getp_Dt_Start()
    {
        return p_Dt_Start;
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

    /* the recordset */
    public Csp_Guardar_Feedback_EmpRecord[] Csp_Guardar_Feedback_EmpRecordSet = null;
    private void setCsp_Guardar_Feedback_EmpRecordSet(Csp_Guardar_Feedback_EmpRecord[] ai_arg)
    {
        Csp_Guardar_Feedback_EmpRecordSet = ai_arg;
    }
    private Csp_Guardar_Feedback_EmpRecord[] getCsp_Guardar_Feedback_EmpRecordSet()
    {
        return Csp_Guardar_Feedback_EmpRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Guardar_Feedback_EmpBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_DT_START.
        if (p_Dt_Start != null)
        {
            htItems.put("P_DT_START", M4BusinessMethodArg.toString(p_Dt_Start));
        }
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }

        // insert 'block scope' values in CSP_GUARDAR_FEEDBACK_EMP.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_GUARDAR_FEEDBACK_EMP.
        if (Csp_Guardar_Feedback_EmpRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Guardar_Feedback_EmpRecordSet.length; i++)
        {
            Csp_Guardar_Feedback_EmpRecord record = Csp_Guardar_Feedback_EmpRecordSet[i];
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
        // read 'block scope' values in CSP_GUARDAR_FEEDBACK_EMP.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_DT_START.
        sItemName = "P_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Guardar_Feedback_EmpRecordSet = new Csp_Guardar_Feedback_EmpRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Guardar_Feedback_EmpRecord record = new Csp_Guardar_Feedback_EmpRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Guardar_Feedback_EmpRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Guardar_Feedback_EmpBlock */

