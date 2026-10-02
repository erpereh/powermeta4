/**
 * Ad_Ic_Whole_Transltin_From_AdbOutput.java
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
 * Bean for output of bussines method AD_IC_WHOLE_TRANSLTIN_FROM_ADB.
 * @author Meta4
 */
public
class Ad_Ic_Whole_Transltin_From_AdbOutput
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
    

} /* end of class Ad_Ic_Whole_Transltin_From_AdbOutput */

