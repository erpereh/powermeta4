/**
 * M4LoadobjectOutput.java
 * Self generated code for Bussines Object CYC_FILT_VALORES_F1.
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

package com.meta4.soapservices.services.rpc.cyc_filt_valores_f1;

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
    
    /* CYC_FILT_FASE1 */
    public Cyc_Filt_Fase1Block Cyc_Filt_Fase1 = null;
    private void setCyc_Filt_Fase1(Cyc_Filt_Fase1Block ai_arg)
    {
        Cyc_Filt_Fase1 = ai_arg;
    }
    private Cyc_Filt_Fase1Block getCyc_Filt_Fase1()
    {
        return Cyc_Filt_Fase1;
    }
    void setCyc_Filt_Fase1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Fase1 = new Cyc_Filt_Fase1Block();
        Cyc_Filt_Fase1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_VAL_F1 */
    public Cyc_Filt_Val_F1Block Cyc_Filt_Val_F1 = null;
    private void setCyc_Filt_Val_F1(Cyc_Filt_Val_F1Block ai_arg)
    {
        Cyc_Filt_Val_F1 = ai_arg;
    }
    private Cyc_Filt_Val_F1Block getCyc_Filt_Val_F1()
    {
        return Cyc_Filt_Val_F1;
    }
    void setCyc_Filt_Val_F1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Val_F1 = new Cyc_Filt_Val_F1Block();
        Cyc_Filt_Val_F1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_CONFIGUR_PCP */
    public Cyc_Configur_PcpBlock Cyc_Configur_Pcp = null;
    private void setCyc_Configur_Pcp(Cyc_Configur_PcpBlock ai_arg)
    {
        Cyc_Configur_Pcp = ai_arg;
    }
    private Cyc_Configur_PcpBlock getCyc_Configur_Pcp()
    {
        return Cyc_Configur_Pcp;
    }
    void setCyc_Configur_Pcp(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Configur_Pcp = new Cyc_Configur_PcpBlock();
        Cyc_Configur_Pcp.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_MEJORAS */
    public Cyc_Filt_MejorasBlock Cyc_Filt_Mejoras = null;
    private void setCyc_Filt_Mejoras(Cyc_Filt_MejorasBlock ai_arg)
    {
        Cyc_Filt_Mejoras = ai_arg;
    }
    private Cyc_Filt_MejorasBlock getCyc_Filt_Mejoras()
    {
        return Cyc_Filt_Mejoras;
    }
    void setCyc_Filt_Mejoras(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Mejoras = new Cyc_Filt_MejorasBlock();
        Cyc_Filt_Mejoras.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_ACC_FORM */
    public Cyc_Filt_Acc_FormBlock Cyc_Filt_Acc_Form = null;
    private void setCyc_Filt_Acc_Form(Cyc_Filt_Acc_FormBlock ai_arg)
    {
        Cyc_Filt_Acc_Form = ai_arg;
    }
    private Cyc_Filt_Acc_FormBlock getCyc_Filt_Acc_Form()
    {
        return Cyc_Filt_Acc_Form;
    }
    void setCyc_Filt_Acc_Form(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Acc_Form = new Cyc_Filt_Acc_FormBlock();
        Cyc_Filt_Acc_Form.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_CARGA_F1 */
    public Cyc_Filt_Carga_F1Block Cyc_Filt_Carga_F1 = null;
    private void setCyc_Filt_Carga_F1(Cyc_Filt_Carga_F1Block ai_arg)
    {
        Cyc_Filt_Carga_F1 = ai_arg;
    }
    private Cyc_Filt_Carga_F1Block getCyc_Filt_Carga_F1()
    {
        return Cyc_Filt_Carga_F1;
    }
    void setCyc_Filt_Carga_F1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Carga_F1 = new Cyc_Filt_Carga_F1Block();
        Cyc_Filt_Carga_F1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_FASES_F1 */
    public Cyc_Filt_Fases_F1Block Cyc_Filt_Fases_F1 = null;
    private void setCyc_Filt_Fases_F1(Cyc_Filt_Fases_F1Block ai_arg)
    {
        Cyc_Filt_Fases_F1 = ai_arg;
    }
    private Cyc_Filt_Fases_F1Block getCyc_Filt_Fases_F1()
    {
        return Cyc_Filt_Fases_F1;
    }
    void setCyc_Filt_Fases_F1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Fases_F1 = new Cyc_Filt_Fases_F1Block();
        Cyc_Filt_Fases_F1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_FEEDBK_F1 */
    public Cyc_Filt_Feedbk_F1Block Cyc_Filt_Feedbk_F1 = null;
    private void setCyc_Filt_Feedbk_F1(Cyc_Filt_Feedbk_F1Block ai_arg)
    {
        Cyc_Filt_Feedbk_F1 = ai_arg;
    }
    private Cyc_Filt_Feedbk_F1Block getCyc_Filt_Feedbk_F1()
    {
        return Cyc_Filt_Feedbk_F1;
    }
    void setCyc_Filt_Feedbk_F1(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Feedbk_F1 = new Cyc_Filt_Feedbk_F1Block();
        Cyc_Filt_Feedbk_F1.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    
    /* CYC_FILT_PTOS_FUERTES */
    public Cyc_Filt_Ptos_FuertesBlock Cyc_Filt_Ptos_Fuertes = null;
    private void setCyc_Filt_Ptos_Fuertes(Cyc_Filt_Ptos_FuertesBlock ai_arg)
    {
        Cyc_Filt_Ptos_Fuertes = ai_arg;
    }
    private Cyc_Filt_Ptos_FuertesBlock getCyc_Filt_Ptos_Fuertes()
    {
        return Cyc_Filt_Ptos_Fuertes;
    }
    void setCyc_Filt_Ptos_Fuertes(M4SoapOperations ai_m4Op, M4XML ai_xml, Node ai_data) throws Exception
    {
        Cyc_Filt_Ptos_Fuertes = new Cyc_Filt_Ptos_FuertesBlock();
        Cyc_Filt_Ptos_Fuertes.readOperations(ai_m4Op, ai_xml, ai_data);
    }
    

} /* end of class M4LoadobjectOutput */

