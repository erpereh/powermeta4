/**
 * Cyc_Gd_Obj_MiscolaboBlock.java
 * Self generated code for Bussines Object CYC_GD_OBJ_MISCOLABORADORES.
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
package com.meta4.soapservices.services.rpc.cyc_gd_obj_miscolaboradores;

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
 * Bean for node Cyc_Gd_Obj_Miscolabo.
 * @author Meta4
 */
public 
class Cyc_Gd_Obj_MiscolaboBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_GD_OBJ_MISCOLABORADORES";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_GD_OBJ_MISCOLABO";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Gd_Obj_MiscolaboBlock.class.getName());

    /* item P_ID_EVALUATOR */
    public String p_Id_Evaluator = null;
    private void setp_Id_Evaluator(String ai_value)
    {
        p_Id_Evaluator = ai_value;
    }
    private String getp_Id_Evaluator()
    {
        return p_Id_Evaluator;
    }

    /* item P_DT_START_EVAL */
    public Double p_Dt_Start_Eval = null;
    private void setp_Dt_Start_Eval(Double ai_value)
    {
        p_Dt_Start_Eval = ai_value;
    }
    private Double getp_Dt_Start_Eval()
    {
        return p_Dt_Start_Eval;
    }

    /* the recordset */
    public Cyc_Gd_Obj_MiscolaboRecord[] Cyc_Gd_Obj_MiscolaboRecordSet = null;
    private void setCyc_Gd_Obj_MiscolaboRecordSet(Cyc_Gd_Obj_MiscolaboRecord[] ai_arg)
    {
        Cyc_Gd_Obj_MiscolaboRecordSet = ai_arg;
    }
    private Cyc_Gd_Obj_MiscolaboRecord[] getCyc_Gd_Obj_MiscolaboRecordSet()
    {
        return Cyc_Gd_Obj_MiscolaboRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Gd_Obj_MiscolaboBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // P_ID_EVALUATOR.
        if (p_Id_Evaluator != null)
        {
            htItems.put("P_ID_EVALUATOR", M4BusinessMethodArg.toString(p_Id_Evaluator));
        }
        // P_DT_START_EVAL.
		if (p_Dt_Start_Eval != null)
    	{
			htItems.put("P_DT_START_EVAL", M4BusinessMethodArg.toString(p_Dt_Start_Eval));
    	}


        // insert 'block scope' values in CYC_GD_OBJ_MISCOLABO.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_GD_OBJ_MISCOLABO.
        if (Cyc_Gd_Obj_MiscolaboRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Gd_Obj_MiscolaboRecordSet.length; i++)
        {
            Cyc_Gd_Obj_MiscolaboRecord record = Cyc_Gd_Obj_MiscolaboRecordSet[i];
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
        // read 'block scope' values in CYC_GD_OBJ_MISCOLABO.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read P_ID_EVALUATOR.
        sItemName = "P_ID_EVALUATOR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Id_Evaluator = sItemValue;
        // read P_DT_START_EVAL.
        sItemName = "P_DT_START_EVAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Dt_Start_Eval = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Cyc_Gd_Obj_MiscolaboRecordSet = new Cyc_Gd_Obj_MiscolaboRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Gd_Obj_MiscolaboRecord record = new Cyc_Gd_Obj_MiscolaboRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Gd_Obj_MiscolaboRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Gd_Obj_MiscolaboBlock */

