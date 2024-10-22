import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import { useAppDispatch } from '../Hooks/index';
import { addHabit } from "../store/habitSlice";

const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">("daily")
    const [habitType, setHabitType] = useState<"good" | "bad">("good")
    const [isDone, setIsDone] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data={id:Date.now().toString(), name, frequency, habitType, isDone,completeddates:[],createdAt:new Date().toISOString()}
        // if(data.isDone ===true) data.completeddates:string=[new Date().toISOString()]
        dispatch(addHabit(data))
        setName("")
        setFrequency("daily")
        setHabitType("good")
        setIsDone(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    id="outlined-helperText"
                    label="Habit Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Habit Name"
                    fullWidth
                />
                <FormControl fullWidth>
                    <Select
                        value={habitType}
                        onChange={(e) => setHabitType(e.target.value as "good" | "bad")}
                    >
                        <MenuItem value="good">good</MenuItem>
                        <MenuItem value="bad">bad</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel id="demo-row-radio-buttons-group-label">frequency</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value as "weekly" | "daily" | "monthly")}
                    >
                        <FormControlLabel value="daily" control={<Radio />} label="daily" />
                        <FormControlLabel value="weekly" control={<Radio />} label="weekly" />
                        <FormControlLabel value="monthly" control={<Radio />} label="monthly" />
                    </RadioGroup>
                </FormControl>
                <FormControl fullWidth>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={isDone} onChange={(e) => setIsDone(e.target.checked)} />} label="isDone" />
                    </FormGroup>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" >Add Habit</Button>
            </Box>
        </form>
    )
}

export default AddHabitForm 