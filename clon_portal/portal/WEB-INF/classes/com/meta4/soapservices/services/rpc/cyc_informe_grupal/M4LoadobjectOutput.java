/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_INFORME_GRUPAL.
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

package com.meta4.soapservices.services.rpc.cyc_informe_grupal;

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
    
    /* CYC_INFORME_GRUPAL */
    public Cyc_Informe_GrupalBlock Cyc_Informe_Grupal = null;
    private void setCyc_Informe_Grupal(Cyc_Informe_GrupalBlock ai_arg)
    {
        Cyc_Informe_Grupal = ai_arg;
    }
    private Cyc_Informe_GrupalBlock getCyc_Informe_Grupal()
    {
        return Cyc_Informe_Grupal;
    }
    void setCyc_Informe_Grupal(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Informe_Grupal = new Cyc_Informe_GrupalBlock();
        Cyc_Informe_Grupal.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_ES_ALTA_IGRUPAL_H */
    public Cyc_Es_Alta_Igrupal_HBlock Cyc_Es_Alta_Igrupal_H = null;
    private void setCyc_Es_Alta_Igrupal_H(Cyc_Es_Alta_Igrupal_HBlock ai_arg)
    {
        Cyc_Es_Alta_Igrupal_H = ai_arg;
    }
    private Cyc_Es_Alta_Igrupal_HBlock getCyc_Es_Alta_Igrupal_H()
    {
        return Cyc_Es_Alta_Igrupal_H;
    }
    void setCyc_Es_Alta_Igrupal_H(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Es_Alta_Igrupal_H = new Cyc_Es_Alta_Igrupal_HBlock();
        Cyc_Es_Alta_Igrupal_H.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_ES_ALTA_IGRUPAL_ORO */
    public Cyc_Es_Alta_Igrupal_OroBlock Cyc_Es_Alta_Igrupal_Oro = null;
    private void setCyc_Es_Alta_Igrupal_Oro(Cyc_Es_Alta_Igrupal_OroBlock ai_arg)
    {
        Cyc_Es_Alta_Igrupal_Oro = ai_arg;
    }
    private Cyc_Es_Alta_Igrupal_OroBlock getCyc_Es_Alta_Igrupal_Oro()
    {
        return Cyc_Es_Alta_Igrupal_Oro;
    }
    void setCyc_Es_Alta_Igrupal_Oro(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Es_Alta_Igrupal_Oro = new Cyc_Es_Alta_Igrupal_OroBlock();
        Cyc_Es_Alta_Igrupal_Oro.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_INFORME_GRUPAL_FASE_I */
    public Cyc_Informe_Grupal_Fase_IBlock Cyc_Informe_Grupal_Fase_I = null;
    private void setCyc_Informe_Grupal_Fase_I(Cyc_Informe_Grupal_Fase_IBlock ai_arg)
    {
        Cyc_Informe_Grupal_Fase_I = ai_arg;
    }
    private Cyc_Informe_Grupal_Fase_IBlock getCyc_Informe_Grupal_Fase_I()
    {
        return Cyc_Informe_Grupal_Fase_I;
    }
    void setCyc_Informe_Grupal_Fase_I(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Informe_Grupal_Fase_I = new Cyc_Informe_Grupal_Fase_IBlock();
        Cyc_Informe_Grupal_Fase_I.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_INFORME_GRUPAL_FASE_II */
    public Cyc_Informe_Grupal_Fase_IiBlock Cyc_Informe_Grupal_Fase_Ii = null;
    private void setCyc_Informe_Grupal_Fase_Ii(Cyc_Informe_Grupal_Fase_IiBlock ai_arg)
    {
        Cyc_Informe_Grupal_Fase_Ii = ai_arg;
    }
    private Cyc_Informe_Grupal_Fase_IiBlock getCyc_Informe_Grupal_Fase_Ii()
    {
        return Cyc_Informe_Grupal_Fase_Ii;
    }
    void setCyc_Informe_Grupal_Fase_Ii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Informe_Grupal_Fase_Ii = new Cyc_Informe_Grupal_Fase_IiBlock();
        Cyc_Informe_Grupal_Fase_Ii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_INFORME_GRUPAL_FASE_III */
    public Cyc_Informe_Grupal_Fase_IiiBlock Cyc_Informe_Grupal_Fase_Iii = null;
    private void setCyc_Informe_Grupal_Fase_Iii(Cyc_Informe_Grupal_Fase_IiiBlock ai_arg)
    {
        Cyc_Informe_Grupal_Fase_Iii = ai_arg;
    }
    private Cyc_Informe_Grupal_Fase_IiiBlock getCyc_Informe_Grupal_Fase_Iii()
    {
        return Cyc_Informe_Grupal_Fase_Iii;
    }
    void setCyc_Informe_Grupal_Fase_Iii(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Informe_Grupal_Fase_Iii = new Cyc_Informe_Grupal_Fase_IiiBlock();
        Cyc_Informe_Grupal_Fase_Iii.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

