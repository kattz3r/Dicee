var newConsole = (function(oldConsole) {
    return {
        log: function() {
            var data = Array.from(arguments);
            if(data.length == 1) {
                if(typeof(data[0]) === "string" && data[0].includes("callJavascriptFunction")) {
                    try {
                        return eval(data[0].split("callJavascriptFunction ")[1]);
                    } catch(e) {
                        oldConsole.error("Something went wrong with your callJS: \nCode: " + data[0].split("callJavascriptFunction ")[1] + "\nError: '" + e.message + "'");
                        return null;
                    }
                } else {
                    oldConsole.log(data[0]);
                    return null;
                }
            } else {
                oldConsole.log(data[0], ...data.slice(1));
            }
            return null;
        },
        info: function() { var data = Array.from(arguments); oldConsole.info(...data); },
        warn: function() { var data = Array.from(arguments); oldConsole.warn(...data); },
        error: function() { var data = Array.from(arguments); oldConsole.error(...data); },
        clear: function() { oldConsole.clear(); },
        assert: function() { var data = Array.from(arguments); oldConsole.assert(data[0], data[1], ...data.slice(2)); },
        group: function() { var data = Array.from(arguments); oldConsole.group(data[0], ...data.slice(1)); },
        groupCollapsed: function() { var data = Array.from(arguments); oldConsole.groupCollapsed(data[0], ...data.slice(1)); },
        groupEnd: function() { oldConsole.groupEnd(); }
    };
}(window.console));

window.console = newConsole;

window.console = newConsole;
