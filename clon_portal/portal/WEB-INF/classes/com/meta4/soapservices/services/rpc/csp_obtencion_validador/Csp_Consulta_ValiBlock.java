/**
 * Csp_Consulta_ValiBlock.java
 * Self generated code for Bussines Object CSP_OBTENCION_VALIDADOR.
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
package com.meta4.soapservices.services.rpc.csp_obtencion_validador;

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
 * Bean for node Csp_Consulta_Vali.
 * @author Meta4
 */
public 
class Csp_Consulta_ValiBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_OBTENCION_VALIDADOR";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CONSULTA_VALI";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_ValiBlock.class.getName());

    /* item P_SOC */
    public String p_Soc = null;
    private void setp_Soc(String ai_value)
    {
        p_Soc = ai_value;
    }
    private String getp_Soc()
    {
        return p_Soc;
    }

    /* item P_ID_UNIDAD */
    public String p_Id_Unidad = null;
    private void setp_Id_Unidad(String ai_value)
    {
        p_Id_Unidad = ai_value;
    }
    private String getp_Id_Unidad()
    {
        return p_Id_Unidad;
    }

    /* the recordset */
    public Csp_Consulta_ValiRecord[] Csp_Consulta_ValiRecordSet = null;
    private void setCsp_Consulta_ValiRecordSet(Csp_Consulta_ValiRecord[] ai_arg)
    {
        Csp_Consulta_ValiRecordSet = ai_arg;
    }
    private Csp_Consulta_ValiRecord[] getCsp_Consulta_ValiRecordSet()
    {
        return Csp_Consulta_ValiRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Consulta_ValiBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_SOC.
        if (p_Soc != null)
        {
            htItems.put("P_SOC", M4BusinessMethodArg.toString(p_Soc));
        }
        // P_ID_UNIDAD.
        if (p_Id_Unidad != null)
        {
            htItems.put("P_ID_UNIDAD", M4BusinessMethodArg.toString(p_Id_Unidad));
        }

        // insert 'block scope' values in CSP_CONSULTA_VALI.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CONSULTA_VALI.
        if (Csp_Consulta_ValiRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Consulta_ValiRecordSet.length; i++)
        {
            Csp_Consulta_ValiRecord record = Csp_Consulta_ValiRecordSet[i];
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
        // read 'block scope' values in CSP_CONSULTA_VALI.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_SOC.
        sItemName = "P_SOC";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Soc = sItemValue;
        // read P_ID_UNIDAD.
        sItemName = "P_ID_UNIDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Unidad = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Consulta_ValiRecordSet = new Csp_Consulta_ValiRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Consulta_ValiRecord record = new Csp_Consulta_ValiRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Consulta_ValiRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Consulta_ValiBlock */

