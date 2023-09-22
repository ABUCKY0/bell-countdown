export default {
  title: "End of Course/STAAR Testing",
  version: "2.1",
  lunches: [
    {id: "A", name: "A Lunch"},
    {id: "B", name: "B Lunch"},
    {id: "C", name: "C Lunch"},
    {id: "D", name: "D Lunch"},
    {id: "E", name: "EOC Testers' Lunch"}
  ],
  getTimes: function(l) {
    const lunches = {
      A: [
        { name: "Lunch", time: ["10:13", "10:43"] },
        { name: "4th Period", time: ["10:49", "11:41"] },
        { name: "5th Period", time: ["11:47", "12:53"] }
      ],
      B: [
        { name: "4th Period", time: ["10:19", "11:11"] },
        { name: "Lunch", time: ["11:11", "11:41"] },
        { name: "5th Period", time: ["11:47", "12:53"] }
      ],
      C: [
        { name: "4th Period", time: ["10:19", "11:11"] },
        { name: "5th Period", time: ["11:17", "11:47"] },
        { name: "Lunch", time: ["11:47", "12:17"] },
        { name: "5th Period", time: ["12:23", "12:53"]}
      ],
      D: [
        { name: "4th Period", time: ["10:19", "11:11"] },
        { name: "5th Period", time: ["11:17", "12:23"] },
        { name: "Lunch", time: ["12:23", "12:53"] }
      ],
      E: [
        { name: "Lunch", time: ["13:21", "13:51"] }
      ]
    };

    return [
      { name: "1st Period", time: ["07:15", "08:13"] },
      { name: "2nd Period", time: ["08:19", "09:14"] },
      { name: "3rd Period", time: ["09:20", "10:13"] },
      ...lunches[l],
      { name: "6th Period", time: ["12:59", "13:51"] },
      { name: "7th Period", time: ["13:57", "14:40"] }
    ];
  }
};
