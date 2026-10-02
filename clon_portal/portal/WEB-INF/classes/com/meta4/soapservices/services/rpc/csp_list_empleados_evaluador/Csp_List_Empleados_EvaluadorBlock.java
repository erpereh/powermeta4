/**
 * Csp_List_Empleados_EvaluadorBlock.java
 * Self generated code for Bussines Object CSP_LIST_EMPLEADOS_EVALUADOR.
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
package com.meta4.soapservices.services.rpc.csp_list_empleados_evaluador;

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
 * Bean for node Csp_List_Empleados_Evaluador.
 * @author Meta4
 */
public 
class Csp_List_Empleados_EvaluadorBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_LIST_EMPLEADOS_EVALUADOR";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_LIST_EMPLEADOS_EVALUADOR";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_List_Empleados_EvaluadorBlock.class.getName());

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

    /* the recordset */
    public Csp_List_Empleados_EvaluadorRecord[] Csp_List_Empleados_EvaluadorRecordSet = null;
    private void setCsp_List_Empleados_EvaluadorRecordSet(Csp_List_Empleados_EvaluadorRecord[] ai_arg)
    {
        Csp_List_Empleados_EvaluadorRecordSet = ai_arg;
    }
    private Csp_List_Empleados_EvaluadorRecord[] getCsp_List_Empleados_EvaluadorRecordSet()
    {
        return Csp_List_Empleados_EvaluadorRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_List_Empleados_EvaluadorBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANNO_EVAL.
		if (p_Anno_Eval != null)
    	{
			htItems.put("P_ANNO_EVAL", M4BusinessMethodArg.toString(p_Anno_Eval));
    	}

        // P_EVALUADOR.
        if (p_Evaluador != null)
        {
            htItems.put("P_EVALUADOR", M4BusinessMethodArg.toString(p_Evaluador));
        }

        // insert 'block scope' values in CSP_LIST_EMPLEADOS_EVALUADOR.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_LIST_EMPLEADOS_EVALUADOR.
        if (Csp_List_Empleados_EvaluadorRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_List_Empleados_EvaluadorRecordSet.length; i++)
        {
            Csp_List_Empleados_EvaluadorRecord record = Csp_List_Empleados_EvaluadorRecordSet[i];
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
        // read 'block scope' values in CSP_LIST_EMPLEADOS_EVALUADOR.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANNO_EVAL.
        sItemName = "P_ANNO_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anno_Eval = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_EVALUADOR.
        sItemName = "P_EVALUADOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluador = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_List_Empleados_EvaluadorRecordSet = new Csp_List_Empleados_EvaluadorRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_List_Empleados_EvaluadorRecord record = new Csp_List_Empleados_EvaluadorRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_List_Empleados_EvaluadorRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_List_Empleados_EvaluadorBlock */

