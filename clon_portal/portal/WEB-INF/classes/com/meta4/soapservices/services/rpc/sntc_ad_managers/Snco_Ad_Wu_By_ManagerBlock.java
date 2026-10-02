/**
 * Snco_Ad_Wu_By_ManagerBlock.java
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
 * Bean for node Snco_Ad_Wu_By_Manager.
 * @author Meta4
 */
public 
class Snco_Ad_Wu_By_ManagerBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_AD_MANAGERS";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_WU_BY_MANAGER";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_Wu_By_ManagerBlock.class.getName());

    /* item SCO_ID_HR */
    private String sco_Id_Hr = null;
    public void setsco_Id_Hr(String ai_value)
    {
        sco_Id_Hr = ai_value;
    }
    public String getsco_Id_Hr()
    {
        return sco_Id_Hr;
    }

    /* item SCO_DT_END */
    private Calendar sco_Dt_End = null;
    public void setsco_Dt_End(Calendar ai_value)
    {
        sco_Dt_End = ai_value;
    }
    public Calendar getsco_Dt_End()
    {
        return sco_Dt_End;
    }

    /* item SCO_DT_START */
    private Calendar sco_Dt_Start = null;
    public void setsco_Dt_Start(Calendar ai_value)
    {
        sco_Dt_Start = ai_value;
    }
    public Calendar getsco_Dt_Start()
    {
        return sco_Dt_Start;
    }

    /* item SCO_ID_TYPE_RESP */
    private String sco_Id_Type_Resp = null;
    public void setsco_Id_Type_Resp(String ai_value)
    {
        sco_Id_Type_Resp = ai_value;
    }
    public String getsco_Id_Type_Resp()
    {
        return sco_Id_Type_Resp;
    }

    /* item SCO_OR_HR_PERIOD */
    private Double sco_Or_Hr_Period = null;
    public void setsco_Or_Hr_Period(Double ai_value)
    {
        sco_Or_Hr_Period = ai_value;
    }
    public Double getsco_Or_Hr_Period()
    {
        return sco_Or_Hr_Period;
    }

    /* the recordset */
    private Snco_Ad_Wu_By_ManagerRecord[] Snco_Ad_Wu_By_ManagerRecordSet = null;
    public void setSnco_Ad_Wu_By_ManagerRecordSet(Snco_Ad_Wu_By_ManagerRecord[] ai_arg)
    {
        Snco_Ad_Wu_By_ManagerRecordSet = ai_arg;
    }
    public Snco_Ad_Wu_By_ManagerRecord[] getSnco_Ad_Wu_By_ManagerRecordSet()
    {
        return Snco_Ad_Wu_By_ManagerRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_Wu_By_ManagerBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SCO_ID_HR.
        if (sco_Id_Hr != null)
        {
            htItems.put("SCO_ID_HR", M4BusinessMethodArg.toString(sco_Id_Hr));
        }
        // SCO_DT_END.
        if (sco_Dt_End != null)
        {
            htItems.put("SCO_DT_END", M4BusinessMethodArg.toString(sco_Dt_End));
        }
        // SCO_DT_START.
        if (sco_Dt_Start != null)
        {
            htItems.put("SCO_DT_START", M4BusinessMethodArg.toString(sco_Dt_Start));
        }
        // SCO_ID_TYPE_RESP.
        if (sco_Id_Type_Resp != null)
        {
            htItems.put("SCO_ID_TYPE_RESP", M4BusinessMethodArg.toString(sco_Id_Type_Resp));
        }
        // SCO_OR_HR_PERIOD.
		if (sco_Or_Hr_Period != null)
    	{
			htItems.put("SCO_OR_HR_PERIOD", M4BusinessMethodArg.toString(sco_Or_Hr_Period));
    	}


        // insert 'block scope' values in SNCO_AD_WU_BY_MANAGER.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_WU_BY_MANAGER.
        if (Snco_Ad_Wu_By_ManagerRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_Wu_By_ManagerRecordSet.length; i++)
        {
            Snco_Ad_Wu_By_ManagerRecord record = Snco_Ad_Wu_By_ManagerRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_WU_BY_MANAGER.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SCO_ID_HR.
        sItemName = "SCO_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Id_Hr = sItemValue;
        // read SCO_DT_END.
        sItemName = "SCO_DT_END";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Dt_End = M4BusinessMethodArg.toCalendar(sItemValue);
        // read SCO_DT_START.
        sItemName = "SCO_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
        // read SCO_ID_TYPE_RESP.
        sItemName = "SCO_ID_TYPE_RESP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Id_Type_Resp = sItemValue;
        // read SCO_OR_HR_PERIOD.
        sItemName = "SCO_OR_HR_PERIOD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Or_Hr_Period = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_Wu_By_ManagerRecordSet = new Snco_Ad_Wu_By_ManagerRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_Wu_By_ManagerRecord record = new Snco_Ad_Wu_By_ManagerRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_Wu_By_ManagerRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_Wu_By_ManagerBlock */

