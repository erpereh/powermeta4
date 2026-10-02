/**
 * Snco_Ad_Pop_ConstBlock.java
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
 * Bean for node Snco_Ad_Pop_Const.
 * @author Meta4
 */
public 
class Snco_Ad_Pop_ConstBlock 
{
    /* M4Object definitions */
    public static final String M4OBJECT_NAME = "SNTC_AD_POPULATION";
    public static final String M4OBJECT_ALIAS = M4OBJECT_NAME;

    /* Node definition */
    public static final String NODE_NAME = "SNCO_AD_POP_CONST";
    public static final String NODE_OUTPUTDEF = NODE_NAME + "_OUTPUTDEF";

    /* the log object */
    static private M4ILogger m_log = M4LogManager.getInstance(Snco_Ad_Pop_ConstBlock.class.getName());

    /* item LANG_OR */
    private Double lang_Or = null;
    public void setlang_Or(Double ai_value)
    {
        lang_Or = ai_value;
    }
    public Double getlang_Or()
    {
        return lang_Or;
    }

    /* item LANG_WU */
    private Double lang_Wu = null;
    public void setlang_Wu(Double ai_value)
    {
        lang_Wu = ai_value;
    }
    public Double getlang_Wu()
    {
        return lang_Wu;
    }

    /* item POB_REF */
    private Double pob_Ref = null;
    public void setpob_Ref(Double ai_value)
    {
        pob_Ref = ai_value;
    }
    public Double getpob_Ref()
    {
        return pob_Ref;
    }

    /* item POB_TOT */
    private Double pob_Tot = null;
    public void setpob_Tot(Double ai_value)
    {
        pob_Tot = ai_value;
    }
    public Double getpob_Tot()
    {
        return pob_Tot;
    }

    /* item WU_TYPE */
    private Double wu_Type = null;
    public void setwu_Type(Double ai_value)
    {
        wu_Type = ai_value;
    }
    public Double getwu_Type()
    {
        return wu_Type;
    }

    /* item JOB_TYPE */
    private Double job_Type = null;
    public void setjob_Type(Double ai_value)
    {
        job_Type = ai_value;
    }
    public Double getjob_Type()
    {
        return job_Type;
    }

    /* item LANG_AND */
    private Double lang_And = null;
    public void setlang_And(Double ai_value)
    {
        lang_And = ai_value;
    }
    public Double getlang_And()
    {
        return lang_And;
    }

    /* item LANG_JOB */
    private Double lang_Job = null;
    public void setlang_Job(Double ai_value)
    {
        lang_Job = ai_value;
    }
    public Double getlang_Job()
    {
        return lang_Job;
    }

    /* item LANG_POP */
    private Double lang_Pop = null;
    public void setlang_Pop(Double ai_value)
    {
        lang_Pop = ai_value;
    }
    public Double getlang_Pop()
    {
        return lang_Pop;
    }

    /* item LANG_WUS */
    private Double lang_Wus = null;
    public void setlang_Wus(Double ai_value)
    {
        lang_Wus = ai_value;
    }
    public Double getlang_Wus()
    {
        return lang_Wus;
    }

    /* item POP_TYPE */
    private Double pop_Type = null;
    public void setpop_Type(Double ai_value)
    {
        pop_Type = ai_value;
    }
    public Double getpop_Type()
    {
        return pop_Type;
    }

    /* item LANG_JOBS */
    private Double lang_Jobs = null;
    public void setlang_Jobs(Double ai_value)
    {
        lang_Jobs = ai_value;
    }
    public Double getlang_Jobs()
    {
        return lang_Jobs;
    }

    /* item LANG_POPS */
    private Double lang_Pops = null;
    public void setlang_Pops(Double ai_value)
    {
        lang_Pops = ai_value;
    }
    public Double getlang_Pops()
    {
        return lang_Pops;
    }

    /* item LANG_WUS_ALL */
    private Double lang_Wus_All = null;
    public void setlang_Wus_All(Double ai_value)
    {
        lang_Wus_All = ai_value;
    }
    public Double getlang_Wus_All()
    {
        return lang_Wus_All;
    }

    /* item SCO_AD_IC_PERSON */
    private String sco_Ad_Ic_Person = null;
    public void setsco_Ad_Ic_Person(String ai_value)
    {
        sco_Ad_Ic_Person = ai_value;
    }
    public String getsco_Ad_Ic_Person()
    {
        return sco_Ad_Ic_Person;
    }

    /* item ID_WORK_UNIT_FIELD */
    private String id_Work_Unit_Field = null;
    public void setid_Work_Unit_Field(String ai_value)
    {
        id_Work_Unit_Field = ai_value;
    }
    public String getid_Work_Unit_Field()
    {
        return id_Work_Unit_Field;
    }

    /* item LANG_POPULATION_IS */
    private Double lang_Population_Is = null;
    public void setlang_Population_Is(Double ai_value)
    {
        lang_Population_Is = ai_value;
    }
    public Double getlang_Population_Is()
    {
        return lang_Population_Is;
    }

    /* item LANG_WHITH_CHILDREN */
    private Double lang_Whith_Children = null;
    public void setlang_Whith_Children(Double ai_value)
    {
        lang_Whith_Children = ai_value;
    }
    public Double getlang_Whith_Children()
    {
        return lang_Whith_Children;
    }

    /* item SCO_AD_IC_PERSON_PUB */
    private String sco_Ad_Ic_Person_Pub = null;
    public void setsco_Ad_Ic_Person_Pub(String ai_value)
    {
        sco_Ad_Ic_Person_Pub = ai_value;
    }
    public String getsco_Ad_Ic_Person_Pub()
    {
        return sco_Ad_Ic_Person_Pub;
    }

    /* item LANG_POPULATION_IS_ALL_EMP */
    private Double lang_Population_Is_All_Emp = null;
    public void setlang_Population_Is_All_Emp(Double ai_value)
    {
        lang_Population_Is_All_Emp = ai_value;
    }
    public Double getlang_Population_Is_All_Emp()
    {
        return lang_Population_Is_All_Emp;
    }

    /* item LANG_POPULATION_WITHOUT_EMP */
    private Double lang_Population_Without_Emp = null;
    public void setlang_Population_Without_Emp(Double ai_value)
    {
        lang_Population_Without_Emp = ai_value;
    }
    public Double getlang_Population_Without_Emp()
    {
        return lang_Population_Without_Emp;
    }

    /* the recordset */
    private Snco_Ad_Pop_ConstRecord[] Snco_Ad_Pop_ConstRecordSet = null;
    public void setSnco_Ad_Pop_ConstRecordSet(Snco_Ad_Pop_ConstRecord[] ai_arg)
    {
        Snco_Ad_Pop_ConstRecordSet = ai_arg;
    }
    public Snco_Ad_Pop_ConstRecord[] getSnco_Ad_Pop_ConstRecordSet()
    {
        return Snco_Ad_Pop_ConstRecordSet;
    }

    /**
     *
     */
    void 
    writeOperations(M4SoapOperations ai_m4Op) 
    throws Exception
    {
        m_log.debug("Snco_Ad_Pop_ConstBlock.writeOperations(...)");

        // items 'block' scope.
        Hashtable htItems = new Hashtable();
        Hashtable htBlobs = new Hashtable();
        // LANG_OR.
		if (lang_Or != null)
    	{
			htItems.put("LANG_OR", M4BusinessMethodArg.toString(lang_Or));
    	}

        // LANG_WU.
		if (lang_Wu != null)
    	{
			htItems.put("LANG_WU", M4BusinessMethodArg.toString(lang_Wu));
    	}

        // POB_REF.
		if (pob_Ref != null)
    	{
			htItems.put("POB_REF", M4BusinessMethodArg.toString(pob_Ref));
    	}

        // POB_TOT.
		if (pob_Tot != null)
    	{
			htItems.put("POB_TOT", M4BusinessMethodArg.toString(pob_Tot));
    	}

        // WU_TYPE.
		if (wu_Type != null)
    	{
			htItems.put("WU_TYPE", M4BusinessMethodArg.toString(wu_Type));
    	}

        // JOB_TYPE.
		if (job_Type != null)
    	{
			htItems.put("JOB_TYPE", M4BusinessMethodArg.toString(job_Type));
    	}

        // LANG_AND.
		if (lang_And != null)
    	{
			htItems.put("LANG_AND", M4BusinessMethodArg.toString(lang_And));
    	}

        // LANG_JOB.
		if (lang_Job != null)
    	{
			htItems.put("LANG_JOB", M4BusinessMethodArg.toString(lang_Job));
    	}

        // LANG_POP.
		if (lang_Pop != null)
    	{
			htItems.put("LANG_POP", M4BusinessMethodArg.toString(lang_Pop));
    	}

        // LANG_WUS.
		if (lang_Wus != null)
    	{
			htItems.put("LANG_WUS", M4BusinessMethodArg.toString(lang_Wus));
    	}

        // POP_TYPE.
		if (pop_Type != null)
    	{
			htItems.put("POP_TYPE", M4BusinessMethodArg.toString(pop_Type));
    	}

        // LANG_JOBS.
		if (lang_Jobs != null)
    	{
			htItems.put("LANG_JOBS", M4BusinessMethodArg.toString(lang_Jobs));
    	}

        // LANG_POPS.
		if (lang_Pops != null)
    	{
			htItems.put("LANG_POPS", M4BusinessMethodArg.toString(lang_Pops));
    	}

        // LANG_WUS_ALL.
		if (lang_Wus_All != null)
    	{
			htItems.put("LANG_WUS_ALL", M4BusinessMethodArg.toString(lang_Wus_All));
    	}

        // SCO_AD_IC_PERSON.
        if (sco_Ad_Ic_Person != null)
        {
            htItems.put("SCO_AD_IC_PERSON", M4BusinessMethodArg.toString(sco_Ad_Ic_Person));
        }
        // ID_WORK_UNIT_FIELD.
        if (id_Work_Unit_Field != null)
        {
            htItems.put("ID_WORK_UNIT_FIELD", M4BusinessMethodArg.toString(id_Work_Unit_Field));
        }
        // LANG_POPULATION_IS.
		if (lang_Population_Is != null)
    	{
			htItems.put("LANG_POPULATION_IS", M4BusinessMethodArg.toString(lang_Population_Is));
    	}

        // LANG_WHITH_CHILDREN.
		if (lang_Whith_Children != null)
    	{
			htItems.put("LANG_WHITH_CHILDREN", M4BusinessMethodArg.toString(lang_Whith_Children));
    	}

        // SCO_AD_IC_PERSON_PUB.
        if (sco_Ad_Ic_Person_Pub != null)
        {
            htItems.put("SCO_AD_IC_PERSON_PUB", M4BusinessMethodArg.toString(sco_Ad_Ic_Person_Pub));
        }
        // LANG_POPULATION_IS_ALL_EMP.
		if (lang_Population_Is_All_Emp != null)
    	{
			htItems.put("LANG_POPULATION_IS_ALL_EMP", M4BusinessMethodArg.toString(lang_Population_Is_All_Emp));
    	}

        // LANG_POPULATION_WITHOUT_EMP.
		if (lang_Population_Without_Emp != null)
    	{
			htItems.put("LANG_POPULATION_WITHOUT_EMP", M4BusinessMethodArg.toString(lang_Population_Without_Emp));
    	}


        // insert 'block scope' values in SNCO_AD_POP_CONST.
        ai_m4Op.setNodeItems(M4OBJECT_ALIAS, NODE_NAME, htItems, htBlobs);

        // insert 'record scope' values in SNCO_AD_POP_CONST.
        if (Snco_Ad_Pop_ConstRecordSet==null)
        {
            throw M4SoapException.makeException("NULL input value for recordset in node \"" + NODE_NAME + "\".");
        }
        for (int i=0; i<Snco_Ad_Pop_ConstRecordSet.length; i++)
        {
            Snco_Ad_Pop_ConstRecord record = Snco_Ad_Pop_ConstRecordSet[i];
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
        // read 'block scope' values in SNCO_AD_POP_CONST.
        String sItemName = null;
        String sItemValue = null;
        Node nItem = null;

        // read LANG_OR.
        sItemName = "LANG_OR";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Or = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_WU.
        sItemName = "LANG_WU";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Wu = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read POB_REF.
        sItemName = "POB_REF";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        pob_Ref = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read POB_TOT.
        sItemName = "POB_TOT";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        pob_Tot = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read WU_TYPE.
        sItemName = "WU_TYPE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        wu_Type = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read JOB_TYPE.
        sItemName = "JOB_TYPE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        job_Type = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_AND.
        sItemName = "LANG_AND";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_And = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_JOB.
        sItemName = "LANG_JOB";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Job = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_POP.
        sItemName = "LANG_POP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Pop = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_WUS.
        sItemName = "LANG_WUS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Wus = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read POP_TYPE.
        sItemName = "POP_TYPE";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        pop_Type = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_JOBS.
        sItemName = "LANG_JOBS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Jobs = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_POPS.
        sItemName = "LANG_POPS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Pops = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_WUS_ALL.
        sItemName = "LANG_WUS_ALL";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Wus_All = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read SCO_AD_IC_PERSON.
        sItemName = "SCO_AD_IC_PERSON";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Ad_Ic_Person = sItemValue;
        // read ID_WORK_UNIT_FIELD.
        sItemName = "ID_WORK_UNIT_FIELD";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        id_Work_Unit_Field = sItemValue;
        // read LANG_POPULATION_IS.
        sItemName = "LANG_POPULATION_IS";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Population_Is = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_WHITH_CHILDREN.
        sItemName = "LANG_WHITH_CHILDREN";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Whith_Children = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read SCO_AD_IC_PERSON_PUB.
        sItemName = "SCO_AD_IC_PERSON_PUB";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        sco_Ad_Ic_Person_Pub = sItemValue;
        // read LANG_POPULATION_IS_ALL_EMP.
        sItemName = "LANG_POPULATION_IS_ALL_EMP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Population_Is_All_Emp = M4BusinessMethodArg.toDoubleNillable(sItemValue);
        // read LANG_POPULATION_WITHOUT_EMP.
        sItemName = "LANG_POPULATION_WITHOUT_EMP";
        nItem = ai_xml.findItem(ai_node, sItemName);
        sItemValue = ai_xml.getAttValue(nItem, "value");
        lang_Population_Without_Emp = M4BusinessMethodArg.toDoubleNillable(sItemValue);

        // create recordset.
        int iRecordNumber = ai_xml.countRecords(ai_node);
        Snco_Ad_Pop_ConstRecordSet = new Snco_Ad_Pop_ConstRecord[iRecordNumber];
        
        // read records.
        for (int i=0; i<iRecordNumber; i++)
        {
            Node nRecord = ai_xml.findRecord(ai_node, Integer.toString(i));
            
      	    String sRecordID = ai_xml.getAttValue(nRecord, "id");

            Snco_Ad_Pop_ConstRecord record = new Snco_Ad_Pop_ConstRecord();
                      
			      record.setM4AutoGeneratedRecordID (sRecordID) ; 
			
            record.readOperations(ai_m4Op, ai_xml, nRecord);
            
			      Snco_Ad_Pop_ConstRecordSet[i] = record;
        }


    } /* end of method readOperations */



} /* end of class Snco_Ad_Pop_ConstBlock */

