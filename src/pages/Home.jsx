import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SettingsIcon from '@mui/icons-material/Settings';
import ListCashInOutRecord from "../pages/ListCashInOutRecord";
import CashInOutCard from "../pages/CashInOutCard";
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { BiSearchAlt2 } from "react-icons/bi";
import AddCashInOut from "../components/addCashInOut"
import { Link } from "react-router-dom";

function Home() {

    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("Add Cash Out");
    const handleClick = () => {setOpen(!open);};

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="lg:container mx-auto mt-3">
            <div className="mx-3">
                <div className="flex justify-between border-b-[1px] py-2 border-gray-400">
                    <Typography className="text-gray-600"  fontSize={25}>
                        Cash In/Out Record
                    </Typography>
                    <Link ripple="true" className="!rounded-xl" to="/Setting/Category">
                        <SettingsIcon className="cursor-pointer text-gray-600 cursor-pointer" fontSize="large"/>
                    </Link>
                </div>
                <div className="mt-7">
                    <CashInOutCard />
                </div>
                <div className="mb-4 p-0 mt-3 flex space-x-3 justify-between">
                    <div className="flex space-x-3">
                        <div>
                            <FormControl sx={{ minWidth: 200 }} size="small">
                                <InputLabel>Duration</InputLabel>
                                <Select
                                    value={age}
                                    label="categories"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ minWidth: 200 }} size="small">
                                <InputLabel>Categories</InputLabel>
                                <Select
                                    value={age}
                                    label="categories"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ width: '280px' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button className="!rounded-xl" sx={{ width: '35px', height: '35px' }}>
                                                <BiSearchAlt2 className="cursor-pointer w-[20px] h-[20px]" />
                                            </Button>
                                        </InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    size="small"
                                    className="!pt-0"
                                    inputProps={{
                                        'aria-label': 'Search with Remark...',
                                    }}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className="flex space-x-1 xl:space-x-3 items-end justify-end min-w-[255px]">
                        <Button 
                            variant="contained" 
                            color="success" 
                            className="!px-5" 
                            onClick={() => <>{setOpen(!open)} {setTitle("Add Cash In")}</>} 
                            sx={{ textTransform: 'none' }} 
                            startIcon={<AddIcon />}
                        >
                            Cash In
                        </Button>
                        <AddCashInOut open={open} handleClick={handleClick} title={title} setTitle={setTitle} />
                        <Button 
                            variant="contained" 
                            color="error" 
                            className="!px-5" 
                            sx={{ textTransform: 'none' }}  
                            startIcon={<RemoveIcon />} 
                            onClick={() => <>{setOpen(!open)} {setTitle("Add Cash Out")}</>}
                        >
                            Cash Out
                        </Button>
                    </div>
                </div>

                <div>
                    <ListCashInOutRecord />
                </div>
            </div>
        </div>
    );
}

export default Home;