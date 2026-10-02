/**
 * Csp_Obj_PlanBlock.java
 * Self generated code for Bussines Object CSP_GUARDAR_OBJ_PLAN.
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
package com.meta4.soapservices.services.rpc.csp_guardar_obj_plan;

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
 * Bean for node Csp_Obj_Plan.
 * @author Meta4
 */
public 
class Csp_Obj_PlanBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GUARDAR_OBJ_PLAN";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_OBJ_PLAN";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Obj_PlanBlock.class.getName());

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

    /* item P_ID_OBJETIVO */
    public String p_Id_Objetivo = null;
    private void setp_Id_Objetivo(String ai_value)
    {
        p_Id_Objetivo = ai_value;
    }
    private String getp_Id_Objetivo()
    {
        return p_Id_Objetivo;
    }

    /* the recordset */
    public Csp_Obj_PlanRecord[] Csp_Obj_PlanRecordSet = null;
    private void setCsp_Obj_PlanRecordSet(Csp_Obj_PlanRecord[] ai_arg)
    {
        Csp_Obj_PlanRecordSet = ai_arg;
    }
    private Csp_Obj_PlanRecord[] getCsp_Obj_PlanRecordSet()
    {
        return Csp_Obj_PlanRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Obj_PlanBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ANIO.
        if (p_Anio != null)
        {
            htItems.put("P_ANIO", M4BusinessMethodArg.toString(p_Anio));
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
        // P_ID_OBJETIVO.
        if (p_Id_Objetivo != null)
        {
            htItems.put("P_ID_OBJETIVO", M4BusinessMethodArg.toString(p_Id_Objetivo));
        }

        // insert 'block scope' values in CSP_OBJ_PLAN.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_OBJ_PLAN.
        if (Csp_Obj_PlanRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Obj_PlanRecordSet.length; i++)
        {
            Csp_Obj_PlanRecord record = Csp_Obj_PlanRecordSet[i];
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
        // read 'block scope' values in CSP_OBJ_PLAN.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANIO.
        sItemName = "P_ANIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anio = sItemValue;
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
        // read P_ID_OBJETIVO.
        sItemName = "P_ID_OBJETIVO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Objetivo = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Obj_PlanRecordSet = new Csp_Obj_PlanRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Obj_PlanRecord record = new Csp_Obj_PlanRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Obj_PlanRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Obj_PlanBlock */

