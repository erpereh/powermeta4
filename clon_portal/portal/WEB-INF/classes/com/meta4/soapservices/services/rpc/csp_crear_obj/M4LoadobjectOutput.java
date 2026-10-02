/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CSP_CREAR_OBJ.
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

package com.meta4.soapservices.services.rpc.csp_crear_obj;

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
    
    /* CSP_ROL_OBJ */
    public Csp_Rol_ObjBlock Csp_Rol_Obj = null;
    private void setCsp_Rol_Obj(Csp_Rol_ObjBlock ai_arg)
    {
        Csp_Rol_Obj = ai_arg;
    }
    private Csp_Rol_ObjBlock getCsp_Rol_Obj()
    {
        return Csp_Rol_Obj;
    }
    void setCsp_Rol_Obj(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Rol_Obj = new Csp_Rol_ObjBlock();
        Csp_Rol_Obj.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_GUARDAR_OBJ */
    public Csp_Guardar_ObjBlock Csp_Guardar_Obj = null;
    private void setCsp_Guardar_Obj(Csp_Guardar_ObjBlock ai_arg)
    {
        Csp_Guardar_Obj = ai_arg;
    }
    private Csp_Guardar_ObjBlock getCsp_Guardar_Obj()
    {
        return Csp_Guardar_Obj;
    }
    void setCsp_Guardar_Obj(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Guardar_Obj = new Csp_Guardar_ObjBlock();
        Csp_Guardar_Obj.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_COMPROBAR_PLAN */
    public Csp_Comprobar_PlanBlock Csp_Comprobar_Plan = null;
    private void setCsp_Comprobar_Plan(Csp_Comprobar_PlanBlock ai_arg)
    {
        Csp_Comprobar_Plan = ai_arg;
    }
    private Csp_Comprobar_PlanBlock getCsp_Comprobar_Plan()
    {
        return Csp_Comprobar_Plan;
    }
    void setCsp_Comprobar_Plan(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Comprobar_Plan = new Csp_Comprobar_PlanBlock();
        Csp_Comprobar_Plan.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CSP_LEVEL_OBJETIVOS */
    public Csp_Level_ObjetivosBlock Csp_Level_Objetivos = null;
    private void setCsp_Level_Objetivos(Csp_Level_ObjetivosBlock ai_arg)
    {
        Csp_Level_Objetivos = ai_arg;
    }
    private Csp_Level_ObjetivosBlock getCsp_Level_Objetivos()
    {
        return Csp_Level_Objetivos;
    }
    void setCsp_Level_Objetivos(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Csp_Level_Objetivos = new Csp_Level_ObjetivosBlock();
        Csp_Level_Objetivos.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

