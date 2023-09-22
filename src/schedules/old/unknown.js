export default {
    title: "Unknown",
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
        { name: "Unknown Schedule Times -- SAT", time: ["07:15", "14:40"] }
      ];
    }
  };
  