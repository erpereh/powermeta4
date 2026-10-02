:: ========================================================================
:: @(#) FileVersion: 816.002.007
:: @(#) FileDescription: Sets environment for all m4ws scripts.
:: @(#) CompanyName: Meta4 Spain, S.A.
:: @(#) LegalCopyright: (c) 2019
:: @(#) ProductName: PeopleNet
:: ========================================================================

::-----------------------------------------------------------------
:: default APPLICATION environment
::-----------------------------------------------------------------
set JDK_HOME=C:\PROGRA~2\Java\jdk1.6.0_25
set APP_HOME=c:/meta4/m4ws/default
set TITLE=Meta4 Literal Migration Tools

if exist %JAVA_HOME% set JDK_HOME=%JAVA_HOME%

::-----------------------------------------------------------------
:: set JAVA environment.
::-----------------------------------------------------------------
:: set JAVA classpath
set JAVA_CP=.;..\lib\servlet-2_3-fcs-classfiles.jar;%APP_HOME%\WEB-INF\classes
for %%f in (%APP_HOME%\WEB-INF\lib\*.jar) do call :addToClassPath %%f

:: set JAVA exec.
set JAVA=%JDK_HOME%\bin\java.exe -classpath %JAVA_CP%

goto end

:: ----------------------------------------------------------------
:: Add to JAVA_CP the input parameter.
:addToClassPath
set AI_JAR=%1
set JAVA_CP=%JAVA_CP%;%AI_JAR%
goto :EOF

::-----------------------------------------------------------------
:end
