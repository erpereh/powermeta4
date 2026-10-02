/**
 * Snco_Ad_Ic_Knoledge_LevelBlock.java
 * Self generated code for Bussines Object SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
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
package com.meta4.soapservices.services.rpc.snco_ad_ic_knwld_lv_translator;

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
 * Bean for node Snco_Ad_Ic_Knoledge_Level.
 * @author Meta4
 */
public 
class Snco_Ad_Ic_Knoledge_LevelBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNCO_AD_IC_KNWLD_LV_TRANSLATOR";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_IC_KNOLEDGE_LEVEL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_Ic_Knoledge_LevelBlock.class.getName());

    /* item AD_IC_DATE_TO_FILTER */
    private Calendar ad_Ic_Date_To_Filter = null;
    public void setad_Ic_Date_To_Filter(Calendar ai_value)
    {
        ad_Ic_Date_To_Filter = ai_value;
    }
    public Calendar getad_Ic_Date_To_Filter()
    {
        return ad_Ic_Date_To_Filter;
    }

    /* item AD_IC_COMPETENCE_TO_FILTER */
    private String ad_Ic_Competence_To_Filter = null;
    public void setad_Ic_Competence_To_Filter(String ai_value)
    {
        ad_Ic_Competence_To_Filter = ai_value;
    }
    public String getad_Ic_Competence_To_Filter()
    {
        return ad_Ic_Competence_To_Filter;
    }

    /* the recordset */
    private Snco_Ad_Ic_Knoledge_LevelRecord[] Snco_Ad_Ic_Knoledge_LevelRecordSet = null;
    public void setSnco_Ad_Ic_Knoledge_LevelRecordSet(Snco_Ad_Ic_Knoledge_LevelRecord[] ai_arg)
    {
        Snco_Ad_Ic_Knoledge_LevelRecordSet = ai_arg;
    }
    public Snco_Ad_Ic_Knoledge_LevelRecord[] getSnco_Ad_Ic_Knoledge_LevelRecordSet()
    {
        return Snco_Ad_Ic_Knoledge_LevelRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_Ic_Knoledge_LevelBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // AD_IC_DATE_TO_FILTER.
        if (ad_Ic_Date_To_Filter != null)
        {
            htItems.put("AD_IC_DATE_TO_FILTER", M4BusinessMethodArg.toString(ad_Ic_Date_To_Filter));
        }
        // AD_IC_COMPETENCE_TO_FILTER.
        if (ad_Ic_Competence_To_Filter != null)
        {
            htItems.put("AD_IC_COMPETENCE_TO_FILTER", M4BusinessMethodArg.toString(ad_Ic_Competence_To_Filter));
        }

        // insert 'block scope' values in SNCO_AD_IC_KNOLEDGE_LEVEL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_IC_KNOLEDGE_LEVEL.
        if (Snco_Ad_Ic_Knoledge_LevelRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_Ic_Knoledge_LevelRecordSet.length; i++)
        {
            Snco_Ad_Ic_Knoledge_LevelRecord record = Snco_Ad_Ic_Knoledge_LevelRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_IC_KNOLEDGE_LEVEL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read AD_IC_DATE_TO_FILTER.
        sItemName = "AD_IC_DATE_TO_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        ad_Ic_Date_To_Filter = M4BusinessMethodArg.toCalendar(sItemValue);
        // read AD_IC_COMPETENCE_TO_FILTER.
        sItemName = "AD_IC_COMPETENCE_TO_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        ad_Ic_Competence_To_Filter = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_Ic_Knoledge_LevelRecordSet = new Snco_Ad_Ic_Knoledge_LevelRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_Ic_Knoledge_LevelRecord record = new Snco_Ad_Ic_Knoledge_LevelRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_Ic_Knoledge_LevelRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_Ic_Knoledge_LevelBlock */

