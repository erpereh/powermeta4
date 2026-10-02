@echo off
:: ========================================================================
:: @(#) FileVersion: 816.002.007
:: @(#) FileDescription: Script to launch literal migration.
:: @(#) CompanyName: Meta4 Spain, S.A.
:: @(#) LegalCopyright: (c) 2019
:: @(#) ProductName: PeopleNet
:: ========================================================================

::-----------------------------------------------------------------
:: set environment.
setlocal
call .\environment.bat
set PROGRAMNAME=.\%0.bat
set FIRSTARG=%1
set MAIN=com.meta4.languages.fileprovider.M4FileMigration

::-----------------------------------------------------------------
:: display title.
echo %TITLE%

::-----------------------------------------------------------------
:: input args.
if /I "%FIRSTARG%"=="" goto migrate-all
goto migrate-one


::-----------------------------------------------------------------
:: option 1
:migrate-all
set ARGS=%APP_HOME%
echo Migrating all literals from %APP_HOME%, please wait...
goto exec

::-----------------------------------------------------------------
:: option 1
:migrate-one
set ARGS=%APP_HOME% %FIRSTARG%
echo Migrating file %FIRSTARG%, please wait...
goto exec

::-----------------------------------------------------------------
:: exec program.
:exec
set EXEC=%JAVA% %MAIN% %ARGS%
%EXEC%
echo For further details, please check %TEMP%/literal-migration.log
goto end

::-----------------------------------------------------------------
:: show usage.
:usage
echo Usage:
echo    %PROGRAMNAME% all   (migrate all literals)
goto end

::-----------------------------------------------------------------
:end
endlocal