/**
 * Sntc_Adb_View_Alert_PropsBlock.java
 * Self generated code for Bussines Object SNTC_ADB_VIEW_ALERT.
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
package com.meta4.soapservices.services.rpc.sntc_adb_view_alert;

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
 * Bean for node Sntc_Adb_View_Alert_Props.
 * @author Meta4
 */
public 
class Sntc_Adb_View_Alert_PropsBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_ADB_VIEW_ALERT";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNTC_ADB_VIEW_ALERT_PROPS";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sntc_Adb_View_Alert_PropsBlock.class.getName());

    /* item ID_BPC */
    private Double id_Bpc = null;
    public void setid_Bpc(Double ai_value)
    {
        id_Bpc = ai_value;
    }
    public Double getid_Bpc()
    {
        return id_Bpc;
    }

    /* item ID_BPO */
    private String id_Bpo = null;
    public void setid_Bpo(String ai_value)
    {
        id_Bpo = ai_value;
    }
    public String getid_Bpo()
    {
        return id_Bpo;
    }

    /* the recordset */
    private Sntc_Adb_View_Alert_PropsRecord[] Sntc_Adb_View_Alert_PropsRecordSet = null;
    public void setSntc_Adb_View_Alert_PropsRecordSet(Sntc_Adb_View_Alert_PropsRecord[] ai_arg)
    {
        Sntc_Adb_View_Alert_PropsRecordSet = ai_arg;
    }
    public Sntc_Adb_View_Alert_PropsRecord[] getSntc_Adb_View_Alert_PropsRecordSet()
    {
        return Sntc_Adb_View_Alert_PropsRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Sntc_Adb_View_Alert_PropsBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // ID_BPC.
		if (id_Bpc != null)
    	{
			htItems.put("ID_BPC", M4BusinessMethodArg.toString(id_Bpc));
    	}

        // ID_BPO.
        if (id_Bpo != null)
        {
            htItems.put("ID_BPO", M4BusinessMethodArg.toString(id_Bpo));
        }

        // insert 'block scope' values in SNTC_ADB_VIEW_ALERT_PROPS.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNTC_ADB_VIEW_ALERT_PROPS.
        if (Sntc_Adb_View_Alert_PropsRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Sntc_Adb_View_Alert_PropsRecordSet.length; i++)
        {
            Sntc_Adb_View_Alert_PropsRecord record = Sntc_Adb_View_Alert_PropsRecordSet[i];
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
        // read 'block scope' values in SNTC_ADB_VIEW_ALERT_PROPS.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read ID_BPC.
        sItemName = "ID_BPC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Bpc = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read ID_BPO.
        sItemName = "ID_BPO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Bpo = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Sntc_Adb_View_Alert_PropsRecordSet = new Sntc_Adb_View_Alert_PropsRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Sntc_Adb_View_Alert_PropsRecord record = new Sntc_Adb_View_Alert_PropsRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Sntc_Adb_View_Alert_PropsRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Sntc_Adb_View_Alert_PropsBlock */

