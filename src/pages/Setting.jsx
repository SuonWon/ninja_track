import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Mode from "./Mode";
import { useEffect, useState } from "react";
import Category from "./Category";
import UserProfile from "./UserProfile";
import { Link, useNavigate, useParams } from "react-router-dom";

function Setting() {

  const navigate = useNavigate();

  let {type} = useParams()
  const [selectedPage, setSelectedPage] = useState(type);

  return (
    <div className="lg:container mx-auto mt-3 h-[80vh]">
      <div className="mx-3">
        <div className="flex border-b-[1px] py-2 border-gray-400">
          <Link ripple="true" className="!rounded-xl pr-2" to="/">
              <ArrowBackIcon className="cursor-pointer text-gray-600" fontSize="large"/>
          </Link>
          <Typography className="text-gray-600" fontSize={25}>
              Setting
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mx-3">
        <div className="border-r-[1px] border-gray-400">
          <div 
            className="py-4 border-b-[1px] border-gray-400 pl-2 cursor-pointer"
            onClick={() => {setSelectedPage('Category')}}
          >
            <p className="text-base">Category</p>
            <p className="text-xs text-gray-600">Add, edit and delete</p>
          </div>
          <div 
            className="py-4 border-b-[1px] border-gray-400 pl-2 cursor-pointer"
            onClick={() => {setSelectedPage('Mode')}}
          >
            <p className="text-base">Payment Mode</p>
            <p className="text-xs text-gray-600">Add, edit and delete</p>
          </div>
          <div 
            className="py-4 border-b-[1px] border-gray-400 pl-2 cursor-pointer"
            onClick={() => {setSelectedPage('UserProfile')}}
          >
            <p className="text-base">User Profile</p>
            <p className="text-xs text-gray-600">Edit user profile</p>
          </div>
        </div>
        <div className="col-span-4 px-6 pt-6">
          {
            selectedPage == 'Category' ? 
              <Category /> : selectedPage == 'Mode' ? 
                <Mode /> : <UserProfile/>
          }
        </div>
      </div>
    </div>
  )
}

export default Setting;