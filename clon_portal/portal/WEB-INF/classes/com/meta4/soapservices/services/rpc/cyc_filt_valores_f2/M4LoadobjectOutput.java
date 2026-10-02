/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_FILT_VALORES_F2.
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

package com.meta4.soapservices.services.rpc.cyc_filt_valores_f2;

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
    
    /* CYC_FILT_FASE2 */
    public Cyc_Filt_Fase2Block Cyc_Filt_Fase2 = null;
    private void setCyc_Filt_Fase2(Cyc_Filt_Fase2Block ai_arg)
    {
        Cyc_Filt_Fase2 = ai_arg;
    }
    private Cyc_Filt_Fase2Block getCyc_Filt_Fase2()
    {
        return Cyc_Filt_Fase2;
    }
    void setCyc_Filt_Fase2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Fase2 = new Cyc_Filt_Fase2Block();
        Cyc_Filt_Fase2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_ENTREV */
    public Cyc_Filt_EntrevBlock Cyc_Filt_Entrev = null;
    private void setCyc_Filt_Entrev(Cyc_Filt_EntrevBlock ai_arg)
    {
        Cyc_Filt_Entrev = ai_arg;
    }
    private Cyc_Filt_EntrevBlock getCyc_Filt_Entrev()
    {
        return Cyc_Filt_Entrev;
    }
    void setCyc_Filt_Entrev(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Entrev = new Cyc_Filt_EntrevBlock();
        Cyc_Filt_Entrev.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_VAL_F2 */
    public Cyc_Filt_Val_F2Block Cyc_Filt_Val_F2 = null;
    private void setCyc_Filt_Val_F2(Cyc_Filt_Val_F2Block ai_arg)
    {
        Cyc_Filt_Val_F2 = ai_arg;
    }
    private Cyc_Filt_Val_F2Block getCyc_Filt_Val_F2()
    {
        return Cyc_Filt_Val_F2;
    }
    void setCyc_Filt_Val_F2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Val_F2 = new Cyc_Filt_Val_F2Block();
        Cyc_Filt_Val_F2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_ACCIONES */
    public Cyc_Filt_AccionesBlock Cyc_Filt_Acciones = null;
    private void setCyc_Filt_Acciones(Cyc_Filt_AccionesBlock ai_arg)
    {
        Cyc_Filt_Acciones = ai_arg;
    }
    private Cyc_Filt_AccionesBlock getCyc_Filt_Acciones()
    {
        return Cyc_Filt_Acciones;
    }
    void setCyc_Filt_Acciones(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Acciones = new Cyc_Filt_AccionesBlock();
        Cyc_Filt_Acciones.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_CARGA_F2 */
    public Cyc_Filt_Carga_F2Block Cyc_Filt_Carga_F2 = null;
    private void setCyc_Filt_Carga_F2(Cyc_Filt_Carga_F2Block ai_arg)
    {
        Cyc_Filt_Carga_F2 = ai_arg;
    }
    private Cyc_Filt_Carga_F2Block getCyc_Filt_Carga_F2()
    {
        return Cyc_Filt_Carga_F2;
    }
    void setCyc_Filt_Carga_F2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Carga_F2 = new Cyc_Filt_Carga_F2Block();
        Cyc_Filt_Carga_F2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_FASES_F2 */
    public Cyc_Filt_Fases_F2Block Cyc_Filt_Fases_F2 = null;
    private void setCyc_Filt_Fases_F2(Cyc_Filt_Fases_F2Block ai_arg)
    {
        Cyc_Filt_Fases_F2 = ai_arg;
    }
    private Cyc_Filt_Fases_F2Block getCyc_Filt_Fases_F2()
    {
        return Cyc_Filt_Fases_F2;
    }
    void setCyc_Filt_Fases_F2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Fases_F2 = new Cyc_Filt_Fases_F2Block();
        Cyc_Filt_Fases_F2.readOperations(ai_m4Op, ai_xml, ai_data);
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
    
    /* CYC_FILT_FEEDBK_F2 */
    public Cyc_Filt_Feedbk_F2Block Cyc_Filt_Feedbk_F2 = null;
    private void setCyc_Filt_Feedbk_F2(Cyc_Filt_Feedbk_F2Block ai_arg)
    {
        Cyc_Filt_Feedbk_F2 = ai_arg;
    }
    private Cyc_Filt_Feedbk_F2Block getCyc_Filt_Feedbk_F2()
    {
        return Cyc_Filt_Feedbk_F2;
    }
    void setCyc_Filt_Feedbk_F2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Feedbk_F2 = new Cyc_Filt_Feedbk_F2Block();
        Cyc_Filt_Feedbk_F2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_MEJORAS_F2 */
    public Cyc_Filt_Mejoras_F2Block Cyc_Filt_Mejoras_F2 = null;
    private void setCyc_Filt_Mejoras_F2(Cyc_Filt_Mejoras_F2Block ai_arg)
    {
        Cyc_Filt_Mejoras_F2 = ai_arg;
    }
    private Cyc_Filt_Mejoras_F2Block getCyc_Filt_Mejoras_F2()
    {
        return Cyc_Filt_Mejoras_F2;
    }
    void setCyc_Filt_Mejoras_F2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Mejoras_F2 = new Cyc_Filt_Mejoras_F2Block();
        Cyc_Filt_Mejoras_F2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_PTO_FUERTE_F2 */
    public Cyc_Filt_Pto_Fuerte_F2Block Cyc_Filt_Pto_Fuerte_F2 = null;
    private void setCyc_Filt_Pto_Fuerte_F2(Cyc_Filt_Pto_Fuerte_F2Block ai_arg)
    {
        Cyc_Filt_Pto_Fuerte_F2 = ai_arg;
    }
    private Cyc_Filt_Pto_Fuerte_F2Block getCyc_Filt_Pto_Fuerte_F2()
    {
        return Cyc_Filt_Pto_Fuerte_F2;
    }
    void setCyc_Filt_Pto_Fuerte_F2(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Pto_Fuerte_F2 = new Cyc_Filt_Pto_Fuerte_F2Block();
        Cyc_Filt_Pto_Fuerte_F2.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

