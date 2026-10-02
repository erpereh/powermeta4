/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_SERVICIO_CV.
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

package com.meta4.soapservices.services.rpc.csp_servicio_cv;

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
    
    /* CSP_CV */
    public Csp_CvBlock Csp_Cv = null;
    private void setCsp_Cv(Csp_CvBlock ai_arg)
    {
        Csp_Cv = ai_arg;
    }
    private Csp_CvBlock getCsp_Cv()
    {
        return Csp_Cv;
    }
    void setCsp_Cv(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Cv = new Csp_CvBlock();
        Csp_Cv.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_SERVICIO_CV */
    public Csp_Servicio_CvBlock Csp_Servicio_Cv = null;
    private void setCsp_Servicio_Cv(Csp_Servicio_CvBlock ai_arg)
    {
        Csp_Servicio_Cv = ai_arg;
    }
    private Csp_Servicio_CvBlock getCsp_Servicio_Cv()
    {
        return Csp_Servicio_Cv;
    }
    void setCsp_Servicio_Cv(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Servicio_Cv = new Csp_Servicio_CvBlock();
        Csp_Servicio_Cv.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_PARAM_GLOBAL */
    public Csp_Param_GlobalBlock Csp_Param_Global = null;
    private void setCsp_Param_Global(Csp_Param_GlobalBlock ai_arg)
    {
        Csp_Param_Global = ai_arg;
    }
    private Csp_Param_GlobalBlock getCsp_Param_Global()
    {
        return Csp_Param_Global;
    }
    void setCsp_Param_Global(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Param_Global = new Csp_Param_GlobalBlock();
        Csp_Param_Global.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* T_AUX_FILE_MANAGER */
    public T_Aux_File_ManagerBlock T_Aux_File_Manager = null;
    private void setT_Aux_File_Manager(T_Aux_File_ManagerBlock ai_arg)
    {
        T_Aux_File_Manager = ai_arg;
    }
    private T_Aux_File_ManagerBlock getT_Aux_File_Manager()
    {
        return T_Aux_File_Manager;
    }
    void setT_Aux_File_Manager(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        T_Aux_File_Manager = new T_Aux_File_ManagerBlock();
        T_Aux_File_Manager.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

