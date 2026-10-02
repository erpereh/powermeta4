/**
 * Csp_Plan_AntBlock.java
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
 * Bean for node Csp_Plan_Ant.
 * @author Meta4
 */
public 
class Csp_Plan_AntBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_ESTADO_PROC";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_PLAN_ANT";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Plan_AntBlock.class.getName());

    /* item P_YEAR */
    public String p_Year = null;
    private void setp_Year(String ai_value)
    {
        p_Year = ai_value;
    }
    private String getp_Year()
    {
        return p_Year;
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

    /* the recordset */
    public Csp_Plan_AntRecord[] Csp_Plan_AntRecordSet = null;
    private void setCsp_Plan_AntRecordSet(Csp_Plan_AntRecord[] ai_arg)
    {
        Csp_Plan_AntRecordSet = ai_arg;
    }
    private Csp_Plan_AntRecord[] getCsp_Plan_AntRecordSet()
    {
        return Csp_Plan_AntRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Plan_AntBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_YEAR.
        if (p_Year != null)
        {
            htItems.put("P_YEAR", M4BusinessMethodArg.toString(p_Year));
        }
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }

        // insert 'block scope' values in CSP_PLAN_ANT.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_PLAN_ANT.
        if (Csp_Plan_AntRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Plan_AntRecordSet.length; i++)
        {
            Csp_Plan_AntRecord record = Csp_Plan_AntRecordSet[i];
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
        // read 'block scope' values in CSP_PLAN_ANT.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_YEAR.
        sItemName = "P_YEAR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Year = sItemValue;
        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Plan_AntRecordSet = new Csp_Plan_AntRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Plan_AntRecord record = new Csp_Plan_AntRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Plan_AntRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Plan_AntBlock */

