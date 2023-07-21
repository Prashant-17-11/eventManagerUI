import React from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Divider,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  WifiTethering,
  EditNote,
  PanToolAltOutlined,
  PieChartOutlined,
  SummarizeOutlined,
  ArticleOutlined,
} from "@mui/icons-material";

const Event = () => {
  const eventData = {
    eventHeader: "Event Header",
    eventTime: "Fri, 24th Jan'22",
    timeStarted: "Started: 19:00",
    hallNumber: "H: 5",
    finalCount: "500",
    liveCount: "500",
    negativeList: "-500",
    manualCount: "500",
    minimumCommitment: "500",
    estimatedTurnout: "500",
  };

  return (
    <Box mt={3} mx={2}>
      <Typography
        variant='h4'
        sx={{ fontSize: "36px", fontWeight: "700", color: "#020655" }}
        gutterBottom
      >
        Ongoing Event
      </Typography>
      <Box
        display='flex'
        justifyContent='space-between'
        sx={{ color: "#7d7d7d" }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          {eventData.eventTime}
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          {eventData.timeStarted}
        </Typography>
      </Box>
      <Box display='flex' justifyContent='space-between' mt={2}>
        <Typography
          variant='h5'
          sx={{ color: "#090e82", fontSize: "22px", fontWeight: "500" }}
        >
          {eventData.eventHeader}
        </Typography>
        <Typography variant='h5' sx={{ fontSize: "22px", fontWeight: "600" }}>
          {eventData.hallNumber}
        </Typography>
      </Box>
      <Box
        mt={2}
        color='primary'
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant='contained'
          sx={{
            backgroundColor: "#090e82",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            "@media screen and (max-width: 380px)": {
              fontSize: "8px",
              maxWidth: "27vw",
            },
            "@media screen and (max-width: 424px)": {
              fontSize: "12px",
            },
          }}
        >
          Statistics
        </Button>
        <Button
          variant='outlined'
          sx={{
            color: "#090e82",
            border: "1px solid #090e82",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            "@media screen and (max-width: 380px)": {
              fontSize: "8px",
              maxWidth: "27vw",
            },
            "@media screen and (max-width: 424px)": {
              fontSize: "12px",
            },
          }}
        >
          Event Details
        </Button>
        <Button
          variant='outlined'
          sx={{
            color: "#090e82",
            border: "1px solid #090e82",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            "@media screen and (max-width: 380px)": {
              fontSize: "8px",
              maxWidth: "27vw",
            },
            "@media screen and (max-width: 424px)": {
              fontSize: "12px",
            },
          }}
        >
          Host Details
        </Button>
        {/* </ButtonGroup> */}
      </Box>
      <Divider sx={{ my: 2, height: 2, backgroundColor: "#7d7d7d" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card
            variant='outlined'
            sx={{
              borderRadius: "8px",
              boxShadow: "0 0 20px 5px rgba(9,14,120,0.05)",
              border: "none",
              height: "82px",
            }}
          >
            <CardContent>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  Final Count
                </Typography>
                <Typography
                  sx={{ fontSize: "36px", fontWeight: "700", color: "#090e82" }}
                >
                  {eventData.finalCount}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            variant='outlined'
            sx={{
              borderRadius: "8px",
              boxShadow: "0 0 20px 5px rgba(9,14,120,0.05)",
              border: "none",
              height: "62px",
            }}
          >
            <CardContent sx={{ px: 2, py: 1 }}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <Box display='flex' alignItems='center'>
                  <WifiTethering sx={{ mr: 1, color: "#090e82" }} />
                  <Typography sx={{ fontSize: "16px", fontWeight: "650px" }}>
                    Live Count
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "600px",
                    color: "#090e82",
                  }}
                >
                  {eventData.liveCount}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            variant='outlined'
            sx={{
              borderRadius: "8px",
              boxShadow: "0 0 20px 5px rgba(9,14,120,0.05)",
              border: "none",
              height: "62px",
            }}
          >
            <CardContent sx={{ px: 2, py: 1 }}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <Box display='flex' alignItems='center'>
                  <ArticleOutlined sx={{ mr: 1, color: "#090e82" }} />
                  <Typography sx={{ fontSize: "16px", fontWeight: "650px" }}>
                    Negative List
                  </Typography>
                  <EditNote sx={{ ml: 1 }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "600px",
                    color: "#090e82",
                  }}
                >
                  {eventData.negativeList}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            variant='outlined'
            sx={{
              borderRadius: "8px",
              boxShadow: "0 0 20px 5px rgba(9,14,120,0.05)",
              border: "none",
              height: "62px",
            }}
          >
            <CardContent sx={{ px: 2, py: 1 }}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <Box display='flex' alignItems='center'>
                  <PanToolAltOutlined sx={{ mr: 1, color: "#090e82" }} />
                  <Typography sx={{ fontSize: "16px", fontWeight: "650px" }}>
                    Manual Count (Total)
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "600px",
                    color: "#090e82",
                  }}
                >
                  {eventData.manualCount}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button
          variant='outlined'
          sx={{
            border: "2px solid #090e82",
            borderColor: "#090e82",
            borderRadius: "8px",
            color: "#090e82",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: "650px",
            backgroundColor: "#ecedff",
          }}
          startIcon={<PieChartOutlined sx={{ color: "#090e82" }} />}
        >
          View Report
        </Button>
      </Box>
      <Box mt={3}>
        <Typography
          variant='body1'
          sx={{ fontSize: "16px", fontWeight: "500" }}
        >
          MINIMUM COMMITMENT:{" "}
          <span style={{ fontWeight: "700", color: "#090e82" }}>
            {eventData.minimumCommitment}
          </span>
        </Typography>
        <Typography
          variant='body1'
          sx={{ fontSize: "16px", fontWeight: "500" }}
        >
          ESTIMATED TURNOUT:{" "}
          <span style={{ fontWeight: "700", color: "#090e82" }}>
            {eventData.estimatedTurnout}
          </span>
        </Typography>
      </Box>
      <Box mt={3} display='flex' alignItems='center'>
        <TextField
          multiline
          rows={1}
          fullWidth
          placeholder='Add Notes'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <EditNote />
              </InputAdornment>
            ),
          }}
          style={{
            borderRadius: "8px",
            backgroundColor: "#ffffff",
          }}
        />
      </Box>
      <Box mt={3} mb={15}>
        <Button
          variant='contained'
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            backgroundColor: "#090e82",
            borderRadius: "8px",
            textTransform: "none",
          }}
          fullWidth
        >
          End Now
        </Button>
      </Box>
    </Box>
  );
};

export default Event;
