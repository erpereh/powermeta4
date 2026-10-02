// Copyright (c) 2000-2003 Quadralay Corporation.  All rights reserved.
//

function  WWHJava_Object()
{
  this.mSettings = new WWHJavaSettings_Object();

  this.fInit           = WWHJava_Init;
  this.fUseAppletInfo  = WWHJava_UseAppletInfo;
  this.fGetAppletURL   = WWHJava_GetAppletURL;
  this.fAppletLoaded   = WWHJava_AppletLoaded;
  this.fAppletUnloaded = WWHJava_AppletUnloaded;
  this.fGetPlatform    = WWHJava_GetPlatform;
  this.fGetBrowser     = WWHJava_GetBrowser;
  this.fSetDocument    = WWHJava_SetDocument;
  this.fCookiesEnabled = WWHJava_CookiesEnabled;
  this.fSetFavorites   = WWHJava_SetFavorites;
  this.fGetFavorites   = WWHJava_GetFavorites;
}

function  WWHJava_Init()
{
  // Netscape 4.x should work if enabled
  //
  if ((WWHFrame.WWHBrowser.mBrowser == 1) &&  // Shorthand for Netscape
      (WWHFrame.WWHBrowser.mbJavaEnabled) &&
      (WWHFrame.WWHBrowser.mbJavaEnabled))
  {
    // Load the applet
    //
    this.fUseAppletInfo("netscape.security.AppletSecurity");
  }
  else
  {
    // Load the test applet
    //
    WWHFrame.WWHHelp.fReplaceLocation("WWHNavigationFrame", WWHFrame.WWHBrowser.fRestoreEscapedSpaces(WWHFrame.WWHHelp.mBaseURL + "wwhelp/wwhimpl/java/html/javainfo.htm"));
  }

  return 0;
}

function  WWHJava_UseAppletInfo(ParamSecurityManager)
{
  var  bVarContinue;
  var  RedirectURL;
  var  Parts;
  var  VarImplementationCookie;


  bVarContinue = false;
  if (ParamSecurityManager.length > 0)
  {
    bVarContinue = true;

    // UNCs do not work under the Sun JVM on Windows
    //
    if (WWHFrame.WWHBrowser.mPlatform == 1)  // Shorthand for Windows
    {
      if (ParamSecurityManager == "sun.plugin.ActivatorSecurityManager")
      {
        if (WWHFrame.WWHHelp.mLocationURL.indexOf("file://///") == 0)
        {
          bVarContinue = false;
        }
      }
    }
  }

  if (bVarContinue)
  {
    // Load applet
    //
    WWHFrame.WWHHelp.fReplaceLocation("WWHNavigationFrame", WWHFrame.WWHBrowser.fRestoreEscapedSpaces(this.fGetAppletURL(ParamSecurityManager)));

    // Load rest of help system
    //
    WWHFrame.WWHHelp.fInitStage(0);
  }
  else
  {
    // Java not available or LiveConnect failed, redirect to JavaScript
    //
    RedirectURL = WWHFrame.WWHHelp.mHelpURLPrefix + "wwhelp/wwhimpl/js/html/wwhelp.htm";

    // Keep any URL parameters specified
    //
    if (WWHFrame.WWHHelp.mLocationURL.indexOf("?") != -1)
    {
      Parts = WWHFrame.WWHHelp.mLocationURL.split("?");
      RedirectURL += "?" + Parts[1];
    }

    // Reset implementation cookie
    //
    VarImplementationCookie = "WWH" + WWHFrame.WWHHelp.mSettings.mCookiesID + "_Impl";
    WWHFrame.WWHBrowser.fSetCookie(VarImplementationCookie, "javascript", WWHFrame.WWHHelp.mSettings.mCookiesDaysToExpire);

    // Redirect
    //
    WWHFrame.WWHHelp.fReplaceLocation("WWHFrame", RedirectURL);
  }
}

function  WWHJava_GetAppletURL(ParamSecurityManager)
{
  var  AppletURL = "";


// HACK BEN
// Do something with ParamSecurityManager
  // Pick which Java applet based on platform/browser info
  //
  if (WWHFrame.WWHBrowser.mBrowser == 1)  // Shorthand for Netscape
  {
    AppletURL = "wwhelp/wwhimpl/java/html/netscape.htm";
  }
  else if ((WWHFrame.WWHBrowser.mBrowser == 4) ||  // Shorthand for Netscape 6.x (Mozilla)
           (WWHFrame.WWHBrowser.mBrowser == 5))    // Shorthand for Safari
  {
    if (WWHFrame.WWHBrowser.mPlatform == 0)  // Shorthand for Unknown (likely Unix)
    {
      AppletURL = "wwhelp/wwhimpl/java/html/mozillau.htm";
    }
    else
    {
      AppletURL = "wwhelp/wwhimpl/java/html/mozilla.htm";
    }
  }
  else  // Assume IE
  {
    if (WWHFrame.WWHBrowser.mbWindowsIE60)
    {
      AppletURL = "wwhelp/wwhimpl/java/html/explore6.htm";
    }
    else
    {
      AppletURL = "wwhelp/wwhimpl/java/html/explorer.htm";
    }
  }

  // Prefix location
  //
  AppletURL = WWHFrame.WWHHelp.mBaseURL + AppletURL;

  return AppletURL;
}

function  WWHJava_AppletLoaded()
{
  var  RedirectURL;
  var  Parts;
  var  VarNavigationFrame;


  if ( ! WWHFrame.WWHHandler.mbInitialized)
  {
    if (WWHFrame.WWHHelp.mInitStage == 0)
    {
      // User hit back button after using the applet, reload everything
      //
      RedirectURL = WWHFrame.WWHHelp.mHelpURLPrefix + "wwhelp/wwhimpl/java/html/wwhelp.htm";

      // Keep any URL parameters specified
      //
      if (WWHFrame.WWHHelp.mLocationURL.indexOf("?") != -1)
      {
        Parts = WWHFrame.WWHHelp.mLocationURL.split("?");
        RedirectURL += "?" + Parts[1];
      }

      // Redirect
      //
      WWHFrame.WWHHelp.fReplaceLocation("WWHFrame", RedirectURL);
    }
    else
    {
      // Indicate that handler was initialized
      //
      WWHFrame.WWHHandler.mbInitialized = true;

      // Initialize applet size if necessary
      //
      VarNavigationFrame = eval(WWHFrame.WWHHelp.fGetFrameReference("WWHNavigationFrame"));
      if (typeof(VarNavigationFrame.WWHNavigationFrame_InitSize) == "function")
      {
        setTimeout(WWHFrame.WWHHelp.fGetFrameReference("WWHNavigationFrame") + ".WWHNavigationFrame_InitSize();", 1);
      }

      // Complete initialization
      //
      WWHFrame.WWHHelp.fHandlerInitialized();
    }
  }
}

function  WWHJava_AppletUnloaded()
{
  if (WWHFrame.WWHBrowser.mBrowser != 1)  // Shorthand for Netscape
  {
    WWHFrame.WWHHandler.mbInitialized = false;
  }

  return 0;
}

function  WWHJava_GetPlatform()
{
  return WWHFrame.WWHBrowser.mPlatform;
}

function  WWHJava_GetBrowser()
{
  return WWHFrame.WWHBrowser.mBrowser;
}

function  WWHJava_SetDocument(ParamBookIndex,
                              ParamFileIndex,
                              ParamAnchor)
{
  var  VarBookIndex;
  var  VarFileIndex;
  var  VarAnchor;
  var  VarURL;


  // Insure parameters get converted to the expected types
  //
  VarBookIndex = parseInt(ParamBookIndex);
  VarFileIndex = parseInt(ParamFileIndex);
  VarAnchor    = "" + ParamAnchor;

  // Construct a URL for the requested document
  //
  VarURL = WWHFrame.WWHHelp.fGetBookIndexFileIndexURL(VarBookIndex, VarFileIndex, VarAnchor);

  // Display the document
  //
  WWHFrame.WWHHelp.fSetDocumentHREF(VarURL, false);
}

function  WWHJava_CookiesEnabled()
{
  return WWHFrame.WWHHelp.fCookiesEnabled();
}

function  WWHJava_SetFavorites(ParamFavorites)
{
  if (this.fCookiesEnabled())
  {
    WWHFrame.WWHBrowser.fSetCookie(WWHFrame.WWHHelp.mFavoritesCookie, ParamFavorites, WWHFrame.WWHHelp.mSettings.mCookiesDaysToExpire);
  }
}

function  WWHJava_GetFavorites()
{
  var  VarFavorites = "";


  if (this.fCookiesEnabled())
  {
    VarFavorites = WWHFrame.WWHBrowser.fGetCookie(WWHFrame.WWHHelp.mFavoritesCookie);
    if (VarFavorites == null)
    {
      VarFavorites = "";
    }
  }

  return VarFavorites;
}
