/**
 * Csp_Comprobar_PlanBlock.java
 * Self generated code for Bussines Object CSP_CREAR_OBJ.
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
package com.meta4.soapservices.services.rpc.csp_crear_obj;

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
 * Bean for node Csp_Comprobar_Plan.
 * @author Meta4
 */
public 
class Csp_Comprobar_PlanBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_CREAR_OBJ";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_COMPROBAR_PLAN";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Comprobar_PlanBlock.class.getName());

    /* item P_PLAN */
    public String p_Plan = null;
    private void setp_Plan(String ai_value)
    {
        p_Plan = ai_value;
    }
    private String getp_Plan()
    {
        return p_Plan;
    }

    /* item P_TIPO */
    public String p_Tipo = null;
    private void setp_Tipo(String ai_value)
    {
        p_Tipo = ai_value;
    }
    private String getp_Tipo()
    {
        return p_Tipo;
    }

    /* item P_FECHA */
    public String p_Fecha = null;
    private void setp_Fecha(String ai_value)
    {
        p_Fecha = ai_value;
    }
    private String getp_Fecha()
    {
        return p_Fecha;
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

    /* the recordset */
    public Csp_Comprobar_PlanRecord[] Csp_Comprobar_PlanRecordSet = null;
    private void setCsp_Comprobar_PlanRecordSet(Csp_Comprobar_PlanRecord[] ai_arg)
    {
        Csp_Comprobar_PlanRecordSet = ai_arg;
    }
    private Csp_Comprobar_PlanRecord[] getCsp_Comprobar_PlanRecordSet()
    {
        return Csp_Comprobar_PlanRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Comprobar_PlanBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_PLAN.
        if (p_Plan != null)
        {
            htItems.put("P_PLAN", M4BusinessMethodArg.toString(p_Plan));
        }
        // P_TIPO.
        if (p_Tipo != null)
        {
            htItems.put("P_TIPO", M4BusinessMethodArg.toString(p_Tipo));
        }
        // P_FECHA.
        if (p_Fecha != null)
        {
            htItems.put("P_FECHA", M4BusinessMethodArg.toString(p_Fecha));
        }
        // P_EMPLEADO.
        if (p_Empleado != null)
        {
            htItems.put("P_EMPLEADO", M4BusinessMethodArg.toString(p_Empleado));
        }

        // insert 'block scope' values in CSP_COMPROBAR_PLAN.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_COMPROBAR_PLAN.
        if (Csp_Comprobar_PlanRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Comprobar_PlanRecordSet.length; i++)
        {
            Csp_Comprobar_PlanRecord record = Csp_Comprobar_PlanRecordSet[i];
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
        // read 'block scope' values in CSP_COMPROBAR_PLAN.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_PLAN.
        sItemName = "P_PLAN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Plan = sItemValue;
        // read P_TIPO.
        sItemName = "P_TIPO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Tipo = sItemValue;
        // read P_FECHA.
        sItemName = "P_FECHA";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Fecha = sItemValue;
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Comprobar_PlanRecordSet = new Csp_Comprobar_PlanRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Comprobar_PlanRecord record = new Csp_Comprobar_PlanRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Comprobar_PlanRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Comprobar_PlanBlock */

