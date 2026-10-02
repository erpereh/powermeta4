/**
 * Csp_Mt_Eval_Capab_ReadBlock.java
 * Self generated code for Bussines Object CSP_INF_GRUPAL_EVAL.
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
package com.meta4.soapservices.services.rpc.csp_inf_grupal_eval;

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
 * Bean for node Csp_Mt_Eval_Capab_Read.
 * @author Meta4
 */
public 
class Csp_Mt_Eval_Capab_ReadBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_INF_GRUPAL_EVAL";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_MT_EVAL_CAPAB_READ";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Mt_Eval_Capab_ReadBlock.class.getName());

    /* item SYS_PARAM_A */
    public String sys_Param_A = null;
    private void setsys_Param_A(String ai_value)
    {
        sys_Param_A = ai_value;
    }
    private String getsys_Param_A()
    {
        return sys_Param_A;
    }

    /* item SYS_SENTENCE_A */
    public String sys_Sentence_A = null;
    private void setsys_Sentence_A(String ai_value)
    {
        sys_Sentence_A = ai_value;
    }
    private String getsys_Sentence_A()
    {
        return sys_Sentence_A;
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
    public Csp_Mt_Eval_Capab_ReadRecord[] Csp_Mt_Eval_Capab_ReadRecordSet = null;
    private void setCsp_Mt_Eval_Capab_ReadRecordSet(Csp_Mt_Eval_Capab_ReadRecord[] ai_arg)
    {
        Csp_Mt_Eval_Capab_ReadRecordSet = ai_arg;
    }
    private Csp_Mt_Eval_Capab_ReadRecord[] getCsp_Mt_Eval_Capab_ReadRecordSet()
    {
        return Csp_Mt_Eval_Capab_ReadRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Mt_Eval_Capab_ReadBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SYS_PARAM_A.
        if (sys_Param_A != null)
        {
            htItems.put("SYS_PARAM_A", M4BusinessMethodArg.toString(sys_Param_A));
        }
        // SYS_SENTENCE_A.
        if (sys_Sentence_A != null)
        {
            htItems.put("SYS_SENTENCE_A", M4BusinessMethodArg.toString(sys_Sentence_A));
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

        // insert 'block scope' values in CSP_MT_EVAL_CAPAB_READ.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_MT_EVAL_CAPAB_READ.
        if (Csp_Mt_Eval_Capab_ReadRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Mt_Eval_Capab_ReadRecordSet.length; i++)
        {
            Csp_Mt_Eval_Capab_ReadRecord record = Csp_Mt_Eval_Capab_ReadRecordSet[i];
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
        // read 'block scope' values in CSP_MT_EVAL_CAPAB_READ.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SYS_PARAM_A.
        sItemName = "SYS_PARAM_A";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Param_A = sItemValue;
        // read SYS_SENTENCE_A.
        sItemName = "SYS_SENTENCE_A";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_A = sItemValue;
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
        Csp_Mt_Eval_Capab_ReadRecordSet = new Csp_Mt_Eval_Capab_ReadRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Mt_Eval_Capab_ReadRecord record = new Csp_Mt_Eval_Capab_ReadRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Mt_Eval_Capab_ReadRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Mt_Eval_Capab_ReadBlock */

