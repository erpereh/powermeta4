/**
 * Snco_Ad_Wu_ObjectivesBlock.java
 * Self generated code for Bussines Object SNTC_AD_MANAGERS.
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
package com.meta4.soapservices.services.rpc.sntc_ad_managers;

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
 * Bean for node Snco_Ad_Wu_Objectives.
 * @author Meta4
 */
public 
class Snco_Ad_Wu_ObjectivesBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_AD_MANAGERS";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_WU_OBJECTIVES";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_Wu_ObjectivesBlock.class.getName());

    /* item LABEL_AND */
    private String label_And = null;
    public void setlabel_And(String ai_value)
    {
        label_And = ai_value;
    }
    public String getlabel_And()
    {
        return label_And;
    }

    /* item DATE_FILTER */
    private Calendar date_Filter = null;
    public void setdate_Filter(Calendar ai_value)
    {
        date_Filter = ai_value;
    }
    public Calendar getdate_Filter()
    {
        return date_Filter;
    }

    /* item LABEL_FOR_PERCENTAGE */
    private String label_For_Percentage = null;
    public void setlabel_For_Percentage(String ai_value)
    {
        label_For_Percentage = ai_value;
    }
    public String getlabel_For_Percentage()
    {
        return label_For_Percentage;
    }

    /* item STD_ID_WORK_UNIT */
    private String std_Id_Work_Unit = null;
    public void setstd_Id_Work_Unit(String ai_value)
    {
        std_Id_Work_Unit = ai_value;
    }
    public String getstd_Id_Work_Unit()
    {
        return std_Id_Work_Unit;
    }

    /* the recordset */
    private Snco_Ad_Wu_ObjectivesRecord[] Snco_Ad_Wu_ObjectivesRecordSet = null;
    public void setSnco_Ad_Wu_ObjectivesRecordSet(Snco_Ad_Wu_ObjectivesRecord[] ai_arg)
    {
        Snco_Ad_Wu_ObjectivesRecordSet = ai_arg;
    }
    public Snco_Ad_Wu_ObjectivesRecord[] getSnco_Ad_Wu_ObjectivesRecordSet()
    {
        return Snco_Ad_Wu_ObjectivesRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_Wu_ObjectivesBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // LABEL_AND.
        if (label_And != null)
        {
            htItems.put("LABEL_AND", M4BusinessMethodArg.toString(label_And));
        }
        // DATE_FILTER.
        if (date_Filter != null)
        {
            htItems.put("DATE_FILTER", M4BusinessMethodArg.toString(date_Filter));
        }
        // LABEL_FOR_PERCENTAGE.
        if (label_For_Percentage != null)
        {
            htItems.put("LABEL_FOR_PERCENTAGE", M4BusinessMethodArg.toString(label_For_Percentage));
        }
        // STD_ID_WORK_UNIT.
        if (std_Id_Work_Unit != null)
        {
            htItems.put("STD_ID_WORK_UNIT", M4BusinessMethodArg.toString(std_Id_Work_Unit));
        }

        // insert 'block scope' values in SNCO_AD_WU_OBJECTIVES.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_WU_OBJECTIVES.
        if (Snco_Ad_Wu_ObjectivesRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_Wu_ObjectivesRecordSet.length; i++)
        {
            Snco_Ad_Wu_ObjectivesRecord record = Snco_Ad_Wu_ObjectivesRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_WU_OBJECTIVES.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read LABEL_AND.
        sItemName = "LABEL_AND";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        label_And = sItemValue;
        // read DATE_FILTER.
        sItemName = "DATE_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        date_Filter = M4BusinessMethodArg.toCalendar(sItemValue);
        // read LABEL_FOR_PERCENTAGE.
        sItemName = "LABEL_FOR_PERCENTAGE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        label_For_Percentage = sItemValue;
        // read STD_ID_WORK_UNIT.
        sItemName = "STD_ID_WORK_UNIT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        std_Id_Work_Unit = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_Wu_ObjectivesRecordSet = new Snco_Ad_Wu_ObjectivesRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_Wu_ObjectivesRecord record = new Snco_Ad_Wu_ObjectivesRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_Wu_ObjectivesRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_Wu_ObjectivesBlock */

