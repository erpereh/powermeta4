/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_MATRIZ.
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

package com.meta4.soapservices.services.rpc.cyc_matriz;

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
    
    /* CYC_MATRIZ */
    public Cyc_MatrizBlock Cyc_Matriz = null;
    private void setCyc_Matriz(Cyc_MatrizBlock ai_arg)
    {
        Cyc_Matriz = ai_arg;
    }
    private Cyc_MatrizBlock getCyc_Matriz()
    {
        return Cyc_Matriz;
    }
    void setCyc_Matriz(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Matriz = new Cyc_MatrizBlock();
        Cyc_Matriz.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MATRIZ_FASE_II */
    public Cyc_Matriz_Fase_IiBlock Cyc_Matriz_Fase_Ii = null;
    private void setCyc_Matriz_Fase_Ii(Cyc_Matriz_Fase_IiBlock ai_arg)
    {
        Cyc_Matriz_Fase_Ii = ai_arg;
    }
    private Cyc_Matriz_Fase_IiBlock getCyc_Matriz_Fase_Ii()
    {
        return Cyc_Matriz_Fase_Ii;
    }
    void setCyc_Matriz_Fase_Ii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Matriz_Fase_Ii = new Cyc_Matriz_Fase_IiBlock();
        Cyc_Matriz_Fase_Ii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MATRIZ_FASE_III */
    public Cyc_Matriz_Fase_IiiBlock Cyc_Matriz_Fase_Iii = null;
    private void setCyc_Matriz_Fase_Iii(Cyc_Matriz_Fase_IiiBlock ai_arg)
    {
        Cyc_Matriz_Fase_Iii = ai_arg;
    }
    private Cyc_Matriz_Fase_IiiBlock getCyc_Matriz_Fase_Iii()
    {
        return Cyc_Matriz_Fase_Iii;
    }
    void setCyc_Matriz_Fase_Iii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Matriz_Fase_Iii = new Cyc_Matriz_Fase_IiiBlock();
        Cyc_Matriz_Fase_Iii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

