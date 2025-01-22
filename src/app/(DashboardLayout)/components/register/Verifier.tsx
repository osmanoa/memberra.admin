"use client";

import React, { useState, useEffect } from "react";
import {
   Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
 import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box"; // Ayrıca Box da gerekiyor
import { SelectChangeEvent } from "@mui/material";





const countries = [
  { name: "United States", flag: "🇺🇸", dial_code: "+1" },
  { name: "Turkey", flag: "🇹🇷", dial_code: "+90" },
  { name: "France", flag: "🇫🇷", dial_code: "+33" },
  { name: "Netherlands", flag: "🇳🇱", dial_code: "+31" },
  { name: "Germany", flag: "🇩🇪", dial_code: "+49" },
];

const Verifier = ({
  onInviteVerified,
}: {
  onInviteVerified: (verified: boolean, inviteCode?: string) => void;
}) => {
   const [phoneNumber, setPhoneNumber] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [fetchedInviteCode, setFetchedInviteCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (event: SelectChangeEvent) => {
    const selected = countries.find((c) => c.dial_code === event.target.value);
    if (selected) setSelectedCountry(selected); // Bu satır artık çalışır
  };
  
  useEffect(() => {
    if (step === 2) {
      // Telefon numarası doğrulandı, inviteCode'u API'den çek
      const fetchInviteCode = async () => {
        try {
          const fullPhoneNumber =
            (selectedCountry?.dial_code || "") + phoneNumber.replace(/\s/g, "");
          const response = await fetch(
            `https://backendaws.memberra.co/fetch-invited-user?phoneNumber=${encodeURIComponent(
              fullPhoneNumber
            )}`
          );
          const data = await response.json();
  
          if (response.ok) {
            setFetchedInviteCode(data.inviteCode);
            console.log("Fetched Invite Code:", data.inviteCode); // Konsola yazdırma
          } else {
            setErrorMessage(
              "Failed to fetch invite code for the provided phone number."
            );
          }
        } catch (error) {
          console.error("Error fetching invite code:", error); // Hata loglama
          setErrorMessage("Error fetching invite code. Please try again.");
        }
      };
  
      fetchInviteCode();
    }
  }, [step, phoneNumber, selectedCountry]);
  
  

  const handlePhoneSubmit = () => {
    if (phoneNumber.length > 0 && selectedCountry?.dial_code) {
      setStep(2); // Telefon numarası geçerli, Invite Code ekranına geç
    } else {
      setErrorMessage("Please select a country and enter a valid phone number.");
    }
  };

  const handleInviteSubmit = () => {
    if (inviteCode === fetchedInviteCode) {
      onInviteVerified(true, inviteCode); // Invite code doğrulandı
    } else {
      setErrorMessage("The invite code you entered is incorrect.");
    }
  };

  return (
<Modal open={true} onClose={() => {}} aria-labelledby="modal-title">
<Box
        sx={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "30px",
          maxWidth: "400px",
          margin: "100px auto",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        {step === 1 && (
          <>
            <Typography variant="h5" id="modal-title" sx={{ mb: 3, fontWeight: "bold" }}>
              Verify Your Phone Number
            </Typography>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Country</InputLabel>
              <Select
  value={selectedCountry.dial_code}
  onChange={handleCountryChange}
  label="Country"
>
  {countries.map((country) => (
    <MenuItem key={country.dial_code} value={country.dial_code}>
      {`${country.flag} ${country.name} (${country.dial_code})`}
    </MenuItem>
  ))}
</Select>

            </FormControl>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{ mb: 3 }}
            />
            {errorMessage && (
              <Typography color="error" sx={{ mb: 3 }}>
                {errorMessage}
              </Typography>
            )}
            <Button variant="contained" color="primary" fullWidth onClick={handlePhoneSubmit}>
              Next
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <Typography variant="h5" id="modal-title" sx={{ mb: 3, fontWeight: "bold" }}>
              Enter Your Invite Code
            </Typography>
            <TextField
              fullWidth
              label="Invite Code"
              variant="outlined"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              sx={{ mb: 3 }}
            />
            {errorMessage && (
              <Typography color="error" sx={{ mb: 3 }}>
                {errorMessage}
              </Typography>
            )}
            <Button variant="contained" color="primary" fullWidth onClick={handleInviteSubmit}>
              Submit
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default Verifier;