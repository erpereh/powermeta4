/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_GUARDAR_COMPETENCIA.
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

package com.meta4.soapservices.services.rpc.csp_guardar_competencia;

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
    
    /* CSP_GUARDAR */
    public Csp_GuardarBlock Csp_Guardar = null;
    private void setCsp_Guardar(Csp_GuardarBlock ai_arg)
    {
        Csp_Guardar = ai_arg;
    }
    private Csp_GuardarBlock getCsp_Guardar()
    {
        return Csp_Guardar;
    }
    void setCsp_Guardar(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar = new Csp_GuardarBlock();
        Csp_Guardar.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_PLAN */
    public Csp_Guardar_PlanBlock Csp_Guardar_Plan = null;
    private void setCsp_Guardar_Plan(Csp_Guardar_PlanBlock ai_arg)
    {
        Csp_Guardar_Plan = ai_arg;
    }
    private Csp_Guardar_PlanBlock getCsp_Guardar_Plan()
    {
        return Csp_Guardar_Plan;
    }
    void setCsp_Guardar_Plan(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Plan = new Csp_Guardar_PlanBlock();
        Csp_Guardar_Plan.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_LEVEL_COMPETENCIAS */
    public Csp_Level_CompetenciasBlock Csp_Level_Competencias = null;
    private void setCsp_Level_Competencias(Csp_Level_CompetenciasBlock ai_arg)
    {
        Csp_Level_Competencias = ai_arg;
    }
    private Csp_Level_CompetenciasBlock getCsp_Level_Competencias()
    {
        return Csp_Level_Competencias;
    }
    void setCsp_Level_Competencias(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Level_Competencias = new Csp_Level_CompetenciasBlock();
        Csp_Level_Competencias.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_COMPETENCIAS */
    public Csp_Guardar_CompetenciasBlock Csp_Guardar_Competencias = null;
    private void setCsp_Guardar_Competencias(Csp_Guardar_CompetenciasBlock ai_arg)
    {
        Csp_Guardar_Competencias = ai_arg;
    }
    private Csp_Guardar_CompetenciasBlock getCsp_Guardar_Competencias()
    {
        return Csp_Guardar_Competencias;
    }
    void setCsp_Guardar_Competencias(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Competencias = new Csp_Guardar_CompetenciasBlock();
        Csp_Guardar_Competencias.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

