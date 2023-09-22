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
          { name: "Lunch", time: ["11:00", "11:30"] },
          { name: "4th Period", time: ["11:36", "12:06"] },
          { name: "5th Period", time: ["12:12", "13:18"] }
        ],
        B: [
          { name: "4th Period", time: ["11:06", "11:36"] },
          { name: "Lunch", time: ["11:36", "12::06"] },
          { name: "5th Period", time: ["12:12", "13:18"] }
        ],
        C: [
          { name: "4th Period", time: ["11:06", "11:36"] },
          { name: "5th Period (Part 1)", time: ["11:42", "12:12"] },
          { name: "Lunch", time: ["12:12", "12:42"] },
          { name: "5th Period (Part 2)", time: ["12:48", "13:18"]}
        ],
        D: [
          { name: "4th Period", time: ["11:06", "11:36"] },
          { name: "5th Period", time: ["11:42", "12:48"] },
          { name: "Lunch", time: ["12:48", "13:18"] }
        ]
      };
  
      return [
        { name: "1st Period", time: ["07:15", "08:26"] },
        { name: "2nd Period", time: ["08:32", "09:43"] },
        { name: "3rd Period", time: ["09:49", "11:00"] },
        ...lunches[l],
        { name: "6th Period", time: ["13:24", "14:00"] },
        { name: "7th Period", time: ["14:06", "14:40"] }
      ];
    }
  };
  