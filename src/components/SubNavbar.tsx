import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GroupIcon from '@mui/icons-material/Group';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import {deepPurple } from '@mui/material/colors';
import './subNav.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Stack, Tooltip } from "@mui/material";

const SubNavbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* Board Name */}
            <Typography variant="h6" component="div" fontWeight='700'>
                Board Name 
            </Typography>
            {/* Left side icons */}
            <Box sx={{marginLeft:2}} flexGrow={1}>
                <Stack direction="row" style={{display:'flex',alignItems:'center'}} spacing={2}>
                    <StarBorderIcon sx={{height:25, width:25}} className="start_bord_icon" />
                    <Tooltip title="Change visibility">
                    <GroupIcon sx={{height:25, width:25}} className="group_icon" />
                    </Tooltip>
                    <Tooltip title="Board">
                    <Button 
                        variant="contained" 
                        className="board_icon_name"
                        style={{textTransform:'capitalize', background:'white',color:'black'}}
                        startIcon={<LeaderboardIcon className="board_icon"/>}
                        >Board</Button>
                    </Tooltip>
                    <Tooltip title="Customise views">
                    <KeyboardArrowDownIcon sx={{height:30, width:30}} className="downArrow_icon"/>
                    </Tooltip>
                    
                </Stack>
            </Box>
            <Box>
                <Stack direction="row" alignItems='center' spacing={1}>
                    <Tooltip title="Power-Ups">
                    <RocketLaunchIcon style={{width:25, height:25}} className="rocket_icon"/>
                    </Tooltip>
                    <Tooltip title="Automation">
                    <BoltIcon style={{width:25, height:25}} className="thunder_icon" />
                    </Tooltip>
                    <Tooltip title="Filter Card">
                    <div className="d-flex filter_btn">
                        <FilterListIcon style={{marginRight:5}}/>
                        Filters
                    </div>
                    </Tooltip>
                    
                </Stack>
            </Box>
            <div className="partation"></div>
            <Box>
                <Stack direction="row" alignItems='center' spacing={1}>
                    <Avatar sx={{ bgcolor: deepPurple[500],width: 32, height: 32 }} className="user_avatar_logo">
                    <p className="mt-3" style={{display:'flex', alignItems:'center',fontSize:'12px'}}>AS</p>
                    </Avatar>
                    <Tooltip title="Share board">
                    <Button
                    variant="contained"
                    style={{textTransform:'capitalize', background:'white',color:'black'}}
                    className="share_icon"
                    startIcon={<PersonAddAltIcon/>} 
                    >
                        Share
                    </Button>
                    </Tooltip>
                    <div className="more_button_div">
                        <MoreHorizIcon sx={{marginLeft:1, width:30, height:30}} className="more_button"/>
                    </div>
                    
                </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default SubNavbar;
