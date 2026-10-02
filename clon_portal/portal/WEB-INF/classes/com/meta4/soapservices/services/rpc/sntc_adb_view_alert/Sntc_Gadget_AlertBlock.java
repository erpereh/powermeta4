/**
 * Sntc_Gadget_AlertBlock.java
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
 * Bean for node Sntc_Gadget_Alert.
 * @author Meta4
 */
public 
class Sntc_Gadget_AlertBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_ADB_VIEW_ALERT";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNTC_GADGET_ALERT";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sntc_Gadget_AlertBlock.class.getName());

    /* item PROP_RSS */
    private String prop_Rss = null;
    public void setprop_Rss(String ai_value)
    {
        prop_Rss = ai_value;
    }
    public String getprop_Rss()
    {
        return prop_Rss;
    }

    /* item PROP_DATA_ALERTS */
    private String prop_Data_Alerts = null;
    public void setprop_Data_Alerts(String ai_value)
    {
        prop_Data_Alerts = ai_value;
    }
    public String getprop_Data_Alerts()
    {
        return prop_Data_Alerts;
    }

    /* the recordset */
    private Sntc_Gadget_AlertRecord[] Sntc_Gadget_AlertRecordSet = null;
    public void setSntc_Gadget_AlertRecordSet(Sntc_Gadget_AlertRecord[] ai_arg)
    {
        Sntc_Gadget_AlertRecordSet = ai_arg;
    }
    public Sntc_Gadget_AlertRecord[] getSntc_Gadget_AlertRecordSet()
    {
        return Sntc_Gadget_AlertRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Sntc_Gadget_AlertBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // PROP_RSS.
        if (prop_Rss != null)
        {
            htItems.put("PROP_RSS", M4BusinessMethodArg.toString(prop_Rss));
        }
        // PROP_DATA_ALERTS.
        if (prop_Data_Alerts != null)
        {
            htItems.put("PROP_DATA_ALERTS", M4BusinessMethodArg.toString(prop_Data_Alerts));
        }

        // insert 'block scope' values in SNTC_GADGET_ALERT.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNTC_GADGET_ALERT.
        if (Sntc_Gadget_AlertRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Sntc_Gadget_AlertRecordSet.length; i++)
        {
            Sntc_Gadget_AlertRecord record = Sntc_Gadget_AlertRecordSet[i];
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
        // read 'block scope' values in SNTC_GADGET_ALERT.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read PROP_RSS.
        sItemName = "PROP_RSS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        prop_Rss = sItemValue;
        // read PROP_DATA_ALERTS.
        sItemName = "PROP_DATA_ALERTS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        prop_Data_Alerts = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Sntc_Gadget_AlertRecordSet = new Sntc_Gadget_AlertRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Sntc_Gadget_AlertRecord record = new Sntc_Gadget_AlertRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Sntc_Gadget_AlertRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Sntc_Gadget_AlertBlock */

