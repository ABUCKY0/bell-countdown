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
        { name: "Lunch", time: ["", ""] },
        { name: "4th Period", time: ["", ""] },
        { name: "5th Period", time: ["", ""] }
      ],
      B: [
        { name: "4th Period", time: ["", ""] },
        { name: "Lunch", time: ["", ""] },
        { name: "5th Period", time: ["", ""] }
      ],
      C: [
        { name: "4th Period", time: ["", ""] },
        { name: "5th Period", time: ["", ""] },
        { name: "Lunch", time: ["", ""] },
        { name: "5th Period", time: ["", ""]}
      ],
      D: [
        { name: "4th Period", time: ["", ""] },
        { name: "5th Period", time: ["", ""] },
        { name: "Lunch", time: ["", ""] }
      ]
    };

    return [
      { name: "1st Period", time: ["", ""] },
      { name: "2nd Period", time: ["", ""] },
      { name: "3rd Period", time: ["", ""] },
      ...lunches[l],
      { name: "6th Period", time: ["", ""] },
      { name: "7th Period", time: ["", ""] }
    ];
  }
};
