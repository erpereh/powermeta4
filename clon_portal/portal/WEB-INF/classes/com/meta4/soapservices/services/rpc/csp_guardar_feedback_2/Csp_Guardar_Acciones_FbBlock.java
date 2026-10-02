/**
 * Csp_Guardar_Acciones_FbBlock.java
 * Self generated code for Bussines Object CSP_GUARDAR_FEEDBACK_2.
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
package com.meta4.soapservices.services.rpc.csp_guardar_feedback_2;

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
 * Bean for node Csp_Guardar_Acciones_Fb.
 * @author Meta4
 */
public 
class Csp_Guardar_Acciones_FbBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GUARDAR_FEEDBACK_2";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_GUARDAR_ACCIONES_FB";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Guardar_Acciones_FbBlock.class.getName());

    /* item P_ID_HR */
    public String p_Id_Hr = null;
    private void setp_Id_Hr(String ai_value)
    {
        p_Id_Hr = ai_value;
    }
    private String getp_Id_Hr()
    {
        return p_Id_Hr;
    }

    /* item P_DT_START */
    public Calendar p_Dt_Start = null;
    private void setp_Dt_Start(Calendar ai_value)
    {
        p_Dt_Start = ai_value;
    }
    private Calendar getp_Dt_Start()
    {
        return p_Dt_Start;
    }

    /* the recordset */
    public Csp_Guardar_Acciones_FbRecord[] Csp_Guardar_Acciones_FbRecordSet = null;
    private void setCsp_Guardar_Acciones_FbRecordSet(Csp_Guardar_Acciones_FbRecord[] ai_arg)
    {
        Csp_Guardar_Acciones_FbRecordSet = ai_arg;
    }
    private Csp_Guardar_Acciones_FbRecord[] getCsp_Guardar_Acciones_FbRecordSet()
    {
        return Csp_Guardar_Acciones_FbRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Guardar_Acciones_FbBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // P_DT_START.
        if (p_Dt_Start != null)
        {
            htItems.put("P_DT_START", M4BusinessMethodArg.toString(p_Dt_Start));
        }

        // insert 'block scope' values in CSP_GUARDAR_ACCIONES_FB.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_GUARDAR_ACCIONES_FB.
        if (Csp_Guardar_Acciones_FbRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Guardar_Acciones_FbRecordSet.length; i++)
        {
            Csp_Guardar_Acciones_FbRecord record = Csp_Guardar_Acciones_FbRecordSet[i];
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
        // read 'block scope' values in CSP_GUARDAR_ACCIONES_FB.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read P_DT_START.
        sItemName = "P_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Guardar_Acciones_FbRecordSet = new Csp_Guardar_Acciones_FbRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Guardar_Acciones_FbRecord record = new Csp_Guardar_Acciones_FbRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Guardar_Acciones_FbRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Guardar_Acciones_FbBlock */

