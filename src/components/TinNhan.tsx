// import Container from "./components/Container";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Box, Button } from "@mui/material";
import Typing from 'react-typing-animation'
import { useEffect, useState } from "react";
import Fade from '@mui/material/Fade';
import Collapse from '@mui/material/Collapse';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { HeatPumpRounded } from "@mui/icons-material";

const TinNhan = () => {
    const [clicked, setClicked] = useState(true)
    return (
        <Fade in={clicked} timeout={3000}>
            <Box display="flex" width="100vw" height={"100vh"} flexDirection="column" justifyContent={"center"} alignItems="center" style={{ backgroundColor: "#371B1B", color: "white" }}>

                <Typing className='typing' onFinishedTyping={() => setTyping(true)}>
                    <Typing.Speed ms={100} />
                    <span>Will you be my valentine? </span>
                    <HeatPumpRounded/>
                </Typing>
                <br />

                {doneTyping && (
                    <>
                    {agree}
                    {disagree}
                    </>
                )}

            </Box>
        </Fade>
    );
}

export default TinNhan;
