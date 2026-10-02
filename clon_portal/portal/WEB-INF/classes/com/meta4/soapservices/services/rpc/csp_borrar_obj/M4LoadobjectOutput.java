/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_BORRAR_OBJ.
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

package com.meta4.soapservices.services.rpc.csp_borrar_obj;

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
    
    /* CSP_OBJECTIVE */
    public Csp_ObjectiveBlock Csp_Objective = null;
    private void setCsp_Objective(Csp_ObjectiveBlock ai_arg)
    {
        Csp_Objective = ai_arg;
    }
    private Csp_ObjectiveBlock getCsp_Objective()
    {
        return Csp_Objective;
    }
    void setCsp_Objective(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Objective = new Csp_ObjectiveBlock();
        Csp_Objective.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_BORRAR_OBJ */
    public Csp_Borrar_ObjBlock Csp_Borrar_Obj = null;
    private void setCsp_Borrar_Obj(Csp_Borrar_ObjBlock ai_arg)
    {
        Csp_Borrar_Obj = ai_arg;
    }
    private Csp_Borrar_ObjBlock getCsp_Borrar_Obj()
    {
        return Csp_Borrar_Obj;
    }
    void setCsp_Borrar_Obj(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Borrar_Obj = new Csp_Borrar_ObjBlock();
        Csp_Borrar_Obj.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_DMD_COMPNTS */
    public Csp_Dmd_CompntsBlock Csp_Dmd_Compnts = null;
    private void setCsp_Dmd_Compnts(Csp_Dmd_CompntsBlock ai_arg)
    {
        Csp_Dmd_Compnts = ai_arg;
    }
    private Csp_Dmd_CompntsBlock getCsp_Dmd_Compnts()
    {
        return Csp_Dmd_Compnts;
    }
    void setCsp_Dmd_Compnts(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Dmd_Compnts = new Csp_Dmd_CompntsBlock();
        Csp_Dmd_Compnts.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

