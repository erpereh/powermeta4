/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_ESTADO_PROC.
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

package com.meta4.soapservices.services.rpc.csp_estado_proc;

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
    
    /* CSP_ULT_PRO */
    public Csp_Ult_ProBlock Csp_Ult_Pro = null;
    private void setCsp_Ult_Pro(Csp_Ult_ProBlock ai_arg)
    {
        Csp_Ult_Pro = ai_arg;
    }
    private Csp_Ult_ProBlock getCsp_Ult_Pro()
    {
        return Csp_Ult_Pro;
    }
    void setCsp_Ult_Pro(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Ult_Pro = new Csp_Ult_ProBlock();
        Csp_Ult_Pro.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_PLAN_ANT */
    public Csp_Plan_AntBlock Csp_Plan_Ant = null;
    private void setCsp_Plan_Ant(Csp_Plan_AntBlock ai_arg)
    {
        Csp_Plan_Ant = ai_arg;
    }
    private Csp_Plan_AntBlock getCsp_Plan_Ant()
    {
        return Csp_Plan_Ant;
    }
    void setCsp_Plan_Ant(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Plan_Ant = new Csp_Plan_AntBlock();
        Csp_Plan_Ant.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_SACAR_ORG */
    public Csp_Sacar_OrgBlock Csp_Sacar_Org = null;
    private void setCsp_Sacar_Org(Csp_Sacar_OrgBlock ai_arg)
    {
        Csp_Sacar_Org = ai_arg;
    }
    private Csp_Sacar_OrgBlock getCsp_Sacar_Org()
    {
        return Csp_Sacar_Org;
    }
    void setCsp_Sacar_Org(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Sacar_Org = new Csp_Sacar_OrgBlock();
        Csp_Sacar_Org.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_ESTADO_EVAL */
    public Csp_Estado_EvalBlock Csp_Estado_Eval = null;
    private void setCsp_Estado_Eval(Csp_Estado_EvalBlock ai_arg)
    {
        Csp_Estado_Eval = ai_arg;
    }
    private Csp_Estado_EvalBlock getCsp_Estado_Eval()
    {
        return Csp_Estado_Eval;
    }
    void setCsp_Estado_Eval(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Estado_Eval = new Csp_Estado_EvalBlock();
        Csp_Estado_Eval.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_OBJ_EVA_ANT */
    public Csp_Obj_Eva_AntBlock Csp_Obj_Eva_Ant = null;
    private void setCsp_Obj_Eva_Ant(Csp_Obj_Eva_AntBlock ai_arg)
    {
        Csp_Obj_Eva_Ant = ai_arg;
    }
    private Csp_Obj_Eva_AntBlock getCsp_Obj_Eva_Ant()
    {
        return Csp_Obj_Eva_Ant;
    }
    void setCsp_Obj_Eva_Ant(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Obj_Eva_Ant = new Csp_Obj_Eva_AntBlock();
        Csp_Obj_Eva_Ant.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_ESTADO_PLAN_ANT */
    public Csp_Estado_Plan_AntBlock Csp_Estado_Plan_Ant = null;
    private void setCsp_Estado_Plan_Ant(Csp_Estado_Plan_AntBlock ai_arg)
    {
        Csp_Estado_Plan_Ant = ai_arg;
    }
    private Csp_Estado_Plan_AntBlock getCsp_Estado_Plan_Ant()
    {
        return Csp_Estado_Plan_Ant;
    }
    void setCsp_Estado_Plan_Ant(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Estado_Plan_Ant = new Csp_Estado_Plan_AntBlock();
        Csp_Estado_Plan_Ant.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

