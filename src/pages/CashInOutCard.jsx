import { Grid, Typography } from '@mui/material'
// import { HiMenuAlt4 } from "react-icons/hi";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";

// how to separate the comma after three numbers?
const CashInOutCard = ({total_cashIn, total_cashOut}) => {

    return (
        <>
            <Grid container sx={{ marginLeft: '0px', width: '100%' }} spacing={2} className="rounded-lg min-w-[900px] border-2 border-gray-200 flex flex-col h-100 py-3" >
                <Grid item xs={4} className='border-r-2 !p-0'>
                    <div className='py-2'>
                        <Typography className="flex pl-[50px]"> 
                            <AiFillPlusCircle className='text-green-600 mt-1 mx-1' />
                            Cash In
                        </Typography>
                        <Typography className="pl-[73px] min-w-[333px] items-start">
                            {/* {total_cashIn.toLocaleString('en-US')} */}
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={4} className='border-r-2 !p-0'>
                    <div className='py-2'>
                        <Typography className="flex pl-[50px]">
                            <AiFillMinusCircle className='text-red-600 mt-1 mx-1' />
                            Cash Out
                        </Typography>
                        <Typography className="pl-[73px] min-w-[333px] items-start">
                            {/* {total_cashOut.toLocaleString('en-US')} */}
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={4} className="!p-0">
                    <div className='py-2'>
                        <Typography className="flex pl-[50px]">
                            <span className='w-[15px] h-[15px] rounded-xl bg-blue-600 flex items-center justify-center mt-1 mx-1'>
                                <FaEquals className='text-gray-50 w-[8px] h-[8px]' />
                            </span>
                            Net Balance
                        </Typography>
                        <Typography className="pl-[72px] min-w-[333px] items-start">
                            100,000,000
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default CashInOutCard;