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
        { name: "Lunch", time: ["10:01", "10:31"] },
        { name: "4th Period", time: ["10:37", "11:25"] },
        { name: "5th Period", time: ["11:31", "13:03"] }
      ],
      B: [
        { name: "4th Period", time: ["10:07", "10:55"] },
        { name: "Lunch", time: ["10:55", "11:25"] },
        { name: "5th Period", time: ["11:31", "13:03"] }
      ],
      C: [
        { name: "4th Period", time: ["10:07", "10:55"] },
        { name: "5th Period", time: ["11:01", "11:57"] },
        { name: "Lunch", time: ["11:57", "12:27"] },
        { name: "5th Period", time: ["12:33", "13:03"]}
      ],
      D: [
        { name: "4th Period", time: ["10:07", "10:55"] },
        { name: "5th Period", time: ["11:01", "11:57"] },
        { name: "Lunch", time: ["11:57", "12:27"] },
        { name: "5th Period", time: ["12:33", "13:03"]}
      ],
      SAT: [
        { name: "Lunch", time: ["12:33", "13:03"] }
      ]
    };

    return [
      { name: "1st Period", time: ["07:15", "08:06"] },
      { name: "2nd Period", time: ["08:12", "09:07"] },
      { name: "3rd Period", time: ["09:13", "10:01"] },
      ...lunches[l],
      { name: "6th Period", time: ["13:09", "13:51"] },
      { name: "7th Period", time: ["13:57", "14:40"] }
    ];
  }
};
