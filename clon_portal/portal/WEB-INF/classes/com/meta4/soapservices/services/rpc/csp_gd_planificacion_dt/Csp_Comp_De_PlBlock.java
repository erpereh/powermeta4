/**
 * Csp_Comp_De_PlBlock.java
 * Self generated code for Bussines Object CSP_GD_PLANIFICACION_DT.
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
package com.meta4.soapservices.services.rpc.csp_gd_planificacion_dt;

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
 * Bean for node Csp_Comp_De_Pl.
 * @author Meta4
 */
public 
class Csp_Comp_De_PlBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GD_PLANIFICACION_DT";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_COMP_DE_PL";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Comp_De_PlBlock.class.getName());

    /* item P_ANIO */
    public Double p_Anio = null;
    private void setp_Anio(Double ai_value)
    {
        p_Anio = ai_value;
    }
    private Double getp_Anio()
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

    /* the recordset */
    public Csp_Comp_De_PlRecord[] Csp_Comp_De_PlRecordSet = null;
    private void setCsp_Comp_De_PlRecordSet(Csp_Comp_De_PlRecord[] ai_arg)
    {
        Csp_Comp_De_PlRecordSet = ai_arg;
    }
    private Csp_Comp_De_PlRecord[] getCsp_Comp_De_PlRecordSet()
    {
        return Csp_Comp_De_PlRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Comp_De_PlBlock.writeOperations(...)");

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

        // insert 'block scope' values in CSP_COMP_DE_PL.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_COMP_DE_PL.
        if (Csp_Comp_De_PlRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Comp_De_PlRecordSet.length; i++)
        {
            Csp_Comp_De_PlRecord record = Csp_Comp_De_PlRecordSet[i];
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
        // read 'block scope' values in CSP_COMP_DE_PL.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ANIO.
        sItemName = "P_ANIO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Anio = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read P_EMPLEADO.
        sItemName = "P_EMPLEADO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Empleado = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Comp_De_PlRecordSet = new Csp_Comp_De_PlRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Comp_De_PlRecord record = new Csp_Comp_De_PlRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Comp_De_PlRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Comp_De_PlBlock */

