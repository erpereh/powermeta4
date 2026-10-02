/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_MODIFICAR_NOTAS.
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

package com.meta4.soapservices.services.rpc.cyc_modificar_notas;

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
    
    /* CYC_MODIFICAR_NOTAS */
    public Cyc_Modificar_NotasBlock Cyc_Modificar_Notas = null;
    private void setCyc_Modificar_Notas(Cyc_Modificar_NotasBlock ai_arg)
    {
        Cyc_Modificar_Notas = ai_arg;
    }
    private Cyc_Modificar_NotasBlock getCyc_Modificar_Notas()
    {
        return Cyc_Modificar_Notas;
    }
    void setCyc_Modificar_Notas(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Modificar_Notas = new Cyc_Modificar_NotasBlock();
        Cyc_Modificar_Notas.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MODIFICAR_FASE_I */
    public Cyc_Modificar_Fase_IBlock Cyc_Modificar_Fase_I = null;
    private void setCyc_Modificar_Fase_I(Cyc_Modificar_Fase_IBlock ai_arg)
    {
        Cyc_Modificar_Fase_I = ai_arg;
    }
    private Cyc_Modificar_Fase_IBlock getCyc_Modificar_Fase_I()
    {
        return Cyc_Modificar_Fase_I;
    }
    void setCyc_Modificar_Fase_I(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Modificar_Fase_I = new Cyc_Modificar_Fase_IBlock();
        Cyc_Modificar_Fase_I.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MODIFICAR_FASE_II */
    public Cyc_Modificar_Fase_IiBlock Cyc_Modificar_Fase_Ii = null;
    private void setCyc_Modificar_Fase_Ii(Cyc_Modificar_Fase_IiBlock ai_arg)
    {
        Cyc_Modificar_Fase_Ii = ai_arg;
    }
    private Cyc_Modificar_Fase_IiBlock getCyc_Modificar_Fase_Ii()
    {
        return Cyc_Modificar_Fase_Ii;
    }
    void setCyc_Modificar_Fase_Ii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Modificar_Fase_Ii = new Cyc_Modificar_Fase_IiBlock();
        Cyc_Modificar_Fase_Ii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_MODIFICAR_FASE_III */
    public Cyc_Modificar_Fase_IiiBlock Cyc_Modificar_Fase_Iii = null;
    private void setCyc_Modificar_Fase_Iii(Cyc_Modificar_Fase_IiiBlock ai_arg)
    {
        Cyc_Modificar_Fase_Iii = ai_arg;
    }
    private Cyc_Modificar_Fase_IiiBlock getCyc_Modificar_Fase_Iii()
    {
        return Cyc_Modificar_Fase_Iii;
    }
    void setCyc_Modificar_Fase_Iii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Modificar_Fase_Iii = new Cyc_Modificar_Fase_IiiBlock();
        Cyc_Modificar_Fase_Iii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

