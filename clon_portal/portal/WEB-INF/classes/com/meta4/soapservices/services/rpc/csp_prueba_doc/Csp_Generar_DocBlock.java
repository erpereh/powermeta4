/**
 * Csp_Generar_DocBlock.java
 * Self generated code for Bussines Object CSP_PRUEBA_DOC.
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
package com.meta4.soapservices.services.rpc.csp_prueba_doc;

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
 * Bean for node Csp_Generar_Doc.
 * @author Meta4
 */
public 
class Csp_Generar_DocBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_PRUEBA_DOC";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_GENERAR_DOC";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Generar_DocBlock.class.getName());

    /* item P_ID_DOC */
    public Double p_Id_Doc = null;
    private void setp_Id_Doc(Double ai_value)
    {
        p_Id_Doc = ai_value;
    }
    private Double getp_Id_Doc()
    {
        return p_Id_Doc;
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

    /* item EXECUTEREALSQL */
    public String executerealsql = null;
    private void setexecuterealsql(String ai_value)
    {
        executerealsql = ai_value;
    }
    private String getexecuterealsql()
    {
        return executerealsql;
    }

    /* the recordset */
    public Csp_Generar_DocRecord[] Csp_Generar_DocRecordSet = null;
    private void setCsp_Generar_DocRecordSet(Csp_Generar_DocRecord[] ai_arg)
    {
        Csp_Generar_DocRecordSet = ai_arg;
    }
    private Csp_Generar_DocRecord[] getCsp_Generar_DocRecordSet()
    {
        return Csp_Generar_DocRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Generar_DocBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_DOC.
		if (p_Id_Doc != null)
    	{
			htItems.put("P_ID_DOC", M4BusinessMethodArg.toString(p_Id_Doc));
    	}

        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }
        // EXECUTEREALSQL.
        if (executerealsql != null)
        {
            htItems.put("EXECUTEREALSQL", M4BusinessMethodArg.toString(executerealsql));
        }

        // insert 'block scope' values in CSP_GENERAR_DOC.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_GENERAR_DOC.
        if (Csp_Generar_DocRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Generar_DocRecordSet.length; i++)
        {
            Csp_Generar_DocRecord record = Csp_Generar_DocRecordSet[i];
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
        // read 'block scope' values in CSP_GENERAR_DOC.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_DOC.
        sItemName = "P_ID_DOC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Doc = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;
        // read EXECUTEREALSQL.
        sItemName = "EXECUTEREALSQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        executerealsql = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Generar_DocRecordSet = new Csp_Generar_DocRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Generar_DocRecord record = new Csp_Generar_DocRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Generar_DocRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Generar_DocBlock */

