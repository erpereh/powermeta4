/**
 * Cyc_Fecha_FeedbackBlock.java
 * Self generated code for Bussines Object CYC_SERVICIO_BASICO.
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
package com.meta4.soapservices.services.rpc.cyc_servicio_basico;

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
 * Bean for node Cyc_Fecha_Feedback.
 * @author Meta4
 */
public 
class Cyc_Fecha_FeedbackBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_SERVICIO_BASICO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FECHA_FEEDBACK";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Fecha_FeedbackBlock.class.getName());

    /* item P_FASE */
    public String p_Fase = null;
    private void setp_Fase(String ai_value)
    {
        p_Fase = ai_value;
    }
    private String getp_Fase()
    {
        return p_Fase;
    }

    /* item P_EMPLEADO */
    public String p_Empleado = null;
    private void setp_Empleado(String ai_value)
    {
        p_Empleado = ai_value;
    }
    private String getp_Empleado()
    {
        return p_Empleado;
    }

    /* the recordset */
    public Cyc_Fecha_FeedbackRecord[] Cyc_Fecha_FeedbackRecordSet = null;
    private void setCyc_Fecha_FeedbackRecordSet(Cyc_Fecha_FeedbackRecord[] ai_arg)
    {
        Cyc_Fecha_FeedbackRecordSet = ai_arg;
    }
    private Cyc_Fecha_FeedbackRecord[] getCyc_Fecha_FeedbackRecordSet()
    {
        return Cyc_Fecha_FeedbackRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Fecha_FeedbackBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_FASE.
        if (p_Fase != null)
        {
            htItems.put("P_FASE", M4BusinessMethodArg.toString(p_Fase));
        }
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }

        // insert 'block scope' values in CYC_FECHA_FEEDBACK.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FECHA_FEEDBACK.
        if (Cyc_Fecha_FeedbackRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Fecha_FeedbackRecordSet.length; i++)
        {
            Cyc_Fecha_FeedbackRecord record = Cyc_Fecha_FeedbackRecordSet[i];
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
        // read 'block scope' values in CYC_FECHA_FEEDBACK.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_FASE.
        sItemName = "P_FASE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fase = sItemValue;
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Fecha_FeedbackRecordSet = new Cyc_Fecha_FeedbackRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Fecha_FeedbackRecord record = new Cyc_Fecha_FeedbackRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Fecha_FeedbackRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Fecha_FeedbackBlock */

