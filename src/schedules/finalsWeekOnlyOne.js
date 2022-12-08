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
      { name: "First Exam (1st Period)", time: ["07:15", "08:45"] },
      { name: "3rd Period", time: ["08:51", "10:07"] },
      ...lunches[l],
      { name: "6th Period (One More Class Left)", time: ["13:01", "13:47"] },
      { name: "7th Period (Final Class before the Break!! Have an amazing Holiday Break!)", time: ["13:53", "14:40"] },
      { name: "SCHOOLS OUT!!! HAVE AN AMAZING HOLIDAY BREAK!! -- Aaron", time: ["14:40", "15:00"] }
    ];
  }
};
