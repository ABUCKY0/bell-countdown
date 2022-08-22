export default {
  title: "Normal",
  version: "2.1",
  lunches: [
    {id: "A", name: "A Lunch"},
    {id: "B", name: "B Lunch"},
    {id: "C", name: "C Lunch"},
    {id: "D", name: "D Lunch"}
  ],
  getTimes: function(l) {
    const lunches = {
      A: [
        { name: "Lunch", time: ["10:05", "10:35"] },
        { name: "4th Period", time: ["10:41", "11:34"] },
        { name: "5th Period", time: ["11:40", "12:46"] }
      ],
      B: [
        { name: "4th Period", time: ["10:11", "11:04"] },
        { name: "Lunch", time: ["11:04", "11:34"] },
        { name: "5th Period", time: ["11:40", "12:46"] }
      ],
      C: [
        { name: "4th Period", time: ["10:11", "11:04"] },
        { name: "5th Period", time: ["11:10", "11:40"] },
        { name: "Lunch", time: ["11:40", "12:10"] },
        { name: "5th Period", time: ["12:16", "12:46"]}
      ],
      D: [
        { name: "4th Period", time: ["10:11", "11:04"] },
        { name: "5th Period", time: ["11:10", "12:16"] },
        { name: "Lunch", time: ["12:16", "12:46"] }
      ]
    };

    return [
      { name: "1st Period", time: ["07:15", "08:06"] },
      { name: "2nd Period", time: ["08:12", "09:08"] },
      { name: "3rd Period", time: ["09:14", "10:05"] },
      ...lunches[l],
      { name: "6th Period", time: ["12:52", "13:43"] },
      { name: "7th Period", time: ["13:49", "14:40"] }
    ];
  }
};
