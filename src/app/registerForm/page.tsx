"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  Button,
  Modal
} from "@mui/material";

import Verifier from "../(DashboardLayout)/components/register/Verifier";

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [verified, setVerified] = useState(false); // Doğrulama durumu
  const [isLoading, setIsLoading] = useState(false); // Loading durumu
  const [inviteCode, setInviteCode] = useState(""); // Store inviteCode
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false); // Success modal
  type Field = {
    label: string;
    key: string;
    type: string;
    options?: string[];
  };
  
  type Step = {
    title: string;
    description?: string;
    fields: Field[];
  };
  
  
  const steps: Step[] = [
    {
      title: "Welcome to Better Than Before (BTB)!",
      description: `
        Your journey toward transformation has led you here, and we’re honored to support you. 
        This form is the first step in creating an experience that aligns with your goals and helps you move closer to the life you desire.
  
        Tips for Completing This Form:
        Please read each section carefully and answer honestly. This information will allow us to create a safe, supportive, and tailored experience for you. 
        Set aside 15-30 minutes in a quiet space to complete this form. Fields marked with an asterisk (*) are required to proceed.
        `,
      fields: [],
    },
    {
      title: "Personal Information",
      fields: [
        { label: "First Name", key: "firstName", type: "text" },
        { label: "Last Name", key: "lastName", type: "text" },
        {
          label: "Preferred Name or Nickname?",
          key: "preferredName",
          type: "radioWithText",
          options: ["Yes", "No"],
        },
        { label: "Birth Date", key: "birthDate", type: "date" },
        {
          label: "Gender",
          key: "gender",
          type: "radio",
          options: ["Male", "Female", "Other"],
        },
        { label: "Height (cm)", key: "height", type: "number" },
        { label: "Weight (kg)", key: "weight", type: "number" },
        { label: "Contact Number", key: "contactNumber", type: "text" },
        {
          label: "Email Address (example@example.com)",
          key: "email",
          type: "email",
        },
        {
          label: "Occupation/Field of Expertise",
          key: "occupation",
          type: "text",
        },
        {
          label: "Marital Status",
          key: "maritalStatus",
          type: "radio",
          options: ["Single", "Married", "Divorced", "Widowed"],
        },
        {
          label: "Number of Children",
          key: "numberOfChildren",
          type: "number",
        },
        {
          label: "Current Living Situation",
          key: "livingSituation",
          type: "text",
        },
        {
          label: "Time Zone",
          key: "timeZone",
          type: "select",
          options: ["Pacific", "Mountain", "Central", "Eastern", "Other"],
        },
        {
          label:
            "How did you hear about us, and who referred you to BTB? (Please list their name/names)",
          key: "referralSource",
          type: "text",
        },
        {
          label: "Spiritual, Religious, or Philosophical Beliefs",
          key: "beliefs",
          type: "text",
        },
      ],
    },
    {
      title: "Emergency Contact Information",
      fields: [
        { label: "Emergency Contact Name", key: "emergencyContactName", type: "text" },
        { label: "Emergency Contact Number", key: "emergencyContactNumber", type: "text" },
      ],
    },
    {
      title: "Health Questionnaire",
      fields: [
        {
          label: "Do you have a history of any of the following? (Check all that apply):",
          key: "healthConditions",
          type: "checkbox",
          options: [
            "Heart Disease",
            "High Blood Pressure",
            "Epilepsy or Seizures",
            "Diabetes",
            "Asthma",
            "Liver or Kidney Disease",
            "Cancer",
            "Other physical disease",
            "None",
          ],
        },
        {
          label: "Do you have a history of any of the following? (Check all that apply):",
          key: "mentalConditions",
          type: "checkbox",
          options: [
            "Brain Injury",
            "Anxiety",
            "Depression",
            "Bipolar Disorder",
            "PTSD",
            "Schizophrenia or Psychosis",
            "Suicide Attempts or Ideation",
            "Other mental health conditions",
            "None",
          ],
        },
        {
          label:
            "Has any immediate family member been diagnosed with schizophrenia, bipolar disorder, or psychosis within the last 5 years?",
          key: "familyMentalHealth",
          type: "radio",
          options: ["Yes", "No"],
        },
        {
          label: "Please list any medical conditions you are currently being treated for. (If none, type 'none'):",
          key: "currentMedicalConditions",
          type: "text",
        },
        {
          label: "What is your current exercise and health routine?",
          key: "exerciseRoutine",
          type: "text",
        },
      ],
    },
    {
      title: "Medications and Substances",
      fields: [
        {
          label: "Are you currently taking or planning to take any prescription medications?",
          key: "prescriptionMedications",
          type: "radio",
          options: ["Yes", "No"],
        },
        {
          label: "Please list all medications you are currently taking. (If none, type 'none'):",
          key: "currentMedications",
          type: "text",
        },
        {
          label: "List any over-the-counter supplements you are taking. (If none, type 'none'):",
          key: "supplements",
          type: "text",
        },
        {
          label:
            "List all substances used in the past, including frequency of use (e.g., alcohol, cannabis, recreational drugs, etc.). (If none, type 'none'):",
          key: "substances",
          type: "text",
        },
        {
          label: "Have you experienced any negative effects with these substances? (If none, type 'none'):",
          key: "negativeEffects",
          type: "text",
        },
        {
          label: "Have you ever been treated for substance abuse or addiction?",
          key: "substanceAbuseTreatment",
          type: "radio",
          options: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Allergies and Dietary Preferences",
      fields: [
        {
          label: "Do you have any food allergies?",
          key: "foodAllergies",
          type: "radioWithText",
          options: ["Yes", "No"],
        },
        {
          label: "Are you allergic to pets?",
          key: "petAllergies",
          type: "radio",
          options: ["Yes", "No"],
        },
        {
          label: "List any other allergies not mentioned above. (If none, type 'none'):",
          key: "otherAllergies",
          type: "text",
        },
      ],
    },
    {
      title: "Intentions and Goals",
      fields: [
        {
          label: "What are you hoping to gain from your BTB experience?",
          key: "hopingToGain",
          type: "text",
        },
        {
          label: "Please share your intentions for the retreat.",
          key: "retreatIntentions",
          type: "text",
        },
        {
          label: "How would you describe your relationships with family and friends?",
          key: "relationships",
          type: "text",
        },
        {
          label: "What challenges are you currently facing in life?",
          key: "challenges",
          type: "text",
        },
        {
          label: "What would you like to change or improve in your life?",
          key: "lifeImprovements",
          type: "text",
        },
        {
          label: "What mindfulness practices or rituals do you use for clarity and peace?",
          key: "mindfulnessPractices",
          type: "text",
        },
        {
          label: "What methods have you previously tried for personal growth or self-development?",
          key: "personalGrowthMethods",
          type: "text",
        },
        {
          label: "Do you have any concerns or questions about participating in this experience? (If none, type 'none'):",
          key: "concerns",
          type: "text",
        },
      ],
    },
    {
      title: "Final Step: Submit and Schedule",
      description: `
        Thank you for completing this registration form. Once submitted, you will be directed to schedule a call with us 
        to review your responses and finalize your registration. We look forward to supporting you on this transformative journey.
      `,
      fields: [],
    },
  ];
  
  const handleNext = () => {
    const currentStepData =
      steps[currentStep].fields.length > 0
        ? steps[currentStep].fields.reduce((acc: Record<string, any>, field: Field) => {
            acc[field.key] = formData[field.key] || "";
            return acc;
          }, {})
        : {};
  
    console.log("Current Step Form Data:", currentStepData);
  
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Final Form Data:", formData);
      handleSubmit();
    }
  };
  
  
  
  

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (key: string, value: string | string[]) => {
    setFormData({ ...formData, [key]: value });
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case "text":
        return (
          <TextField
            fullWidth
            label={field.label}
            variant="outlined"
            value={formData[field.key] || ""}
            onChange={(e) => handleChange(field.key, e.target.value)}
            sx={{ mb: 3 }}
          />
        );
      case "radio":
        return (
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel>{field.label}</FormLabel>
            <RadioGroup
              value={formData[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
            >
              {field.options.map((option: string) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
      case "checkbox":
        return (
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel>{field.label}</FormLabel>
            <FormGroup>
              {field.options.map((option: string) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={(formData[field.key] || []).includes(option)}
                      onChange={(e) =>
                        handleChange(field.key, e.target.checked ? [...(formData[field.key] || []), option] : (formData[field.key] || []).filter((o: string) => o !== option))
                      }
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </FormControl>
        );
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    console.log("Submitting Form Data:", formData);
  
    // Check if inviteCode is present
    if (!inviteCode) {
      console.error("Invite code is missing!");
      alert("Please verify your invite code before submitting the form."); // Optional user feedback
      return;
    }
  
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("inviteCode", inviteCode);
  
      Object.keys(formData).forEach((key) => {
        const value = formData[key];
        if (value !== undefined && value !== null) {
          formDataToSend.append(key, typeof value === "object" ? JSON.stringify(value) : value);
        }
      });
  
      const response = await fetch("https://backendaws.memberra.co/users/update-by-invite-code", {
        method: "PUT",
        body: formDataToSend,
      });
  
      if (response.ok) {
        console.log("Form submitted successfully");
        setIsSubmissionSuccess(true); // Show the success modal

      } else {
        console.error("Error submitting form:", await response.json());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  
  
  return (
    <>
    {!verified && (
        <Verifier
  onInviteVerified={(verified, inviteCode) => {
    if (verified && inviteCode) {
      console.log("Invite code verified:", inviteCode);
      setInviteCode(inviteCode); // Set the invite code
      setVerified(true); // Only set verified to true after setting the invite code
    } else {
      console.log("Invite code verification failed.");
    }

  }}
/>
      )}
      {verified && (

    <Box sx={{ backgroundColor: "#080A0C", minHeight: "100vh", padding: "20px" }}>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "30px",
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#080A0C" }}>
          {steps[currentStep].title}
        </Typography>
        {steps[currentStep].description && (
          <Typography variant="body1" paragraph sx={{ color: "#4A4A4A" }}>
            {steps[currentStep].description}
          </Typography>
        )}
        {steps[currentStep].fields.map((field) => renderField(field))}

        <Box display="flex" justifyContent="space-between" mt={3}>
          {currentStep > 0 && (
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#080A0C",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#333333" },
            }}
            onClick={handleNext}
          >
            {currentStep < steps.length - 1 ? "Next" : "Submit"}
          </Button>
        </Box>
      </Box>
    </Box>
    )}
      <Modal
     open={isSubmissionSuccess}
     onClose={() => setIsSubmissionSuccess(false)}
     aria-labelledby="success-modal-title"
     aria-describedby="success-modal-description"
   >
     <Box
       sx={{
         backgroundColor: "white",
         borderRadius: "15px",
         padding: "20px",
         maxWidth: "400px",
         margin: "100px auto",
         textAlign: "center",
         boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
       }}
     >
       <Typography
         id="success-modal-title"
         variant="h5"
         gutterBottom
         sx={{ fontWeight: "bold" }}
       >
         Thank You for Submission!
       </Typography>
       <Typography
         id="success-modal-description"
         sx={{ marginBottom: "20px" }}
       >
         Your form has been successfully submitted.
       </Typography>
       <Button
         variant="contained"
         color="primary"
         onClick={() => setIsSubmissionSuccess(false)}
       >
         Close
       </Button>
     </Box>
   </Modal>
    </>
   
  );
};

export default RegisterForm;
