import * as React from "react";
import { Box, Button, FormControl, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import ListCashInOutRecord from "../CashInOutRecord/ListCashInOutRecord";
import RemarkSearch from "../CashInOutRecord/Filter/RemarkSearch";
import Duration from "../CashInOutRecord/Filter/Duration";
import Category from "../CashInOutRecord/Filter/Category";
import CashInOutCard from "../CashInOutRecord/CashInOutCard";
import { Link } from "react-router-dom";

function Home() {

  //! Cash In Button Custom Color 
  const AddButton = styled(Button)(() => ({
    color: grey[50],
    backgroundColor: green[700],
    '&:hover': {
      backgroundColor: green[800],
    },
  }));

  //! Cash Out Button Custom Color 
  const MinusButton = styled(Button)(() => ({
    color: grey[50],
    backgroundColor: red[700],
    '&:hover': {
      backgroundColor: red[800],
    },
  }));

  return (
    <div className="container-fluid mb-3" style={{ marginTop: '75px' }}>
      <div className="d-flex justify-content-between pb-3 pt-1" style={{ 'minWidth': '1010px', 'borderBottom': '1px solid gray' }}>
        <Typography sx={{ textAlign: 'start' }} color="text.secondary">
          Cash In/ Out Record
        </Typography>
        <SettingsIcon style={{ cursor: 'pointer' }} />
      </div>

      <div className="mt-3 pb-3 pt-3 px-0">
        <CashInOutCard />
      </div>

      <div className="mb-4">
        <Box sx={{ minWidth: 850 }} >
          <Grid container spacing={2} direction='row'>
            <Grid item xs={4} lg={2} >
              <Duration />
            </Grid>

            <Grid item xs={4} lg={2} >
              <Category />
            </Grid>

            <Grid item xs={4} lg={3} >
              <RemarkSearch />
            </Grid>

            <Grid items lg={1} ></Grid>

            <Grid item xs={5} lg={2} className="text-end" >
              <FormControl >
                <Link to='cashIn/add'>
                <AddButton variant="contained" startIcon={<AddIcon />}>
                    Cash In
                  </AddButton>
                </Link>
              </FormControl>
            </Grid>

            <Grid item xs={5} lg={2}  >
              <MinusButton variant="contained" startIcon={<RemoveIcon />}>
                Cash Out
              </MinusButton>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <ListCashInOutRecord />
      </div>
    </div>
  );
}

export default Home;