import { createSlice } from '@reduxjs/toolkit';

// Create the habit slice

export const updateHabitSlice = createSlice({
  name: 'updateHabit',
  // The initial state of the habit slice which contains the  three habits by default.
  initialState: [
    {
      title:"Exercise",
    description:"Daily Exercise for 30 minutes",
    id:1,
    day:[
    {day:"Saturday",
    status:"done"},
    {day: "Sunday",
    status:"done"},
    {day: "Monday",
    status:"done"},
    {day: "Tuesday",
    status:"none"},
    {day: "Wednesday",
    status:"not-done"},
    {day: "Thrusday",
    status:"not-done"},
    ]
    },
    {
      title:"Swim",
    description:"Daily Swim for 30 minutes",
    id:2,
    day:[
    {day:"Saturday",
    status:"none"},
    {day: "Sunday",
    status:"done"},
    {day: "Monday",
    status:"none"},
    {day: "Tuesday",
    status:"done"},
    {day: "Wednesday",
    status:"done"},
    {day: "Thrusday",
    status:"not-done"},
    ]
    },
    {
      title:"Wakeup Early",
    description:"Wakeup at 6 AM Perday",
    id:3,
    day:[
    {day:"Saturday",
    status:"not-done"},
    {day: "Sunday",
    status:"none"},
    {day: "Monday",
    status:"none"},
    {day: "Tuesday",
    status:"none"},
    {day: "Wednesday",
    status:"not-done"},
    {day: "Thrusday",
    status:"none"},
    ]
    }
  ],
  reducers: {
    // The reducer function for the habit slice which take habit title, description and day array in hich day and status of that day.
    addHabit: (state, action) => {
      state.push(action.payload);
    },

    // The updatedaystatus function for the habit slice which take index and id and status for updating the particular day status of the habit.
    updateDayStatus: (state, action) => {
     state[action?.payload?.id -1 ].day[action?.payload?.index].status = action?.payload?.status;
    },

    // The addDay function for the habit slice which take index and id and status for adding the day to the habit if the length of the habit is 7 its shift the array and push the new day to the array.
    addDay: (state, action) => {
      state.map((habit) => {
        if(habit.day.length === 7){
          habit.day.shift();
          habit.day.push({
            status: action?.payload?.status,
            day: action?.payload?.day,
          });
        }
        else{
          habit.day.push({
            status: action?.payload?.status,
            day: action?.payload?.day,
          });
        }
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const {  addHabit, updateDayStatus, addDay } = updateHabitSlice.actions

export default updateHabitSlice.reducer