/**
 * Csp_Consulta_Oro_Intran_WuBlock.java
 * Self generated code for Bussines Object CSP_CONSULTA_ORO_INTRAN_WU.
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
package com.meta4.soapservices.services.rpc.csp_consulta_oro_intran_wu;

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
 * Bean for node Csp_Consulta_Oro_Intran_Wu.
 * @author Meta4
 */
public 
class Csp_Consulta_Oro_Intran_WuBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_CONSULTA_ORO_INTRAN_WU";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CONSULTA_ORO_INTRAN_WU";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_Oro_Intran_WuBlock.class.getName());

    /* item P_RAIZ */
    public String p_Raiz = null;
    private void setp_Raiz(String ai_value)
    {
        p_Raiz = ai_value;
    }
    private String getp_Raiz()
    {
        return p_Raiz;
    }

    /* item P_ID_PADRE */
    public String p_Id_Padre = null;
    private void setp_Id_Padre(String ai_value)
    {
        p_Id_Padre = ai_value;
    }
    private String getp_Id_Padre()
    {
        return p_Id_Padre;
    }

    /* item P_SOCIEDAD */
    public String p_Sociedad = null;
    private void setp_Sociedad(String ai_value)
    {
        p_Sociedad = ai_value;
    }
    private String getp_Sociedad()
    {
        return p_Sociedad;
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

    /* item P_TIPO_NODO */
    public String p_Tipo_Nodo = null;
    private void setp_Tipo_Nodo(String ai_value)
    {
        p_Tipo_Nodo = ai_value;
    }
    private String getp_Tipo_Nodo()
    {
        return p_Tipo_Nodo;
    }

    /* the recordset */
    public Csp_Consulta_Oro_Intran_WuRecord[] Csp_Consulta_Oro_Intran_WuRecordSet = null;
    private void setCsp_Consulta_Oro_Intran_WuRecordSet(Csp_Consulta_Oro_Intran_WuRecord[] ai_arg)
    {
        Csp_Consulta_Oro_Intran_WuRecordSet = ai_arg;
    }
    private Csp_Consulta_Oro_Intran_WuRecord[] getCsp_Consulta_Oro_Intran_WuRecordSet()
    {
        return Csp_Consulta_Oro_Intran_WuRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Consulta_Oro_Intran_WuBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_RAIZ.
        if (p_Raiz != null)
        {
            htItems.put("P_RAIZ", M4BusinessMethodArg.toString(p_Raiz));
        }
        // P_ID_PADRE.
        if (p_Id_Padre != null)
        {
            htItems.put("P_ID_PADRE", M4BusinessMethodArg.toString(p_Id_Padre));
        }
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // P_ID_UNIDAD.
        if (p_Id_Unidad != null)
        {
            htItems.put("P_ID_UNIDAD", M4BusinessMethodArg.toString(p_Id_Unidad));
        }
        // P_TIPO_NODO.
        if (p_Tipo_Nodo != null)
        {
            htItems.put("P_TIPO_NODO", M4BusinessMethodArg.toString(p_Tipo_Nodo));
        }

        // insert 'block scope' values in CSP_CONSULTA_ORO_INTRAN_WU.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CONSULTA_ORO_INTRAN_WU.
        if (Csp_Consulta_Oro_Intran_WuRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Consulta_Oro_Intran_WuRecordSet.length; i++)
        {
            Csp_Consulta_Oro_Intran_WuRecord record = Csp_Consulta_Oro_Intran_WuRecordSet[i];
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
        // read 'block scope' values in CSP_CONSULTA_ORO_INTRAN_WU.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_RAIZ.
        sItemName = "P_RAIZ";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Raiz = sItemValue;
        // read P_ID_PADRE.
        sItemName = "P_ID_PADRE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Padre = sItemValue;
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read P_ID_UNIDAD.
        sItemName = "P_ID_UNIDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Unidad = sItemValue;
        // read P_TIPO_NODO.
        sItemName = "P_TIPO_NODO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Tipo_Nodo = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Consulta_Oro_Intran_WuRecordSet = new Csp_Consulta_Oro_Intran_WuRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Consulta_Oro_Intran_WuRecord record = new Csp_Consulta_Oro_Intran_WuRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Consulta_Oro_Intran_WuRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Consulta_Oro_Intran_WuBlock */

