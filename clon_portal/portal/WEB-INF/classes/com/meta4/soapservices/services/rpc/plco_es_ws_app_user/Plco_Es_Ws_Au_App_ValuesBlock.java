/**
 * Plco_Es_Ws_Au_App_ValuesBlock.java
 * Self generated code for Bussines Object PLCO_ES_WS_APP_USER.
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
package com.meta4.soapservices.services.rpc.plco_es_ws_app_user;

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
 * Bean for node Plco_Es_Ws_Au_App_Values.
 * @author Meta4
 */
public 
class Plco_Es_Ws_Au_App_ValuesBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "PLCO_ES_WS_APP_USER";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "PLCO_ES_WS_AU_APP_VALUES";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Plco_Es_Ws_Au_App_ValuesBlock.class.getName());

    /* item PLCO_MAIL_TO */
    public String plco_Mail_To = null;
    private void setplco_Mail_To(String ai_value)
    {
        plco_Mail_To = ai_value;
    }
    private String getplco_Mail_To()
    {
        return plco_Mail_To;
    }

    /* item PLCO_ID_DOMAIN */
    public String plco_Id_Domain = null;
    private void setplco_Id_Domain(String ai_value)
    {
        plco_Id_Domain = ai_value;
    }
    private String getplco_Id_Domain()
    {
        return plco_Id_Domain;
    }

    /* item PLCO_MAIL_FROM */
    public String plco_Mail_From = null;
    private void setplco_Mail_From(String ai_value)
    {
        plco_Mail_From = ai_value;
    }
    private String getplco_Mail_From()
    {
        return plco_Mail_From;
    }

    /* item PLCO_MAIL_TYPE */
    public String plco_Mail_Type = null;
    private void setplco_Mail_Type(String ai_value)
    {
        plco_Mail_Type = ai_value;
    }
    private String getplco_Mail_Type()
    {
        return plco_Mail_Type;
    }

    /* item PLCO_ID_TASK_JS */
    public Double plco_Id_Task_Js = null;
    private void setplco_Id_Task_Js(Double ai_value)
    {
        plco_Id_Task_Js = ai_value;
    }
    private Double getplco_Id_Task_Js()
    {
        return plco_Id_Task_Js;
    }

    /* item PLCO_USER_PREFIX */
    public String plco_User_Prefix = null;
    private void setplco_User_Prefix(String ai_value)
    {
        plco_User_Prefix = ai_value;
    }
    private String getplco_User_Prefix()
    {
        return plco_User_Prefix;
    }

    /* item PLCO_ID_USER_TYPE */
    public String plco_Id_User_Type = null;
    private void setplco_Id_User_Type(String ai_value)
    {
        plco_Id_User_Type = ai_value;
    }
    private String getplco_Id_User_Type()
    {
        return plco_Id_User_Type;
    }

    /* item PLCO_IND_PULL_USERS */
    public Double plco_Ind_Pull_Users = null;
    private void setplco_Ind_Pull_Users(Double ai_value)
    {
        plco_Ind_Pull_Users = ai_value;
    }
    private Double getplco_Ind_Pull_Users()
    {
        return plco_Ind_Pull_Users;
    }

    /* item PLCO_MAIL_ID_TEMPLATE */
    public String plco_Mail_Id_Template = null;
    private void setplco_Mail_Id_Template(String ai_value)
    {
        plco_Mail_Id_Template = ai_value;
    }
    private String getplco_Mail_Id_Template()
    {
        return plco_Mail_Id_Template;
    }

    /* item PLCO_TASK_JS_TIME_RULE */
    public String plco_Task_Js_Time_Rule = null;
    private void setplco_Task_Js_Time_Rule(String ai_value)
    {
        plco_Task_Js_Time_Rule = ai_value;
    }
    private String getplco_Task_Js_Time_Rule()
    {
        return plco_Task_Js_Time_Rule;
    }

    /* item PLCO_MAX_WAITING_PERIOD */
    public Double plco_Max_Waiting_Period = null;
    private void setplco_Max_Waiting_Period(Double ai_value)
    {
        plco_Max_Waiting_Period = ai_value;
    }
    private Double getplco_Max_Waiting_Period()
    {
        return plco_Max_Waiting_Period;
    }

    /* item PLCO_ID_TASK_JS_USER_SYNC */
    public Double plco_Id_Task_Js_User_Sync = null;
    private void setplco_Id_Task_Js_User_Sync(Double ai_value)
    {
        plco_Id_Task_Js_User_Sync = ai_value;
    }
    private Double getplco_Id_Task_Js_User_Sync()
    {
        return plco_Id_Task_Js_User_Sync;
    }

    /* item PLCO_ID_COMMON_ORGANIZATION */
    public String plco_Id_Common_Organization = null;
    private void setplco_Id_Common_Organization(String ai_value)
    {
        plco_Id_Common_Organization = ai_value;
    }
    private String getplco_Id_Common_Organization()
    {
        return plco_Id_Common_Organization;
    }

    /* item PLCO_MAX_CALCULATION_PERIOD */
    public Double plco_Max_Calculation_Period = null;
    private void setplco_Max_Calculation_Period(Double ai_value)
    {
        plco_Max_Calculation_Period = ai_value;
    }
    private Double getplco_Max_Calculation_Period()
    {
        return plco_Max_Calculation_Period;
    }

    /* the recordset */
    public Plco_Es_Ws_Au_App_ValuesRecord[] Plco_Es_Ws_Au_App_ValuesRecordSet = null;
    private void setPlco_Es_Ws_Au_App_ValuesRecordSet(Plco_Es_Ws_Au_App_ValuesRecord[] ai_arg)
    {
        Plco_Es_Ws_Au_App_ValuesRecordSet = ai_arg;
    }
    private Plco_Es_Ws_Au_App_ValuesRecord[] getPlco_Es_Ws_Au_App_ValuesRecordSet()
    {
        return Plco_Es_Ws_Au_App_ValuesRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Plco_Es_Ws_Au_App_ValuesBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // PLCO_MAIL_TO.
        if (plco_Mail_To != null)
        {
            htItems.put("PLCO_MAIL_TO", M4BusinessMethodArg.toString(plco_Mail_To));
        }
        // PLCO_ID_DOMAIN.
        if (plco_Id_Domain != null)
        {
            htItems.put("PLCO_ID_DOMAIN", M4BusinessMethodArg.toString(plco_Id_Domain));
        }
        // PLCO_MAIL_FROM.
        if (plco_Mail_From != null)
        {
            htItems.put("PLCO_MAIL_FROM", M4BusinessMethodArg.toString(plco_Mail_From));
        }
        // PLCO_MAIL_TYPE.
        if (plco_Mail_Type != null)
        {
            htItems.put("PLCO_MAIL_TYPE", M4BusinessMethodArg.toString(plco_Mail_Type));
        }
        // PLCO_ID_TASK_JS.
		if (plco_Id_Task_Js != null)
    	{
			htItems.put("PLCO_ID_TASK_JS", M4BusinessMethodArg.toString(plco_Id_Task_Js));
    	}

        // PLCO_USER_PREFIX.
        if (plco_User_Prefix != null)
        {
            htItems.put("PLCO_USER_PREFIX", M4BusinessMethodArg.toString(plco_User_Prefix));
        }
        // PLCO_ID_USER_TYPE.
        if (plco_Id_User_Type != null)
        {
            htItems.put("PLCO_ID_USER_TYPE", M4BusinessMethodArg.toString(plco_Id_User_Type));
        }
        // PLCO_IND_PULL_USERS.
		if (plco_Ind_Pull_Users != null)
    	{
			htItems.put("PLCO_IND_PULL_USERS", M4BusinessMethodArg.toString(plco_Ind_Pull_Users));
    	}

        // PLCO_MAIL_ID_TEMPLATE.
        if (plco_Mail_Id_Template != null)
        {
            htItems.put("PLCO_MAIL_ID_TEMPLATE", M4BusinessMethodArg.toString(plco_Mail_Id_Template));
        }
        // PLCO_TASK_JS_TIME_RULE.
        if (plco_Task_Js_Time_Rule != null)
        {
            htItems.put("PLCO_TASK_JS_TIME_RULE", M4BusinessMethodArg.toString(plco_Task_Js_Time_Rule));
        }
        // PLCO_MAX_WAITING_PERIOD.
		if (plco_Max_Waiting_Period != null)
    	{
			htItems.put("PLCO_MAX_WAITING_PERIOD", M4BusinessMethodArg.toString(plco_Max_Waiting_Period));
    	}

        // PLCO_ID_TASK_JS_USER_SYNC.
		if (plco_Id_Task_Js_User_Sync != null)
    	{
			htItems.put("PLCO_ID_TASK_JS_USER_SYNC", M4BusinessMethodArg.toString(plco_Id_Task_Js_User_Sync));
    	}

        // PLCO_ID_COMMON_ORGANIZATION.
        if (plco_Id_Common_Organization != null)
        {
            htItems.put("PLCO_ID_COMMON_ORGANIZATION", M4BusinessMethodArg.toString(plco_Id_Common_Organization));
        }
        // PLCO_MAX_CALCULATION_PERIOD.
		if (plco_Max_Calculation_Period != null)
    	{
			htItems.put("PLCO_MAX_CALCULATION_PERIOD", M4BusinessMethodArg.toString(plco_Max_Calculation_Period));
    	}


        // insert 'block scope' values in PLCO_ES_WS_AU_APP_VALUES.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in PLCO_ES_WS_AU_APP_VALUES.
        if (Plco_Es_Ws_Au_App_ValuesRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Plco_Es_Ws_Au_App_ValuesRecordSet.length; i++)
        {
            Plco_Es_Ws_Au_App_ValuesRecord record = Plco_Es_Ws_Au_App_ValuesRecordSet[i];
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
        // read 'block scope' values in PLCO_ES_WS_AU_APP_VALUES.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read PLCO_MAIL_TO.
        sItemName = "PLCO_MAIL_TO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Mail_To = sItemValue;
        // read PLCO_ID_DOMAIN.
        sItemName = "PLCO_ID_DOMAIN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Id_Domain = sItemValue;
        // read PLCO_MAIL_FROM.
        sItemName = "PLCO_MAIL_FROM";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Mail_From = sItemValue;
        // read PLCO_MAIL_TYPE.
        sItemName = "PLCO_MAIL_TYPE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Mail_Type = sItemValue;
        // read PLCO_ID_TASK_JS.
        sItemName = "PLCO_ID_TASK_JS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Id_Task_Js = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read PLCO_USER_PREFIX.
        sItemName = "PLCO_USER_PREFIX";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_User_Prefix = sItemValue;
        // read PLCO_ID_USER_TYPE.
        sItemName = "PLCO_ID_USER_TYPE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Id_User_Type = sItemValue;
        // read PLCO_IND_PULL_USERS.
        sItemName = "PLCO_IND_PULL_USERS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Ind_Pull_Users = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read PLCO_MAIL_ID_TEMPLATE.
        sItemName = "PLCO_MAIL_ID_TEMPLATE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Mail_Id_Template = sItemValue;
        // read PLCO_TASK_JS_TIME_RULE.
        sItemName = "PLCO_TASK_JS_TIME_RULE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Task_Js_Time_Rule = sItemValue;
        // read PLCO_MAX_WAITING_PERIOD.
        sItemName = "PLCO_MAX_WAITING_PERIOD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Max_Waiting_Period = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read PLCO_ID_TASK_JS_USER_SYNC.
        sItemName = "PLCO_ID_TASK_JS_USER_SYNC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Id_Task_Js_User_Sync = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read PLCO_ID_COMMON_ORGANIZATION.
        sItemName = "PLCO_ID_COMMON_ORGANIZATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Id_Common_Organization = sItemValue;
        // read PLCO_MAX_CALCULATION_PERIOD.
        sItemName = "PLCO_MAX_CALCULATION_PERIOD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Max_Calculation_Period = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Plco_Es_Ws_Au_App_ValuesRecordSet = new Plco_Es_Ws_Au_App_ValuesRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Plco_Es_Ws_Au_App_ValuesRecord record = new Plco_Es_Ws_Au_App_ValuesRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Plco_Es_Ws_Au_App_ValuesRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Plco_Es_Ws_Au_App_ValuesBlock */

