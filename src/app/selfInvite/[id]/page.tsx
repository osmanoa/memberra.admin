"use client";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getVenues, inviteUser } from "@/lib/api";

const SelfInvitePage = () => {
  const { id } = useParams();
  console.log("ID:", id);
  const [countryCode, setCountryCode] = useState("+1");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [touched, setTouched] = useState({
    fullName: false,
    phoneNumber: false,
    email: false,
  });
  const [venue, setVenue] = useState<any>(null);

  const handleCountryCodeChange = (event: any) => {
    setCountryCode(event.target.value);
  };

  const validateInputs = () => {
    let isValid = true;
    setFullNameError("");
    setPhoneNumberError("");
    setEmailError("");

    const nameRegex = /^(?=.*\b\w{2,}\b)(?=.*\b\w{2,}\b).{4,}$/; // At least two words, each with at least two letters
    const phoneRegex = /^[0-9]{6,10}$/; // Digits only, between 6 and 10 digits
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format

    const fullNameWords = fullName.trim().split(/\s+/); // Split by whitespace
    if (
      touched.fullName &&
      (fullNameWords.length < 2 ||
        !fullNameWords.every((word) => word.length >= 2))
    ) {
      setFullNameError(
        "Full name must contain at least two words, each with at least two letters."
      );
      isValid = false;
    }

    const phoneNumberWithoutCountryCode = phoneNumber.replace(
      /^\+?\d{1,3}/,
      ""
    ); // Remove country code
    if (
      touched.phoneNumber &&
      !phoneRegex.test(phoneNumberWithoutCountryCode)
    ) {
      setPhoneNumberError("Phone number must contain between 6 and 10 digits.");
      isValid = false;
    }

    if (touched.email && !emailRegex.test(email)) {
      setEmailError("Email format is invalid.");
      isValid = false;
    }

    return isValid;
  };

  useEffect(() => {
    setIsFormValid(validateInputs()); // Update form validity based on input validation
  }, [fullName, phoneNumber, email, touched]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const venues = await getVenues();
        const foundVenue = venues.find(
          (venue: any) => venue.venueId === id || venue._id === id
        );
        if (foundVenue) {
          setVenue(foundVenue);
        }
        console.log("Fetched venues:", venues);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchVenues();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setTouched({ fullName: true, phoneNumber: true, email: true });
    console.log("Venue:", venue);
    if (validateInputs()) {
      try {
        const inviteData = {
          fullName,
          phoneNumber,
          email,
          venueId: venue?.venueId,
          venueName: venue?.venueName,
          venueLogo: venue?.venueLogo,
        };
        console.log("Invite data:", inviteData);
        const response = await inviteUser(inviteData);
        console.log("User invited successfully:", response);
      } catch (error) {
        console.error("Error inviting user:", error);
      }
    } else {
      console.error("Validation failed. Please check your inputs.");
    }
  };

  const countries = [
    { name: "United States", flag: "🇺🇸", dial_code: "+1" },
    { name: "Turkey", flag: "🇹🇷", dial_code: "+90" },
    { name: "France", flag: "🇫🇷", dial_code: "+33" },
    { name: "Netherlands", flag: "🇳🇱", dial_code: "+31" },
    { name: "Germany", flag: "🇩🇪", dial_code: "+49" },
    { name: "Italy", flag: "🇮🇹", dial_code: "+39" },
    { name: "Spain", flag: "🇪🇸", dial_code: "+34" },
    { name: "United Kingdom", flag: "🇬🇧", dial_code: "+44" },
    { name: "Belgium", flag: "🇧🇪", dial_code: "+32" },
    { name: "Sweden", flag: "🇸🇪", dial_code: "+46" },
    { name: "Denmark", flag: "🇩🇰", dial_code: "+45" },
    { name: "Norway", flag: "🇳🇴", dial_code: "+47" },
    { name: "Finland", flag: "🇫🇮", dial_code: "+358" },
    { name: "Ireland", flag: "🇮🇪", dial_code: "+353" },
    { name: "Portugal", flag: "🇵🇹", dial_code: "+351" },
    { name: "Greece", flag: "🇬🇷", dial_code: "+30" },
    { name: "Austria", flag: "🇦🇹", dial_code: "+43" },
    { name: "Switzerland", flag: "🇨🇭", dial_code: "+41" },
    { name: "Poland", flag: "🇵🇱", dial_code: "+48" },
    { name: "Czech Republic", flag: "🇨🇿", dial_code: "+420" },
    { name: "Hungary", flag: "🇭🇺", dial_code: "+36" },
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
          component="form"
          onSubmit={handleSubmit}
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
              error={!!fullNameError}
              helperText={touched.fullName ? fullNameError : ""}
              sx={{ backgroundColor: "#0B1739", borderRadius: "4px" }}
              inputProps={{
                style: { color: "#FFFFFF" },
                pattern: "[A-Za-z ]*", // Restrict input to letters and spaces
                onKeyPress: (event) => {
                  if (!/[A-Za-z ]/.test(event.key)) {
                    event.preventDefault(); // Prevent non-letter input
                  }
                },
                onChange: (e: any) => setFullName(e.target.value),
                onBlur: () =>
                  setTouched((prev) => ({ ...prev, fullName: true })),
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
            <FormControl sx={{ width: "150px" }}>
              <Select
                value={countryCode}
                onChange={handleCountryCodeChange}
                sx={{ backgroundColor: "#0B1739", color: "#FFFFFF" }}
              >
                {countries.map((country) => (
                  <MenuItem
                    key={country.dial_code}
                    value={country.dial_code}
                    sx={{
                      backgroundColor: "#081028", // Default background color
                      color: "#FFFFFF", // Text color
                      "&:hover": {
                        backgroundColor: "#AEB9E1", // Change background color on hover
                      },
                    }}
                  >
                    <span
                      style={{
                        marginRight: "10px",
                        backgroundColor: "#0B1739",
                      }}
                    >
                      {country.flag}
                    </span>
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
              error={!!phoneNumberError}
              helperText={touched.phoneNumber ? phoneNumberError : ""}
              sx={{ backgroundColor: "#0B1739", borderRadius: "4px" }}
              inputProps={{
                style: { color: "#FFFFFF" },
                pattern: "[0-9]*", // Restrict input to digits
                onKeyPress: (event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault(); // Prevent non-numeric input
                  }
                },
                onChange: (e: any) => setPhoneNumber(e.target.value),
                onBlur: () =>
                  setTouched((prev) => ({ ...prev, phoneNumber: true })),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              error={!!emailError}
              helperText={touched.email ? emailError : ""}
              sx={{ backgroundColor: "#0B1739", borderRadius: "4px" }}
              inputProps={{
                style: { color: "#FFFFFF" },
                onChange: (e: any) => setEmail(e.target.value),
                onBlur: () => setTouched((prev) => ({ ...prev, email: true })),
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isFormValid}
              sx={{
                width: "40%",
                mt: 3,
                height: "50px",
                fontSize: "16px",
                fontWeight: "semibold",
                backgroundColor: !isFormValid ? "red" : "primary.main",
                color: !isFormValid ? "blue" : "white",
                "&.Mui-disabled": {
                  backgroundColor: "grey.300", // Disabled background color from theme
                  color: "grey.500", // Disabled text color from theme
                },
              }}
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
