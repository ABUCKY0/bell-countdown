export default {
  title: "Finals Week -- One Final Today",
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
        { name: "Lunch", time: ["10:07", "10:37"] },
        { name: "4th Period", time: ["10:43", "11:43"] },
        { name: "5th Period", time: ["11:49", "12:55"] }
      ],
      B: [
        { name: "4th Period", time: ["10:13", "11:13"] },
        { name: "Lunch", time: ["11:13", "11:43"] },
        { name: "5th Period", time: ["11:49", "12:55"] }
      ],
      C: [
        { name: "4th Period", time: ["10:13", "11:13"] },
        { name: "5th Period", time: ["11:19", "12:25"] },
        { name: "Lunch (Shared with D Lunch)", time: ["12:25", "12:55"] }
      ],
      D: [
        { name: "4th Period", time: ["10:13", "11:13"] },
        { name: "5th Period", time: ["11:19", "12:25"] },
        { name: "Lunch (Shared with C Lunch)", time: ["12:25", "12:55"] }
      ]
    };

    return [
      { name: "Fifth Period Exam (1st Period)", time: ["07:15", "08:45"] },
      { name: "3rd Period", time: ["08:51", "10:07"] },
      ...lunches[l],
      { name: "6th Period", time: ["13:01", "13:47"] },
      { name: "7th Period", time: ["13:53", "14:40"] }
    ];
  }
};
