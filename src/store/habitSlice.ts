import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
    id:string;
    name:string;
    frequency:"daily" | "weekly" | "monthly";
    habitType:"good" | "bad";
    isDone:boolean;
    completeddates:string[];
    createdAt:string;
}
export interface HabitState {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [],
}
export const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action:PayloadAction<Habit>) => {
            state.habits.push(action.payload);
        },
        removeHabit: (state,action:PayloadAction<{id:string}>) => {
            const habitIndex=state.habits.findIndex((h)=>h.id===action.payload.id)
            if(habitIndex>-1){
                state.habits.splice(habitIndex,1)
            }
        },
        toogleHabits: (state,action:PayloadAction<{id:string;date:string,isDone:boolean}>) => {
            const habits=state.habits.find((h)=>h.id===action.payload.id)
            if(habits){
                habits.isDone=action.payload.isDone
                habits.completeddates.push(action.payload.date)
            }
        },
    },
});

export const { addHabit, removeHabit, toogleHabits } = habitSlice.actions;
export default habitSlice.reducer;