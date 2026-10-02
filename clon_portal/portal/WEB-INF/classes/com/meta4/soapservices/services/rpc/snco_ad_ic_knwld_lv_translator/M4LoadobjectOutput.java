/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object SNCO_AD_IC_KNWLD_LV_TRANSLATOR.
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

package com.meta4.soapservices.services.rpc.snco_ad_ic_knwld_lv_translator;

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
    
    /* SNCO_AD_IC_KNOLEDGE_LEVEL */
    private Snco_Ad_Ic_Knoledge_LevelBlock Snco_Ad_Ic_Knoledge_Level = null;
    public void setSnco_Ad_Ic_Knoledge_Level(Snco_Ad_Ic_Knoledge_LevelBlock ai_arg)
    {
        Snco_Ad_Ic_Knoledge_Level = ai_arg;
    }
    public Snco_Ad_Ic_Knoledge_LevelBlock getSnco_Ad_Ic_Knoledge_Level()
    {
        return Snco_Ad_Ic_Knoledge_Level;
    }
    void setSnco_Ad_Ic_Knoledge_Level(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Ic_Knoledge_Level = new Snco_Ad_Ic_Knoledge_LevelBlock();
        Snco_Ad_Ic_Knoledge_Level.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_IC_KNOW_MAP_CONFIG */
    private Snco_Ad_Ic_Know_Map_ConfigBlock Snco_Ad_Ic_Know_Map_Config = null;
    public void setSnco_Ad_Ic_Know_Map_Config(Snco_Ad_Ic_Know_Map_ConfigBlock ai_arg)
    {
        Snco_Ad_Ic_Know_Map_Config = ai_arg;
    }
    public Snco_Ad_Ic_Know_Map_ConfigBlock getSnco_Ad_Ic_Know_Map_Config()
    {
        return Snco_Ad_Ic_Know_Map_Config;
    }
    void setSnco_Ad_Ic_Know_Map_Config(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Ic_Know_Map_Config = new Snco_Ad_Ic_Know_Map_ConfigBlock();
        Snco_Ad_Ic_Know_Map_Config.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_IC_EXTRACTION_DATES */
    private Snco_Ad_Ic_Extraction_DatesBlock Snco_Ad_Ic_Extraction_Dates = null;
    public void setSnco_Ad_Ic_Extraction_Dates(Snco_Ad_Ic_Extraction_DatesBlock ai_arg)
    {
        Snco_Ad_Ic_Extraction_Dates = ai_arg;
    }
    public Snco_Ad_Ic_Extraction_DatesBlock getSnco_Ad_Ic_Extraction_Dates()
    {
        return Snco_Ad_Ic_Extraction_Dates;
    }
    void setSnco_Ad_Ic_Extraction_Dates(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Ic_Extraction_Dates = new Snco_Ad_Ic_Extraction_DatesBlock();
        Snco_Ad_Ic_Extraction_Dates.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_IC_WHOLE_TRANSLATION */
    private Snco_Ad_Ic_Whole_TranslationBlock Snco_Ad_Ic_Whole_Translation = null;
    public void setSnco_Ad_Ic_Whole_Translation(Snco_Ad_Ic_Whole_TranslationBlock ai_arg)
    {
        Snco_Ad_Ic_Whole_Translation = ai_arg;
    }
    public Snco_Ad_Ic_Whole_TranslationBlock getSnco_Ad_Ic_Whole_Translation()
    {
        return Snco_Ad_Ic_Whole_Translation;
    }
    void setSnco_Ad_Ic_Whole_Translation(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Ic_Whole_Translation = new Snco_Ad_Ic_Whole_TranslationBlock();
        Snco_Ad_Ic_Whole_Translation.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNCO_AD_IC_KNWLD_LV_TRANSLATOR */
    private Snco_Ad_Ic_Knwld_Lv_TranslatorBlock Snco_Ad_Ic_Knwld_Lv_Translator = null;
    public void setSnco_Ad_Ic_Knwld_Lv_Translator(Snco_Ad_Ic_Knwld_Lv_TranslatorBlock ai_arg)
    {
        Snco_Ad_Ic_Knwld_Lv_Translator = ai_arg;
    }
    public Snco_Ad_Ic_Knwld_Lv_TranslatorBlock getSnco_Ad_Ic_Knwld_Lv_Translator()
    {
        return Snco_Ad_Ic_Knwld_Lv_Translator;
    }
    void setSnco_Ad_Ic_Knwld_Lv_Translator(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Snco_Ad_Ic_Knwld_Lv_Translator = new Snco_Ad_Ic_Knwld_Lv_TranslatorBlock();
        Snco_Ad_Ic_Knwld_Lv_Translator.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

