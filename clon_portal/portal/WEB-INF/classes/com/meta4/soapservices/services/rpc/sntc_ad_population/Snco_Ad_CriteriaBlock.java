/**
 * Snco_Ad_CriteriaBlock.java
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
 * Bean for node Snco_Ad_Criteria.
 * @author Meta4
 */
public 
class Snco_Ad_CriteriaBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_AD_POPULATION";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_CRITERIA";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_CriteriaBlock.class.getName());

    /* item FIRST_BY_TYPE */
    private Double first_By_Type = null;
    public void setfirst_By_Type(Double ai_value)
    {
        first_By_Type = ai_value;
    }
    public Double getfirst_By_Type()
    {
        return first_By_Type;
    }

    /* item P_SCO_N_CRITERION */
    private String p_Sco_N_Criterion = null;
    public void setp_Sco_N_Criterion(String ai_value)
    {
        p_Sco_N_Criterion = ai_value;
    }
    public String getp_Sco_N_Criterion()
    {
        return p_Sco_N_Criterion;
    }

    /* item SCO_TYPE_PREVIOUS */
    private Double sco_Type_Previous = null;
    public void setsco_Type_Previous(Double ai_value)
    {
        sco_Type_Previous = ai_value;
    }
    public Double getsco_Type_Previous()
    {
        return sco_Type_Previous;
    }

    /* item SCO_ID_POPULATION */
    private String sco_Id_Population = null;
    public void setsco_Id_Population(String ai_value)
    {
        sco_Id_Population = ai_value;
    }
    public String getsco_Id_Population()
    {
        return sco_Id_Population;
    }

    /* the recordset */
    private Snco_Ad_CriteriaRecord[] Snco_Ad_CriteriaRecordSet = null;
    public void setSnco_Ad_CriteriaRecordSet(Snco_Ad_CriteriaRecord[] ai_arg)
    {
        Snco_Ad_CriteriaRecordSet = ai_arg;
    }
    public Snco_Ad_CriteriaRecord[] getSnco_Ad_CriteriaRecordSet()
    {
        return Snco_Ad_CriteriaRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_CriteriaBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // FIRST_BY_TYPE.
		if (first_By_Type != null)
    	{
			htItems.put("FIRST_BY_TYPE", M4BusinessMethodArg.toString(first_By_Type));
    	}

        // P_SCO_N_CRITERION.
        if (p_Sco_N_Criterion != null)
        {
            htItems.put("P_SCO_N_CRITERION", M4BusinessMethodArg.toString(p_Sco_N_Criterion));
        }
        // SCO_TYPE_PREVIOUS.
		if (sco_Type_Previous != null)
    	{
			htItems.put("SCO_TYPE_PREVIOUS", M4BusinessMethodArg.toString(sco_Type_Previous));
    	}

        // SCO_ID_POPULATION.
        if (sco_Id_Population != null)
        {
            htItems.put("SCO_ID_POPULATION", M4BusinessMethodArg.toString(sco_Id_Population));
        }

        // insert 'block scope' values in SNCO_AD_CRITERIA.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_CRITERIA.
        if (Snco_Ad_CriteriaRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_CriteriaRecordSet.length; i++)
        {
            Snco_Ad_CriteriaRecord record = Snco_Ad_CriteriaRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_CRITERIA.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read FIRST_BY_TYPE.
        sItemName = "FIRST_BY_TYPE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        first_By_Type = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_SCO_N_CRITERION.
        sItemName = "P_SCO_N_CRITERION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sco_N_Criterion = sItemValue;
        // read SCO_TYPE_PREVIOUS.
        sItemName = "SCO_TYPE_PREVIOUS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Type_Previous = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read SCO_ID_POPULATION.
        sItemName = "SCO_ID_POPULATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Id_Population = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_CriteriaRecordSet = new Snco_Ad_CriteriaRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_CriteriaRecord record = new Snco_Ad_CriteriaRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_CriteriaRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_CriteriaBlock */

