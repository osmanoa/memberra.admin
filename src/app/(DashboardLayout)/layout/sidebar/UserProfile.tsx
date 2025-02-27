import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import Link from "next/link";

const UserProfile = () => {
  return (
    <Box sx={{ m: 2, p: 1, bgcolor: "background.paper", borderRadius: "8px" }}>
      <Grid container alignItems="center">
        <Grid item>
          <Avatar
            alt="User Name"
            src="/path/to/avatar.jpg"
            sx={{ width: 50, height: 50 }}
          />
        </Grid>
        <Grid item xs sx={{ ml: 1 }}>
          <Typography variant="body1" sx={{ ml: 1, fontSize: "0.875rem" }}>
            John Carter
          </Typography>
          <Button
            component={Link}
            href="/account-settings"
            variant="text"
            sx={{ fontSize: "0.75rem" }}
          >
            Account Settings
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
