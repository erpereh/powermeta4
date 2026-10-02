/**
 * Csp_Estado_EvalBlock.java
 * Self generated code for Bussines Object CSP_ESTADO_PROC.
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
package com.meta4.soapservices.services.rpc.csp_estado_proc;

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
 * Bean for node Csp_Estado_Eval.
 * @author Meta4
 */
public 
class Csp_Estado_EvalBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_ESTADO_PROC";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_ESTADO_EVAL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Estado_EvalBlock.class.getName());

    /* item P_ANIO */
    public String p_Anio = null;
    private void setp_Anio(String ai_value)
    {
        p_Anio = ai_value;
    }
    private String getp_Anio()
    {
        return p_Anio;
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

    /* item P_ID_HR */
    public String p_Id_Hr = null;
    private void setp_Id_Hr(String ai_value)
    {
        p_Id_Hr = ai_value;
    }
    private String getp_Id_Hr()
    {
        return p_Id_Hr;
    }

    /* item P_ANIO_1 */
    public String p_Anio_1 = null;
    private void setp_Anio_1(String ai_value)
    {
        p_Anio_1 = ai_value;
    }
    private String getp_Anio_1()
    {
        return p_Anio_1;
    }

    /* the recordset */
    public Csp_Estado_EvalRecord[] Csp_Estado_EvalRecordSet = null;
    private void setCsp_Estado_EvalRecordSet(Csp_Estado_EvalRecord[] ai_arg)
    {
        Csp_Estado_EvalRecordSet = ai_arg;
    }
    private Csp_Estado_EvalRecord[] getCsp_Estado_EvalRecordSet()
    {
        return Csp_Estado_EvalRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Estado_EvalBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANIO.
        if (p_Anio != null)
        {
            htItems.put("P_ANIO", M4BusinessMethodArg.toString(p_Anio));
        }
        // P_TIPO.
        if (p_Tipo != null)
        {
            htItems.put("P_TIPO", M4BusinessMethodArg.toString(p_Tipo));
        }
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // P_ANIO_1.
        if (p_Anio_1 != null)
        {
            htItems.put("P_ANIO_1", M4BusinessMethodArg.toString(p_Anio_1));
        }

        // insert 'block scope' values in CSP_ESTADO_EVAL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_ESTADO_EVAL.
        if (Csp_Estado_EvalRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Estado_EvalRecordSet.length; i++)
        {
            Csp_Estado_EvalRecord record = Csp_Estado_EvalRecordSet[i];
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
        // read 'block scope' values in CSP_ESTADO_EVAL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANIO.
        sItemName = "P_ANIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anio = sItemValue;
        // read P_TIPO.
        sItemName = "P_TIPO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Tipo = sItemValue;
        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read P_ANIO_1.
        sItemName = "P_ANIO_1";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anio_1 = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Estado_EvalRecordSet = new Csp_Estado_EvalRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Estado_EvalRecord record = new Csp_Estado_EvalRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Estado_EvalRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Estado_EvalBlock */

