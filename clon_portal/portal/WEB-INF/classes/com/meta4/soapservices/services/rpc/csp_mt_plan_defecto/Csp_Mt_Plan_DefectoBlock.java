/**
 * Csp_Mt_Plan_DefectoBlock.java
 * Self generated code for Bussines Object CSP_MT_PLAN_DEFECTO.
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
package com.meta4.soapservices.services.rpc.csp_mt_plan_defecto;

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
 * Bean for node Csp_Mt_Plan_Defecto.
 * @author Meta4
 */
public 
class Csp_Mt_Plan_DefectoBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_MT_PLAN_DEFECTO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_MT_PLAN_DEFECTO";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Mt_Plan_DefectoBlock.class.getName());

    /* item VALUE_AUX */
    public String value_Aux = null;
    private void setvalue_Aux(String ai_value)
    {
        value_Aux = ai_value;
    }
    private String getvalue_Aux()
    {
        return value_Aux;
    }

    /* item SYSENTENCE */
    public String sysentence = null;
    private void setsysentence(String ai_value)
    {
        sysentence = ai_value;
    }
    private String getsysentence()
    {
        return sysentence;
    }

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

    /* item SYS_PARAM_FILTER */
    public String sys_Param_Filter = null;
    private void setsys_Param_Filter(String ai_value)
    {
        sys_Param_Filter = ai_value;
    }
    private String getsys_Param_Filter()
    {
        return sys_Param_Filter;
    }

    /* item SYS_SENTENCE_FIXED */
    public String sys_Sentence_Fixed = null;
    private void setsys_Sentence_Fixed(String ai_value)
    {
        sys_Sentence_Fixed = ai_value;
    }
    private String getsys_Sentence_Fixed()
    {
        return sys_Sentence_Fixed;
    }

    /* item SYS_SENTENCE_FILTER */
    public String sys_Sentence_Filter = null;
    private void setsys_Sentence_Filter(String ai_value)
    {
        sys_Sentence_Filter = ai_value;
    }
    private String getsys_Sentence_Filter()
    {
        return sys_Sentence_Filter;
    }

    /* the recordset */
    public Csp_Mt_Plan_DefectoRecord[] Csp_Mt_Plan_DefectoRecordSet = null;
    private void setCsp_Mt_Plan_DefectoRecordSet(Csp_Mt_Plan_DefectoRecord[] ai_arg)
    {
        Csp_Mt_Plan_DefectoRecordSet = ai_arg;
    }
    private Csp_Mt_Plan_DefectoRecord[] getCsp_Mt_Plan_DefectoRecordSet()
    {
        return Csp_Mt_Plan_DefectoRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Mt_Plan_DefectoBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // VALUE_AUX.
        if (value_Aux != null)
        {
            htItems.put("VALUE_AUX", M4BusinessMethodArg.toString(value_Aux));
        }
        // SYSENTENCE.
        if (sysentence != null)
        {
            htItems.put("SYSENTENCE", M4BusinessMethodArg.toString(sysentence));
        }
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
        // SYS_PARAM_FILTER.
        if (sys_Param_Filter != null)
        {
            htItems.put("SYS_PARAM_FILTER", M4BusinessMethodArg.toString(sys_Param_Filter));
        }
        // SYS_SENTENCE_FIXED.
        if (sys_Sentence_Fixed != null)
        {
            htItems.put("SYS_SENTENCE_FIXED", M4BusinessMethodArg.toString(sys_Sentence_Fixed));
        }
        // SYS_SENTENCE_FILTER.
        if (sys_Sentence_Filter != null)
        {
            htItems.put("SYS_SENTENCE_FILTER", M4BusinessMethodArg.toString(sys_Sentence_Filter));
        }

        // insert 'block scope' values in CSP_MT_PLAN_DEFECTO.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_MT_PLAN_DEFECTO.
        if (Csp_Mt_Plan_DefectoRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Mt_Plan_DefectoRecordSet.length; i++)
        {
            Csp_Mt_Plan_DefectoRecord record = Csp_Mt_Plan_DefectoRecordSet[i];
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
        // read 'block scope' values in CSP_MT_PLAN_DEFECTO.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read VALUE_AUX.
        sItemName = "VALUE_AUX";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        value_Aux = sItemValue;
        // read SYSENTENCE.
        sItemName = "SYSENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sysentence = sItemValue;
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
        // read SYS_PARAM_FILTER.
        sItemName = "SYS_PARAM_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Param_Filter = sItemValue;
        // read SYS_SENTENCE_FIXED.
        sItemName = "SYS_SENTENCE_FIXED";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_Fixed = sItemValue;
        // read SYS_SENTENCE_FILTER.
        sItemName = "SYS_SENTENCE_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_Filter = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Mt_Plan_DefectoRecordSet = new Csp_Mt_Plan_DefectoRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Mt_Plan_DefectoRecord record = new Csp_Mt_Plan_DefectoRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Mt_Plan_DefectoRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Mt_Plan_DefectoBlock */

