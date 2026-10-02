/**
 * M4LoadobjectOutput.java
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

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method M4LoadObject.
 * @author Meta4
 */
public
class M4LoadobjectOutput
{
    
    /* return value from a LN4 method */
    private double m_return = 0.0;
    public void setReturn(double ai_arg)
    {
        m_return = ai_arg;
    }
    public double getReturn()
    {
        return m_return;
    }
    void setReturn(String ai_arg) throws Exception
    {
        m_return = M4BusinessMethodArg.toDouble(ai_arg);
    }

    /* LogMessage */   
    private LogMessage[] logMessage = null;
    public void setLogMessage(LogMessage[] ai_arg)
    {
        logMessage = ai_arg;
    }
    public LogMessage[] getLogMessage()
    {
        return logMessage;
    }
    
    /* SNCO_AD_H_HR_RESP */
    private Snco_Ad_H_Hr_RespBlock Snco_Ad_H_Hr_Resp = null;
    public void setSnco_Ad_H_Hr_Resp(Snco_Ad_H_Hr_RespBlock ai_arg)
    {
        Snco_Ad_H_Hr_Resp = ai_arg;
    }
    public Snco_Ad_H_Hr_RespBlock getSnco_Ad_H_Hr_Resp()
    {
        return Snco_Ad_H_Hr_Resp;
    }
    void setSnco_Ad_H_Hr_Resp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_H_Hr_Resp = new Snco_Ad_H_Hr_RespBlock();
        Snco_Ad_H_Hr_Resp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_POP_CONST */
    private Snco_Ad_Pop_ConstBlock Snco_Ad_Pop_Const = null;
    public void setSnco_Ad_Pop_Const(Snco_Ad_Pop_ConstBlock ai_arg)
    {
        Snco_Ad_Pop_Const = ai_arg;
    }
    public Snco_Ad_Pop_ConstBlock getSnco_Ad_Pop_Const()
    {
        return Snco_Ad_Pop_Const;
    }
    void setSnco_Ad_Pop_Const(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Pop_Const = new Snco_Ad_Pop_ConstBlock();
        Snco_Ad_Pop_Const.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_POPULATION */
    private Snco_Ad_PopulationBlock Snco_Ad_Population = null;
    public void setSnco_Ad_Population(Snco_Ad_PopulationBlock ai_arg)
    {
        Snco_Ad_Population = ai_arg;
    }
    public Snco_Ad_PopulationBlock getSnco_Ad_Population()
    {
        return Snco_Ad_Population;
    }
    void setSnco_Ad_Population(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Population = new Snco_Ad_PopulationBlock();
        Snco_Ad_Population.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_PERSON_LIST */
    private Snco_Ad_Person_ListBlock Snco_Ad_Person_List = null;
    public void setSnco_Ad_Person_List(Snco_Ad_Person_ListBlock ai_arg)
    {
        Snco_Ad_Person_List = ai_arg;
    }
    public Snco_Ad_Person_ListBlock getSnco_Ad_Person_List()
    {
        return Snco_Ad_Person_List;
    }
    void setSnco_Ad_Person_List(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Person_List = new Snco_Ad_Person_ListBlock();
        Snco_Ad_Person_List.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_HIERARCHIC_WU */
    private Snco_Ad_Hierarchic_WuBlock Snco_Ad_Hierarchic_Wu = null;
    public void setSnco_Ad_Hierarchic_Wu(Snco_Ad_Hierarchic_WuBlock ai_arg)
    {
        Snco_Ad_Hierarchic_Wu = ai_arg;
    }
    public Snco_Ad_Hierarchic_WuBlock getSnco_Ad_Hierarchic_Wu()
    {
        return Snco_Ad_Hierarchic_Wu;
    }
    void setSnco_Ad_Hierarchic_Wu(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Hierarchic_Wu = new Snco_Ad_Hierarchic_WuBlock();
        Snco_Ad_Hierarchic_Wu.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_CRITERIA_NAMES */
    private Snco_Ad_Criteria_NamesBlock Snco_Ad_Criteria_Names = null;
    public void setSnco_Ad_Criteria_Names(Snco_Ad_Criteria_NamesBlock ai_arg)
    {
        Snco_Ad_Criteria_Names = ai_arg;
    }
    public Snco_Ad_Criteria_NamesBlock getSnco_Ad_Criteria_Names()
    {
        return Snco_Ad_Criteria_Names;
    }
    void setSnco_Ad_Criteria_Names(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Criteria_Names = new Snco_Ad_Criteria_NamesBlock();
        Snco_Ad_Criteria_Names.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_GR_HIERARCHIC_INFO */
    private Snco_Ad_Gr_Hierarchic_InfoBlock Snco_Ad_Gr_Hierarchic_Info = null;
    public void setSnco_Ad_Gr_Hierarchic_Info(Snco_Ad_Gr_Hierarchic_InfoBlock ai_arg)
    {
        Snco_Ad_Gr_Hierarchic_Info = ai_arg;
    }
    public Snco_Ad_Gr_Hierarchic_InfoBlock getSnco_Ad_Gr_Hierarchic_Info()
    {
        return Snco_Ad_Gr_Hierarchic_Info;
    }
    void setSnco_Ad_Gr_Hierarchic_Info(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Gr_Hierarchic_Info = new Snco_Ad_Gr_Hierarchic_InfoBlock();
        Snco_Ad_Gr_Hierarchic_Info.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_CRITERIA_POPULATION */
    private Snco_Ad_Criteria_PopulationBlock Snco_Ad_Criteria_Population = null;
    public void setSnco_Ad_Criteria_Population(Snco_Ad_Criteria_PopulationBlock ai_arg)
    {
        Snco_Ad_Criteria_Population = ai_arg;
    }
    public Snco_Ad_Criteria_PopulationBlock getSnco_Ad_Criteria_Population()
    {
        return Snco_Ad_Criteria_Population;
    }
    void setSnco_Ad_Criteria_Population(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Criteria_Population = new Snco_Ad_Criteria_PopulationBlock();
        Snco_Ad_Criteria_Population.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_POP_MAX_SCALE_LEVEL */
    private Snco_Ad_Pop_Max_Scale_LevelBlock Snco_Ad_Pop_Max_Scale_Level = null;
    public void setSnco_Ad_Pop_Max_Scale_Level(Snco_Ad_Pop_Max_Scale_LevelBlock ai_arg)
    {
        Snco_Ad_Pop_Max_Scale_Level = ai_arg;
    }
    public Snco_Ad_Pop_Max_Scale_LevelBlock getSnco_Ad_Pop_Max_Scale_Level()
    {
        return Snco_Ad_Pop_Max_Scale_Level;
    }
    void setSnco_Ad_Pop_Max_Scale_Level(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Pop_Max_Scale_Level = new Snco_Ad_Pop_Max_Scale_LevelBlock();
        Snco_Ad_Pop_Max_Scale_Level.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

