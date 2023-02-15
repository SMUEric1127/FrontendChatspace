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

const TraiTimTanVo = () => {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(true)
    const [doneTyping, setTyping] = useState(false)
    var ci = 0;

    const text = ["Khong chiu cai gi ma khong chiu", "Thoi chiu di", "Nhay qua nha", "Co chiu khong", "Khong chiu cung phai chiu"]
    var chiuText = "Gi ma de an vay =))) ?"
    var left, bottom;

    const khongchiu = () => {
        const kc = document.getElementById("khongchiu")
        const c = document.getElementById("chiu")
        if (kc && c) {
            chiuText = "Vay moi phai chu :)"
            left = kc.style.left
            bottom = kc.style.bottom
            kc.style.left = `${Math.random()*90}%`;
            kc.style.bottom = `${Math.random()*90}%`;


            c.style.left = left
            c.style.bottom = bottom
        }
        if (ci >= text.length) {
            alert("Phai chiu thoi nguoi oi")
            return;
        }
        alert(text[ci]);
        if (ci == text.length - 1) {
            alert("Cho mat tiu luon ne")
            kc!.style.visibility = 'hidden';
        }
        ci += 1;
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
                    <span>Sax ban bam manh qua trai tim vo~ roi!!</span>
                    <Typing.Speed ms={150} />
                    <span>  </span>
                    <Typing.Backspace count={2} />
                    <span>....</span>
                    <Typing.Speed ms={10} />
                    <Typing.Backspace count={50} />
                    <Typing.Speed ms={50} />
                    <span>Bat den ban nha'!?!?</span>
                    <Typing.Backspace count={0} />
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

export default TraiTimTanVo;
