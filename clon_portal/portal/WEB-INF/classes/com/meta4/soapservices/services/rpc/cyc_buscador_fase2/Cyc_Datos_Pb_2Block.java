/**
 * Cyc_Datos_Pb_2Block.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FASE2.
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
package com.meta4.soapservices.services.rpc.cyc_buscador_fase2;

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
 * Bean for node Cyc_Datos_Pb_2.
 * @author Meta4
 */
public 
class Cyc_Datos_Pb_2Block 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_BUSCADOR_FASE2";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_DATOS_PB_2";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Datos_Pb_2Block.class.getName());

    /* item P_F_FIN */
    public Calendar p_F_Fin = null;
    private void setp_F_Fin(Calendar ai_value)
    {
        p_F_Fin = ai_value;
    }
    private Calendar getp_F_Fin()
    {
        return p_F_Fin;
    }

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

    /* item P_F_INICIO */
    public Calendar p_F_Inicio = null;
    private void setp_F_Inicio(Calendar ai_value)
    {
        p_F_Inicio = ai_value;
    }
    private Calendar getp_F_Inicio()
    {
        return p_F_Inicio;
    }

    /* the recordset */
    public Cyc_Datos_Pb_2Record[] Cyc_Datos_Pb_2RecordSet = null;
    private void setCyc_Datos_Pb_2RecordSet(Cyc_Datos_Pb_2Record[] ai_arg)
    {
        Cyc_Datos_Pb_2RecordSet = ai_arg;
    }
    private Cyc_Datos_Pb_2Record[] getCyc_Datos_Pb_2RecordSet()
    {
        return Cyc_Datos_Pb_2RecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Datos_Pb_2Block.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_F_FIN.
        if (p_F_Fin != null)
        {
            htItems.put("P_F_FIN", M4BusinessMethodArg.toString(p_F_Fin));
        }
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // P_F_INICIO.
        if (p_F_Inicio != null)
        {
            htItems.put("P_F_INICIO", M4BusinessMethodArg.toString(p_F_Inicio));
        }

        // insert 'block scope' values in CYC_DATOS_PB_2.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_DATOS_PB_2.
        if (Cyc_Datos_Pb_2RecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Datos_Pb_2RecordSet.length; i++)
        {
            Cyc_Datos_Pb_2Record record = Cyc_Datos_Pb_2RecordSet[i];
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
        // read 'block scope' values in CYC_DATOS_PB_2.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_F_FIN.
        sItemName = "P_F_FIN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_F_Fin = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read P_F_INICIO.
        sItemName = "P_F_INICIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_F_Inicio = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Datos_Pb_2RecordSet = new Cyc_Datos_Pb_2Record[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Datos_Pb_2Record record = new Cyc_Datos_Pb_2Record();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Datos_Pb_2RecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Datos_Pb_2Block */

