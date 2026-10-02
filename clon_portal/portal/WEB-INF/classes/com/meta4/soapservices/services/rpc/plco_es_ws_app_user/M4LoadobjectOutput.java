/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object PLCO_ES_WS_APP_USER.
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

package com.meta4.soapservices.services.rpc.plco_es_ws_app_user;

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
    public LogMessage[] logMessage = null;
    private void setLogMessage(LogMessage[] ai_arg)
    {
        logMessage = ai_arg;
    }
    private LogMessage[] getLogMessage()
    {
        return logMessage;
    }
    
    /* PLCO_ES_WS_APP_USER */
    public Plco_Es_Ws_App_UserBlock Plco_Es_Ws_App_User = null;
    private void setPlco_Es_Ws_App_User(Plco_Es_Ws_App_UserBlock ai_arg)
    {
        Plco_Es_Ws_App_User = ai_arg;
    }
    private Plco_Es_Ws_App_UserBlock getPlco_Es_Ws_App_User()
    {
        return Plco_Es_Ws_App_User;
    }
    void setPlco_Es_Ws_App_User(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Plco_Es_Ws_App_User = new Plco_Es_Ws_App_UserBlock();
        Plco_Es_Ws_App_User.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* PLCO_ES_WS_AU_REQUESTS */
    public Plco_Es_Ws_Au_RequestsBlock Plco_Es_Ws_Au_Requests = null;
    private void setPlco_Es_Ws_Au_Requests(Plco_Es_Ws_Au_RequestsBlock ai_arg)
    {
        Plco_Es_Ws_Au_Requests = ai_arg;
    }
    private Plco_Es_Ws_Au_RequestsBlock getPlco_Es_Ws_Au_Requests()
    {
        return Plco_Es_Ws_Au_Requests;
    }
    void setPlco_Es_Ws_Au_Requests(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Plco_Es_Ws_Au_Requests = new Plco_Es_Ws_Au_RequestsBlock();
        Plco_Es_Ws_Au_Requests.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* PLCO_ES_WS_AU_APP_VALUES */
    public Plco_Es_Ws_Au_App_ValuesBlock Plco_Es_Ws_Au_App_Values = null;
    private void setPlco_Es_Ws_Au_App_Values(Plco_Es_Ws_Au_App_ValuesBlock ai_arg)
    {
        Plco_Es_Ws_Au_App_Values = ai_arg;
    }
    private Plco_Es_Ws_Au_App_ValuesBlock getPlco_Es_Ws_Au_App_Values()
    {
        return Plco_Es_Ws_Au_App_Values;
    }
    void setPlco_Es_Ws_Au_App_Values(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Plco_Es_Ws_Au_App_Values = new Plco_Es_Ws_Au_App_ValuesBlock();
        Plco_Es_Ws_Au_App_Values.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

