/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_PERFIL_EMP.
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

package com.meta4.soapservices.services.rpc.csp_perfil_emp;

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
    
    /* CSP_EVAL_DESEMP */
    public Csp_Eval_DesempBlock Csp_Eval_Desemp = null;
    private void setCsp_Eval_Desemp(Csp_Eval_DesempBlock ai_arg)
    {
        Csp_Eval_Desemp = ai_arg;
    }
    private Csp_Eval_DesempBlock getCsp_Eval_Desemp()
    {
        return Csp_Eval_Desemp;
    }
    void setCsp_Eval_Desemp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Eval_Desemp = new Csp_Eval_DesempBlock();
        Csp_Eval_Desemp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_PERFIL_USER */
    public Csp_Perfil_UserBlock Csp_Perfil_User = null;
    private void setCsp_Perfil_User(Csp_Perfil_UserBlock ai_arg)
    {
        Csp_Perfil_User = ai_arg;
    }
    private Csp_Perfil_UserBlock getCsp_Perfil_User()
    {
        return Csp_Perfil_User;
    }
    void setCsp_Perfil_User(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Perfil_User = new Csp_Perfil_UserBlock();
        Csp_Perfil_User.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_EVAL_DESEM_1 */
    public Csp_Eval_Desem_1Block Csp_Eval_Desem_1 = null;
    private void setCsp_Eval_Desem_1(Csp_Eval_Desem_1Block ai_arg)
    {
        Csp_Eval_Desem_1 = ai_arg;
    }
    private Csp_Eval_Desem_1Block getCsp_Eval_Desem_1()
    {
        return Csp_Eval_Desem_1;
    }
    void setCsp_Eval_Desem_1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Eval_Desem_1 = new Csp_Eval_Desem_1Block();
        Csp_Eval_Desem_1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_EVAL_DES_EVALUADOR */
    public Csp_Eval_Des_EvaluadorBlock Csp_Eval_Des_Evaluador = null;
    private void setCsp_Eval_Des_Evaluador(Csp_Eval_Des_EvaluadorBlock ai_arg)
    {
        Csp_Eval_Des_Evaluador = ai_arg;
    }
    private Csp_Eval_Des_EvaluadorBlock getCsp_Eval_Des_Evaluador()
    {
        return Csp_Eval_Des_Evaluador;
    }
    void setCsp_Eval_Des_Evaluador(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Eval_Des_Evaluador = new Csp_Eval_Des_EvaluadorBlock();
        Csp_Eval_Des_Evaluador.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

