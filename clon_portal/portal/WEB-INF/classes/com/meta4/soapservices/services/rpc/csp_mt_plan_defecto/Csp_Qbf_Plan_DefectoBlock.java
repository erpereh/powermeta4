/**
 * Csp_Qbf_Plan_DefectoBlock.java
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
 * Bean for node Csp_Qbf_Plan_Defecto.
 * @author Meta4
 */
public 
class Csp_Qbf_Plan_DefectoBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "CSP_MT_PLAN_DEFECTO";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "CSP_QBF_PLAN_DEFECTO";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Csp_Qbf_Plan_DefectoBlock.class.getName());

    /* item PVT_GET_FROM */
    public String pvt_Get_From = null;
    private void setpvt_Get_From(String ai_value)
    {
        pvt_Get_From = ai_value;
    }
    private String getpvt_Get_From()
    {
        return pvt_Get_From;
    }

    /* item PVT_GET_WHERE */
    public String pvt_Get_Where = null;
    private void setpvt_Get_Where(String ai_value)
    {
        pvt_Get_Where = ai_value;
    }
    private String getpvt_Get_Where()
    {
        return pvt_Get_Where;
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

    /* item USE_EXTERN_FILTER */
    public Double use_Extern_Filter = null;
    private void setuse_Extern_Filter(Double ai_value)
    {
        use_Extern_Filter = ai_value;
    }
    private Double getuse_Extern_Filter()
    {
        return use_Extern_Filter;
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

    /* item EXTERN_FILTER_HANDLE */
    public Double extern_Filter_Handle = null;
    private void setextern_Filter_Handle(Double ai_value)
    {
        extern_Filter_Handle = ai_value;
    }
    private Double getextern_Filter_Handle()
    {
        return extern_Filter_Handle;
    }

    /* item DT_START */
    public Calendar dt_Start = null;
    private void setdt_Start(Calendar ai_value)
    {
        dt_Start = ai_value;
    }
    private Calendar getdt_Start()
    {
        return dt_Start;
    }

    /* item OPR_DT_START */
    public Double opr_Dt_Start = null;
    private void setopr_Dt_Start(Double ai_value)
    {
        opr_Dt_Start = ai_value;
    }
    private Double getopr_Dt_Start()
    {
        return opr_Dt_Start;
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

    /* item CSP_ID_EVAL_PLAN */
    public String csp_Id_Eval_Plan = null;
    private void setcsp_Id_Eval_Plan(String ai_value)
    {
        csp_Id_Eval_Plan = ai_value;
    }
    private String getcsp_Id_Eval_Plan()
    {
        return csp_Id_Eval_Plan;
    }

    /* item OPR_ID_ORGANIZATION */
    public Double opr_Id_Organization = null;
    private void setopr_Id_Organization(Double ai_value)
    {
        opr_Id_Organization = ai_value;
    }
    private Double getopr_Id_Organization()
    {
        return opr_Id_Organization;
    }

    /* item OPR_CSP_ID_EVAL_PLAN */
    public Double opr_Csp_Id_Eval_Plan = null;
    private void setopr_Csp_Id_Eval_Plan(Double ai_value)
    {
        opr_Csp_Id_Eval_Plan = ai_value;
    }
    private Double getopr_Csp_Id_Eval_Plan()
    {
        return opr_Csp_Id_Eval_Plan;
    }

    /* the recordset */
    public Csp_Qbf_Plan_DefectoRecord[] Csp_Qbf_Plan_DefectoRecordSet = null;
    private void setCsp_Qbf_Plan_DefectoRecordSet(Csp_Qbf_Plan_DefectoRecord[] ai_arg)
    {
        Csp_Qbf_Plan_DefectoRecordSet = ai_arg;
    }
    private Csp_Qbf_Plan_DefectoRecord[] getCsp_Qbf_Plan_DefectoRecordSet()
    {
        return Csp_Qbf_Plan_DefectoRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Csp_Qbf_Plan_DefectoBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // PVT_GET_FROM.
        if (pvt_Get_From != null)
        {
            htItems.put("PVT_GET_FROM", M4BusinessMethodArg.toString(pvt_Get_From));
        }
        // PVT_GET_WHERE.
        if (pvt_Get_Where != null)
        {
            htItems.put("PVT_GET_WHERE", M4BusinessMethodArg.toString(pvt_Get_Where));
        }
        // SYS_PARAM_FILTER.
        if (sys_Param_Filter != null)
        {
            htItems.put("SYS_PARAM_FILTER", M4BusinessMethodArg.toString(sys_Param_Filter));
        }
        // USE_EXTERN_FILTER.
		if (use_Extern_Filter != null)
    	{
			htItems.put("USE_EXTERN_FILTER", M4BusinessMethodArg.toString(use_Extern_Filter));
    	}

        // SYS_SENTENCE_FILTER.
        if (sys_Sentence_Filter != null)
        {
            htItems.put("SYS_SENTENCE_FILTER", M4BusinessMethodArg.toString(sys_Sentence_Filter));
        }
        // EXTERN_FILTER_HANDLE.
		if (extern_Filter_Handle != null)
    	{
			htItems.put("EXTERN_FILTER_HANDLE", M4BusinessMethodArg.toString(extern_Filter_Handle));
    	}

        // DT_START.
        if (dt_Start != null)
        {
            htItems.put("DT_START", M4BusinessMethodArg.toString(dt_Start));
        }
        // OPR_DT_START.
		if (opr_Dt_Start != null)
    	{
			htItems.put("OPR_DT_START", M4BusinessMethodArg.toString(opr_Dt_Start));
    	}

        // ID_ORGANIZATION.
        if (id_Organization != null)
        {
            htItems.put("ID_ORGANIZATION", M4BusinessMethodArg.toString(id_Organization));
        }
        // CSP_ID_EVAL_PLAN.
        if (csp_Id_Eval_Plan != null)
        {
            htItems.put("CSP_ID_EVAL_PLAN", M4BusinessMethodArg.toString(csp_Id_Eval_Plan));
        }
        // OPR_ID_ORGANIZATION.
		if (opr_Id_Organization != null)
    	{
			htItems.put("OPR_ID_ORGANIZATION", M4BusinessMethodArg.toString(opr_Id_Organization));
    	}

        // OPR_CSP_ID_EVAL_PLAN.
		if (opr_Csp_Id_Eval_Plan != null)
    	{
			htItems.put("OPR_CSP_ID_EVAL_PLAN", M4BusinessMethodArg.toString(opr_Csp_Id_Eval_Plan));
    	}


        // insert 'block scope' values in CSP_QBF_PLAN_DEFECTO.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in CSP_QBF_PLAN_DEFECTO.
        if (Csp_Qbf_Plan_DefectoRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Csp_Qbf_Plan_DefectoRecordSet.length; i++)
        {
            Csp_Qbf_Plan_DefectoRecord record = Csp_Qbf_Plan_DefectoRecordSet[i];
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
        // read 'block scope' values in CSP_QBF_PLAN_DEFECTO.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read PVT_GET_FROM.
        sItemName = "PVT_GET_FROM";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        pvt_Get_From = sItemValue;
        // read PVT_GET_WHERE.
        sItemName = "PVT_GET_WHERE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        pvt_Get_Where = sItemValue;
        // read SYS_PARAM_FILTER.
        sItemName = "SYS_PARAM_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Param_Filter = sItemValue;
        // read USE_EXTERN_FILTER.
        sItemName = "USE_EXTERN_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        use_Extern_Filter = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read SYS_SENTENCE_FILTER.
        sItemName = "SYS_SENTENCE_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_Filter = sItemValue;
        // read EXTERN_FILTER_HANDLE.
        sItemName = "EXTERN_FILTER_HANDLE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        extern_Filter_Handle = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read DT_START.
        sItemName = "DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        dt_Start = M4BusinessMethodArg.toCalendar(sItemValue);
        // read OPR_DT_START.
        sItemName = "OPR_DT_START";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        opr_Dt_Start = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read ID_ORGANIZATION.
        sItemName = "ID_ORGANIZATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Organization = sItemValue;
        // read CSP_ID_EVAL_PLAN.
        sItemName = "CSP_ID_EVAL_PLAN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        csp_Id_Eval_Plan = sItemValue;
        // read OPR_ID_ORGANIZATION.
        sItemName = "OPR_ID_ORGANIZATION";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        opr_Id_Organization = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read OPR_CSP_ID_EVAL_PLAN.
        sItemName = "OPR_CSP_ID_EVAL_PLAN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        opr_Csp_Id_Eval_Plan = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Csp_Qbf_Plan_DefectoRecordSet = new Csp_Qbf_Plan_DefectoRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Csp_Qbf_Plan_DefectoRecord record = new Csp_Qbf_Plan_DefectoRecord();
                      
			      record.m4AutoGeneratedRecordID = sRecordID;
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Csp_Qbf_Plan_DefectoRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Csp_Qbf_Plan_DefectoBlock */

