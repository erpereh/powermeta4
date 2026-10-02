/**
 * Csp_G_Acciones_Desa_FeedbkBlock.java
 * Self generated code for Bussines Object CSP_GUARDAR_FEEDBACK.
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
package com.meta4.soapservices.services.rpc.csp_guardar_feedback;

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
 * Bean for node Csp_G_Acciones_Desa_Feedbk.
 * @author Meta4
 */
public 
class Csp_G_Acciones_Desa_FeedbkBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GUARDAR_FEEDBACK";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_G_ACCIONES_DESA_FEEDBK";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_G_Acciones_Desa_FeedbkBlock.class.getName());

    /* item DT_END */
    public Calendar dt_End = null;
    private void setdt_End(Calendar ai_value)
    {
        dt_End = ai_value;
    }
    private Calendar getdt_End()
    {
        return dt_End;
    }

    /* item DT_START */
    public Calendar dt_Start = null;
    private void setdt_Start(Calendar ai_value)
    {
        dt_Start = ai_value;
    }
    private Calendar getdt_Start()
    {
        return dt_Start;
    }

    /* item CYC_ID_HR */
    public String cyc_Id_Hr = null;
    private void setcyc_Id_Hr(String ai_value)
    {
        cyc_Id_Hr = ai_value;
    }
    private String getcyc_Id_Hr()
    {
        return cyc_Id_Hr;
    }

    /* item CYC_ESTADO */
    public String cyc_Estado = null;
    private void setcyc_Estado(String ai_value)
    {
        cyc_Estado = ai_value;
    }
    private String getcyc_Estado()
    {
        return cyc_Estado;
    }

    /* item CYC_ID_FASE */
    public String cyc_Id_Fase = null;
    private void setcyc_Id_Fase(String ai_value)
    {
        cyc_Id_Fase = ai_value;
    }
    private String getcyc_Id_Fase()
    {
        return cyc_Id_Fase;
    }

    /* the recordset */
    public Csp_G_Acciones_Desa_FeedbkRecord[] Csp_G_Acciones_Desa_FeedbkRecordSet = null;
    private void setCsp_G_Acciones_Desa_FeedbkRecordSet(Csp_G_Acciones_Desa_FeedbkRecord[] ai_arg)
    {
        Csp_G_Acciones_Desa_FeedbkRecordSet = ai_arg;
    }
    private Csp_G_Acciones_Desa_FeedbkRecord[] getCsp_G_Acciones_Desa_FeedbkRecordSet()
    {
        return Csp_G_Acciones_Desa_FeedbkRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_G_Acciones_Desa_FeedbkBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // DT_END.
        if (dt_End != null)
        {
            htItems.put("DT_END", M4BusinessMethodArg.toString(dt_End));
        }
        // DT_START.
        if (dt_Start != null)
        {
            htItems.put("DT_START", M4BusinessMethodArg.toString(dt_Start));
        }
        // CYC_ID_HR.
        if (cyc_Id_Hr != null)
        {
            htItems.put("CYC_ID_HR", M4BusinessMethodArg.toString(cyc_Id_Hr));
        }
        // CYC_ESTADO.
        if (cyc_Estado != null)
        {
            htItems.put("CYC_ESTADO", M4BusinessMethodArg.toString(cyc_Estado));
        }
        // CYC_ID_FASE.
        if (cyc_Id_Fase != null)
        {
            htItems.put("CYC_ID_FASE", M4BusinessMethodArg.toString(cyc_Id_Fase));
        }

        // insert 'block scope' values in CSP_G_ACCIONES_DESA_FEEDBK.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_G_ACCIONES_DESA_FEEDBK.
        if (Csp_G_Acciones_Desa_FeedbkRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_G_Acciones_Desa_FeedbkRecordSet.length; i++)
        {
            Csp_G_Acciones_Desa_FeedbkRecord record = Csp_G_Acciones_Desa_FeedbkRecordSet[i];
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
        // read 'block scope' values in CSP_G_ACCIONES_DESA_FEEDBK.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read DT_END.
        sItemName = "DT_END";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        dt_End = M4BusinessMethodArg.toCalendar(sItemValue);
        // read DT_START.
        sItemName = "DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
        // read CYC_ID_HR.
        sItemName = "CYC_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        cyc_Id_Hr = sItemValue;
        // read CYC_ESTADO.
        sItemName = "CYC_ESTADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        cyc_Estado = sItemValue;
        // read CYC_ID_FASE.
        sItemName = "CYC_ID_FASE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        cyc_Id_Fase = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_G_Acciones_Desa_FeedbkRecordSet = new Csp_G_Acciones_Desa_FeedbkRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_G_Acciones_Desa_FeedbkRecord record = new Csp_G_Acciones_Desa_FeedbkRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_G_Acciones_Desa_FeedbkRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_G_Acciones_Desa_FeedbkBlock */

