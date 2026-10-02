/**
 * Csp_Empleados_DependientesBlock.java
 * Self generated code for Bussines Object CSP_LISTAR_EMPLEADOS.
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
package com.meta4.soapservices.services.rpc.csp_listar_empleados;

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
 * Bean for node Csp_Empleados_Dependientes.
 * @author Meta4
 */
public 
class Csp_Empleados_DependientesBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_LISTAR_EMPLEADOS";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_EMPLEADOS_DEPENDIENTES";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Empleados_DependientesBlock.class.getName());

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

    /* the recordset */
    public Csp_Empleados_DependientesRecord[] Csp_Empleados_DependientesRecordSet = null;
    private void setCsp_Empleados_DependientesRecordSet(Csp_Empleados_DependientesRecord[] ai_arg)
    {
        Csp_Empleados_DependientesRecordSet = ai_arg;
    }
    private Csp_Empleados_DependientesRecord[] getCsp_Empleados_DependientesRecordSet()
    {
        return Csp_Empleados_DependientesRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Empleados_DependientesBlock.writeOperations(...)");

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
        // P_SOCIEDAD.
        if (p_Sociedad != null)
        {
            htItems.put("P_SOCIEDAD", M4BusinessMethodArg.toString(p_Sociedad));
        }
        // P_DIRECCION.
        if (p_Direccion != null)
        {
            htItems.put("P_DIRECCION", M4BusinessMethodArg.toString(p_Direccion));
        }

        // insert 'block scope' values in CSP_EMPLEADOS_DEPENDIENTES.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_EMPLEADOS_DEPENDIENTES.
        if (Csp_Empleados_DependientesRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Empleados_DependientesRecordSet.length; i++)
        {
            Csp_Empleados_DependientesRecord record = Csp_Empleados_DependientesRecordSet[i];
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
        // read 'block scope' values in CSP_EMPLEADOS_DEPENDIENTES.
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
        // read P_SOCIEDAD.
        sItemName = "P_SOCIEDAD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Sociedad = sItemValue;
        // read P_DIRECCION.
        sItemName = "P_DIRECCION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Direccion = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Empleados_DependientesRecordSet = new Csp_Empleados_DependientesRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Empleados_DependientesRecord record = new Csp_Empleados_DependientesRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Empleados_DependientesRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Empleados_DependientesBlock */

