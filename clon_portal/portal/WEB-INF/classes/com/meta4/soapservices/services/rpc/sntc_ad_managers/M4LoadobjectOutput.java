/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object SNTC_AD_MANAGERS.
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

package com.meta4.soapservices.services.rpc.sntc_ad_managers;

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
    
    /* SNCO_AD_MANAGERS */
    private Snco_Ad_ManagersBlock Snco_Ad_Managers = null;
    public void setSnco_Ad_Managers(Snco_Ad_ManagersBlock ai_arg)
    {
        Snco_Ad_Managers = ai_arg;
    }
    public Snco_Ad_ManagersBlock getSnco_Ad_Managers()
    {
        return Snco_Ad_Managers;
    }
    void setSnco_Ad_Managers(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Managers = new Snco_Ad_ManagersBlock();
        Snco_Ad_Managers.readOperations(ai_m4Op, ai_xml, ai_data);
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
    
    /* SNCO_AD_INFO_PERSON */
    private Snco_Ad_Info_PersonBlock Snco_Ad_Info_Person = null;
    public void setSnco_Ad_Info_Person(Snco_Ad_Info_PersonBlock ai_arg)
    {
        Snco_Ad_Info_Person = ai_arg;
    }
    public Snco_Ad_Info_PersonBlock getSnco_Ad_Info_Person()
    {
        return Snco_Ad_Info_Person;
    }
    void setSnco_Ad_Info_Person(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Info_Person = new Snco_Ad_Info_PersonBlock();
        Snco_Ad_Info_Person.readOperations(ai_m4Op, ai_xml, ai_data);
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
    
    /* SNCO_AD_INFO_PERSON_PRIVATE */
    private Snco_Ad_Info_Person_PrivateBlock Snco_Ad_Info_Person_Private = null;
    public void setSnco_Ad_Info_Person_Private(Snco_Ad_Info_Person_PrivateBlock ai_arg)
    {
        Snco_Ad_Info_Person_Private = ai_arg;
    }
    public Snco_Ad_Info_Person_PrivateBlock getSnco_Ad_Info_Person_Private()
    {
        return Snco_Ad_Info_Person_Private;
    }
    void setSnco_Ad_Info_Person_Private(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Info_Person_Private = new Snco_Ad_Info_Person_PrivateBlock();
        Snco_Ad_Info_Person_Private.readOperations(ai_m4Op, ai_xml, ai_data);
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

