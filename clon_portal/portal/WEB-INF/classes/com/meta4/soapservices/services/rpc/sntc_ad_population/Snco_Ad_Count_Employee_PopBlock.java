/**
 * Snco_Ad_Count_Employee_PopBlock.java
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
 * Bean for node Snco_Ad_Count_Employee_Pop.
 * @author Meta4
 */
public 
class Snco_Ad_Count_Employee_PopBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_AD_POPULATION";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_COUNT_EMPLOYEE_POP";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_Count_Employee_PopBlock.class.getName());

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

    /* item SCO_FILTER_DATE */
    private String sco_Filter_Date = null;
    public void setsco_Filter_Date(String ai_value)
    {
        sco_Filter_Date = ai_value;
    }
    public String getsco_Filter_Date()
    {
        return sco_Filter_Date;
    }

    /* the recordset */
    private Snco_Ad_Count_Employee_PopRecord[] Snco_Ad_Count_Employee_PopRecordSet = null;
    public void setSnco_Ad_Count_Employee_PopRecordSet(Snco_Ad_Count_Employee_PopRecord[] ai_arg)
    {
        Snco_Ad_Count_Employee_PopRecordSet = ai_arg;
    }
    public Snco_Ad_Count_Employee_PopRecord[] getSnco_Ad_Count_Employee_PopRecordSet()
    {
        return Snco_Ad_Count_Employee_PopRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_Count_Employee_PopBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SYS_SENTENCE.
        if (sys_Sentence != null)
        {
            htItems.put("SYS_SENTENCE", M4BusinessMethodArg.toString(sys_Sentence));
        }
        // SCO_FILTER_DATE.
        if (sco_Filter_Date != null)
        {
            htItems.put("SCO_FILTER_DATE", M4BusinessMethodArg.toString(sco_Filter_Date));
        }

        // insert 'block scope' values in SNCO_AD_COUNT_EMPLOYEE_POP.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_COUNT_EMPLOYEE_POP.
        if (Snco_Ad_Count_Employee_PopRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_Count_Employee_PopRecordSet.length; i++)
        {
            Snco_Ad_Count_Employee_PopRecord record = Snco_Ad_Count_Employee_PopRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_COUNT_EMPLOYEE_POP.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SYS_SENTENCE.
        sItemName = "SYS_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence = sItemValue;
        // read SCO_FILTER_DATE.
        sItemName = "SCO_FILTER_DATE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Filter_Date = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_Count_Employee_PopRecordSet = new Snco_Ad_Count_Employee_PopRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_Count_Employee_PopRecord record = new Snco_Ad_Count_Employee_PopRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_Count_Employee_PopRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_Count_Employee_PopBlock */

