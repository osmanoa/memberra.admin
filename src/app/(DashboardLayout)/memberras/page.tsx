"use client";
import {
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { SlMagnifier } from "react-icons/sl";
import { HiUsers } from "react-icons/hi2";
import { FaUser, FaHeart } from "react-icons/fa";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import React from "react";

const usersData = [
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    location: "United States",
    company: "Company A",
    status: "Online",
  },
  {
    name: "Jane Smith",
    phone: "(234) 567-8901",
    location: "Canada",
    company: "Company B",
    status: "Offline",
  },
  {
    name: "Alice Johnson",
    phone: "(345) 678-9012",
    location: "United Kingdom",
    company: "Company C",
    status: "Online",
  },
  {
    name: "Bob Brown",
    phone: "(456) 789-0123",
    location: "Australia",
    company: "Company D",
    status: "Online",
  },
  {
    name: "Charlie Davis",
    phone: "(567) 890-1234",
    location: "Germany",
    company: "Company E",
    status: "Offline",
  },
  {
    name: "Diana Evans",
    phone: "(678) 901-2345",
    location: "France",
    company: "Company F",
    status: "Online",
  },
  {
    name: "Ethan Foster",
    phone: "(789) 012-3456",
    location: "Italy",
    company: "Company G",
    status: "Offline",
  },
  {
    name: "Fiona Green",
    phone: "(890) 123-4567",
    location: "Spain",
    company: "Company H",
    status: "Online",
  },
  {
    name: "George Harris",
    phone: "(901) 234-5678",
    location: "Netherlands",
    company: "Company I",
    status: "Online",
  },
  {
    name: "Hannah Ivers",
    phone: "(012) 345-6789",
    location: "Sweden",
    company: "Company J",
    status: "Offline",
  },
  {
    name: "Oz Ivers",
    phone: "(012) 345-6789",
    location: "Sweden",
    company: "Company J",
    status: "Offline",
  },
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    location: "United States",
    company: "Company A",
    status: "Online",
  },
  {
    name: "Jane Smith",
    phone: "(234) 567-8901",
    location: "Canada",
    company: "Company B",
    status: "Offline",
  },
  {
    name: "Alice Johnson",
    phone: "(345) 678-9012",
    location: "United Kingdom",
    company: "Company C",
    status: "Online",
  },
  {
    name: "Bob Brown",
    phone: "(456) 789-0123",
    location: "Australia",
    company: "Company D",
    status: "Online",
  },
  {
    name: "Charlie Davis",
    phone: "(567) 890-1234",
    location: "Germany",
    company: "Company E",
    status: "Offline",
  },
  {
    name: "Diana Evans",
    phone: "(678) 901-2345",
    location: "France",
    company: "Company F",
    status: "Online",
  },
  {
    name: "Ethan Foster",
    phone: "(789) 012-3456",
    location: "Italy",
    company: "Company G",
    status: "Offline",
  },
  {
    name: "Fiona Green",
    phone: "(890) 123-4567",
    location: "Spain",
    company: "Company H",
    status: "Online",
  },
  {
    name: "George Harris",
    phone: "(901) 234-5678",
    location: "Netherlands",
    company: "Company I",
    status: "Online",
  },
  {
    name: "Hannah Ivers",
    phone: "(012) 345-6789",
    location: "Sweden",
    company: "Company J",
    status: "Offline",
  },
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    location: "United States",
    company: "Company A",
    status: "Online",
  },
  {
    name: "Jane Smith",
    phone: "(234) 567-8901",
    location: "Canada",
    company: "Company B",
    status: "Offline",
  },
  {
    name: "Alice Johnson",
    phone: "(345) 678-9012",
    location: "United Kingdom",
    company: "Company C",
    status: "Online",
  },
  {
    name: "Bob Brown",
    phone: "(456) 789-0123",
    location: "Australia",
    company: "Company D",
    status: "Online",
  },
  {
    name: "Charlie Davis",
    phone: "(567) 890-1234",
    location: "Germany",
    company: "Company E",
    status: "Offline",
  },
  {
    name: "Diana Evans",
    phone: "(678) 901-2345",
    location: "France",
    company: "Company F",
    status: "Online",
  },
  {
    name: "Ethan Foster",
    phone: "(789) 012-3456",
    location: "Italy",
    company: "Company G",
    status: "Offline",
  },
  {
    name: "Fiona Green",
    phone: "(890) 123-4567",
    location: "Spain",
    company: "Company H",
    status: "Online",
  },
  {
    name: "George Harris",
    phone: "(901) 234-5678",
    location: "Netherlands",
    company: "Company I",
    status: "Online",
  },
  {
    name: "Hannah Ivers",
    phone: "(012) 345-6789",
    location: "Sweden",
    company: "Company J",
    status: "Offline",
  },
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    location: "United States",
    company: "Company A",
    status: "Online",
  },
  {
    name: "Jane Smith",
    phone: "(234) 567-8901",
    location: "Canada",
    company: "Company B",
    status: "Offline",
  },
  {
    name: "Alice Johnson",
    phone: "(345) 678-9012",
    location: "United Kingdom",
    company: "Company C",
    status: "Online",
  },
  {
    name: "Bob Brown",
    phone: "(456) 789-0123",
    location: "Australia",
    company: "Company D",
    status: "Online",
  },
  {
    name: "Charlie Davis",
    phone: "(567) 890-1234",
    location: "Germany",
    company: "Company E",
    status: "Offline",
  },
  {
    name: "Diana Evans",
    phone: "(678) 901-2345",
    location: "France",
    company: "Company F",
    status: "Online",
  },
  {
    name: "Ethan Foster",
    phone: "(789) 012-3456",
    location: "Italy",
    company: "Company G",
    status: "Offline",
  },
  {
    name: "Fiona Green",
    phone: "(890) 123-4567",
    location: "Spain",
    company: "Company H",
    status: "Online",
  },
  {
    name: "George Harris",
    phone: "(901) 234-5678",
    location: "Netherlands",
    company: "Company I",
    status: "Online",
  },
  {
    name: "Hannah Ivers",
    phone: "(012) 345-6789",
    location: "Sweden",
    company: "Company J",
    status: "Offline",
  },
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    location: "United States",
    company: "Company A",
    status: "Online",
  },
  {
    name: "Jane Smith",
    phone: "(234) 567-8901",
    location: "Canada",
    company: "Company B",
    status: "Offline",
  },
  {
    name: "Alice Johnson",
    phone: "(345) 678-9012",
    location: "United Kingdom",
    company: "Company C",
    status: "Online",
  },
  {
    name: "Charlie Davis",
    phone: "(567) 890-1234",
    location: "Germany",
    company: "Company E",
    status: "Offline",
  },
  {
    name: "Diana Evans",
    phone: "(678) 901-2345",
    location: "France",
    company: "Company F",
    status: "Online",
  },
  {
    name: "Ethan Foster",
    phone: "(789) 012-3456",
    location: "Italy",
    company: "Company G",
    status: "Offline",
  },
  {
    name: "Fiona Green",
    phone: "(890) 123-4567",
    location: "Spain",
    company: "Company H",
    status: "Online",
  },
  {
    name: "George Harris",
    phone: "(901) 234-5678",
    location: "Netherlands",
    company: "Company I",
    status: "Online",
  },
  {
    name: "Hannah Ivers",
    phone: "(012) 345-6789",
    location: "Sweden",
    company: "Company J",
    status: "Offline",
  },
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    location: "United States",
    company: "Company A",
    status: "Online",
  },
  {
    name: "Jane Smith",
    phone: "(234) 567-8901",
    location: "Canada",
    company: "Company B",
    status: "Offline",
  },
  {
    name: "Alice Johnson",
    phone: "(345) 678-9012",
    location: "United Kingdom",
    company: "Company C",
    status: "Online",
  },
  {
    name: "Charlie Davis",
    phone: "(567) 890-1234",
    location: "Germany",
    company: "Company E",
    status: "Offline",
  },
  {
    name: "Diana Evans",
    phone: "(678) 901-2345",
    location: "France",
    company: "Company F",
    status: "Online",
  },
  {
    name: "Ethan Foster",
    phone: "(789) 012-3456",
    location: "Italy",
    company: "Company G",
    status: "Offline",
  },
  {
    name: "Fiona Green",
    phone: "(890) 123-4567",
    location: "Spain",
    company: "Company H",
    status: "Online",
  },
  {
    name: "George Harris",
    phone: "(901) 234-5678",
    location: "Netherlands",
    company: "Company I",
    status: "Online",
  },
  {
    name: "Hannah Ivers",
    phone: "(012) 345-6789",
    location: "Sweden",
    company: "Company J",
    status: "Offline",
  },
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    location: "United States",
    company: "Company A",
    status: "Online",
  },
  {
    name: "Jane Smith",
    phone: "(234) 567-8901",
    location: "Canada",
    company: "Company B",
    status: "Offline",
  },
  {
    name: "Alice Johnson",
    phone: "(345) 678-9012",
    location: "United Kingdom",
    company: "Company C",
    status: "Online",
  },
  {
    name: "Bob Brown",
    phone: "(456) 789-0123",
    location: "Australia",
    company: "Company D",
    status: "Online",
  },
  {
    name: "Charlie Davis",
    phone: "(567) 890-1234",
    location: "Germany",
    company: "Company E",
    status: "Offline",
  },
  {
    name: "Diana Evans",
    phone: "(678) 901-2345",
    location: "France",
    company: "Company F",
    status: "Online",
  },
  {
    name: "Ethan Foster",
    phone: "(789) 012-3456",
    location: "Italy",
    company: "Company G",
    status: "Offline",
  },
  {
    name: "Fiona Green",
    phone: "(890) 123-4567",
    location: "Spain",
    company: "Company H",
    status: "Online",
  },
  {
    name: "George Harris",
    phone: "(901) 234-5678",
    location: "Netherlands",
    company: "Company I",
    status: "Online",
  },
  {
    name: "Hannah Ivers",
    phone: "(012) 345-6789",
    location: "Sweden",
    company: "Company J",
    status: "Offline",
  },
];

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
            background: "linear-gradient(90deg, #A500B5, #00C6FF)",
            color: "#FFFFFF",
            fontSize: "0.875rem",
            fontWeight: 550,
            "&:hover": {
              background: "linear-gradient(90deg, #A500B5, #00C6FF)",
            },
          }}
        >
          Import Contacts
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #FFB300, #FF6F00)",
            color: "#FFFFFF",
            fontSize: "0.875rem",
            fontWeight: 550,
            ml: 4,
            "&:hover": {
              background: "linear-gradient(90deg, #FFB300, #FF6F00)",
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
    {
      title: "All Memberras",
      count: 250,
      icon: <HiUsers size={24} color="#34B9B9" />,
      wrapperColor: "#133753",
    },
    {
      title: "New Memberras",
      count: 15,
      icon: <FaUser size={24} color="#FACC2F" />,
      wrapperColor: "#3B3B37",
    },
    {
      title: "Top Memberras",
      count: 200,
      icon: <FaHeart size={24} color="#D4324F" />,
      wrapperColor: "#331C3D",
    },
    {
      title: "Other Memberras",
      count: 35,
      icon: <PiDotsThreeCircleFill size={24} color="#9534A6" />,
      wrapperColor: "#271D4F",
    },
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
          <Grid
            container
            alignItems="center"
            gap={3}
            padding={2}
            justifyContent="center"
          >
            <Box
              sx={{
                borderRadius: "50%",
                padding: "10px",
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
              <Typography fontSize={14} color="#F2F2F2">
                {stat.title}
              </Typography>
              <Typography variant="body1" color="#AEB9E1" sx={{ mt: 1 }}>
                {stat.count}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const MemberTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <DashboardCard title="All Memberras" bgColor="#0B1739" titleColor="#FFFFFF">
      <Box>
        <TableContainer sx={{ backgroundColor: "#081028" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#0B1739" }}>
              <TableRow>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Phone
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Location
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Company
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#081028" : "#0B1739",
                      border: "none"
                    }}
                  >
                    <TableCell
                      sx={{ color: "#FFFFFF", fontSize: "14px", border: "none" }}
                    >
                      {user.name}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#FFFFFF", fontSize: "14px", border: "none" }}
                    >
                      {user.phone}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#FFFFFF", fontSize: "14px", border: "none" }}
                    >
                      {user.location}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#FFFFFF", fontSize: "14px", border: "none" }}
                    >
                      {user.company}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#FFFFFF", fontSize: "14px", border: "none" }}
                    >
                      {user.status}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography sx={{ color: "#FFFFFF" }}>
            {`${page * rowsPerPage + 1}-${Math.min((page + 1) * rowsPerPage, usersData.length)} of ${usersData.length} Users`}
          </Typography>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={usersData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={() => null}
            sx={{ backgroundColor: "#0B1739", color: "#FFFFFF" }}
          />
        </Box>
      </Box>
    </DashboardCard>
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
          <MemberTable />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Memberras;
