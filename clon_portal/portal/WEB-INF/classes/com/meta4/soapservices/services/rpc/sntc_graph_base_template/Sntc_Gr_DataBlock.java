/**
 * Sntc_Gr_DataBlock.java
 * Self generated code for Bussines Object SNTC_GRAPH_BASE_TEMPLATE.
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
package com.meta4.soapservices.services.rpc.sntc_graph_base_template;

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
 * Bean for node Sntc_Gr_Data.
 * @author Meta4
 */
public 
class Sntc_Gr_DataBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_GRAPH_BASE_TEMPLATE";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNTC_GR_DATA";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Sntc_Gr_DataBlock.class.getName());

    /* item XML_FILE */
    private DataHandler xml_File = null;
    public void setxml_File(DataHandler ai_value)
    {
        xml_File = ai_value;
    }
    public DataHandler getxml_File()
    {
        return xml_File;
    }

    /* item LOAD_TYPE */
    private Double load_Type = null;
    public void setload_Type(Double ai_value)
    {
        load_Type = ai_value;
    }
    public Double getload_Type()
    {
        return load_Type;
    }

    /* item NUM_RECORD */
    private Double num_Record = null;
    public void setnum_Record(Double ai_value)
    {
        num_Record = ai_value;
    }
    public Double getnum_Record()
    {
        return num_Record;
    }

    /* item MAX_NUM_REG */
    private Double max_Num_Reg = null;
    public void setmax_Num_Reg(Double ai_value)
    {
        max_Num_Reg = ai_value;
    }
    public Double getmax_Num_Reg()
    {
        return max_Num_Reg;
    }

    /* item EXECUTEREPORT */
    private String executereport = null;
    public void setexecutereport(String ai_value)
    {
        executereport = ai_value;
    }
    public String getexecutereport()
    {
        return executereport;
    }

    /* item GROUP_BY_LIST */
    private String group_By_List = null;
    public void setgroup_By_List(String ai_value)
    {
        group_By_List = ai_value;
    }
    public String getgroup_By_List()
    {
        return group_By_List;
    }

    /* item TOTALIZE_LIST */
    private String totalize_List = null;
    public void settotalize_List(String ai_value)
    {
        totalize_List = ai_value;
    }
    public String gettotalize_List()
    {
        return totalize_List;
    }

    /* item EXTRA_GROUP_BY */
    private String extra_Group_By = null;
    public void setextra_Group_By(String ai_value)
    {
        extra_Group_By = ai_value;
    }
    public String getextra_Group_By()
    {
        return extra_Group_By;
    }

    /* item ID_LOAD_METHOD */
    private String id_Load_Method = null;
    public void setid_Load_Method(String ai_value)
    {
        id_Load_Method = ai_value;
    }
    public String getid_Load_Method()
    {
        return id_Load_Method;
    }

    /* item DRILLDOWN_FILTER */
    private String drilldown_Filter = null;
    public void setdrilldown_Filter(String ai_value)
    {
        drilldown_Filter = ai_value;
    }
    public String getdrilldown_Filter()
    {
        return drilldown_Filter;
    }

    /* item C_LOAD_TYPE_GROUP */
    private Double c_Load_Type_Group = null;
    public void setc_Load_Type_Group(Double ai_value)
    {
        c_Load_Type_Group = ai_value;
    }
    public Double getc_Load_Type_Group()
    {
        return c_Load_Type_Group;
    }

    /* item ORIGINAL_SENTENCE */
    private String original_Sentence = null;
    public void setoriginal_Sentence(String ai_value)
    {
        original_Sentence = ai_value;
    }
    public String getoriginal_Sentence()
    {
        return original_Sentence;
    }

    /* item C_LOAD_TYPE_NORMAL */
    private Double c_Load_Type_Normal = null;
    public void setc_Load_Type_Normal(Double ai_value)
    {
        c_Load_Type_Normal = ai_value;
    }
    public Double getc_Load_Type_Normal()
    {
        return c_Load_Type_Normal;
    }

    /* item SYS_SENTENCE_COUNT */
    private String sys_Sentence_Count = null;
    public void setsys_Sentence_Count(String ai_value)
    {
        sys_Sentence_Count = ai_value;
    }
    public String getsys_Sentence_Count()
    {
        return sys_Sentence_Count;
    }

    /* item SYS_SENTENCE_GROUP */
    private String sys_Sentence_Group = null;
    public void setsys_Sentence_Group(String ai_value)
    {
        sys_Sentence_Group = ai_value;
    }
    public String getsys_Sentence_Group()
    {
        return sys_Sentence_Group;
    }

    /* item USE_GROUP_SENTENCE */
    private Double use_Group_Sentence = null;
    public void setuse_Group_Sentence(Double ai_value)
    {
        use_Group_Sentence = ai_value;
    }
    public Double getuse_Group_Sentence()
    {
        return use_Group_Sentence;
    }

    /* item EXECUTEREPORTSERVER */
    private String executereportserver = null;
    public void setexecutereportserver(String ai_value)
    {
        executereportserver = ai_value;
    }
    public String getexecutereportserver()
    {
        return executereportserver;
    }

    /* item SYS_SENTENCE_FILTER */
    private String sys_Sentence_Filter = null;
    public void setsys_Sentence_Filter(String ai_value)
    {
        sys_Sentence_Filter = ai_value;
    }
    public String getsys_Sentence_Filter()
    {
        return sys_Sentence_Filter;
    }

    /* item C_LOAD_TYPE_OVERFLOW */
    private Double c_Load_Type_Overflow = null;
    public void setc_Load_Type_Overflow(Double ai_value)
    {
        c_Load_Type_Overflow = ai_value;
    }
    public Double getc_Load_Type_Overflow()
    {
        return c_Load_Type_Overflow;
    }

    /* item ORIGINAL_FROM_SENTENCE */
    private String original_From_Sentence = null;
    public void setoriginal_From_Sentence(String ai_value)
    {
        original_From_Sentence = ai_value;
    }
    public String getoriginal_From_Sentence()
    {
        return original_From_Sentence;
    }

    /* the recordset */
    private Sntc_Gr_DataRecord[] Sntc_Gr_DataRecordSet = null;
    public void setSntc_Gr_DataRecordSet(Sntc_Gr_DataRecord[] ai_arg)
    {
        Sntc_Gr_DataRecordSet = ai_arg;
    }
    public Sntc_Gr_DataRecord[] getSntc_Gr_DataRecordSet()
    {
        return Sntc_Gr_DataRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Sntc_Gr_DataBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // XML_FILE.
        if ( xml_File != null )
        {
            htBlobs.put("XML_FILE", xml_File.getName());
        }
        // LOAD_TYPE.
		if (load_Type != null)
    	{
			htItems.put("LOAD_TYPE", M4BusinessMethodArg.toString(load_Type));
    	}

        // NUM_RECORD.
		if (num_Record != null)
    	{
			htItems.put("NUM_RECORD", M4BusinessMethodArg.toString(num_Record));
    	}

        // MAX_NUM_REG.
		if (max_Num_Reg != null)
    	{
			htItems.put("MAX_NUM_REG", M4BusinessMethodArg.toString(max_Num_Reg));
    	}

        // EXECUTEREPORT.
        if (executereport != null)
        {
            htItems.put("EXECUTEREPORT", M4BusinessMethodArg.toString(executereport));
        }
        // GROUP_BY_LIST.
        if (group_By_List != null)
        {
            htItems.put("GROUP_BY_LIST", M4BusinessMethodArg.toString(group_By_List));
        }
        // TOTALIZE_LIST.
        if (totalize_List != null)
        {
            htItems.put("TOTALIZE_LIST", M4BusinessMethodArg.toString(totalize_List));
        }
        // EXTRA_GROUP_BY.
        if (extra_Group_By != null)
        {
            htItems.put("EXTRA_GROUP_BY", M4BusinessMethodArg.toString(extra_Group_By));
        }
        // ID_LOAD_METHOD.
        if (id_Load_Method != null)
        {
            htItems.put("ID_LOAD_METHOD", M4BusinessMethodArg.toString(id_Load_Method));
        }
        // DRILLDOWN_FILTER.
        if (drilldown_Filter != null)
        {
            htItems.put("DRILLDOWN_FILTER", M4BusinessMethodArg.toString(drilldown_Filter));
        }
        // C_LOAD_TYPE_GROUP.
		if (c_Load_Type_Group != null)
    	{
			htItems.put("C_LOAD_TYPE_GROUP", M4BusinessMethodArg.toString(c_Load_Type_Group));
    	}

        // ORIGINAL_SENTENCE.
        if (original_Sentence != null)
        {
            htItems.put("ORIGINAL_SENTENCE", M4BusinessMethodArg.toString(original_Sentence));
        }
        // C_LOAD_TYPE_NORMAL.
		if (c_Load_Type_Normal != null)
    	{
			htItems.put("C_LOAD_TYPE_NORMAL", M4BusinessMethodArg.toString(c_Load_Type_Normal));
    	}

        // SYS_SENTENCE_COUNT.
        if (sys_Sentence_Count != null)
        {
            htItems.put("SYS_SENTENCE_COUNT", M4BusinessMethodArg.toString(sys_Sentence_Count));
        }
        // SYS_SENTENCE_GROUP.
        if (sys_Sentence_Group != null)
        {
            htItems.put("SYS_SENTENCE_GROUP", M4BusinessMethodArg.toString(sys_Sentence_Group));
        }
        // USE_GROUP_SENTENCE.
		if (use_Group_Sentence != null)
    	{
			htItems.put("USE_GROUP_SENTENCE", M4BusinessMethodArg.toString(use_Group_Sentence));
    	}

        // EXECUTEREPORTSERVER.
        if (executereportserver != null)
        {
            htItems.put("EXECUTEREPORTSERVER", M4BusinessMethodArg.toString(executereportserver));
        }
        // SYS_SENTENCE_FILTER.
        if (sys_Sentence_Filter != null)
        {
            htItems.put("SYS_SENTENCE_FILTER", M4BusinessMethodArg.toString(sys_Sentence_Filter));
        }
        // C_LOAD_TYPE_OVERFLOW.
		if (c_Load_Type_Overflow != null)
    	{
			htItems.put("C_LOAD_TYPE_OVERFLOW", M4BusinessMethodArg.toString(c_Load_Type_Overflow));
    	}

        // ORIGINAL_FROM_SENTENCE.
        if (original_From_Sentence != null)
        {
            htItems.put("ORIGINAL_FROM_SENTENCE", M4BusinessMethodArg.toString(original_From_Sentence));
        }

        // insert 'block scope' values in SNTC_GR_DATA.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNTC_GR_DATA.
        if (Sntc_Gr_DataRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Sntc_Gr_DataRecordSet.length; i++)
        {
            Sntc_Gr_DataRecord record = Sntc_Gr_DataRecordSet[i];
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
        // read 'block scope' values in SNTC_GR_DATA.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read XML_FILE.
        sItemName = "XML_FILE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getOptionalAttValue(nItem, "fileindex");
        if (sItemValue != null)
        {
            sItemValue = ai_m4Op.getFileByIndex(Integer.parseInt(sItemValue));
            xml_File = new DataHandler(new M4FileDataSource(sItemValue));
        } 
        else // the case where there is no file in the item
        {
            xml_File = null;
        }


        // read LOAD_TYPE.
        sItemName = "LOAD_TYPE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        load_Type = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read NUM_RECORD.
        sItemName = "NUM_RECORD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        num_Record = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read MAX_NUM_REG.
        sItemName = "MAX_NUM_REG";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        max_Num_Reg = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read EXECUTEREPORT.
        sItemName = "EXECUTEREPORT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        executereport = sItemValue;
        // read GROUP_BY_LIST.
        sItemName = "GROUP_BY_LIST";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        group_By_List = sItemValue;
        // read TOTALIZE_LIST.
        sItemName = "TOTALIZE_LIST";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        totalize_List = sItemValue;
        // read EXTRA_GROUP_BY.
        sItemName = "EXTRA_GROUP_BY";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        extra_Group_By = sItemValue;
        // read ID_LOAD_METHOD.
        sItemName = "ID_LOAD_METHOD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Load_Method = sItemValue;
        // read DRILLDOWN_FILTER.
        sItemName = "DRILLDOWN_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        drilldown_Filter = sItemValue;
        // read C_LOAD_TYPE_GROUP.
        sItemName = "C_LOAD_TYPE_GROUP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        c_Load_Type_Group = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read ORIGINAL_SENTENCE.
        sItemName = "ORIGINAL_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        original_Sentence = sItemValue;
        // read C_LOAD_TYPE_NORMAL.
        sItemName = "C_LOAD_TYPE_NORMAL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        c_Load_Type_Normal = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read SYS_SENTENCE_COUNT.
        sItemName = "SYS_SENTENCE_COUNT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_Count = sItemValue;
        // read SYS_SENTENCE_GROUP.
        sItemName = "SYS_SENTENCE_GROUP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_Group = sItemValue;
        // read USE_GROUP_SENTENCE.
        sItemName = "USE_GROUP_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        use_Group_Sentence = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read EXECUTEREPORTSERVER.
        sItemName = "EXECUTEREPORTSERVER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        executereportserver = sItemValue;
        // read SYS_SENTENCE_FILTER.
        sItemName = "SYS_SENTENCE_FILTER";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sys_Sentence_Filter = sItemValue;
        // read C_LOAD_TYPE_OVERFLOW.
        sItemName = "C_LOAD_TYPE_OVERFLOW";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        c_Load_Type_Overflow = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read ORIGINAL_FROM_SENTENCE.
        sItemName = "ORIGINAL_FROM_SENTENCE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        original_From_Sentence = sItemValue;

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Sntc_Gr_DataRecordSet = new Sntc_Gr_DataRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Sntc_Gr_DataRecord record = new Sntc_Gr_DataRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Sntc_Gr_DataRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Sntc_Gr_DataBlock */

