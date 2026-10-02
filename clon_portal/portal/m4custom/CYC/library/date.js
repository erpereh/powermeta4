/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: JavaScript functions to manage date and time.	
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: date.js
	@(#)Date: 29/10/2001      
*/


/*
 * function: timeStampToString()
 * description: Returns a string with the input time stamp.
 * parameters:
 *	ai_date: a javascript Date object
 */
function timeStampToString(ai_date) 
{
	var sDate = dateToString(ai_date) + " " + dateGetHours(ai_date) + ":" + dateGetMinutes(ai_date) + ":" + dateGetSeconds(ai_date);
	
	return sDate;
}


/*
 * function: dateToString()
 * description: Returns a string with the input date.
 * parameters:
 *	ai_date: a javascript Date object
 */
function dateToString(ai_date) 
{
	var year  = ai_date.getFullYear();
	var month = ai_date.getMonth() + 1;
	var day = ai_date.getDate();

	if (month <= 9) month = "0" + month;
	if (day <= 9) day = "0" + day;
	
	var sDate = year + "-" + month + "-" + day;
	
	return sDate;
}


/*
 * function: dateGetHours()
 * description: Returns a string with the input hours in two digits.
 * parameters:
 *	ai_date: a javascript Date object
 */
function dateGetHours(ai_date) 
{
	var hour = ai_date.getHours();
	if (hour <= 9) hour = "0" + hour;
	
	return hour;
}


/*
 * function: dateGetMinutes()
 * description: Returns a string with the input minutes in two digits.
 * parameters:
 *	ai_date: a javascript Date object
 */
function dateGetMinutes(ai_date) 
{
	var minute = ai_date.getMinutes();
	if (minute <= 9) minute = "0" + minute;
	
	return minute;
}


/*
 * function: dateGetSeconds()
 * description: Returns a string with the input seconds in two digits.
 * parameters:
 *	ai_date: a javascript Date object
 */
function dateGetSeconds(ai_date) 
{
	var second = ai_date.getSeconds();
	if (second <= 9) second = "0" + second;
	
	return second;
}

