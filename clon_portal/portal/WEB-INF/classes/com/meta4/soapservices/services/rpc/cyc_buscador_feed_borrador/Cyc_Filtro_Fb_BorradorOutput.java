/**
 * Cyc_Filtro_Fb_BorradorOutput.java
 * Self generated code for Bussines Object CYC_BUSCADOR_FEED_BORRADOR.
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

package com.meta4.soapservices.services.rpc.cyc_buscador_feed_borrador;

import java.util.Calendar;
import org.w3c.dom.Node;

import com.meta4.m4operations.LogMessage;
import com.meta4.soapservices.businessobject.M4BusinessMethodArg;
import com.meta4.soapservices.operations.M4SoapOperations;
import com.meta4.soapservices.operations.M4XML;
import com.meta4.soapservices.exception.M4SoapException;


/**
 * Bean for output of bussines method CYC_FILTRO_FB_BORRADOR.
 * @author Meta4
 */
public
class Cyc_Filtro_Fb_BorradorOutput
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
    
    /* CYC_FILTRO_FB_BORRADOR */
    public Cyc_Filtro_Fb_BorradorBlock Cyc_Filtro_Fb_Borrador = null;
    private void setCyc_Filtro_Fb_Borrador(Cyc_Filtro_Fb_BorradorBlock ai_arg)
    {
        Cyc_Filtro_Fb_Borrador = ai_arg;
    }
    private Cyc_Filtro_Fb_BorradorBlock getCyc_Filtro_Fb_Borrador()
    {
        return Cyc_Filtro_Fb_Borrador;
    }
    void setCyc_Filtro_Fb_Borrador(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filtro_Fb_Borrador = new Cyc_Filtro_Fb_BorradorBlock();
        Cyc_Filtro_Fb_Borrador.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class Cyc_Filtro_Fb_BorradorOutput */

