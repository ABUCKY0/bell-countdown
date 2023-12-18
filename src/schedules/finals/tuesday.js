export default {
  title: "Finals Week - Second and Seventh Period Finals",
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
        { name: "Lunch", time: ["10:19", "10:49"] },
        { name: "4th Period", time: ["10:55", "12:00"] },
        { name: "5th Period", time: ["12:06", "13:12"] }
      ],
      B: [
        { name: "4th Period", time: ["10:25", "11:30"] },
        { name: "Lunch", time: ["11:30", "12:00"] },
        { name: "5th Period", time: ["12:06", "13:12"] }
      ],
      C: [
        { name: "4th Period", time: ["10:25", "11:30"] },
        { name: "5th Period", time: ["11:36", "12:42"] },
        { name: "Lunch (Shared with D Lunch)", time: ["12:42", "13:12"] }
      ],
      D: [
        { name: "4th Period", time: ["10:25", "11:30"] },
        { name: "5th Period", time: ["11:36", "12:42"] },
        { name: "Lunch (Shared With C Lunch)", time: ["12:42", "13:12"] }
      ]
    };

    return [
      { name: "Second Period Exam", time: ["07:15", "08:45"] },
      { name: "Seventh Period Exam", time: ["08:51", "10:19"] },
      ...lunches[l],
      { name: "3rd Period", time: ["13:18", "14:40"] }
    ];
  }
};
