/**
 * Cyc_Fix_Fecha_AltaBlock.java
 * Self generated code for Bussines Object CYC_FICHA_EMPLEADO.
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
package com.meta4.soapservices.services.rpc.cyc_ficha_empleado;

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
 * Bean for node Cyc_Fix_Fecha_Alta.
 * @author Meta4
 */
public 
class Cyc_Fix_Fecha_AltaBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_FICHA_EMPLEADO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_FIX_FECHA_ALTA";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Fix_Fecha_AltaBlock.class.getName());

    /* item P_ORG */
    public String p_Org = null;
    private void setp_Org(String ai_value)
    {
        p_Org = ai_value;
    }
    private String getp_Org()
    {
        return p_Org;
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

    /* the recordset */
    public Cyc_Fix_Fecha_AltaRecord[] Cyc_Fix_Fecha_AltaRecordSet = null;
    private void setCyc_Fix_Fecha_AltaRecordSet(Cyc_Fix_Fecha_AltaRecord[] ai_arg)
    {
        Cyc_Fix_Fecha_AltaRecordSet = ai_arg;
    }
    private Cyc_Fix_Fecha_AltaRecord[] getCyc_Fix_Fecha_AltaRecordSet()
    {
        return Cyc_Fix_Fecha_AltaRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Fix_Fecha_AltaBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ORG.
        if (p_Org != null)
        {
            htItems.put("P_ORG", M4BusinessMethodArg.toString(p_Org));
        }
        // P_ID_HR.
        if (p_Id_Hr != null)
        {
            htItems.put("P_ID_HR", M4BusinessMethodArg.toString(p_Id_Hr));
        }

        // insert 'block scope' values in CYC_FIX_FECHA_ALTA.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_FIX_FECHA_ALTA.
        if (Cyc_Fix_Fecha_AltaRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Fix_Fecha_AltaRecordSet.length; i++)
        {
            Cyc_Fix_Fecha_AltaRecord record = Cyc_Fix_Fecha_AltaRecordSet[i];
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
        // read 'block scope' values in CYC_FIX_FECHA_ALTA.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ORG.
        sItemName = "P_ORG";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Org = sItemValue;
        // read P_ID_HR.
        sItemName = "P_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Hr = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Fix_Fecha_AltaRecordSet = new Cyc_Fix_Fecha_AltaRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Fix_Fecha_AltaRecord record = new Cyc_Fix_Fecha_AltaRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Fix_Fecha_AltaRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Fix_Fecha_AltaBlock */

