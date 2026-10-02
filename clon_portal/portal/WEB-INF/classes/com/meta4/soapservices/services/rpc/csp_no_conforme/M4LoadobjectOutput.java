/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_NO_CONFORME.
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

package com.meta4.soapservices.services.rpc.csp_no_conforme;

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
    
    /* CSP_EVAL_FLUJO */
    public Csp_Eval_FlujoBlock Csp_Eval_Flujo = null;
    private void setCsp_Eval_Flujo(Csp_Eval_FlujoBlock ai_arg)
    {
        Csp_Eval_Flujo = ai_arg;
    }
    private Csp_Eval_FlujoBlock getCsp_Eval_Flujo()
    {
        return Csp_Eval_Flujo;
    }
    void setCsp_Eval_Flujo(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Eval_Flujo = new Csp_Eval_FlujoBlock();
        Csp_Eval_Flujo.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_CALCULA_MAIL */
    public Csp_Calcula_MailBlock Csp_Calcula_Mail = null;
    private void setCsp_Calcula_Mail(Csp_Calcula_MailBlock ai_arg)
    {
        Csp_Calcula_Mail = ai_arg;
    }
    private Csp_Calcula_MailBlock getCsp_Calcula_Mail()
    {
        return Csp_Calcula_Mail;
    }
    void setCsp_Calcula_Mail(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Calcula_Mail = new Csp_Calcula_MailBlock();
        Csp_Calcula_Mail.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_SACAR_ANO_PLAN */
    public Csp_Sacar_Ano_PlanBlock Csp_Sacar_Ano_Plan = null;
    private void setCsp_Sacar_Ano_Plan(Csp_Sacar_Ano_PlanBlock ai_arg)
    {
        Csp_Sacar_Ano_Plan = ai_arg;
    }
    private Csp_Sacar_Ano_PlanBlock getCsp_Sacar_Ano_Plan()
    {
        return Csp_Sacar_Ano_Plan;
    }
    void setCsp_Sacar_Ano_Plan(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Sacar_Ano_Plan = new Csp_Sacar_Ano_PlanBlock();
        Csp_Sacar_Ano_Plan.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_NOMBRE_EVALUADO */
    public Csp_Nombre_EvaluadoBlock Csp_Nombre_Evaluado = null;
    private void setCsp_Nombre_Evaluado(Csp_Nombre_EvaluadoBlock ai_arg)
    {
        Csp_Nombre_Evaluado = ai_arg;
    }
    private Csp_Nombre_EvaluadoBlock getCsp_Nombre_Evaluado()
    {
        return Csp_Nombre_Evaluado;
    }
    void setCsp_Nombre_Evaluado(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Nombre_Evaluado = new Csp_Nombre_EvaluadoBlock();
        Csp_Nombre_Evaluado.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

