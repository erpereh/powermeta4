/**
 * Cyc_Mt_Fase_IBlock.java
 * Self generated code for Bussines Object CYC_VAL_FASE_I.
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
package com.meta4.soapservices.services.rpc.cyc_val_fase_i;

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
 * Bean for node Cyc_Mt_Fase_I.
 * @author Meta4
 */
public 
class Cyc_Mt_Fase_IBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CYC_VAL_FASE_I";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CYC_MT_FASE_I";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Cyc_Mt_Fase_IBlock.class.getName());

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

    /* item P_HIST_VALORES */
    public String p_Hist_Valores = null;
    private void setp_Hist_Valores(String ai_value)
    {
        p_Hist_Valores = ai_value;
    }
    private String getp_Hist_Valores()
    {
        return p_Hist_Valores;
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

    /* item SYS_SENTENCE_B */
    public String sys_Sentence_B = null;
    private void setsys_Sentence_B(String ai_value)
    {
        sys_Sentence_B = ai_value;
    }
    private String getsys_Sentence_B()
    {
        return sys_Sentence_B;
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
    public Cyc_Mt_Fase_IRecord[] Cyc_Mt_Fase_IRecordSet = null;
    private void setCyc_Mt_Fase_IRecordSet(Cyc_Mt_Fase_IRecord[] ai_arg)
    {
        Cyc_Mt_Fase_IRecordSet = ai_arg;
    }
    private Cyc_Mt_Fase_IRecord[] getCyc_Mt_Fase_IRecordSet()
    {
        return Cyc_Mt_Fase_IRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Cyc_Mt_Fase_IBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // VALUE_AUX.
        if (value_Aux != null)
        {
            htItems.put("VALUE_AUX", M4BusinessMethodArg.toString(value_Aux));
        }
        // SYS_PARAM_A.
        if (sys_Param_A != null)
        {
            htItems.put("SYS_PARAM_A", M4BusinessMethodArg.toString(sys_Param_A));
        }
        // P_HIST_VALORES.
        if (p_Hist_Valores != null)
        {
            htItems.put("P_HIST_VALORES", M4BusinessMethodArg.toString(p_Hist_Valores));
        }
        // SYS_SENTENCE_A.
        if (sys_Sentence_A != null)
        {
            htItems.put("SYS_SENTENCE_A", M4BusinessMethodArg.toString(sys_Sentence_A));
        }
        // SYS_SENTENCE_B.
        if (sys_Sentence_B != null)
        {
            htItems.put("SYS_SENTENCE_B", M4BusinessMethodArg.toString(sys_Sentence_B));
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

        // insert 'block scope' values in CYC_MT_FASE_I.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CYC_MT_FASE_I.
        if (Cyc_Mt_Fase_IRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Cyc_Mt_Fase_IRecordSet.length; i++)
        {
            Cyc_Mt_Fase_IRecord record = Cyc_Mt_Fase_IRecordSet[i];
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
        // read 'block scope' values in CYC_MT_FASE_I.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read VALUE_AUX.
        sItemName = "VALUE_AUX";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        value_Aux = sItemValue;
        // read SYS_PARAM_A.
        sItemName = "SYS_PARAM_A";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Param_A = sItemValue;
        // read P_HIST_VALORES.
        sItemName = "P_HIST_VALORES";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        p_Hist_Valores = sItemValue;
        // read SYS_SENTENCE_A.
        sItemName = "SYS_SENTENCE_A";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_A = sItemValue;
        // read SYS_SENTENCE_B.
        sItemName = "SYS_SENTENCE_B";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_B = sItemValue;
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
        Cyc_Mt_Fase_IRecordSet = new Cyc_Mt_Fase_IRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Cyc_Mt_Fase_IRecord record = new Cyc_Mt_Fase_IRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Cyc_Mt_Fase_IRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Cyc_Mt_Fase_IBlock */

