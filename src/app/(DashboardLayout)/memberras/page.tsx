'use client';
import { Typography, TextField, Button, Grid, InputAdornment } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { SlMagnifier } from "react-icons/sl";


// New Navbar component
const Navbar = () => {
  return (
    <Grid container alignItems="center" spacing={2} mb={2}>
      <Grid item xs={8} container alignItems="center" spacing={5}>
        <Grid item>
          <Typography variant="h3" color="#FFFFFF">Memberras</Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField
            variant="outlined"
            placeholder="Search for..."
            size="small"
            fullWidth
            sx={{ 
              backgroundColor: '#0B1739',
              borderRadius: '4px',
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ marginLeft: '5px' }}>
                  <SlMagnifier color="#AEB9E1" />
                </InputAdornment>
              ),
              sx: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#282F43',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#282F43',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#282F43',
                },
                '& input': {
                  color: '#AEB9E1',
                },
                '& input::placeholder': {
                  color: '#AEB9E1',
                  opacity: 1,
                },
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={4} container justifyContent="flex-end" alignItems="center">
        <Button 
          variant="contained" 
          sx={{ 
            background: 'linear-gradient(90deg, #A500B5, #00C6FF)', // Gradient colors for Import Contacts
            color: '#FFFFFF', // Text color
            fontSize: '0.875rem', // Smaller font size
            fontWeight: 550, // Semi-bold text
            '&:hover': {
              background: 'linear-gradient(90deg, #A500B5, #00C6FF)', // Maintain gradient on hover
            },
          }}
        >
          Import Contacts
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            background: 'linear-gradient(90deg, #FFB300, #FF6F00)', // Gradient colors for Invite New Memberra
            color: '#FFFFFF', // Text color
            fontSize: '0.875rem', // Smaller font size
            fontWeight: 550, // Semi-bold text
            ml: 4, // Margin left for spacing
            '&:hover': {
              background: 'linear-gradient(90deg, #FFB300, #FF6F00)', // Maintain gradient on hover
            },
          }}
        >
          Invite New Memberra
        </Button>
      </Grid>
    </Grid>
  );
};

const Memberras = () => {
  return (
    <PageContainer title="Memberras" description="this is Memberras">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <DashboardCard title="Memberras">
            <Typography>This is Memberras</Typography>
          </DashboardCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Memberras;