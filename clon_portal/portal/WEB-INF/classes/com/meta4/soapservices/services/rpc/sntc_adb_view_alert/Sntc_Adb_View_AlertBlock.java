/**
 * Sntc_Adb_View_AlertBlock.java
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
 * Bean for node Sntc_Adb_View_Alert.
 * @author Meta4
 */
public 
class Sntc_Adb_View_AlertBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_ADB_VIEW_ALERT";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNTC_ADB_VIEW_ALERT";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sntc_Adb_View_AlertBlock.class.getName());

    /* item PROP_ID_USER */
    private String prop_Id_User = null;
    public void setprop_Id_User(String ai_value)
    {
        prop_Id_User = ai_value;
    }
    public String getprop_Id_User()
    {
        return prop_Id_User;
    }

    /* item PROP_XML_RSS */
    private String prop_Xml_Rss = null;
    public void setprop_Xml_Rss(String ai_value)
    {
        prop_Xml_Rss = ai_value;
    }
    public String getprop_Xml_Rss()
    {
        return prop_Xml_Rss;
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

    /* item PROP_ONLY_ONE_SOC */
    private Double prop_Only_One_Soc = null;
    public void setprop_Only_One_Soc(Double ai_value)
    {
        prop_Only_One_Soc = ai_value;
    }
    public Double getprop_Only_One_Soc()
    {
        return prop_Only_One_Soc;
    }

    /* the recordset */
    private Sntc_Adb_View_AlertRecord[] Sntc_Adb_View_AlertRecordSet = null;
    public void setSntc_Adb_View_AlertRecordSet(Sntc_Adb_View_AlertRecord[] ai_arg)
    {
        Sntc_Adb_View_AlertRecordSet = ai_arg;
    }
    public Sntc_Adb_View_AlertRecord[] getSntc_Adb_View_AlertRecordSet()
    {
        return Sntc_Adb_View_AlertRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Sntc_Adb_View_AlertBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // PROP_ID_USER.
        if (prop_Id_User != null)
        {
            htItems.put("PROP_ID_USER", M4BusinessMethodArg.toString(prop_Id_User));
        }
        // PROP_XML_RSS.
        if (prop_Xml_Rss != null)
        {
            htItems.put("PROP_XML_RSS", M4BusinessMethodArg.toString(prop_Xml_Rss));
        }
        // PROP_DATA_ALERTS.
        if (prop_Data_Alerts != null)
        {
            htItems.put("PROP_DATA_ALERTS", M4BusinessMethodArg.toString(prop_Data_Alerts));
        }
        // PROP_ONLY_ONE_SOC.
		if (prop_Only_One_Soc != null)
    	{
			htItems.put("PROP_ONLY_ONE_SOC", M4BusinessMethodArg.toString(prop_Only_One_Soc));
    	}


        // insert 'block scope' values in SNTC_ADB_VIEW_ALERT.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNTC_ADB_VIEW_ALERT.
        if (Sntc_Adb_View_AlertRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Sntc_Adb_View_AlertRecordSet.length; i++)
        {
            Sntc_Adb_View_AlertRecord record = Sntc_Adb_View_AlertRecordSet[i];
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
        // read 'block scope' values in SNTC_ADB_VIEW_ALERT.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read PROP_ID_USER.
        sItemName = "PROP_ID_USER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        prop_Id_User = sItemValue;
        // read PROP_XML_RSS.
        sItemName = "PROP_XML_RSS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        prop_Xml_Rss = sItemValue;
        // read PROP_DATA_ALERTS.
        sItemName = "PROP_DATA_ALERTS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        prop_Data_Alerts = sItemValue;
        // read PROP_ONLY_ONE_SOC.
        sItemName = "PROP_ONLY_ONE_SOC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        prop_Only_One_Soc = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Sntc_Adb_View_AlertRecordSet = new Sntc_Adb_View_AlertRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Sntc_Adb_View_AlertRecord record = new Sntc_Adb_View_AlertRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Sntc_Adb_View_AlertRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Sntc_Adb_View_AlertBlock */

