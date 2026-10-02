/**
 * Csp_Borrar_ObjBlock.java
 * Self generated code for Bussines Object CSP_BORRAR_OBJ.
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
package com.meta4.soapservices.services.rpc.csp_borrar_obj;

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
 * Bean for node Csp_Borrar_Obj.
 * @author Meta4
 */
public 
class Csp_Borrar_ObjBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_BORRAR_OBJ";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_BORRAR_OBJ";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Borrar_ObjBlock.class.getName());

    /* item P_ANNIO */
    public String p_Annio = null;
    private void setp_Annio(String ai_value)
    {
        p_Annio = ai_value;
    }
    private String getp_Annio()
    {
        return p_Annio;
    }

    /* item P_EVALUADO */
    public String p_Evaluado = null;
    private void setp_Evaluado(String ai_value)
    {
        p_Evaluado = ai_value;
    }
    private String getp_Evaluado()
    {
        return p_Evaluado;
    }

    /* item P_OBJETIVO */
    public String p_Objetivo = null;
    private void setp_Objetivo(String ai_value)
    {
        p_Objetivo = ai_value;
    }
    private String getp_Objetivo()
    {
        return p_Objetivo;
    }

    /* the recordset */
    public Csp_Borrar_ObjRecord[] Csp_Borrar_ObjRecordSet = null;
    private void setCsp_Borrar_ObjRecordSet(Csp_Borrar_ObjRecord[] ai_arg)
    {
        Csp_Borrar_ObjRecordSet = ai_arg;
    }
    private Csp_Borrar_ObjRecord[] getCsp_Borrar_ObjRecordSet()
    {
        return Csp_Borrar_ObjRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Borrar_ObjBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANNIO.
        if (p_Annio != null)
        {
            htItems.put("P_ANNIO", M4BusinessMethodArg.toString(p_Annio));
        }
        // P_EVALUADO.
        if (p_Evaluado != null)
        {
            htItems.put("P_EVALUADO", M4BusinessMethodArg.toString(p_Evaluado));
        }
        // P_OBJETIVO.
        if (p_Objetivo != null)
        {
            htItems.put("P_OBJETIVO", M4BusinessMethodArg.toString(p_Objetivo));
        }

        // insert 'block scope' values in CSP_BORRAR_OBJ.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_BORRAR_OBJ.
        if (Csp_Borrar_ObjRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Borrar_ObjRecordSet.length; i++)
        {
            Csp_Borrar_ObjRecord record = Csp_Borrar_ObjRecordSet[i];
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
        // read 'block scope' values in CSP_BORRAR_OBJ.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANNIO.
        sItemName = "P_ANNIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Annio = sItemValue;
        // read P_EVALUADO.
        sItemName = "P_EVALUADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluado = sItemValue;
        // read P_OBJETIVO.
        sItemName = "P_OBJETIVO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Objetivo = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Borrar_ObjRecordSet = new Csp_Borrar_ObjRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Borrar_ObjRecord record = new Csp_Borrar_ObjRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Borrar_ObjRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Borrar_ObjBlock */

