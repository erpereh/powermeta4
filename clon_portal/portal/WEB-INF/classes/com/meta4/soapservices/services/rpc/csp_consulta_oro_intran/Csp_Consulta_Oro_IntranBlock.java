/**
 * Csp_Consulta_Oro_IntranBlock.java
 * Self generated code for Bussines Object CSP_CONSULTA_ORO_INTRAN.
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
package com.meta4.soapservices.services.rpc.csp_consulta_oro_intran;

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
 * Bean for node Csp_Consulta_Oro_Intran.
 * @author Meta4
 */
public 
class Csp_Consulta_Oro_IntranBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_CONSULTA_ORO_INTRAN";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_CONSULTA_ORO_INTRAN";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Consulta_Oro_IntranBlock.class.getName());

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

    /* item P_CVE_SELF */
    public String p_Cve_Self = null;
    private void setp_Cve_Self(String ai_value)
    {
        p_Cve_Self = ai_value;
    }
    private String getp_Cve_Self()
    {
        return p_Cve_Self;
    }

    /* item P_DIRECTOR */
    public String p_Director = null;
    private void setp_Director(String ai_value)
    {
        p_Director = ai_value;
    }
    private String getp_Director()
    {
        return p_Director;
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

    /* the recordset */
    public Csp_Consulta_Oro_IntranRecord[] Csp_Consulta_Oro_IntranRecordSet = null;
    private void setCsp_Consulta_Oro_IntranRecordSet(Csp_Consulta_Oro_IntranRecord[] ai_arg)
    {
        Csp_Consulta_Oro_IntranRecordSet = ai_arg;
    }
    private Csp_Consulta_Oro_IntranRecord[] getCsp_Consulta_Oro_IntranRecordSet()
    {
        return Csp_Consulta_Oro_IntranRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Consulta_Oro_IntranBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_COMPUTA.
        if (p_Computa != null)
        {
            htItems.put("P_COMPUTA", M4BusinessMethodArg.toString(p_Computa));
        }
        // P_CVE_SELF.
        if (p_Cve_Self != null)
        {
            htItems.put("P_CVE_SELF", M4BusinessMethodArg.toString(p_Cve_Self));
        }
        // P_DIRECTOR.
        if (p_Director != null)
        {
            htItems.put("P_DIRECTOR", M4BusinessMethodArg.toString(p_Director));
        }
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // P_ID_EMPLEADO.
        if (p_Id_Empleado != null)
        {
            htItems.put("P_ID_EMPLEADO", M4BusinessMethodArg.toString(p_Id_Empleado));
        }

        // insert 'block scope' values in CSP_CONSULTA_ORO_INTRAN.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_CONSULTA_ORO_INTRAN.
        if (Csp_Consulta_Oro_IntranRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Consulta_Oro_IntranRecordSet.length; i++)
        {
            Csp_Consulta_Oro_IntranRecord record = Csp_Consulta_Oro_IntranRecordSet[i];
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
        // read 'block scope' values in CSP_CONSULTA_ORO_INTRAN.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_COMPUTA.
        sItemName = "P_COMPUTA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Computa = sItemValue;
        // read P_CVE_SELF.
        sItemName = "P_CVE_SELF";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Cve_Self = sItemValue;
        // read P_DIRECTOR.
        sItemName = "P_DIRECTOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Director = sItemValue;
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read P_ID_EMPLEADO.
        sItemName = "P_ID_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Consulta_Oro_IntranRecordSet = new Csp_Consulta_Oro_IntranRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Consulta_Oro_IntranRecord record = new Csp_Consulta_Oro_IntranRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Consulta_Oro_IntranRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Consulta_Oro_IntranBlock */

