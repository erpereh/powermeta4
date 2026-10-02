/**
 * Plco_Es_Ws_Au_RequestsBlock.java
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
 * Bean for node Plco_Es_Ws_Au_Requests.
 * @author Meta4
 */
public 
class Plco_Es_Ws_Au_RequestsBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "PLCO_ES_WS_APP_USER";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "PLCO_ES_WS_AU_REQUESTS";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Plco_Es_Ws_Au_RequestsBlock.class.getName());

    /* item PLCO_SYS_PARAM */
    public String plco_Sys_Param = null;
    private void setplco_Sys_Param(String ai_value)
    {
        plco_Sys_Param = ai_value;
    }
    private String getplco_Sys_Param()
    {
        return plco_Sys_Param;
    }

    /* item PLCO_SYS_SENTENCE */
    public String plco_Sys_Sentence = null;
    private void setplco_Sys_Sentence(String ai_value)
    {
        plco_Sys_Sentence = ai_value;
    }
    private String getplco_Sys_Sentence()
    {
        return plco_Sys_Sentence;
    }

    /* item PLCO_P_STATUS_PENDING */
    public String plco_P_Status_Pending = null;
    private void setplco_P_Status_Pending(String ai_value)
    {
        plco_P_Status_Pending = ai_value;
    }
    private String getplco_P_Status_Pending()
    {
        return plco_P_Status_Pending;
    }

    /* item PLCO_P_STATUS_PROCESSED */
    public String plco_P_Status_Processed = null;
    private void setplco_P_Status_Processed(String ai_value)
    {
        plco_P_Status_Processed = ai_value;
    }
    private String getplco_P_Status_Processed()
    {
        return plco_P_Status_Processed;
    }

    /* item PLCO_P_STATUS_PROCESSING */
    public String plco_P_Status_Processing = null;
    private void setplco_P_Status_Processing(String ai_value)
    {
        plco_P_Status_Processing = ai_value;
    }
    private String getplco_P_Status_Processing()
    {
        return plco_P_Status_Processing;
    }

    /* the recordset */
    public Plco_Es_Ws_Au_RequestsRecord[] Plco_Es_Ws_Au_RequestsRecordSet = null;
    private void setPlco_Es_Ws_Au_RequestsRecordSet(Plco_Es_Ws_Au_RequestsRecord[] ai_arg)
    {
        Plco_Es_Ws_Au_RequestsRecordSet = ai_arg;
    }
    private Plco_Es_Ws_Au_RequestsRecord[] getPlco_Es_Ws_Au_RequestsRecordSet()
    {
        return Plco_Es_Ws_Au_RequestsRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Plco_Es_Ws_Au_RequestsBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // PLCO_SYS_PARAM.
        if (plco_Sys_Param != null)
        {
            htItems.put("PLCO_SYS_PARAM", M4BusinessMethodArg.toString(plco_Sys_Param));
        }
        // PLCO_SYS_SENTENCE.
        if (plco_Sys_Sentence != null)
        {
            htItems.put("PLCO_SYS_SENTENCE", M4BusinessMethodArg.toString(plco_Sys_Sentence));
        }
        // PLCO_P_STATUS_PENDING.
        if (plco_P_Status_Pending != null)
        {
            htItems.put("PLCO_P_STATUS_PENDING", M4BusinessMethodArg.toString(plco_P_Status_Pending));
        }
        // PLCO_P_STATUS_PROCESSED.
        if (plco_P_Status_Processed != null)
        {
            htItems.put("PLCO_P_STATUS_PROCESSED", M4BusinessMethodArg.toString(plco_P_Status_Processed));
        }
        // PLCO_P_STATUS_PROCESSING.
        if (plco_P_Status_Processing != null)
        {
            htItems.put("PLCO_P_STATUS_PROCESSING", M4BusinessMethodArg.toString(plco_P_Status_Processing));
        }

        // insert 'block scope' values in PLCO_ES_WS_AU_REQUESTS.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in PLCO_ES_WS_AU_REQUESTS.
        if (Plco_Es_Ws_Au_RequestsRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Plco_Es_Ws_Au_RequestsRecordSet.length; i++)
        {
            Plco_Es_Ws_Au_RequestsRecord record = Plco_Es_Ws_Au_RequestsRecordSet[i];
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
        // read 'block scope' values in PLCO_ES_WS_AU_REQUESTS.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read PLCO_SYS_PARAM.
        sItemName = "PLCO_SYS_PARAM";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Sys_Param = sItemValue;
        // read PLCO_SYS_SENTENCE.
        sItemName = "PLCO_SYS_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_Sys_Sentence = sItemValue;
        // read PLCO_P_STATUS_PENDING.
        sItemName = "PLCO_P_STATUS_PENDING";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_P_Status_Pending = sItemValue;
        // read PLCO_P_STATUS_PROCESSED.
        sItemName = "PLCO_P_STATUS_PROCESSED";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_P_Status_Processed = sItemValue;
        // read PLCO_P_STATUS_PROCESSING.
        sItemName = "PLCO_P_STATUS_PROCESSING";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        plco_P_Status_Processing = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Plco_Es_Ws_Au_RequestsRecordSet = new Plco_Es_Ws_Au_RequestsRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Plco_Es_Ws_Au_RequestsRecord record = new Plco_Es_Ws_Au_RequestsRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Plco_Es_Ws_Au_RequestsRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Plco_Es_Ws_Au_RequestsBlock */

