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
        { name: "Lunch", time: ["10:00", "10:30"] },
        { name: "4th Period", time: ["10:36", "11:36"] },
        { name: "5th Period", time: ["11:42", "12:48"] }
      ],
      B: [
        { name: "4th Period", time: ["10:06", "11:06"] },
        { name: "Lunch", time: ["11:06", "11:36"] },
        { name: "5th Period", time: ["11:42", "12:48"] }
      ],
      C: [
        { name: "4th Period", time: ["10:06", "11:06"] },
        { name: "5th Period", time: ["11:12", "11:42"] },
        { name: "Lunch", time: ["11:42", "12:12"] },
        { name: "5th Period", time: ["12:18", "12:48"]}
      ],
      D: [
        { name: "4th Period", time: ["10:06", "11:06"] },
        { name: "5th Period", time: ["11:12", "12:18"] },
        { name: "Lunch", time: ["12:18", "12:48"] }
      ]
    };

    return [
      { name: "1st Period", time: ["07:15", "08:05"] },
      { name: "2nd Period", time: ["08:11", "09:04"] },
      { name: "3rd Period", time: ["09:10", "10:00"] },
      ...lunches[l],
      { name: "6th Period", time: ["12:54", "13:19"] },
      { name: "7th Period", time: ["13:25", "14:40"] }
    ];
  }
};
