/**
 * Cyc_Pcp_Soap_PrefaseivBlock.java
 * Self generated code for Bussines Object CYC_PCP_SOAP_PREFASEIV.
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
package com.meta4.soapservices.services.rpc.cyc_pcp_soap_prefaseiv;

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
 * Bean for node Cyc_Pcp_Soap_Prefaseiv.
 * @author Meta4
 */
public 
class Cyc_Pcp_Soap_PrefaseivBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_PCP_SOAP_PREFASEIV";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_PCP_SOAP_PREFASEIV";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Pcp_Soap_PrefaseivBlock.class.getName());

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

    /* item P_FECHA_FIN */
    public Calendar p_Fecha_Fin = null;
    private void setp_Fecha_Fin(Calendar ai_value)
    {
        p_Fecha_Fin = ai_value;
    }
    private Calendar getp_Fecha_Fin()
    {
        return p_Fecha_Fin;
    }

    /* item P_FECHA_INI */
    public Calendar p_Fecha_Ini = null;
    private void setp_Fecha_Ini(Calendar ai_value)
    {
        p_Fecha_Ini = ai_value;
    }
    private Calendar getp_Fecha_Ini()
    {
        return p_Fecha_Ini;
    }

    /* the recordset */
    public Cyc_Pcp_Soap_PrefaseivRecord[] Cyc_Pcp_Soap_PrefaseivRecordSet = null;
    private void setCyc_Pcp_Soap_PrefaseivRecordSet(Cyc_Pcp_Soap_PrefaseivRecord[] ai_arg)
    {
        Cyc_Pcp_Soap_PrefaseivRecordSet = ai_arg;
    }
    private Cyc_Pcp_Soap_PrefaseivRecord[] getCyc_Pcp_Soap_PrefaseivRecordSet()
    {
        return Cyc_Pcp_Soap_PrefaseivRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Pcp_Soap_PrefaseivBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }
        // P_FECHA_FIN.
        if (p_Fecha_Fin != null)
        {
            htItems.put("P_FECHA_FIN", M4BusinessMethodArg.toString(p_Fecha_Fin));
        }
        // P_FECHA_INI.
        if (p_Fecha_Ini != null)
        {
            htItems.put("P_FECHA_INI", M4BusinessMethodArg.toString(p_Fecha_Ini));
        }

        // insert 'block scope' values in CYC_PCP_SOAP_PREFASEIV.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_PCP_SOAP_PREFASEIV.
        if (Cyc_Pcp_Soap_PrefaseivRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Pcp_Soap_PrefaseivRecordSet.length; i++)
        {
            Cyc_Pcp_Soap_PrefaseivRecord record = Cyc_Pcp_Soap_PrefaseivRecordSet[i];
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
        // read 'block scope' values in CYC_PCP_SOAP_PREFASEIV.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;
        // read P_FECHA_FIN.
        sItemName = "P_FECHA_FIN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fecha_Fin = M4BusinessMethodArg.toCalendar(sItemValue);
        // read P_FECHA_INI.
        sItemName = "P_FECHA_INI";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fecha_Ini = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Pcp_Soap_PrefaseivRecordSet = new Cyc_Pcp_Soap_PrefaseivRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Pcp_Soap_PrefaseivRecord record = new Cyc_Pcp_Soap_PrefaseivRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Pcp_Soap_PrefaseivRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Pcp_Soap_PrefaseivBlock */

