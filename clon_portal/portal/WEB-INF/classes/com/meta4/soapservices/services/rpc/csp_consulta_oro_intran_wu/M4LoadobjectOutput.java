/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_CONSULTA_ORO_INTRAN_WU.
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

package com.meta4.soapservices.services.rpc.csp_consulta_oro_intran_wu;

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
    
    /* CSP_BUSQUEDA_RECURSIVA */
    public Csp_Busqueda_RecursivaBlock Csp_Busqueda_Recursiva = null;
    private void setCsp_Busqueda_Recursiva(Csp_Busqueda_RecursivaBlock ai_arg)
    {
        Csp_Busqueda_Recursiva = ai_arg;
    }
    private Csp_Busqueda_RecursivaBlock getCsp_Busqueda_Recursiva()
    {
        return Csp_Busqueda_Recursiva;
    }
    void setCsp_Busqueda_Recursiva(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Busqueda_Recursiva = new Csp_Busqueda_RecursivaBlock();
        Csp_Busqueda_Recursiva.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_ORO_INTRAN_WU */
    public Csp_Consulta_Oro_Intran_WuBlock Csp_Consulta_Oro_Intran_Wu = null;
    private void setCsp_Consulta_Oro_Intran_Wu(Csp_Consulta_Oro_Intran_WuBlock ai_arg)
    {
        Csp_Consulta_Oro_Intran_Wu = ai_arg;
    }
    private Csp_Consulta_Oro_Intran_WuBlock getCsp_Consulta_Oro_Intran_Wu()
    {
        return Csp_Consulta_Oro_Intran_Wu;
    }
    void setCsp_Consulta_Oro_Intran_Wu(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Oro_Intran_Wu = new Csp_Consulta_Oro_Intran_WuBlock();
        Csp_Consulta_Oro_Intran_Wu.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

