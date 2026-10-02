/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_FILT_VALORES_F3.
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

package com.meta4.soapservices.services.rpc.cyc_filt_valores_f3;

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
    
    /* CYC_FILT_VAL_F3 */
    public Cyc_Filt_Val_F3Block Cyc_Filt_Val_F3 = null;
    private void setCyc_Filt_Val_F3(Cyc_Filt_Val_F3Block ai_arg)
    {
        Cyc_Filt_Val_F3 = ai_arg;
    }
    private Cyc_Filt_Val_F3Block getCyc_Filt_Val_F3()
    {
        return Cyc_Filt_Val_F3;
    }
    void setCyc_Filt_Val_F3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Val_F3 = new Cyc_Filt_Val_F3Block();
        Cyc_Filt_Val_F3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_CARGA_F3 */
    public Cyc_Filt_Carga_F3Block Cyc_Filt_Carga_F3 = null;
    private void setCyc_Filt_Carga_F3(Cyc_Filt_Carga_F3Block ai_arg)
    {
        Cyc_Filt_Carga_F3 = ai_arg;
    }
    private Cyc_Filt_Carga_F3Block getCyc_Filt_Carga_F3()
    {
        return Cyc_Filt_Carga_F3;
    }
    void setCyc_Filt_Carga_F3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Carga_F3 = new Cyc_Filt_Carga_F3Block();
        Cyc_Filt_Carga_F3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_FASES_F3 */
    public Cyc_Filt_Fases_F3Block Cyc_Filt_Fases_F3 = null;
    private void setCyc_Filt_Fases_F3(Cyc_Filt_Fases_F3Block ai_arg)
    {
        Cyc_Filt_Fases_F3 = ai_arg;
    }
    private Cyc_Filt_Fases_F3Block getCyc_Filt_Fases_F3()
    {
        return Cyc_Filt_Fases_F3;
    }
    void setCyc_Filt_Fases_F3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Fases_F3 = new Cyc_Filt_Fases_F3Block();
        Cyc_Filt_Fases_F3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_ACCION_F3 */
    public Cyc_Filt_Accion_F3Block Cyc_Filt_Accion_F3 = null;
    private void setCyc_Filt_Accion_F3(Cyc_Filt_Accion_F3Block ai_arg)
    {
        Cyc_Filt_Accion_F3 = ai_arg;
    }
    private Cyc_Filt_Accion_F3Block getCyc_Filt_Accion_F3()
    {
        return Cyc_Filt_Accion_F3;
    }
    void setCyc_Filt_Accion_F3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Accion_F3 = new Cyc_Filt_Accion_F3Block();
        Cyc_Filt_Accion_F3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_COLECTIVO */
    public Cyc_Filt_ColectivoBlock Cyc_Filt_Colectivo = null;
    private void setCyc_Filt_Colectivo(Cyc_Filt_ColectivoBlock ai_arg)
    {
        Cyc_Filt_Colectivo = ai_arg;
    }
    private Cyc_Filt_ColectivoBlock getCyc_Filt_Colectivo()
    {
        return Cyc_Filt_Colectivo;
    }
    void setCyc_Filt_Colectivo(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Colectivo = new Cyc_Filt_ColectivoBlock();
        Cyc_Filt_Colectivo.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_FEEDBK_F3 */
    public Cyc_Filt_Feedbk_F3Block Cyc_Filt_Feedbk_F3 = null;
    private void setCyc_Filt_Feedbk_F3(Cyc_Filt_Feedbk_F3Block ai_arg)
    {
        Cyc_Filt_Feedbk_F3 = ai_arg;
    }
    private Cyc_Filt_Feedbk_F3Block getCyc_Filt_Feedbk_F3()
    {
        return Cyc_Filt_Feedbk_F3;
    }
    void setCyc_Filt_Feedbk_F3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Feedbk_F3 = new Cyc_Filt_Feedbk_F3Block();
        Cyc_Filt_Feedbk_F3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_MEJORAS_F3 */
    public Cyc_Filt_Mejoras_F3Block Cyc_Filt_Mejoras_F3 = null;
    private void setCyc_Filt_Mejoras_F3(Cyc_Filt_Mejoras_F3Block ai_arg)
    {
        Cyc_Filt_Mejoras_F3 = ai_arg;
    }
    private Cyc_Filt_Mejoras_F3Block getCyc_Filt_Mejoras_F3()
    {
        return Cyc_Filt_Mejoras_F3;
    }
    void setCyc_Filt_Mejoras_F3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Mejoras_F3 = new Cyc_Filt_Mejoras_F3Block();
        Cyc_Filt_Mejoras_F3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_PTO_FUERTE_F3 */
    public Cyc_Filt_Pto_Fuerte_F3Block Cyc_Filt_Pto_Fuerte_F3 = null;
    private void setCyc_Filt_Pto_Fuerte_F3(Cyc_Filt_Pto_Fuerte_F3Block ai_arg)
    {
        Cyc_Filt_Pto_Fuerte_F3 = ai_arg;
    }
    private Cyc_Filt_Pto_Fuerte_F3Block getCyc_Filt_Pto_Fuerte_F3()
    {
        return Cyc_Filt_Pto_Fuerte_F3;
    }
    void setCyc_Filt_Pto_Fuerte_F3(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Pto_Fuerte_F3 = new Cyc_Filt_Pto_Fuerte_F3Block();
        Cyc_Filt_Pto_Fuerte_F3.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

