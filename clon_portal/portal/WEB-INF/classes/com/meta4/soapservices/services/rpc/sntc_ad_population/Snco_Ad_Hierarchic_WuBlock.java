/**
 * Snco_Ad_Hierarchic_WuBlock.java
 * Self generated code for Bussines Object SNTC_AD_POPULATION.
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
package com.meta4.soapservices.services.rpc.sntc_ad_population;

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
 * Bean for node Snco_Ad_Hierarchic_Wu.
 * @author Meta4
 */
public 
class Snco_Ad_Hierarchic_WuBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_AD_POPULATION";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_HIERARCHIC_WU";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_Hierarchic_WuBlock.class.getName());

    /* item SYS_SENTENCE */
    private String sys_Sentence = null;
    public void setsys_Sentence(String ai_value)
    {
        sys_Sentence = ai_value;
    }
    public String getsys_Sentence()
    {
        return sys_Sentence;
    }

    /* item PROP_FILTER_DATE */
    private Calendar prop_Filter_Date = null;
    public void setprop_Filter_Date(Calendar ai_value)
    {
        prop_Filter_Date = ai_value;
    }
    public Calendar getprop_Filter_Date()
    {
        return prop_Filter_Date;
    }

    /* item INCLUDE_WU_CLOSED */
    private Double include_Wu_Closed = null;
    public void setinclude_Wu_Closed(Double ai_value)
    {
        include_Wu_Closed = ai_value;
    }
    public Double getinclude_Wu_Closed()
    {
        return include_Wu_Closed;
    }

    /* item INCLUDE_WU_CLOSED_TO */
    private Calendar include_Wu_Closed_To = null;
    public void setinclude_Wu_Closed_To(Calendar ai_value)
    {
        include_Wu_Closed_To = ai_value;
    }
    public Calendar getinclude_Wu_Closed_To()
    {
        return include_Wu_Closed_To;
    }

    /* item INCLUDE_WU_CLOSED_FROM */
    private Calendar include_Wu_Closed_From = null;
    public void setinclude_Wu_Closed_From(Calendar ai_value)
    {
        include_Wu_Closed_From = ai_value;
    }
    public Calendar getinclude_Wu_Closed_From()
    {
        return include_Wu_Closed_From;
    }

    /* item SYS_SENTENCE_WU_FILTER_DATES */
    private String sys_Sentence_Wu_Filter_Dates = null;
    public void setsys_Sentence_Wu_Filter_Dates(String ai_value)
    {
        sys_Sentence_Wu_Filter_Dates = ai_value;
    }
    public String getsys_Sentence_Wu_Filter_Dates()
    {
        return sys_Sentence_Wu_Filter_Dates;
    }

    /* the recordset */
    private Snco_Ad_Hierarchic_WuRecord[] Snco_Ad_Hierarchic_WuRecordSet = null;
    public void setSnco_Ad_Hierarchic_WuRecordSet(Snco_Ad_Hierarchic_WuRecord[] ai_arg)
    {
        Snco_Ad_Hierarchic_WuRecordSet = ai_arg;
    }
    public Snco_Ad_Hierarchic_WuRecord[] getSnco_Ad_Hierarchic_WuRecordSet()
    {
        return Snco_Ad_Hierarchic_WuRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_Hierarchic_WuBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SYS_SENTENCE.
        if (sys_Sentence != null)
        {
            htItems.put("SYS_SENTENCE", M4BusinessMethodArg.toString(sys_Sentence));
        }
        // PROP_FILTER_DATE.
        if (prop_Filter_Date != null)
        {
            htItems.put("PROP_FILTER_DATE", M4BusinessMethodArg.toString(prop_Filter_Date));
        }
        // INCLUDE_WU_CLOSED.
		if (include_Wu_Closed != null)
    	{
			htItems.put("INCLUDE_WU_CLOSED", M4BusinessMethodArg.toString(include_Wu_Closed));
    	}

        // INCLUDE_WU_CLOSED_TO.
        if (include_Wu_Closed_To != null)
        {
            htItems.put("INCLUDE_WU_CLOSED_TO", M4BusinessMethodArg.toString(include_Wu_Closed_To));
        }
        // INCLUDE_WU_CLOSED_FROM.
        if (include_Wu_Closed_From != null)
        {
            htItems.put("INCLUDE_WU_CLOSED_FROM", M4BusinessMethodArg.toString(include_Wu_Closed_From));
        }
        // SYS_SENTENCE_WU_FILTER_DATES.
        if (sys_Sentence_Wu_Filter_Dates != null)
        {
            htItems.put("SYS_SENTENCE_WU_FILTER_DATES", M4BusinessMethodArg.toString(sys_Sentence_Wu_Filter_Dates));
        }

        // insert 'block scope' values in SNCO_AD_HIERARCHIC_WU.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_HIERARCHIC_WU.
        if (Snco_Ad_Hierarchic_WuRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_Hierarchic_WuRecordSet.length; i++)
        {
            Snco_Ad_Hierarchic_WuRecord record = Snco_Ad_Hierarchic_WuRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_HIERARCHIC_WU.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SYS_SENTENCE.
        sItemName = "SYS_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence = sItemValue;
        // read PROP_FILTER_DATE.
        sItemName = "PROP_FILTER_DATE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        prop_Filter_Date = M4BusinessMethodArg.toCalendar(sItemValue);
        // read INCLUDE_WU_CLOSED.
        sItemName = "INCLUDE_WU_CLOSED";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        include_Wu_Closed = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read INCLUDE_WU_CLOSED_TO.
        sItemName = "INCLUDE_WU_CLOSED_TO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        include_Wu_Closed_To = M4BusinessMethodArg.toCalendar(sItemValue);
        // read INCLUDE_WU_CLOSED_FROM.
        sItemName = "INCLUDE_WU_CLOSED_FROM";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        include_Wu_Closed_From = M4BusinessMethodArg.toCalendar(sItemValue);
        // read SYS_SENTENCE_WU_FILTER_DATES.
        sItemName = "SYS_SENTENCE_WU_FILTER_DATES";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_Wu_Filter_Dates = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_Hierarchic_WuRecordSet = new Snco_Ad_Hierarchic_WuRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_Hierarchic_WuRecord record = new Snco_Ad_Hierarchic_WuRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_Hierarchic_WuRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_Hierarchic_WuBlock */

