/**
 * Csp_Empleados_Dependien_RrhhBlock.java
 * Self generated code for Bussines Object CSP_EMPLEADOS_DEPENDIEN_RRHH.
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
package com.meta4.soapservices.services.rpc.csp_empleados_dependien_rrhh;

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
 * Bean for node Csp_Empleados_Dependien_Rrhh.
 * @author Meta4
 */
public 
class Csp_Empleados_Dependien_RrhhBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_EMPLEADOS_DEPENDIEN_RRHH";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_EMPLEADOS_DEPENDIEN_RRHH";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Empleados_Dependien_RrhhBlock.class.getName());

    /* item P_AREA */
    public String p_Area = null;
    private void setp_Area(String ai_value)
    {
        p_Area = ai_value;
    }
    private String getp_Area()
    {
        return p_Area;
    }

    /* item P_UNIDAD */
    public String p_Unidad = null;
    private void setp_Unidad(String ai_value)
    {
        p_Unidad = ai_value;
    }
    private String getp_Unidad()
    {
        return p_Unidad;
    }

    /* item P_SERVICIO */
    public String p_Servicio = null;
    private void setp_Servicio(String ai_value)
    {
        p_Servicio = ai_value;
    }
    private String getp_Servicio()
    {
        return p_Servicio;
    }

    /* item P_DIRECCION */
    public String p_Direccion = null;
    private void setp_Direccion(String ai_value)
    {
        p_Direccion = ai_value;
    }
    private String getp_Direccion()
    {
        return p_Direccion;
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
    public Csp_Empleados_Dependien_RrhhRecord[] Csp_Empleados_Dependien_RrhhRecordSet = null;
    private void setCsp_Empleados_Dependien_RrhhRecordSet(Csp_Empleados_Dependien_RrhhRecord[] ai_arg)
    {
        Csp_Empleados_Dependien_RrhhRecordSet = ai_arg;
    }
    private Csp_Empleados_Dependien_RrhhRecord[] getCsp_Empleados_Dependien_RrhhRecordSet()
    {
        return Csp_Empleados_Dependien_RrhhRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Empleados_Dependien_RrhhBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_AREA.
        if (p_Area != null)
        {
            htItems.put("P_AREA", M4BusinessMethodArg.toString(p_Area));
        }
        // P_UNIDAD.
        if (p_Unidad != null)
        {
            htItems.put("P_UNIDAD", M4BusinessMethodArg.toString(p_Unidad));
        }
        // P_SERVICIO.
        if (p_Servicio != null)
        {
            htItems.put("P_SERVICIO", M4BusinessMethodArg.toString(p_Servicio));
        }
        // P_DIRECCION.
        if (p_Direccion != null)
        {
            htItems.put("P_DIRECCION", M4BusinessMethodArg.toString(p_Direccion));
        }
        // P_EVALUADOR.
        if (p_Evaluador != null)
        {
            htItems.put("P_EVALUADOR", M4BusinessMethodArg.toString(p_Evaluador));
        }

        // insert 'block scope' values in CSP_EMPLEADOS_DEPENDIEN_RRHH.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_EMPLEADOS_DEPENDIEN_RRHH.
        if (Csp_Empleados_Dependien_RrhhRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Empleados_Dependien_RrhhRecordSet.length; i++)
        {
            Csp_Empleados_Dependien_RrhhRecord record = Csp_Empleados_Dependien_RrhhRecordSet[i];
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
        // read 'block scope' values in CSP_EMPLEADOS_DEPENDIEN_RRHH.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_AREA.
        sItemName = "P_AREA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Area = sItemValue;
        // read P_UNIDAD.
        sItemName = "P_UNIDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Unidad = sItemValue;
        // read P_SERVICIO.
        sItemName = "P_SERVICIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Servicio = sItemValue;
        // read P_DIRECCION.
        sItemName = "P_DIRECCION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Direccion = sItemValue;
        // read P_EVALUADOR.
        sItemName = "P_EVALUADOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluador = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Empleados_Dependien_RrhhRecordSet = new Csp_Empleados_Dependien_RrhhRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Empleados_Dependien_RrhhRecord record = new Csp_Empleados_Dependien_RrhhRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Empleados_Dependien_RrhhRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Empleados_Dependien_RrhhBlock */

