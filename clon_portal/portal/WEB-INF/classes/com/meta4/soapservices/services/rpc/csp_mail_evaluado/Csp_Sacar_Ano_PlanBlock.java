/**
 * Csp_Sacar_Ano_PlanBlock.java
 * Self generated code for Bussines Object CSP_MAIL_EVALUADO.
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
package com.meta4.soapservices.services.rpc.csp_mail_evaluado;

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
 * Bean for node Csp_Sacar_Ano_Plan.
 * @author Meta4
 */
public 
class Csp_Sacar_Ano_PlanBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_MAIL_EVALUADO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_SACAR_ANO_PLAN";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Sacar_Ano_PlanBlock.class.getName());

    /* item P_ESTADO */
    public Double p_Estado = null;
    private void setp_Estado(Double ai_value)
    {
        p_Estado = ai_value;
    }
    private Double getp_Estado()
    {
        return p_Estado;
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
    public Csp_Sacar_Ano_PlanRecord[] Csp_Sacar_Ano_PlanRecordSet = null;
    private void setCsp_Sacar_Ano_PlanRecordSet(Csp_Sacar_Ano_PlanRecord[] ai_arg)
    {
        Csp_Sacar_Ano_PlanRecordSet = ai_arg;
    }
    private Csp_Sacar_Ano_PlanRecord[] getCsp_Sacar_Ano_PlanRecordSet()
    {
        return Csp_Sacar_Ano_PlanRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Sacar_Ano_PlanBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ESTADO.
		if (p_Estado != null)
    	{
			htItems.put("P_ESTADO", M4BusinessMethodArg.toString(p_Estado));
    	}

        // P_ID_EMPLEADO.
        if (p_Id_Empleado != null)
        {
            htItems.put("P_ID_EMPLEADO", M4BusinessMethodArg.toString(p_Id_Empleado));
        }

        // insert 'block scope' values in CSP_SACAR_ANO_PLAN.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_SACAR_ANO_PLAN.
        if (Csp_Sacar_Ano_PlanRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Sacar_Ano_PlanRecordSet.length; i++)
        {
            Csp_Sacar_Ano_PlanRecord record = Csp_Sacar_Ano_PlanRecordSet[i];
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
        // read 'block scope' values in CSP_SACAR_ANO_PLAN.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ESTADO.
        sItemName = "P_ESTADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Estado = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_ID_EMPLEADO.
        sItemName = "P_ID_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Sacar_Ano_PlanRecordSet = new Csp_Sacar_Ano_PlanRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Sacar_Ano_PlanRecord record = new Csp_Sacar_Ano_PlanRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Sacar_Ano_PlanRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Sacar_Ano_PlanBlock */

