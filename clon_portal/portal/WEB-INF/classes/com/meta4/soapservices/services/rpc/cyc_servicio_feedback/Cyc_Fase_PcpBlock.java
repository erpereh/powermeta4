/**
 * Cyc_Fase_PcpBlock.java
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
 * Bean for node Cyc_Fase_Pcp.
 * @author Meta4
 */
public 
class Cyc_Fase_PcpBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_SERVICIO_FEEDBACK";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FASE_PCP";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Fase_PcpBlock.class.getName());

    /* item P_CYC_FASE */
    public String p_Cyc_Fase = null;
    private void setp_Cyc_Fase(String ai_value)
    {
        p_Cyc_Fase = ai_value;
    }
    private String getp_Cyc_Fase()
    {
        return p_Cyc_Fase;
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

    /* item P_ID_EMPLEADO */
    public String p_Id_Empleado = null;
    private void setp_Id_Empleado(String ai_value)
    {
        p_Id_Empleado = ai_value;
    }
    private String getp_Id_Empleado()
    {
        return p_Id_Empleado;
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

    /* the recordset */
    public Cyc_Fase_PcpRecord[] Cyc_Fase_PcpRecordSet = null;
    private void setCyc_Fase_PcpRecordSet(Cyc_Fase_PcpRecord[] ai_arg)
    {
        Cyc_Fase_PcpRecordSet = ai_arg;
    }
    private Cyc_Fase_PcpRecord[] getCyc_Fase_PcpRecordSet()
    {
        return Cyc_Fase_PcpRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Fase_PcpBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_CYC_FASE.
        if (p_Cyc_Fase != null)
        {
            htItems.put("P_CYC_FASE", M4BusinessMethodArg.toString(p_Cyc_Fase));
        }
        // P_DT_START.
        if (p_Dt_Start != null)
        {
            htItems.put("P_DT_START", M4BusinessMethodArg.toString(p_Dt_Start));
        }
        // P_ID_EMPLEADO.
        if (p_Id_Empleado != null)
        {
            htItems.put("P_ID_EMPLEADO", M4BusinessMethodArg.toString(p_Id_Empleado));
        }
        // P_ID_ORGANIZATION.
        if (p_Id_Organization != null)
        {
            htItems.put("P_ID_ORGANIZATION", M4BusinessMethodArg.toString(p_Id_Organization));
        }

        // insert 'block scope' values in CYC_FASE_PCP.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FASE_PCP.
        if (Cyc_Fase_PcpRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Fase_PcpRecordSet.length; i++)
        {
            Cyc_Fase_PcpRecord record = Cyc_Fase_PcpRecordSet[i];
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
        // read 'block scope' values in CYC_FASE_PCP.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_CYC_FASE.
        sItemName = "P_CYC_FASE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Cyc_Fase = sItemValue;
        // read P_DT_START.
        sItemName = "P_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_ID_EMPLEADO.
        sItemName = "P_ID_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Empleado = sItemValue;
        // read P_ID_ORGANIZATION.
        sItemName = "P_ID_ORGANIZATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Organization = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Fase_PcpRecordSet = new Cyc_Fase_PcpRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Fase_PcpRecord record = new Cyc_Fase_PcpRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Fase_PcpRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Fase_PcpBlock */

