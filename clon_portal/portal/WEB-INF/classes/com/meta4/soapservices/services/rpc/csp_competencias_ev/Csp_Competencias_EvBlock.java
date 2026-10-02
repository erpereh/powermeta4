/**
 * Csp_Competencias_EvBlock.java
 * Self generated code for Bussines Object CSP_COMPETENCIAS_EV.
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
package com.meta4.soapservices.services.rpc.csp_competencias_ev;

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
 * Bean for node Csp_Competencias_Ev.
 * @author Meta4
 */
public 
class Csp_Competencias_EvBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_COMPETENCIAS_EV";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_COMPETENCIAS_EV";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Competencias_EvBlock.class.getName());

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

    /* item P_ANIO */
    public String p_Anio = null;
    private void setp_Anio(String ai_value)
    {
        p_Anio = ai_value;
    }
    private String getp_Anio()
    {
        return p_Anio;
    }

    /* the recordset */
    public Csp_Competencias_EvRecord[] Csp_Competencias_EvRecordSet = null;
    private void setCsp_Competencias_EvRecordSet(Csp_Competencias_EvRecord[] ai_arg)
    {
        Csp_Competencias_EvRecordSet = ai_arg;
    }
    private Csp_Competencias_EvRecord[] getCsp_Competencias_EvRecordSet()
    {
        return Csp_Competencias_EvRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Competencias_EvBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }
        // P_ANIO.
        if (p_Anio != null)
        {
            htItems.put("P_ANIO", M4BusinessMethodArg.toString(p_Anio));
        }

        // insert 'block scope' values in CSP_COMPETENCIAS_EV.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_COMPETENCIAS_EV.
        if (Csp_Competencias_EvRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Competencias_EvRecordSet.length; i++)
        {
            Csp_Competencias_EvRecord record = Csp_Competencias_EvRecordSet[i];
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
        // read 'block scope' values in CSP_COMPETENCIAS_EV.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;
        // read P_ANIO.
        sItemName = "P_ANIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anio = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Competencias_EvRecordSet = new Csp_Competencias_EvRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Competencias_EvRecord record = new Csp_Competencias_EvRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Competencias_EvRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Competencias_EvBlock */

