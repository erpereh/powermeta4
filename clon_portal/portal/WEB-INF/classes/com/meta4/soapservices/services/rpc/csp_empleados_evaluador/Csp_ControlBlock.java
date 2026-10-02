/**
 * Csp_ControlBlock.java
 * Self generated code for Bussines Object CSP_EMPLEADOS_EVALUADOR.
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
package com.meta4.soapservices.services.rpc.csp_empleados_evaluador;

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
 * Bean for node Csp_Control.
 * @author Meta4
 */
public 
class Csp_ControlBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_EMPLEADOS_EVALUADOR";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CONTROL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_ControlBlock.class.getName());

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

    /* item P_EVALUADOR */
    public String p_Evaluador = null;
    private void setp_Evaluador(String ai_value)
    {
        p_Evaluador = ai_value;
    }
    private String getp_Evaluador()
    {
        return p_Evaluador;
    }

    /* the recordset */
    public Csp_ControlRecord[] Csp_ControlRecordSet = null;
    private void setCsp_ControlRecordSet(Csp_ControlRecord[] ai_arg)
    {
        Csp_ControlRecordSet = ai_arg;
    }
    private Csp_ControlRecord[] getCsp_ControlRecordSet()
    {
        return Csp_ControlRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_ControlBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANIO.
        if (p_Anio != null)
        {
            htItems.put("P_ANIO", M4BusinessMethodArg.toString(p_Anio));
        }
        // P_EVALUADOR.
        if (p_Evaluador != null)
        {
            htItems.put("P_EVALUADOR", M4BusinessMethodArg.toString(p_Evaluador));
        }

        // insert 'block scope' values in CSP_CONTROL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CONTROL.
        if (Csp_ControlRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_ControlRecordSet.length; i++)
        {
            Csp_ControlRecord record = Csp_ControlRecordSet[i];
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
        // read 'block scope' values in CSP_CONTROL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANIO.
        sItemName = "P_ANIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anio = sItemValue;
        // read P_EVALUADOR.
        sItemName = "P_EVALUADOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluador = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_ControlRecordSet = new Csp_ControlRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_ControlRecord record = new Csp_ControlRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_ControlRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_ControlBlock */

