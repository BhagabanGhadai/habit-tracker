import React from "react";
import { useAppDispatch, useAppSelector } from '../Hooks/index';
import { Box, Button, Paper, Grid, Typography, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { removeHabit, toogleHabits } from "../store/habitSlice";

const HabbitList: React.FC = () => {

    const habbits = useAppSelector((state) => state.habit.habits);
    const dispatch = useAppDispatch();

    return (
        <>
            {habbits.map((habbit) => {
                return (
                    <Paper key={habbit.id} elevation={3} sx={{ p: 3, my: 3, borderRadius: 3, backgroundColor: '#f5f5f5' }}>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#424242' }}>
                                    {habbit.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1,textTransform: 'capitalize' }}>
                                     {habbit.frequency}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                {habbit.habitType === "good" ? (
                                    <Chip label="Good Habit" color="success" sx={{ fontSize: '0.85rem' }} />
                                ) : (
                                    <Chip label="Bad Habit" color="error" sx={{ fontSize: '0.85rem' }} />
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                    Created On: {new Date(habbit.createdAt).toDateString()}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, gap: 2 }}>
                                    <Button
                                        variant="outlined"
                                        color="success"
                                        startIcon={<CheckCircleIcon />}
                                        onClick={() => dispatch(toogleHabits({ id: habbit.id, date: new Date().toISOString(), isDone: true }))}
                                        sx={{ minWidth: '150px' }}
                                    >
                                        {habbit.isDone ? "Mark as Not Done" : "Mark as Done"}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => dispatch(removeHabit({ id: habbit.id }))}
                                        sx={{ minWidth: '150px' }}
                                    >
                                        Remove
                                    </Button>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <Chip
                                    label={habbit.isDone ? "Completed" : "Not Completed"}
                                    color={habbit.isDone ? "success" : "primary"}
                                    sx={{ fontSize: '0.85rem', borderRadius: 2 }}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                );
            })}
        </>
    );
};

export default HabbitList;
