/**
 * Csp_ObjectiveBlock.java
 * Self generated code for Bussines Object CSP_BORRAR_OBJ.
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
package com.meta4.soapservices.services.rpc.csp_borrar_obj;

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
 * Bean for node Csp_Objective.
 * @author Meta4
 */
public 
class Csp_ObjectiveBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_BORRAR_OBJ";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_OBJECTIVE";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_ObjectiveBlock.class.getName());

    /* item P_ANNIO */
    public String p_Annio = null;
    private void setp_Annio(String ai_value)
    {
        p_Annio = ai_value;
    }
    private String getp_Annio()
    {
        return p_Annio;
    }

    /* item P_OBJETIVO */
    public String p_Objetivo = null;
    private void setp_Objetivo(String ai_value)
    {
        p_Objetivo = ai_value;
    }
    private String getp_Objetivo()
    {
        return p_Objetivo;
    }

    /* the recordset */
    public Csp_ObjectiveRecord[] Csp_ObjectiveRecordSet = null;
    private void setCsp_ObjectiveRecordSet(Csp_ObjectiveRecord[] ai_arg)
    {
        Csp_ObjectiveRecordSet = ai_arg;
    }
    private Csp_ObjectiveRecord[] getCsp_ObjectiveRecordSet()
    {
        return Csp_ObjectiveRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_ObjectiveBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANNIO.
        if (p_Annio != null)
        {
            htItems.put("P_ANNIO", M4BusinessMethodArg.toString(p_Annio));
        }
        // P_OBJETIVO.
        if (p_Objetivo != null)
        {
            htItems.put("P_OBJETIVO", M4BusinessMethodArg.toString(p_Objetivo));
        }

        // insert 'block scope' values in CSP_OBJECTIVE.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_OBJECTIVE.
        if (Csp_ObjectiveRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_ObjectiveRecordSet.length; i++)
        {
            Csp_ObjectiveRecord record = Csp_ObjectiveRecordSet[i];
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
        // read 'block scope' values in CSP_OBJECTIVE.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANNIO.
        sItemName = "P_ANNIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Annio = sItemValue;
        // read P_OBJETIVO.
        sItemName = "P_OBJETIVO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Objetivo = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_ObjectiveRecordSet = new Csp_ObjectiveRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_ObjectiveRecord record = new Csp_ObjectiveRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_ObjectiveRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_ObjectiveBlock */

