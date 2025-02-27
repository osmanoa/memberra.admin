"use client";
import {
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  Box,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { SlMagnifier } from "react-icons/sl";
import { HiUsers } from "react-icons/hi2";
import { FaUser, FaHeart } from "react-icons/fa";
import { PiDotsThreeCircleFill } from "react-icons/pi";


// New Navbar component
const Navbar = () => {
  return (
    <Grid container alignItems="center" spacing={2} mb={2}>
      <Grid item xs={8} container alignItems="center" spacing={5}>
        <Grid item>
          <Typography variant="h3" color="#FFFFFF">
            Memberras
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField
            variant="outlined"
            placeholder="Search for..."
            size="small"
            fullWidth
            sx={{
              backgroundColor: "#0B1739",
              borderRadius: "4px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ marginLeft: "5px" }}>
                  <SlMagnifier color="#AEB9E1" />
                </InputAdornment>
              ),
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#282F43",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#282F43",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#282F43",
                },
                "& input": {
                  color: "#AEB9E1",
                },
                "& input::placeholder": {
                  color: "#AEB9E1",
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
            background: "linear-gradient(90deg, #A500B5, #00C6FF)", // Gradient colors for Import Contacts
            color: "#FFFFFF", // Text color
            fontSize: "0.875rem", // Smaller font size
            fontWeight: 550, // Semi-bold text
            "&:hover": {
              background: "linear-gradient(90deg, #A500B5, #00C6FF)", // Maintain gradient on hover
            },
          }}
        >
          Import Contacts
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #FFB300, #FF6F00)", // Gradient colors for Invite New Memberra
            color: "#FFFFFF", // Text color
            fontSize: "0.875rem", // Smaller font size
            fontWeight: 550, // Semi-bold text
            ml: 4, // Margin left for spacing
            "&:hover": {
              background: "linear-gradient(90deg, #FFB300, #FF6F00)", // Maintain gradient on hover
            },
          }}
        >
          Invite New Memberra
        </Button>
      </Grid>
    </Grid>
  );
};

const MemberStatsRow = () => {
  const memberStats = [
    { title: "All Memberras", count: 250, icon: <HiUsers size={24} color="#34B9B9" />, wrapperColor: "#133753" },
    { title: "New Memberras", count: 15, icon: <FaUser size={24} color="#FACC2F" />, wrapperColor: "#3B3B37" },
    { title: "Top Memberras", count: 200, icon: <FaHeart size={24} color="#D4324F" />, wrapperColor: "#331C3D" },
    { title: "Other Memberras", count: 35, icon: <PiDotsThreeCircleFill size={24} color="#9534A6" />, wrapperColor: "#271D4F" },
  ];

  return (
    <Grid container mb={2} gap={4} wrap="nowrap" maxWidth={"100%"}>
      {memberStats.map((stat, index) => (
        <Grid
          item
          xs={3}
          container
          direction="column"
          alignItems="center"
          sx={{
            border: "1px solid #282F43",
            backgroundColor: "#081028",
            borderRadius: "12px",
            padding: "16px",
            justifyContent: "center",
          }}
          key={index}
        >
          <Grid container alignItems="center" gap={3} padding={2} justifyContent="center" height="80px" >
              <Box
                sx={{
                  borderRadius: "50%",
                  padding: "10px", // Added padding for spacing around the icon
                  display: "flex",
                  width: "50px",
                  height: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: stat.wrapperColor,
                }}
              >
                {stat.icon}
              </Box>
            <Grid item>
              <Typography fontSize={14}  color="#F2F2F2">
                {stat.title}
              </Typography>
              <Typography variant="body1" color="#AEB9E1" sx={{ mt: 1 }}> {/* Added margin-top for spacing */}
                {stat.count}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
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
          <MemberStatsRow />
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
