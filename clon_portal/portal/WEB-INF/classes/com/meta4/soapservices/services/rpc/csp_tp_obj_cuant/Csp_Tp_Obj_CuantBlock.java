/**
 * Csp_Tp_Obj_CuantBlock.java
 * Self generated code for Bussines Object CSP_TP_OBJ_CUANT.
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
package com.meta4.soapservices.services.rpc.csp_tp_obj_cuant;

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
 * Bean for node Csp_Tp_Obj_Cuant.
 * @author Meta4
 */
public 
class Csp_Tp_Obj_CuantBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_TP_OBJ_CUANT";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_TP_OBJ_CUANT";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Tp_Obj_CuantBlock.class.getName());

    /* item ID_EMP */
    public String id_Emp = null;
    private void setid_Emp(String ai_value)
    {
        id_Emp = ai_value;
    }
    private String getid_Emp()
    {
        return id_Emp;
    }

    /* item EDITABLE */
    public String editable = null;
    private void seteditable(String ai_value)
    {
        editable = ai_value;
    }
    private String geteditable()
    {
        return editable;
    }

    /* item PRESUPUESTO */
    public String presupuesto = null;
    private void setpresupuesto(String ai_value)
    {
        presupuesto = ai_value;
    }
    private String getpresupuesto()
    {
        return presupuesto;
    }

    /* the recordset */
    public Csp_Tp_Obj_CuantRecord[] Csp_Tp_Obj_CuantRecordSet = null;
    private void setCsp_Tp_Obj_CuantRecordSet(Csp_Tp_Obj_CuantRecord[] ai_arg)
    {
        Csp_Tp_Obj_CuantRecordSet = ai_arg;
    }
    private Csp_Tp_Obj_CuantRecord[] getCsp_Tp_Obj_CuantRecordSet()
    {
        return Csp_Tp_Obj_CuantRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Tp_Obj_CuantBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // ID_EMP.
        if (id_Emp != null)
        {
            htItems.put("ID_EMP", M4BusinessMethodArg.toString(id_Emp));
        }
        // EDITABLE.
        if (editable != null)
        {
            htItems.put("EDITABLE", M4BusinessMethodArg.toString(editable));
        }
        // PRESUPUESTO.
        if (presupuesto != null)
        {
            htItems.put("PRESUPUESTO", M4BusinessMethodArg.toString(presupuesto));
        }

        // insert 'block scope' values in CSP_TP_OBJ_CUANT.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_TP_OBJ_CUANT.
        if (Csp_Tp_Obj_CuantRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Tp_Obj_CuantRecordSet.length; i++)
        {
            Csp_Tp_Obj_CuantRecord record = Csp_Tp_Obj_CuantRecordSet[i];
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
        // read 'block scope' values in CSP_TP_OBJ_CUANT.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read ID_EMP.
        sItemName = "ID_EMP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Emp = sItemValue;
        // read EDITABLE.
        sItemName = "EDITABLE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        editable = sItemValue;
        // read PRESUPUESTO.
        sItemName = "PRESUPUESTO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        presupuesto = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Tp_Obj_CuantRecordSet = new Csp_Tp_Obj_CuantRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Tp_Obj_CuantRecord record = new Csp_Tp_Obj_CuantRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Tp_Obj_CuantRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Tp_Obj_CuantBlock */

