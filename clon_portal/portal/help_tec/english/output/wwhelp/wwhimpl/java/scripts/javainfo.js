// Copyright (c) 2003 Quadralay Corporation.  All rights reserved.
//

function  WWHJavaInfo_Object()
{
  this.mSecurityManager = "";
  this.mSetTimeoutID    = null;

  this.fInitialize         = WWHJavaInfo_Initialize;
  this.fComplete           = WWHJavaInfo_Complete;
  this.fAppletLoaded       = WWHJavaInfo_AppletLoaded;
  this.fSetSecurityManager = WWHJavaInfo_SetSecurityManager;

  // Initialize this object
  //
  this.fInitialize();
}

function  WWHJavaInfo_Initialize()
{
  this.mSetTimeoutID = setTimeout(WWHFrame.WWHHelp.fGetFrameReference("WWHNavigationFrame") + ".WWHJavaInfo.fComplete();", 10 * 1000);
}

function  WWHJavaInfo_Complete()
{
  // Send results to Java object
  //
  setTimeout("WWHFrame.WWHJava.fUseAppletInfo(\"" + this.mSecurityManager + "\");", 1);
}

function  WWHJavaInfo_AppletLoaded(ParamMessage)
{
  var  VarMessage = "";


  VarMessage += ParamMessage;
  if (VarMessage == "Java applet initialized")
  {
    // Set the security manager
    // Break the call chain and allow the Java method to complete
    //
    setTimeout(WWHFrame.WWHHelp.fGetFrameReference("WWHNavigationFrame") + ".WWHJavaInfo.fSetSecurityManager();", 1);
  }
}

function  WWHJavaInfo_SetSecurityManager()
{
  var  VarNavigationFrame;
  var  VarSecurityManager;


  // Call the applet to get the name of the JVM security manager
  //
  VarNavigationFrame = eval(WWHFrame.WWHHelp.fGetFrameReference("WWHNavigationFrame"));
  VarSecurityManager = VarNavigationFrame.document.applets[0].fGetSecurityManager();

  // Member variable not directly assigned in case of error
  //
  this.mSecurityManager = VarSecurityManager;

  // Clear the timeout if it is specified
  //
  if (this.mSetTimeoutID != null)
  {
    clearTimeout(this.mSetTimeoutID);
  }

  // Complete
  //
  setTimeout(WWHFrame.WWHHelp.fGetFrameReference("WWHNavigationFrame") + ".WWHJavaInfo.fComplete();", 1);
}
