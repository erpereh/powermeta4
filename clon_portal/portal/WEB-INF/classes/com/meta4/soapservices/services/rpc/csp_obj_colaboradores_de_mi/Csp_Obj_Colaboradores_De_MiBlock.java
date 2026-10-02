/**
 * Csp_Obj_Colaboradores_De_MiBlock.java
 * Self generated code for Bussines Object CSP_OBJ_COLABORADORES_DE_MI.
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
package com.meta4.soapservices.services.rpc.csp_obj_colaboradores_de_mi;

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
 * Bean for node Csp_Obj_Colaboradores_De_Mi.
 * @author Meta4
 */
public 
class Csp_Obj_Colaboradores_De_MiBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_OBJ_COLABORADORES_DE_MI";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_OBJ_COLABORADORES_DE_MI";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Obj_Colaboradores_De_MiBlock.class.getName());

    /* item P_ANNO */
    public String p_Anno = null;
    private void setp_Anno(String ai_value)
    {
        p_Anno = ai_value;
    }
    private String getp_Anno()
    {
        return p_Anno;
    }

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

    /* item CHECK_VACIO */
    public String check_Vacio = null;
    private void setcheck_Vacio(String ai_value)
    {
        check_Vacio = ai_value;
    }
    private String getcheck_Vacio()
    {
        return check_Vacio;
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
    public Csp_Obj_Colaboradores_De_MiRecord[] Csp_Obj_Colaboradores_De_MiRecordSet = null;
    private void setCsp_Obj_Colaboradores_De_MiRecordSet(Csp_Obj_Colaboradores_De_MiRecord[] ai_arg)
    {
        Csp_Obj_Colaboradores_De_MiRecordSet = ai_arg;
    }
    private Csp_Obj_Colaboradores_De_MiRecord[] getCsp_Obj_Colaboradores_De_MiRecordSet()
    {
        return Csp_Obj_Colaboradores_De_MiRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Obj_Colaboradores_De_MiBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANNO.
        if (p_Anno != null)
        {
            htItems.put("P_ANNO", M4BusinessMethodArg.toString(p_Anno));
        }
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
        // CHECK_VACIO.
        if (check_Vacio != null)
        {
            htItems.put("CHECK_VACIO", M4BusinessMethodArg.toString(check_Vacio));
        }
        // P_EVALUADOR.
        if (p_Evaluador != null)
        {
            htItems.put("P_EVALUADOR", M4BusinessMethodArg.toString(p_Evaluador));
        }

        // insert 'block scope' values in CSP_OBJ_COLABORADORES_DE_MI.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_OBJ_COLABORADORES_DE_MI.
        if (Csp_Obj_Colaboradores_De_MiRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Obj_Colaboradores_De_MiRecordSet.length; i++)
        {
            Csp_Obj_Colaboradores_De_MiRecord record = Csp_Obj_Colaboradores_De_MiRecordSet[i];
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
        // read 'block scope' values in CSP_OBJ_COLABORADORES_DE_MI.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANNO.
        sItemName = "P_ANNO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anno = sItemValue;
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
        // read CHECK_VACIO.
        sItemName = "CHECK_VACIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        check_Vacio = sItemValue;
        // read P_EVALUADOR.
        sItemName = "P_EVALUADOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Evaluador = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Obj_Colaboradores_De_MiRecordSet = new Csp_Obj_Colaboradores_De_MiRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Obj_Colaboradores_De_MiRecord record = new Csp_Obj_Colaboradores_De_MiRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Obj_Colaboradores_De_MiRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Obj_Colaboradores_De_MiBlock */

