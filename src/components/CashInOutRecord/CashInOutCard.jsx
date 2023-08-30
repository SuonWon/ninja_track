import { Grid, Icon, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'
import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { HiMenuAlt4 } from "react-icons/hi";

const CashInOutCard = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ minWidth: 1000, border: 1, borderColor: 'grey.500' }} className="rounded pt-1 pb-3 mx-0 w-100" color="text.secondary" >
                <Grid item xs={4} >
                    <Typography sx={{ minWidth: 336, textAlign: 'start', paddingLeft: 10, borderColor: 'grey.500' }} className="d-flex align-items-center border-end" color="text.secondary">
                        <Icon sx={{ color: green[500], fontSize: 17 }}>add_circle</Icon>
                        Cash In
                    </Typography>
                    <Typography sx={{ minWidth: 336, textAlign: 'start', paddingLeft: 12, borderColor: 'grey.500' }} className="border-end" color="text.secondary">
                        100,000,000
                    </Typography>
                </Grid>

                <Grid item xs={4} >
                    <Typography sx={{ minWidth: 336, textAlign: 'start', paddingLeft: 10 }} className="d-flex align-items-center border-end" color="text.secondary">
                        <RemoveCircleIcon sx={{ color: red[500], fontSize: 17 }} />
                        Cash Out
                    </Typography>
                    <Typography sx={{ minWidth: 336, textAlign: 'start', paddingLeft: 12 }} className="border-end" color="text.secondary">
                        500,000,000
                    </Typography>
                </Grid>

                <Grid item xs={4} >
                    <Typography sx={{ minWidth: 336, textAlign: 'start', paddingLeft: 10 }} className="d-flex align-items-center" color="text.secondary">
                        <div style={{ 'backgroundColor': 'blue', 'height': '15px', 'width': '15px' }} className="rounded-circle d-flex align-items-center justify-content-center text-white mx-1" >
                            <HiMenuAlt4 sx={{ fontSize: 10 }} />
                        </div>
                        Net Balance
                    </Typography>
                    <Typography sx={{ minWidth: 336, textAlign: 'start', paddingLeft: 13 }} color="text.secondary">
                        500,000,000
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default CashInOutCard