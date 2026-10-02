/**
 * Cyc_Feedback_ObservacionesBlock.java
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
 * Bean for node Cyc_Feedback_Observaciones.
 * @author Meta4
 */
public 
class Cyc_Feedback_ObservacionesBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_SERVICIO_FEEDBACK";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FEEDBACK_OBSERVACIONES";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Feedback_ObservacionesBlock.class.getName());

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

    /* item P_DT_END */
    public Calendar p_Dt_End = null;
    private void setp_Dt_End(Calendar ai_value)
    {
        p_Dt_End = ai_value;
    }
    private Calendar getp_Dt_End()
    {
        return p_Dt_End;
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
    public String p_Dt_Start = null;
    private void setp_Dt_Start(String ai_value)
    {
        p_Dt_Start = ai_value;
    }
    private String getp_Dt_Start()
    {
        return p_Dt_Start;
    }

    /* item P_ID_ORGANIZATION */
    public String p_Id_Organization = null;
    private void setp_Id_Organization(String ai_value)
    {
        p_Id_Organization = ai_value;
    }
    private String getp_Id_Organization()
    {
        return p_Id_Organization;
    }

    /* item SYS_SENTENCE_FILTER */
    public String sys_Sentence_Filter = null;
    private void setsys_Sentence_Filter(String ai_value)
    {
        sys_Sentence_Filter = ai_value;
    }
    private String getsys_Sentence_Filter()
    {
        return sys_Sentence_Filter;
    }

    /* the recordset */
    public Cyc_Feedback_ObservacionesRecord[] Cyc_Feedback_ObservacionesRecordSet = null;
    private void setCyc_Feedback_ObservacionesRecordSet(Cyc_Feedback_ObservacionesRecord[] ai_arg)
    {
        Cyc_Feedback_ObservacionesRecordSet = ai_arg;
    }
    private Cyc_Feedback_ObservacionesRecord[] getCyc_Feedback_ObservacionesRecordSet()
    {
        return Cyc_Feedback_ObservacionesRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Feedback_ObservacionesBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // P_DT_END.
        if (p_Dt_End != null)
        {
            htItems.put("P_DT_END", M4BusinessMethodArg.toString(p_Dt_End));
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
        // P_ID_ORGANIZATION.
        if (p_Id_Organization != null)
        {
            htItems.put("P_ID_ORGANIZATION", M4BusinessMethodArg.toString(p_Id_Organization));
        }
        // SYS_SENTENCE_FILTER.
        if (sys_Sentence_Filter != null)
        {
            htItems.put("SYS_SENTENCE_FILTER", M4BusinessMethodArg.toString(sys_Sentence_Filter));
        }

        // insert 'block scope' values in CYC_FEEDBACK_OBSERVACIONES.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FEEDBACK_OBSERVACIONES.
        if (Cyc_Feedback_ObservacionesRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Feedback_ObservacionesRecordSet.length; i++)
        {
            Cyc_Feedback_ObservacionesRecord record = Cyc_Feedback_ObservacionesRecordSet[i];
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
        // read 'block scope' values in CYC_FEEDBACK_OBSERVACIONES.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read P_DT_END.
        sItemName = "P_DT_END";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_End = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_ID_FASE.
        sItemName = "P_ID_FASE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Fase = sItemValue;
        // read P_DT_START.
        sItemName = "P_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start = sItemValue;
        // read P_ID_ORGANIZATION.
        sItemName = "P_ID_ORGANIZATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Organization = sItemValue;
        // read SYS_SENTENCE_FILTER.
        sItemName = "SYS_SENTENCE_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_Filter = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Feedback_ObservacionesRecordSet = new Cyc_Feedback_ObservacionesRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Feedback_ObservacionesRecord record = new Cyc_Feedback_ObservacionesRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Feedback_ObservacionesRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Feedback_ObservacionesBlock */

