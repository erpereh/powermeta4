/**
 * Cyc_Feedback_SeleccionBlock.java
 * Self generated code for Bussines Object CYC_SERVICIO_FEEDBACK.
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
package com.meta4.soapservices.services.rpc.cyc_servicio_feedback;

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
 * Bean for node Cyc_Feedback_Seleccion.
 * @author Meta4
 */
public 
class Cyc_Feedback_SeleccionBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_SERVICIO_FEEDBACK";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FEEDBACK_SELECCION";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Feedback_SeleccionBlock.class.getName());

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

    /* item P_ESTADO */
    public String p_Estado = null;
    private void setp_Estado(String ai_value)
    {
        p_Estado = ai_value;
    }
    private String getp_Estado()
    {
        return p_Estado;
    }

    /* item P_ID_FASE */
    public String p_Id_Fase = null;
    private void setp_Id_Fase(String ai_value)
    {
        p_Id_Fase = ai_value;
    }
    private String getp_Id_Fase()
    {
        return p_Id_Fase;
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

    /* item P_ID_ACCION */
    public String p_Id_Accion = null;
    private void setp_Id_Accion(String ai_value)
    {
        p_Id_Accion = ai_value;
    }
    private String getp_Id_Accion()
    {
        return p_Id_Accion;
    }

    /* item CYC_EXECUTE_SQL */
    public String cyc_Execute_Sql = null;
    private void setcyc_Execute_Sql(String ai_value)
    {
        cyc_Execute_Sql = ai_value;
    }
    private String getcyc_Execute_Sql()
    {
        return cyc_Execute_Sql;
    }

    /* item P_ID_DEV_SUBPRO */
    public String p_Id_Dev_Subpro = null;
    private void setp_Id_Dev_Subpro(String ai_value)
    {
        p_Id_Dev_Subpro = ai_value;
    }
    private String getp_Id_Dev_Subpro()
    {
        return p_Id_Dev_Subpro;
    }

    /* the recordset */
    public Cyc_Feedback_SeleccionRecord[] Cyc_Feedback_SeleccionRecordSet = null;
    private void setCyc_Feedback_SeleccionRecordSet(Cyc_Feedback_SeleccionRecord[] ai_arg)
    {
        Cyc_Feedback_SeleccionRecordSet = ai_arg;
    }
    private Cyc_Feedback_SeleccionRecord[] getCyc_Feedback_SeleccionRecordSet()
    {
        return Cyc_Feedback_SeleccionRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Feedback_SeleccionBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // P_ESTADO.
        if (p_Estado != null)
        {
            htItems.put("P_ESTADO", M4BusinessMethodArg.toString(p_Estado));
        }
        // P_ID_FASE.
        if (p_Id_Fase != null)
        {
            htItems.put("P_ID_FASE", M4BusinessMethodArg.toString(p_Id_Fase));
        }
        // P_DT_START.
        if (p_Dt_Start != null)
        {
            htItems.put("P_DT_START", M4BusinessMethodArg.toString(p_Dt_Start));
        }
        // P_ID_ACCION.
        if (p_Id_Accion != null)
        {
            htItems.put("P_ID_ACCION", M4BusinessMethodArg.toString(p_Id_Accion));
        }
        // CYC_EXECUTE_SQL.
        if (cyc_Execute_Sql != null)
        {
            htItems.put("CYC_EXECUTE_SQL", M4BusinessMethodArg.toString(cyc_Execute_Sql));
        }
        // P_ID_DEV_SUBPRO.
        if (p_Id_Dev_Subpro != null)
        {
            htItems.put("P_ID_DEV_SUBPRO", M4BusinessMethodArg.toString(p_Id_Dev_Subpro));
        }

        // insert 'block scope' values in CYC_FEEDBACK_SELECCION.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FEEDBACK_SELECCION.
        if (Cyc_Feedback_SeleccionRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Feedback_SeleccionRecordSet.length; i++)
        {
            Cyc_Feedback_SeleccionRecord record = Cyc_Feedback_SeleccionRecordSet[i];
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
        // read 'block scope' values in CYC_FEEDBACK_SELECCION.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read P_ESTADO.
        sItemName = "P_ESTADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Estado = sItemValue;
        // read P_ID_FASE.
        sItemName = "P_ID_FASE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Fase = sItemValue;
        // read P_DT_START.
        sItemName = "P_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_ID_ACCION.
        sItemName = "P_ID_ACCION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Accion = sItemValue;
        // read CYC_EXECUTE_SQL.
        sItemName = "CYC_EXECUTE_SQL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        cyc_Execute_Sql = sItemValue;
        // read P_ID_DEV_SUBPRO.
        sItemName = "P_ID_DEV_SUBPRO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Dev_Subpro = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Feedback_SeleccionRecordSet = new Cyc_Feedback_SeleccionRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Feedback_SeleccionRecord record = new Cyc_Feedback_SeleccionRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Feedback_SeleccionRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Feedback_SeleccionBlock */

