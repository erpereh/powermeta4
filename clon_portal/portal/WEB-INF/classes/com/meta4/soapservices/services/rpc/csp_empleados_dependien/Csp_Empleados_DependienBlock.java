/**
 * Csp_Empleados_DependienBlock.java
 * Self generated code for Bussines Object CSP_EMPLEADOS_DEPENDIEN.
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
package com.meta4.soapservices.services.rpc.csp_empleados_dependien;

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
 * Bean for node Csp_Empleados_Dependien.
 * @author Meta4
 */
public 
class Csp_Empleados_DependienBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_EMPLEADOS_DEPENDIEN";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_EMPLEADOS_DEPENDIEN";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Empleados_DependienBlock.class.getName());

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
    public Csp_Empleados_DependienRecord[] Csp_Empleados_DependienRecordSet = null;
    private void setCsp_Empleados_DependienRecordSet(Csp_Empleados_DependienRecord[] ai_arg)
    {
        Csp_Empleados_DependienRecordSet = ai_arg;
    }
    private Csp_Empleados_DependienRecord[] getCsp_Empleados_DependienRecordSet()
    {
        return Csp_Empleados_DependienRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Empleados_DependienBlock.writeOperations(...)");

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

        // insert 'block scope' values in CSP_EMPLEADOS_DEPENDIEN.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_EMPLEADOS_DEPENDIEN.
        if (Csp_Empleados_DependienRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Empleados_DependienRecordSet.length; i++)
        {
            Csp_Empleados_DependienRecord record = Csp_Empleados_DependienRecordSet[i];
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
        // read 'block scope' values in CSP_EMPLEADOS_DEPENDIEN.
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
        Csp_Empleados_DependienRecordSet = new Csp_Empleados_DependienRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Empleados_DependienRecord record = new Csp_Empleados_DependienRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Empleados_DependienRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Empleados_DependienBlock */

