/**
 * Snco_Ad_PopulationBlock.java
 * Self generated code for Bussines Object SNTC_AD_POPULATION.
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
package com.meta4.soapservices.services.rpc.sntc_ad_population;

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
 * Bean for node Snco_Ad_Population.
 * @author Meta4
 */
public 
class Snco_Ad_PopulationBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_AD_POPULATION";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_POPULATION";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_PopulationBlock.class.getName());

    /* item SYS_PARAM */
    private String sys_Param = null;
    public void setsys_Param(String ai_value)
    {
        sys_Param = ai_value;
    }
    public String getsys_Param()
    {
        return sys_Param;
    }

    /* item SYS_SENTENCE */
    private String sys_Sentence = null;
    public void setsys_Sentence(String ai_value)
    {
        sys_Sentence = ai_value;
    }
    public String getsys_Sentence()
    {
        return sys_Sentence;
    }

    /* item INCLUDE_WU_CLOSED */
    private Double include_Wu_Closed = null;
    public void setinclude_Wu_Closed(Double ai_value)
    {
        include_Wu_Closed = ai_value;
    }
    public Double getinclude_Wu_Closed()
    {
        return include_Wu_Closed;
    }

    /* item API_SQL_CONTEXT_POP */
    private String api_Sql_Context_Pop = null;
    public void setapi_Sql_Context_Pop(String ai_value)
    {
        api_Sql_Context_Pop = ai_value;
    }
    public String getapi_Sql_Context_Pop()
    {
        return api_Sql_Context_Pop;
    }

    /* item INCLUDE_WU_CLOSED_TO */
    private Calendar include_Wu_Closed_To = null;
    public void setinclude_Wu_Closed_To(Calendar ai_value)
    {
        include_Wu_Closed_To = ai_value;
    }
    public Calendar getinclude_Wu_Closed_To()
    {
        return include_Wu_Closed_To;
    }

    /* item POB_FILTER_SYS_PARAM */
    private String pob_Filter_Sys_Param = null;
    public void setpob_Filter_Sys_Param(String ai_value)
    {
        pob_Filter_Sys_Param = ai_value;
    }
    public String getpob_Filter_Sys_Param()
    {
        return pob_Filter_Sys_Param;
    }

    /* item INCLUDE_WU_CLOSED_FROM */
    private Calendar include_Wu_Closed_From = null;
    public void setinclude_Wu_Closed_From(Calendar ai_value)
    {
        include_Wu_Closed_From = ai_value;
    }
    public Calendar getinclude_Wu_Closed_From()
    {
        return include_Wu_Closed_From;
    }

    /* item GEN_POB_FILTER_WITH_SYS_PARAM */
    private Double gen_Pob_Filter_With_Sys_Param = null;
    public void setgen_Pob_Filter_With_Sys_Param(Double ai_value)
    {
        gen_Pob_Filter_With_Sys_Param = ai_value;
    }
    public Double getgen_Pob_Filter_With_Sys_Param()
    {
        return gen_Pob_Filter_With_Sys_Param;
    }

    /* item MAX_NUM_EMPLOYEE_LIST_ALLOWED */
    private Double max_Num_Employee_List_Allowed = null;
    public void setmax_Num_Employee_List_Allowed(Double ai_value)
    {
        max_Num_Employee_List_Allowed = ai_value;
    }
    public Double getmax_Num_Employee_List_Allowed()
    {
        return max_Num_Employee_List_Allowed;
    }

    /* the recordset */
    private Snco_Ad_PopulationRecord[] Snco_Ad_PopulationRecordSet = null;
    public void setSnco_Ad_PopulationRecordSet(Snco_Ad_PopulationRecord[] ai_arg)
    {
        Snco_Ad_PopulationRecordSet = ai_arg;
    }
    public Snco_Ad_PopulationRecord[] getSnco_Ad_PopulationRecordSet()
    {
        return Snco_Ad_PopulationRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_PopulationBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // SYS_PARAM.
        if (sys_Param != null)
        {
            htItems.put("SYS_PARAM", M4BusinessMethodArg.toString(sys_Param));
        }
        // SYS_SENTENCE.
        if (sys_Sentence != null)
        {
            htItems.put("SYS_SENTENCE", M4BusinessMethodArg.toString(sys_Sentence));
        }
        // INCLUDE_WU_CLOSED.
		if (include_Wu_Closed != null)
    	{
			htItems.put("INCLUDE_WU_CLOSED", M4BusinessMethodArg.toString(include_Wu_Closed));
    	}

        // API_SQL_CONTEXT_POP.
        if (api_Sql_Context_Pop != null)
        {
            htItems.put("API_SQL_CONTEXT_POP", M4BusinessMethodArg.toString(api_Sql_Context_Pop));
        }
        // INCLUDE_WU_CLOSED_TO.
        if (include_Wu_Closed_To != null)
        {
            htItems.put("INCLUDE_WU_CLOSED_TO", M4BusinessMethodArg.toString(include_Wu_Closed_To));
        }
        // POB_FILTER_SYS_PARAM.
        if (pob_Filter_Sys_Param != null)
        {
            htItems.put("POB_FILTER_SYS_PARAM", M4BusinessMethodArg.toString(pob_Filter_Sys_Param));
        }
        // INCLUDE_WU_CLOSED_FROM.
        if (include_Wu_Closed_From != null)
        {
            htItems.put("INCLUDE_WU_CLOSED_FROM", M4BusinessMethodArg.toString(include_Wu_Closed_From));
        }
        // GEN_POB_FILTER_WITH_SYS_PARAM.
		if (gen_Pob_Filter_With_Sys_Param != null)
    	{
			htItems.put("GEN_POB_FILTER_WITH_SYS_PARAM", M4BusinessMethodArg.toString(gen_Pob_Filter_With_Sys_Param));
    	}

        // MAX_NUM_EMPLOYEE_LIST_ALLOWED.
		if (max_Num_Employee_List_Allowed != null)
    	{
			htItems.put("MAX_NUM_EMPLOYEE_LIST_ALLOWED", M4BusinessMethodArg.toString(max_Num_Employee_List_Allowed));
    	}


        // insert 'block scope' values in SNCO_AD_POPULATION.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_POPULATION.
        if (Snco_Ad_PopulationRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_PopulationRecordSet.length; i++)
        {
            Snco_Ad_PopulationRecord record = Snco_Ad_PopulationRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_POPULATION.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read SYS_PARAM.
        sItemName = "SYS_PARAM";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Param = sItemValue;
        // read SYS_SENTENCE.
        sItemName = "SYS_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence = sItemValue;
        // read INCLUDE_WU_CLOSED.
        sItemName = "INCLUDE_WU_CLOSED";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        include_Wu_Closed = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read API_SQL_CONTEXT_POP.
        sItemName = "API_SQL_CONTEXT_POP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        api_Sql_Context_Pop = sItemValue;
        // read INCLUDE_WU_CLOSED_TO.
        sItemName = "INCLUDE_WU_CLOSED_TO";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        include_Wu_Closed_To = M4BusinessMethodArg.toCalendar(sItemValue);
        // read POB_FILTER_SYS_PARAM.
        sItemName = "POB_FILTER_SYS_PARAM";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        pob_Filter_Sys_Param = sItemValue;
        // read INCLUDE_WU_CLOSED_FROM.
        sItemName = "INCLUDE_WU_CLOSED_FROM";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        include_Wu_Closed_From = M4BusinessMethodArg.toCalendar(sItemValue);
        // read GEN_POB_FILTER_WITH_SYS_PARAM.
        sItemName = "GEN_POB_FILTER_WITH_SYS_PARAM";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        gen_Pob_Filter_With_Sys_Param = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read MAX_NUM_EMPLOYEE_LIST_ALLOWED.
        sItemName = "MAX_NUM_EMPLOYEE_LIST_ALLOWED";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        max_Num_Employee_List_Allowed = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_PopulationRecordSet = new Snco_Ad_PopulationRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_PopulationRecord record = new Snco_Ad_PopulationRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_PopulationRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_PopulationBlock */

