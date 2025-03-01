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
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { getUsers } from "@/lib/api";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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
    <Grid container gap={3} wrap="nowrap" maxWidth={"100%"}>
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
            padding={1}
            justifyContent="center"
          >
            <Box
              sx={{
                borderRadius: "50%",
                // padding: "10px",
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
              <Typography variant="body1" color="#AEB9E1">
                {stat.count}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const MemberTable = ({
  users,
  handleAvatarClick,
}: {
  users: any[];
  handleAvatarClick: (user: { image: string; name: string }) => void;
}) => {
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
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#081028" : "#0B1739",
                      border: "none",
                    }}
                  >
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        sx={{ width: 28, height: 28, marginRight: 2 }}
                        src={user.photo[0]}
                        onClick={() =>
                          handleAvatarClick({
                            image: user.photo[0],
                            name: user.name ?? "Name not available",
                          })
                        }
                      />
                      <div>
                        {user.name ?? "Name not available"}
                        <Typography variant="body2" color="#AEB9E1">
                          {user.email ?? ""}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        border: "none",
                      }}
                    >
                      {user.phoneNumber ?? "Phone not available"}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        border: "none",
                      }}
                    >
                      {user.location ?? "Location not available"}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        border: "none",
                      }}
                    >
                      {user.work?.company ?? "Company not available"}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        border: "none",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor:
                            user.status === "Online" ? "#0A3942" : "#2B3453",
                          color:
                            user.status === "Online" ? "#11CA74" : "#AEB9E1",
                          borderRadius: "4px",
                          padding: "6px 10px",
                          display: "inline-flex",
                          alignItems: "center",
                          fontWeight: 600,
                        }}
                      >
                        <Box
                          sx={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor:
                              user.status === "Online" ? "#11CA74" : "#AEB9E1",
                            marginRight: "6px",
                          }}
                        />
                        {user.status}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography sx={{ color: "#FFFFFF" }}>
            {`${page * rowsPerPage + 1}-${Math.min(
              (page + 1) * rowsPerPage,
              users.length
            )} of ${users.length} Users`}
          </Typography>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={users.length}
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
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{
    image: string;
    name: string;
  } | null>(null);

  const handleAvatarClick = (user: { image: string; name: string }) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        users.forEach((user: any) => {
          user.status = Math.random() < 0.5 ? "Online" : "Offline";
        });
        setUsers(users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

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
          <MemberTable users={users} handleAvatarClick={handleAvatarClick} />
        </Grid>
      </Grid>
      <Dialog open={openModal} onClose={handleCloseModal}>
        {selectedUser && (
          <>
            <DialogTitle
              sx={{
                backgroundColor: "#081028",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#FFFFFF",
                padding: "30px",
              }}
            >
              {selectedUser.name}
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#081028", padding: "40px" }}>
              <img
                src={selectedUser.image}
                alt="User Avatar"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
    </PageContainer>
  );
};

export default Memberras;
