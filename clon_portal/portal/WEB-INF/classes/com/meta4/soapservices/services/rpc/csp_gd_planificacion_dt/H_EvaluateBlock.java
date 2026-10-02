/**
 * H_EvaluateBlock.java
 * Self generated code for Bussines Object CSP_GD_PLANIFICACION_DT.
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
package com.meta4.soapservices.services.rpc.csp_gd_planificacion_dt;

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
 * Bean for node H_Evaluate.
 * @author Meta4
 */
public 
class H_EvaluateBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GD_PLANIFICACION_DT";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "H_EVALUATE";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(H_EvaluateBlock.class.getName());

    /* item ANNO */
    public Double anno = null;
    private void setanno(Double ai_value)
    {
        anno = ai_value;
    }
    private Double getanno()
    {
        return anno;
    }

    /* item EMPLEADO */
    public String empleado = null;
    private void setempleado(String ai_value)
    {
        empleado = ai_value;
    }
    private String getempleado()
    {
        return empleado;
    }

    /* the recordset */
    public H_EvaluateRecord[] H_EvaluateRecordSet = null;
    private void setH_EvaluateRecordSet(H_EvaluateRecord[] ai_arg)
    {
        H_EvaluateRecordSet = ai_arg;
    }
    private H_EvaluateRecord[] getH_EvaluateRecordSet()
    {
        return H_EvaluateRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("H_EvaluateBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // ANNO.
		if (anno != null)
    	{
			htItems.put("ANNO", M4BusinessMethodArg.toString(anno));
    	}

        // EMPLEADO.
        if (empleado != null)
        {
            htItems.put("EMPLEADO", M4BusinessMethodArg.toString(empleado));
        }

        // insert 'block scope' values in H_EVALUATE.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in H_EVALUATE.
        if (H_EvaluateRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<H_EvaluateRecordSet.length; i++)
        {
            H_EvaluateRecord record = H_EvaluateRecordSet[i];
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
        // read 'block scope' values in H_EVALUATE.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read ANNO.
        sItemName = "ANNO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        anno = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read EMPLEADO.
        sItemName = "EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        H_EvaluateRecordSet = new H_EvaluateRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            H_EvaluateRecord record = new H_EvaluateRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      H_EvaluateRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class H_EvaluateBlock */

