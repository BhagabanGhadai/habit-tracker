import './App.css';
import { Container, Typography } from '@mui/material';
import AddHabitForm from './components/addHabbitForm';
import HabbitList from './components/habbitList';
import Box from '@mui/material/Box';
import { useAppSelector } from './Hooks/index'; // Import the custom selector hook

function App() {
  // Fetch the habits from the state
  const habits = useAppSelector((state) => state.habit.habits);

  return (
    <>
      <Container fixed>
        {/* Header Section */}
        <Box
          sx={{
            bgcolor: '#f0f4f8',
            padding: '40px 20px',
            marginTop: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              sx={{
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Habit Tracker
            </Typography>
          </Container>
          {/* Form Section */}
          <AddHabitForm />
        </Box>

        {/* Conditionally render HabbitList if habits are available */}
        {habits.length > 0 && (
          <Box
            sx={{
              bgcolor: '#ffffff',
              padding: '10px',
              marginTop: '10px',
              borderRadius: '4px',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <HabbitList />
          </Box>
        )}
      </Container>
    </>
  );
}

export default App;
