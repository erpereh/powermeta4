/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_PRUEBA_DOC.
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

package com.meta4.soapservices.services.rpc.csp_prueba_doc;

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
    
    /* CSP_LISTAR_DOC */
    public Csp_Listar_DocBlock Csp_Listar_Doc = null;
    private void setCsp_Listar_Doc(Csp_Listar_DocBlock ai_arg)
    {
        Csp_Listar_Doc = ai_arg;
    }
    private Csp_Listar_DocBlock getCsp_Listar_Doc()
    {
        return Csp_Listar_Doc;
    }
    void setCsp_Listar_Doc(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Listar_Doc = new Csp_Listar_DocBlock();
        Csp_Listar_Doc.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_PRUEBA_DOC */
    public Csp_Prueba_DocBlock Csp_Prueba_Doc = null;
    private void setCsp_Prueba_Doc(Csp_Prueba_DocBlock ai_arg)
    {
        Csp_Prueba_Doc = ai_arg;
    }
    private Csp_Prueba_DocBlock getCsp_Prueba_Doc()
    {
        return Csp_Prueba_Doc;
    }
    void setCsp_Prueba_Doc(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Prueba_Doc = new Csp_Prueba_DocBlock();
        Csp_Prueba_Doc.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GENERAR_DOC */
    public Csp_Generar_DocBlock Csp_Generar_Doc = null;
    private void setCsp_Generar_Doc(Csp_Generar_DocBlock ai_arg)
    {
        Csp_Generar_Doc = ai_arg;
    }
    private Csp_Generar_DocBlock getCsp_Generar_Doc()
    {
        return Csp_Generar_Doc;
    }
    void setCsp_Generar_Doc(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Generar_Doc = new Csp_Generar_DocBlock();
        Csp_Generar_Doc.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

