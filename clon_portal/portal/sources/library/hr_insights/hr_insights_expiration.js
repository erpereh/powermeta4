/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: hr_insights_expiration.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


var meta4 = meta4 || {};

meta4.hr_insights_expiration = (function() {
    "use strict";

    /* conditional trace */
    function verboselog(logmessage) {
        if (meta4.M4JSEvents && meta4.M4JSEvents.isDebugToConsole() === true) console.log(logmessage)
    }

    /* function to receive events from visier and be called from unit tests */
    function processHrInsightsMessage(messageHrInsights) {
        switch (messageHrInsights.messageType) {
            case "SESSION_CONNECTED":
                // this message arrives from both users "with full access" and "without full access" to provide the logoffUrl
                // {"messageType":"SESSION_CONNECTED","logOffUrl":"https://prod-ae01.app.visier.com/hr/logoff"}
                break;
            case "APP_LOADED":
                // this message only arrives for users "with full access"
                break;
            case "KEEP_ALIVE":
                // if the visier session is alive, keep the peoplenet session alive.
                if (meta4.M4Executor) {
                    if (messageHrInsights.lastUserEventTime && meta4.M4Executor.setLastUserEventTime) 
                    { 
                        const now = Date.now()
                        const margin = 2*1000
                        const lastUserEventVisier = messageHrInsights.lastUserEventTime                       
                        const lastUserEventTimePeopleNetBefore = meta4.M4Executor.getLastUserEventTime()

                        verboselog(" - m4jsapi at " + new Date().toLocaleString() + " received last user event time in visier as " + new Date(lastUserEventVisier).toLocaleString())
                        verboselog(" - m4jsapi last user event before was: " + new Date(lastUserEventTimePeopleNetBefore).toLocaleString())

                        if (now - lastUserEventTimePeopleNetBefore > meta4.M4Executor.getInactivityTimeout())
                        {
                            verboselog(" - m4jsapi: probably the session is expired now! ")
                        }
                       
                        else if (lastUserEventVisier > lastUserEventTimePeopleNetBefore) {
                            verboselog(" - m4jsapi: has modified last user event time! ")
                             // with this question, I might have some trouble if the interval of keep alive in visier is slightly bigger
                            meta4.M4Executor.setLastUserEventTime(now + 5*60*1000 + margin)
                        }
                      
                        const lastUserEventTimePeopleNetAfter = meta4.M4Executor.getLastUserEventTime()
                        verboselog(" - m4jsapi last user event after is: " + new Date(lastUserEventTimePeopleNetAfter).toLocaleString() + "\n")
                    } 
                    else
                    {
                        verboselog(" - m4jsapi user event time will not be updated. ")
                    }

                } else {
                    console.error("m4jsapi is not loaded.")
                }
                break
            case "SESSION_EXPIRED":
                // this event arrives when the visier session dies. 
                break
        }
    }

    function functionEvent(event) {
        // the event source is the window, and the message has json format
        if (!event.source || event.source.parent != window) {
            console.error("The event source is not the window");
            return
        }
        var message;
        try {
            message = JSON.parse(event.data)
        } catch (err) {
            // non json messages may arrive from vue devtools
            console.error("Message has not JSON format");
            return;
        }
        if (message.hrInsights) {
            verboselog("Event coming from HR Insights (at " + new Date().toLocaleString() + "): " + message.hrInsights.messageType + "\n")
            processHrInsightsMessage(message.hrInsights)
        }
    }

    function _init() {
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

        eventer(
            messageEvent,
            functionEvent,
            false
        );
    }

    var __test__only__ = {
        processHrInsightsMessage: processHrInsightsMessage,
        functionEvent: functionEvent,
    };

    return {
        init : _init,
        __test__only__: __test__only__
    }
})()

document.addEventListener("meta4OnLoad", function() {
    "use strict";
    meta4.hr_insights_expiration.init();
});
