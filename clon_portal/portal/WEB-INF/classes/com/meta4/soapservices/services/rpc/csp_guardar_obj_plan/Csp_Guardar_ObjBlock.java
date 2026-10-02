/**
 * Csp_Guardar_ObjBlock.java
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
 * Bean for node Csp_Guardar_Obj.
 * @author Meta4
 */
public 
class Csp_Guardar_ObjBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GUARDAR_OBJ_PLAN";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_GUARDAR_OBJ";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Guardar_ObjBlock.class.getName());

    /* item P_SCALE */
    public String p_Scale = null;
    private void setp_Scale(String ai_value)
    {
        p_Scale = ai_value;
    }
    private String getp_Scale()
    {
        return p_Scale;
    }

    /* item P_ID_NIVEL */
    public String p_Id_Nivel = null;
    private void setp_Id_Nivel(String ai_value)
    {
        p_Id_Nivel = ai_value;
    }
    private String getp_Id_Nivel()
    {
        return p_Id_Nivel;
    }

    /* the recordset */
    public Csp_Guardar_ObjRecord[] Csp_Guardar_ObjRecordSet = null;
    private void setCsp_Guardar_ObjRecordSet(Csp_Guardar_ObjRecord[] ai_arg)
    {
        Csp_Guardar_ObjRecordSet = ai_arg;
    }
    private Csp_Guardar_ObjRecord[] getCsp_Guardar_ObjRecordSet()
    {
        return Csp_Guardar_ObjRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Guardar_ObjBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_SCALE.
        if (p_Scale != null)
        {
            htItems.put("P_SCALE", M4BusinessMethodArg.toString(p_Scale));
        }
        // P_ID_NIVEL.
        if (p_Id_Nivel != null)
        {
            htItems.put("P_ID_NIVEL", M4BusinessMethodArg.toString(p_Id_Nivel));
        }

        // insert 'block scope' values in CSP_GUARDAR_OBJ.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_GUARDAR_OBJ.
        if (Csp_Guardar_ObjRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Guardar_ObjRecordSet.length; i++)
        {
            Csp_Guardar_ObjRecord record = Csp_Guardar_ObjRecordSet[i];
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
        // read 'block scope' values in CSP_GUARDAR_OBJ.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_SCALE.
        sItemName = "P_SCALE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Scale = sItemValue;
        // read P_ID_NIVEL.
        sItemName = "P_ID_NIVEL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Nivel = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Guardar_ObjRecordSet = new Csp_Guardar_ObjRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Guardar_ObjRecord record = new Csp_Guardar_ObjRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Guardar_ObjRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Guardar_ObjBlock */

