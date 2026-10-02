/**
 * Csp_Consulta_OroBlock.java
 * Self generated code for Bussines Object CSP_CONSULTA_ORO_NEW.
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
package com.meta4.soapservices.services.rpc.csp_consulta_oro_new;

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
 * Bean for node Csp_Consulta_Oro.
 * @author Meta4
 */
public 
class Csp_Consulta_OroBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_CONSULTA_ORO_NEW";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CONSULTA_ORO";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_OroBlock.class.getName());

    /* item P_COMPUTA */
    public String p_Computa = null;
    private void setp_Computa(String ai_value)
    {
        p_Computa = ai_value;
    }
    private String getp_Computa()
    {
        return p_Computa;
    }

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

    /* the recordset */
    public Csp_Consulta_OroRecord[] Csp_Consulta_OroRecordSet = null;
    private void setCsp_Consulta_OroRecordSet(Csp_Consulta_OroRecord[] ai_arg)
    {
        Csp_Consulta_OroRecordSet = ai_arg;
    }
    private Csp_Consulta_OroRecord[] getCsp_Consulta_OroRecordSet()
    {
        return Csp_Consulta_OroRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Consulta_OroBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_COMPUTA.
        if (p_Computa != null)
        {
            htItems.put("P_COMPUTA", M4BusinessMethodArg.toString(p_Computa));
        }
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }

        // insert 'block scope' values in CSP_CONSULTA_ORO.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CONSULTA_ORO.
        if (Csp_Consulta_OroRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Consulta_OroRecordSet.length; i++)
        {
            Csp_Consulta_OroRecord record = Csp_Consulta_OroRecordSet[i];
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
        // read 'block scope' values in CSP_CONSULTA_ORO.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_COMPUTA.
        sItemName = "P_COMPUTA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Computa = sItemValue;
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Consulta_OroRecordSet = new Csp_Consulta_OroRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Consulta_OroRecord record = new Csp_Consulta_OroRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Consulta_OroRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Consulta_OroBlock */

