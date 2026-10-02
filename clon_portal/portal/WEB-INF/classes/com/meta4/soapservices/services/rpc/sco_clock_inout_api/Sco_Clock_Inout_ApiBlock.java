/**
 * Sco_Clock_Inout_ApiBlock.java
 * Self generated code for Bussines Object SCO_CLOCK_INOUT_API.
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
package com.meta4.soapservices.services.rpc.sco_clock_inout_api;

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
 * Bean for node Sco_Clock_Inout_Api.
 * @author Meta4
 */
public 
class Sco_Clock_Inout_ApiBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SCO_CLOCK_INOUT_API";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SCO_CLOCK_INOUT_API";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sco_Clock_Inout_ApiBlock.class.getName());

    /* item SCO_RET__MSG */
    public String sco_Ret__Msg = null;
    private void setsco_Ret__Msg(String ai_value)
    {
        sco_Ret__Msg = ai_value;
    }
    private String getsco_Ret__Msg()
    {
        return sco_Ret__Msg;
    }

    /* item SCO_RET__CLOCK_ALLOWED */
    public Double sco_Ret__Clock_Allowed = null;
    private void setsco_Ret__Clock_Allowed(Double ai_value)
    {
        sco_Ret__Clock_Allowed = ai_value;
    }
    private Double getsco_Ret__Clock_Allowed()
    {
        return sco_Ret__Clock_Allowed;
    }

    /* the recordset */
    public Sco_Clock_Inout_ApiRecord[] Sco_Clock_Inout_ApiRecordSet = null;
    private void setSco_Clock_Inout_ApiRecordSet(Sco_Clock_Inout_ApiRecord[] ai_arg)
    {
        Sco_Clock_Inout_ApiRecordSet = ai_arg;
    }
    private Sco_Clock_Inout_ApiRecord[] getSco_Clock_Inout_ApiRecordSet()
    {
        return Sco_Clock_Inout_ApiRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Sco_Clock_Inout_ApiBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SCO_RET__MSG.
        if (sco_Ret__Msg != null)
        {
            htItems.put("SCO_RET__MSG", M4BusinessMethodArg.toString(sco_Ret__Msg));
        }
        // SCO_RET__CLOCK_ALLOWED.
		if (sco_Ret__Clock_Allowed != null)
    	{
			htItems.put("SCO_RET__CLOCK_ALLOWED", M4BusinessMethodArg.toString(sco_Ret__Clock_Allowed));
    	}


        // insert 'block scope' values in SCO_CLOCK_INOUT_API.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SCO_CLOCK_INOUT_API.
        if (Sco_Clock_Inout_ApiRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Sco_Clock_Inout_ApiRecordSet.length; i++)
        {
            Sco_Clock_Inout_ApiRecord record = Sco_Clock_Inout_ApiRecordSet[i];
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
        // read 'block scope' values in SCO_CLOCK_INOUT_API.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SCO_RET__MSG.
        sItemName = "SCO_RET__MSG";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Ret__Msg = sItemValue;
        // read SCO_RET__CLOCK_ALLOWED.
        sItemName = "SCO_RET__CLOCK_ALLOWED";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Ret__Clock_Allowed = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Sco_Clock_Inout_ApiRecordSet = new Sco_Clock_Inout_ApiRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Sco_Clock_Inout_ApiRecord record = new Sco_Clock_Inout_ApiRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Sco_Clock_Inout_ApiRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Sco_Clock_Inout_ApiBlock */

