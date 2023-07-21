import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";

const OngoingEvents = () => {
  const eventData = {
    eventHeader: "Event Header",
    eventTime: "Mon, 24th Jan'22",
    hostName: "Host Name",
    timeStarted: "Started: 19:00",
    hallNumber: "H: 5",
    notificationCount: "02",
    minimumCommitment: "72",
    liveCount: "72",
  };

  const repeatCount = 3;
  const theme = useTheme();

  return (
    <Box mt={3} mx={2} pb={15}>
      <Typography
        variant='h3'
        sx={{ mb: 2, fontWeight: "700", fontSize: "36px", color: "#020655" }}
      >
        Ongoing Events
      </Typography>
      <Grid container spacing={2}>
        {Array.from({ length: repeatCount }).map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
            <Card
              variant='outlined'
              sx={{
                borderRadius: "16px",
                minHeight: "200px",
                boxShadow: "0 0 20px 5px rgba(9,14,120,0.05)",
                backgroundColor: "#ffffff",
              }}
            >
              <CardContent>
                <Box display='flex' justifyContent='space-between'>
                  <Typography
                    variant='h5'
                    sx={{
                      fontWeight: "bold",
                      color: "#020655",
                      fontSize: "26px",
                    }}
                  >
                    {eventData.eventHeader}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: "grey", fontSize: "12px" }}
                  >
                    {eventData.eventTime}
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant='subtitle3'
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "grey",
                      }}
                    >
                      {eventData.hostName}
                    </Typography>
                    <Typography
                      variant='subtitle3'
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        color: "darkblue",
                        fontWeight: "500",
                        fontSize: "14px",
                        mt: 4,
                      }}
                    >
                      <Box
                        sx={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "#4DD964",
                          mr: "6px",
                          mt: "9px",
                        }}
                      />
                      {eventData.timeStarted}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} display='flex' flexDirection='row-reverse'>
                    <Box
                      ml={1}
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                    >
                      <Box
                        sx={{
                          width: 61,
                          height: 52,
                          border: "2px solid #ECC446",
                          borderRadius: "8px",
                          background: "#FFF3DC",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant='subtitle1'
                          sx={{
                            color: "#ECC446",
                            fontSize: "24px",
                            fontWeight: "700",
                          }}
                        >
                          {eventData.liveCount}
                        </Typography>
                      </Box>
                      <Typography
                        variant='body2'
                        sx={{
                          fontSize: "9px",
                          fontWeight: "600",
                          color: "grey",
                          mt: 1,
                        }}
                      >
                        Live Count
                      </Typography>
                    </Box>
                    <Box
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                    >
                      <Box
                        sx={{
                          width: 61,
                          height: 52,
                          border: "2px solid #9EA9C8",
                          borderRadius: "8px",
                          background: "#E1F1FF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant='subtitle1'
                          sx={{
                            color: "#9EA9C8",
                            fontSize: "24px",
                            fontWeight: "700",
                          }}
                        >
                          {eventData.minimumCommitment}
                        </Typography>
                      </Box>
                      <Typography
                        variant='body2'
                        sx={{
                          fontSize: "9px",
                          fontWeight: "600",
                          color: "grey",
                          mt: 1,
                        }}
                      >
                        Min. Commit.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  mt={2}
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Typography
                    variant='subtitle1'
                    sx={{
                      fontWeight: "600",
                      fontSize: "24px",
                      minWidth: "48px",
                      color: "black",
                    }}
                  >
                    {eventData.hallNumber}
                  </Typography>
                  <Box
                    sx={{
                      border: "2px solid darkblue",
                      borderRadius: "8px",
                      background: "rgba(0, 0, 139, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "32px",
                      padding: "6px",
                    }}
                    mr={6}
                  >
                    <Notifications sx={{ color: "darkblue" }} />
                    <Typography variant='subtitle1' sx={{ color: "darkblue" }}>
                      {eventData.notificationCount}
                    </Typography>
                  </Box>
                  <Link to='/event'>
                    <Button
                      variant='contained'
                      sx={{
                        height: "32px",
                        backgroundColor: "#090E82",
                        borderRadius: "8px",
                        fontSize: "10px",
                        fontWeight: "700",
                        textTransform: "none",
                        "@media screen and (min-width: 330px)": {
                          minWidth: "120px",
                        },
                        "@media screen and (min-width: 380px)": {
                          minWidth: "186px",
                          fontSize: "12px",
                        },
                        "@media screen and (min-width: 600px) and (max-width: 640px)":
                          {
                            minWidth: "100px",
                            fontSize: "10px",
                          },
                        "@media screen and (min-width: 640px) and (max-width: 700px)":
                          {
                            minWidth: "125px",
                          },
                        "@media screen and (min-width: 700px) and (max-width: 800px)":
                          {
                            minWidth: "125px",
                            padding: "5px 0",
                          },
                        "@media screen and (min-width: 800px) and (max-width: 900px)":
                          {
                            minWidth: "130px",
                          },
                        "@media screen and (min-width: 900px)": {
                          minWidth: "186px",
                          fontSize: "14px",
                        },
                      }}
                    >
                      Manage Event
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OngoingEvents;
