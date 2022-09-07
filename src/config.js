import normal from "./schedules/normal.js";
import peprally from "./schedules/peprally.js";
import extended2nd from "./schedules/extended2nd.js"

const config = {
    schedule: {
        //default schedule - schedule used most often. User will be
        //notified if today's schedule is not the default.
        default: normal,
        order: [null, normal, normal, extended2nd, normal, normal],
        //alt schedule - if this is set, it will override the daily order.
        alt: null
    }
}

export default config;