/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object SNTC_ADB_VIEW_ALERT.
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

package com.meta4.soapservices.services.rpc.sntc_adb_view_alert;

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
    
    /* SNTC_GADGET_ALERT */
    private Sntc_Gadget_AlertBlock Sntc_Gadget_Alert = null;
    public void setSntc_Gadget_Alert(Sntc_Gadget_AlertBlock ai_arg)
    {
        Sntc_Gadget_Alert = ai_arg;
    }
    public Sntc_Gadget_AlertBlock getSntc_Gadget_Alert()
    {
        return Sntc_Gadget_Alert;
    }
    void setSntc_Gadget_Alert(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Sntc_Gadget_Alert = new Sntc_Gadget_AlertBlock();
        Sntc_Gadget_Alert.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* SNTC_ADB_VIEW_ALERT */
    private Sntc_Adb_View_AlertBlock Sntc_Adb_View_Alert = null;
    public void setSntc_Adb_View_Alert(Sntc_Adb_View_AlertBlock ai_arg)
    {
        Sntc_Adb_View_Alert = ai_arg;
    }
    public Sntc_Adb_View_AlertBlock getSntc_Adb_View_Alert()
    {
        return Sntc_Adb_View_Alert;
    }
    void setSntc_Adb_View_Alert(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Sntc_Adb_View_Alert = new Sntc_Adb_View_AlertBlock();
        Sntc_Adb_View_Alert.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

