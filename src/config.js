import normal from "./schedules/normal.js";
import peprally from "./schedules/peprally.js";
import extended2nd from "./schedules/extended2nd.js";
import finals from "./schedules/finalsTwoFinals.js";
import oneFinals from "./schedules/finalsWeekOnlyOne.js";
import unknown from "./schedules/unknown.js";
import SAT from "./schedules/SAT.js";
const config = {
    schedule: {
        //default schedule - schedule used most often. User will be
        //notified if today's schedule is not the default.
        default: normal,
        order: [null, normal, normal, normal, normal, normal],
        //alt schedule - if this is set, it will override the daily order.
        alt: null,
        showAnnoucements: false
    }
}

export default config;
