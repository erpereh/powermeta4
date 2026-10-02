@echo off
::========================================================================
:: @(#)FileVersion: 600.000.001
:: @(#)FileDescription: script to launch Meta4Mind m4configmerge class.
:: @(#)CompanyName: Meta4 Spain, S.A.
:: @(#)LegalCopyright: (c)1998
:: @(#)ProductName: Meta4Mind Set
:: @(#)InternalName: configmerger.bat
:: @(#)ProductVersion: 6.0
:: @(#)Language: cmd batch archive
:: ========================================================================

:: ------------------------------------------------------------------------
:: set local environment
setlocal


::------------------------------------------------------------------------
:: meta4 environment

::------------------------------------------------------------------------
:: search for JAVA in this installation, else global PATH
set JRE_HOME=..\jre
set JRE_BIN=%JRE_HOME%\bin
set JAVA=%JRE_BIN%\java.exe
if not exist %JAVA% set JAVA=java.exe

::------------------------------------------------------------------------
:: meta4 classpath
set M4CLASSPATH=.
for %%f in (.\*.jar) do call :buildClassPath %%f
goto run

:buildClassPath
set M4CLASSPATH=%M4CLASSPATH%;%1
goto :EOF

::------------------------------------------------------------------------
:: main
:run

set OLD_CONFIG=C:\Program Files (x86)\meta4\M4WS\produccion\WEB-INF\classes\properties\configclient.xml
set NEW_CONFIG=C:\Program Files (x86)\meta4\M4WS\produccion\WEB-INF\Templates\configclient.xml

echo Executing Meta4 configuration xml merger tool.
echo Recovering xml files.
echo Please wait...

:: com.meta4.m4configmerger.M4ConfigMerger | com.meta4.m4configmerger.M4WebXmlConfigMerger
set MAIN=com.meta4.m4configmerger.M4ConfigMerger

:: RECUPERACION DEL XML
:: start /B %JAVA% -classpath %M4CLASSPATH% %MAIN% "%OLD_CONFIG%" "%NEW_CONFIG%"
%JAVA% -classpath %M4CLASSPATH% %MAIN% "%OLD_CONFIG%" "%NEW_CONFIG%"

goto end

::------------------------------------------------------------------------
:end
endlocal

