/**
 * Csp_Acciones_Desa_FeedbkBlock.java
 * Self generated code for Bussines Object CSP_OBTENER_FEEDBACK.
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
package com.meta4.soapservices.services.rpc.csp_obtener_feedback;

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
 * Bean for node Csp_Acciones_Desa_Feedbk.
 * @author Meta4
 */
public 
class Csp_Acciones_Desa_FeedbkBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_OBTENER_FEEDBACK";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_ACCIONES_DESA_FEEDBK";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Acciones_Desa_FeedbkBlock.class.getName());

    /* item CSP_ID_HR */
    public String csp_Id_Hr = null;
    private void setcsp_Id_Hr(String ai_value)
    {
        csp_Id_Hr = ai_value;
    }
    private String getcsp_Id_Hr()
    {
        return csp_Id_Hr;
    }

    /* item CSP_DT_START */
    public Calendar csp_Dt_Start = null;
    private void setcsp_Dt_Start(Calendar ai_value)
    {
        csp_Dt_Start = ai_value;
    }
    private Calendar getcsp_Dt_Start()
    {
        return csp_Dt_Start;
    }

    /* the recordset */
    public Csp_Acciones_Desa_FeedbkRecord[] Csp_Acciones_Desa_FeedbkRecordSet = null;
    private void setCsp_Acciones_Desa_FeedbkRecordSet(Csp_Acciones_Desa_FeedbkRecord[] ai_arg)
    {
        Csp_Acciones_Desa_FeedbkRecordSet = ai_arg;
    }
    private Csp_Acciones_Desa_FeedbkRecord[] getCsp_Acciones_Desa_FeedbkRecordSet()
    {
        return Csp_Acciones_Desa_FeedbkRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Acciones_Desa_FeedbkBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // CSP_ID_HR.
        if (csp_Id_Hr != null)
        {
            htItems.put("CSP_ID_HR", M4BusinessMethodArg.toString(csp_Id_Hr));
        }
        // CSP_DT_START.
        if (csp_Dt_Start != null)
        {
            htItems.put("CSP_DT_START", M4BusinessMethodArg.toString(csp_Dt_Start));
        }

        // insert 'block scope' values in CSP_ACCIONES_DESA_FEEDBK.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_ACCIONES_DESA_FEEDBK.
        if (Csp_Acciones_Desa_FeedbkRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Acciones_Desa_FeedbkRecordSet.length; i++)
        {
            Csp_Acciones_Desa_FeedbkRecord record = Csp_Acciones_Desa_FeedbkRecordSet[i];
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
        // read 'block scope' values in CSP_ACCIONES_DESA_FEEDBK.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read CSP_ID_HR.
        sItemName = "CSP_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Id_Hr = sItemValue;
        // read CSP_DT_START.
        sItemName = "CSP_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Acciones_Desa_FeedbkRecordSet = new Csp_Acciones_Desa_FeedbkRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Acciones_Desa_FeedbkRecord record = new Csp_Acciones_Desa_FeedbkRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Acciones_Desa_FeedbkRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Acciones_Desa_FeedbkBlock */

