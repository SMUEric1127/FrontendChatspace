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

const Chiu = () => {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(true)
    const [doneTyping, setTyping] = useState(false)

    const text = "Nhay qua a =)) Phai chiu thoi"
    var chiuText = "Vay moi duoc chu"
    var left, bottom;

    const khongchiu = () => {
        const kc = document.getElementById("khongchiu")
        const c = document.getElementById("chiu")
        if (kc && c) {
            alert(text)
            kc.style.visibility = 'hidden';
            c.style.left = "0%"
            c.style.width = "100%"
            c.style.height = "100%"
        }
    }

    const chiu = () => {
        alert(chiuText);

        navigate('chiu')
    }

    var agree = <Button id="chiu" style={{position: "absolute", left: "60%", bottom: "30%", backgroundColor:"white", color: "black"}} variant="contained" onClick={chiu}>Chiu</Button>
    var disagree = <Button id="khongchiu" style={{position: "absolute", right: "50%", bottom: "30%", backgroundColor:"white", color: "black"}} variant="contained" onClick={khongchiu}>Khong Chiu</Button>

    useEffect(() => {
        const handler = (event: { data: string; }) => {
            if (event.data === "Test") {
                console.log(event.data)
                setClicked(false)
            }
        }

        window.addEventListener("message", handler)

        // clean up
        return () => window.removeEventListener("message", handler)
    }, []) // empty array => run only once

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

export default Chiu;
