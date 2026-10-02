/**
 * Csp_Insert_Obj_EvBlock.java
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
 * Bean for node Csp_Insert_Obj_Ev.
 * @author Meta4
 */
public 
class Csp_Insert_Obj_EvBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_GUARDAR_OBJ_PLAN";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_INSERT_OBJ_EV";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Insert_Obj_EvBlock.class.getName());

    /* item P_OBJETIVO */
    public String p_Objetivo = null;
    private void setp_Objetivo(String ai_value)
    {
        p_Objetivo = ai_value;
    }
    private String getp_Objetivo()
    {
        return p_Objetivo;
    }

    /* item CSP_ID_HR */
    public String csp_Id_Hr = null;
    private void setcsp_Id_Hr(String ai_value)
    {
        csp_Id_Hr = ai_value;
    }
    private String getcsp_Id_Hr()
    {
        return csp_Id_Hr;
    }

    /* item CSP_OR_HR_ROLE */
    public Double csp_Or_Hr_Role = null;
    private void setcsp_Or_Hr_Role(Double ai_value)
    {
        csp_Or_Hr_Role = ai_value;
    }
    private Double getcsp_Or_Hr_Role()
    {
        return csp_Or_Hr_Role;
    }

    /* item ID_ORGANIZATION */
    public String id_Organization = null;
    private void setid_Organization(String ai_value)
    {
        id_Organization = ai_value;
    }
    private String getid_Organization()
    {
        return id_Organization;
    }

    /* item CSP_ID_EVALUATOR */
    public String csp_Id_Evaluator = null;
    private void setcsp_Id_Evaluator(String ai_value)
    {
        csp_Id_Evaluator = ai_value;
    }
    private String getcsp_Id_Evaluator()
    {
        return csp_Id_Evaluator;
    }

    /* item CSP_OR_EVALUATOR */
    public Double csp_Or_Evaluator = null;
    private void setcsp_Or_Evaluator(Double ai_value)
    {
        csp_Or_Evaluator = ai_value;
    }
    private Double getcsp_Or_Evaluator()
    {
        return csp_Or_Evaluator;
    }

    /* item CSP_DT_START_EVAL */
    public Calendar csp_Dt_Start_Eval = null;
    private void setcsp_Dt_Start_Eval(Calendar ai_value)
    {
        csp_Dt_Start_Eval = ai_value;
    }
    private Calendar getcsp_Dt_Start_Eval()
    {
        return csp_Dt_Start_Eval;
    }

    /* the recordset */
    public Csp_Insert_Obj_EvRecord[] Csp_Insert_Obj_EvRecordSet = null;
    private void setCsp_Insert_Obj_EvRecordSet(Csp_Insert_Obj_EvRecord[] ai_arg)
    {
        Csp_Insert_Obj_EvRecordSet = ai_arg;
    }
    private Csp_Insert_Obj_EvRecord[] getCsp_Insert_Obj_EvRecordSet()
    {
        return Csp_Insert_Obj_EvRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Insert_Obj_EvBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_OBJETIVO.
        if (p_Objetivo != null)
        {
            htItems.put("P_OBJETIVO", M4BusinessMethodArg.toString(p_Objetivo));
        }
        // CSP_ID_HR.
        if (csp_Id_Hr != null)
        {
            htItems.put("CSP_ID_HR", M4BusinessMethodArg.toString(csp_Id_Hr));
        }
        // CSP_OR_HR_ROLE.
		if (csp_Or_Hr_Role != null)
    	{
			htItems.put("CSP_OR_HR_ROLE", M4BusinessMethodArg.toString(csp_Or_Hr_Role));
    	}

        // ID_ORGANIZATION.
        if (id_Organization != null)
        {
            htItems.put("ID_ORGANIZATION", M4BusinessMethodArg.toString(id_Organization));
        }
        // CSP_ID_EVALUATOR.
        if (csp_Id_Evaluator != null)
        {
            htItems.put("CSP_ID_EVALUATOR", M4BusinessMethodArg.toString(csp_Id_Evaluator));
        }
        // CSP_OR_EVALUATOR.
		if (csp_Or_Evaluator != null)
    	{
			htItems.put("CSP_OR_EVALUATOR", M4BusinessMethodArg.toString(csp_Or_Evaluator));
    	}

        // CSP_DT_START_EVAL.
        if (csp_Dt_Start_Eval != null)
        {
            htItems.put("CSP_DT_START_EVAL", M4BusinessMethodArg.toString(csp_Dt_Start_Eval));
        }

        // insert 'block scope' values in CSP_INSERT_OBJ_EV.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_INSERT_OBJ_EV.
        if (Csp_Insert_Obj_EvRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Insert_Obj_EvRecordSet.length; i++)
        {
            Csp_Insert_Obj_EvRecord record = Csp_Insert_Obj_EvRecordSet[i];
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
        // read 'block scope' values in CSP_INSERT_OBJ_EV.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_OBJETIVO.
        sItemName = "P_OBJETIVO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Objetivo = sItemValue;
        // read CSP_ID_HR.
        sItemName = "CSP_ID_HR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Id_Hr = sItemValue;
        // read CSP_OR_HR_ROLE.
        sItemName = "CSP_OR_HR_ROLE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Or_Hr_Role = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read ID_ORGANIZATION.
        sItemName = "ID_ORGANIZATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Organization = sItemValue;
        // read CSP_ID_EVALUATOR.
        sItemName = "CSP_ID_EVALUATOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Id_Evaluator = sItemValue;
        // read CSP_OR_EVALUATOR.
        sItemName = "CSP_OR_EVALUATOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Or_Evaluator = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read CSP_DT_START_EVAL.
        sItemName = "CSP_DT_START_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Dt_Start_Eval = M4BusinessMethodArg.toCalendar(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Insert_Obj_EvRecordSet = new Csp_Insert_Obj_EvRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Insert_Obj_EvRecord record = new Csp_Insert_Obj_EvRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Insert_Obj_EvRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Insert_Obj_EvBlock */

