"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Box, Grid, TextField, Typography, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";

const SelfInvitePage = () => {
  const params = useParams();
  const [countryCode, setCountryCode] = useState("+1");

  const handleCountryCodeChange = (event:any) => {
    setCountryCode(event.target.value);
  };

  const countries = [
    { name: 'United States', flag: '🇺🇸', dial_code: '+1' },
    { name: 'Turkey', flag: '🇹🇷', dial_code: '+90' },
    { name: 'France', flag: '🇫🇷', dial_code: '+33' },
    { name: 'Netherlands', flag: '🇳🇱', dial_code: '+31' },
    { name: 'Germany', flag: '🇩🇪', dial_code: '+49' },
    { name: 'Italy', flag: '🇮🇹', dial_code: '+39' },
    { name: 'Spain', flag: '🇪🇸', dial_code: '+34' },
    { name: 'United Kingdom', flag: '🇬🇧', dial_code: '+44' },
    { name: 'Belgium', flag: '🇧🇪', dial_code: '+32' },
    { name: 'Sweden', flag: '🇸🇪', dial_code: '+46' },
    { name: 'Denmark', flag: '🇩🇰', dial_code: '+45' },
    { name: 'Norway', flag: '🇳🇴', dial_code: '+47' },
    { name: 'Finland', flag: '🇫🇮', dial_code: '+358' },
    { name: 'Ireland', flag: '🇮🇪', dial_code: '+353' },
    { name: 'Portugal', flag: '🇵🇹', dial_code: '+351' },
    { name: 'Greece', flag: '🇬🇷', dial_code: '+30' },
    { name: 'Austria', flag: '🇦🇹', dial_code: '+43' },
    { name: 'Switzerland', flag: '🇨🇭', dial_code: '+41' },
    { name: 'Poland', flag: '🇵🇱', dial_code: '+48' },
    { name: 'Czech Republic', flag: '🇨🇿', dial_code: '+420' },
    { name: 'Hungary', flag: '🇭🇺', dial_code: '+36' },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "#040A1E",
      }}
    >
      <DashboardCard
        title="Self Invite"
        // subtitle="this is Self Invite"
        bgColor="#081028"
        showTitles={false}
      >
        <Grid
          container
          spacing={4}
          justifyContent={"center"}
          alignItems={"center"}
          paddingRight={6}
          paddingLeft={6}
          paddingTop={4}
          paddingBottom={4}
          sx={{ maxWidth: "600px" }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mb: 4,
            }}
          >
            <img src="/images/logos/m-logo.svg" alt="Logo" width={"50%"} />
            <Typography
              variant="body1"
              fontStyle={"italic"}
              sx={{ color: "#FFFFFF", mt: 2 }}
            >
              Membership Innovation
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              sx={{ backgroundColor: "#0B1739", borderRadius: "4px" }}
              inputProps={{ 
                style: { color: "#FFFFFF" },
                pattern: "[A-Za-z ]*", // Restrict input to letters and spaces
                onKeyPress: (event) => {
                  if (!/[A-Za-z ]/.test(event.key)) {
                    event.preventDefault(); // Prevent non-letter input
                  }
                }
              }} 
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
            <FormControl sx={{ width: '120px' }}>
              <Select 
                value={countryCode}
                onChange={handleCountryCodeChange}
                sx={{ backgroundColor: "#0B1739", color: "#FFFFFF" }}
              >
                {countries.map((country) => (
                  <MenuItem key={country.dial_code} value={country.dial_code} sx={{ backgroundColor: "#081028", color: "#FFFFFF" }}>
                    <span style={{ marginRight: '10px', backgroundColor: "#0B1739" }}>{country.flag}</span>
                    {country.dial_code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              type="tel"
              sx={{ backgroundColor: "#0B1739", borderRadius: "4px" }}
              inputProps={{ 
                style: { color: "#FFFFFF" },
                pattern: "[0-9]*", // Restrict input to digits
                onKeyPress: (event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault(); // Prevent non-numeric input
                  }
                }
              }} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              sx={{ backgroundColor: "#0B1739", borderRadius: "4px" }}
              inputProps={{ style: { color: "#FFFFFF" } }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "40%", mt: 3, height: "50px", fontSize: "16px", fontWeight: "semibold" }} // Full width and margin top
            >
              Request Invitation
            </Button>
          </Grid>
        </Grid>
      </DashboardCard>
    </Box>
  );
};

export default SelfInvitePage;
