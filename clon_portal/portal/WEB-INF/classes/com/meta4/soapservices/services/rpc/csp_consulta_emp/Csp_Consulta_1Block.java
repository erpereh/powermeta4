/**
 * Csp_Consulta_1Block.java
 * Self generated code for Bussines Object CSP_CONSULTA_EMP.
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
package com.meta4.soapservices.services.rpc.csp_consulta_emp;

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
 * Bean for node Csp_Consulta_1.
 * @author Meta4
 */
public 
class Csp_Consulta_1Block 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_CONSULTA_EMP";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CONSULTA_1";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_1Block.class.getName());

    /* item P_EMP */
    public String p_Emp = null;
    private void setp_Emp(String ai_value)
    {
        p_Emp = ai_value;
    }
    private String getp_Emp()
    {
        return p_Emp;
    }

    /* item P_SOC */
    public String p_Soc = null;
    private void setp_Soc(String ai_value)
    {
        p_Soc = ai_value;
    }
    private String getp_Soc()
    {
        return p_Soc;
    }

    /* the recordset */
    public Csp_Consulta_1Record[] Csp_Consulta_1RecordSet = null;
    private void setCsp_Consulta_1RecordSet(Csp_Consulta_1Record[] ai_arg)
    {
        Csp_Consulta_1RecordSet = ai_arg;
    }
    private Csp_Consulta_1Record[] getCsp_Consulta_1RecordSet()
    {
        return Csp_Consulta_1RecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Consulta_1Block.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_EMP.
        if (p_Emp != null)
        {
            htItems.put("P_EMP", M4BusinessMethodArg.toString(p_Emp));
        }
        // P_SOC.
        if (p_Soc != null)
        {
            htItems.put("P_SOC", M4BusinessMethodArg.toString(p_Soc));
        }

        // insert 'block scope' values in CSP_CONSULTA_1.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CONSULTA_1.
        if (Csp_Consulta_1RecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Consulta_1RecordSet.length; i++)
        {
            Csp_Consulta_1Record record = Csp_Consulta_1RecordSet[i];
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
        // read 'block scope' values in CSP_CONSULTA_1.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_EMP.
        sItemName = "P_EMP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Emp = sItemValue;
        // read P_SOC.
        sItemName = "P_SOC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Soc = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Consulta_1RecordSet = new Csp_Consulta_1Record[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Consulta_1Record record = new Csp_Consulta_1Record();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Consulta_1RecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Consulta_1Block */

