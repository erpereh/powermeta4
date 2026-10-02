/**
 * Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.java
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
 * Bean for node Snco_Ad_Ic_Knwld_Lv_Translator.
 * @author Meta4
 */
public 
class Snco_Ad_Ic_Knwld_Lv_TranslatorBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNCO_AD_IC_KNWLD_LV_TRANSLATOR";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_IC_KNWLD_LV_TRANSLATOR";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.class.getName());

    /* item AD_IC_RETURN_VALUE */
    private String ad_Ic_Return_Value = null;
    public void setad_Ic_Return_Value(String ai_value)
    {
        ad_Ic_Return_Value = ai_value;
    }
    public String getad_Ic_Return_Value()
    {
        return ad_Ic_Return_Value;
    }

    /* the recordset */
    private Snco_Ad_Ic_Knwld_Lv_TranslatorRecord[] Snco_Ad_Ic_Knwld_Lv_TranslatorRecordSet = null;
    public void setSnco_Ad_Ic_Knwld_Lv_TranslatorRecordSet(Snco_Ad_Ic_Knwld_Lv_TranslatorRecord[] ai_arg)
    {
        Snco_Ad_Ic_Knwld_Lv_TranslatorRecordSet = ai_arg;
    }
    public Snco_Ad_Ic_Knwld_Lv_TranslatorRecord[] getSnco_Ad_Ic_Knwld_Lv_TranslatorRecordSet()
    {
        return Snco_Ad_Ic_Knwld_Lv_TranslatorRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_Ic_Knwld_Lv_TranslatorBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // AD_IC_RETURN_VALUE.
        if (ad_Ic_Return_Value != null)
        {
            htItems.put("AD_IC_RETURN_VALUE", M4BusinessMethodArg.toString(ad_Ic_Return_Value));
        }

        // insert 'block scope' values in SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
        if (Snco_Ad_Ic_Knwld_Lv_TranslatorRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_Ic_Knwld_Lv_TranslatorRecordSet.length; i++)
        {
            Snco_Ad_Ic_Knwld_Lv_TranslatorRecord record = Snco_Ad_Ic_Knwld_Lv_TranslatorRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read AD_IC_RETURN_VALUE.
        sItemName = "AD_IC_RETURN_VALUE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        ad_Ic_Return_Value = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_Ic_Knwld_Lv_TranslatorRecordSet = new Snco_Ad_Ic_Knwld_Lv_TranslatorRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_Ic_Knwld_Lv_TranslatorRecord record = new Snco_Ad_Ic_Knwld_Lv_TranslatorRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_Ic_Knwld_Lv_TranslatorRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_Ic_Knwld_Lv_TranslatorBlock */

