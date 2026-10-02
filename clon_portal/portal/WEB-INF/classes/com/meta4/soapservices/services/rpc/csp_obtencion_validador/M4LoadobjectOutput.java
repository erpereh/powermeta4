/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_OBTENCION_VALIDADOR.
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

package com.meta4.soapservices.services.rpc.csp_obtencion_validador;

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
    
    /* CSP_CONSULTA_CD */
    public Csp_Consulta_CdBlock Csp_Consulta_Cd = null;
    private void setCsp_Consulta_Cd(Csp_Consulta_CdBlock ai_arg)
    {
        Csp_Consulta_Cd = ai_arg;
    }
    private Csp_Consulta_CdBlock getCsp_Consulta_Cd()
    {
        return Csp_Consulta_Cd;
    }
    void setCsp_Consulta_Cd(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Cd = new Csp_Consulta_CdBlock();
        Csp_Consulta_Cd.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_DG */
    public Csp_Consulta_DgBlock Csp_Consulta_Dg = null;
    private void setCsp_Consulta_Dg(Csp_Consulta_DgBlock ai_arg)
    {
        Csp_Consulta_Dg = ai_arg;
    }
    private Csp_Consulta_DgBlock getCsp_Consulta_Dg()
    {
        return Csp_Consulta_Dg;
    }
    void setCsp_Consulta_Dg(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Dg = new Csp_Consulta_DgBlock();
        Csp_Consulta_Dg.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_UNIDAD_SUPER */
    public Csp_Unidad_SuperBlock Csp_Unidad_Super = null;
    private void setCsp_Unidad_Super(Csp_Unidad_SuperBlock ai_arg)
    {
        Csp_Unidad_Super = ai_arg;
    }
    private Csp_Unidad_SuperBlock getCsp_Unidad_Super()
    {
        return Csp_Unidad_Super;
    }
    void setCsp_Unidad_Super(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Unidad_Super = new Csp_Unidad_SuperBlock();
        Csp_Unidad_Super.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CONSULTA_VALI */
    public Csp_Consulta_ValiBlock Csp_Consulta_Vali = null;
    private void setCsp_Consulta_Vali(Csp_Consulta_ValiBlock ai_arg)
    {
        Csp_Consulta_Vali = ai_arg;
    }
    private Csp_Consulta_ValiBlock getCsp_Consulta_Vali()
    {
        return Csp_Consulta_Vali;
    }
    void setCsp_Consulta_Vali(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Consulta_Vali = new Csp_Consulta_ValiBlock();
        Csp_Consulta_Vali.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

