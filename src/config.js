import normal from "./schedules/normal.js";
import peprally from "./schedules/peprally.js";
import pack from "./schedules/extended2nd.js";

//finals
import mon from "./schedules/finals/monday.js";
import tue from "./schedules/finals/tuesday.js";
import wed from "./schedules/finals/wednesday.js";
import thu from "./schedules/finals/z_thursday.js";

const config = {
    schedule: {
        //default schedule - schedule used most often. User will be
        //notified if .today's schedule is not the default.
        default: normal,
        order: [null, normal, normal, normal, normal, normal],
        //order: [null, mon, tue, wed, thu, null],
        //alt schedule - if this is set, it will override the daily order.
        alt: null
    },
    version: " v2.2.1"
}

export default config;
