// import Container from "./components/Container";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Fade from '@mui/material/Fade';
import Collapse from '@mui/material/Collapse'
import Typing from "react-typing-animation";

const TinNhan = () => {
    const [clicked, setClicked] = useState(true)
    const text = ["Chuc", "Em", "Valentine", "Vui", "Ve", "Nha", "Vo baaaaaaaa =)))"]
    const [disc, setDisc] = useState("")
    const [ci, setCi] = useState(0)
    const [typing, setType] = useState(false)

    const nhap = () => {
        var i = ci + 1;
        setCi(i)
        setClicked(false);
        setTimeout(() => {
            setClicked(true);
        }, 100)

        if (ci === text.length - 2) {
            console.log("true")
            document.getElementById("tieptuc")!.style.visibility = "hidden"
            document.getElementById("tinnhanbox")!.style.height = "50vh"
        }
    }

    return (
        <Fade in={true} timeout={500}>
            <Box display="flex" width="100vw" height={"100vh"} flexDirection="column" justifyContent={"center"} alignItems="center" style={{ color: "white", overflow: "hidden" }}>
                <img src="https://wallpapercave.com/wp/wp5257238.jpg" width={"100%"} height={"100%"} style={{ position: "absolute", zIndex: -1 }} />

                <Collapse in={clicked}>
                    <Box id="tinnhanbox" style={{ backgroundColor: "#371B1B", width: "40vw", height: "20vh" }} display="flex" flexDirection={"column"} textAlign="center" justifyContent={"center"} alignItems="center">
                        {text[ci]}
                        <Button onClick={nhap} id="tieptuc">Tiep tuc</Button>
                        {ci === text.length - 1 && (
                            <>
                                {disc}
                            </>
                        )}
                        {ci === text.length - 1 && (
                            <>
                                <br />
                                <Typing onFinishedTyping={() => setType(true)}>
                                    <span> Sorry tre qua lan dau lam cai nay {"=))"}</span>
                                    <span>    </span>
                                    <Typing.Backspace count={4} />
                                    <br/>
                                    <span> Trao cho em trai tim lai ne! </span>
                                    <span>  </span>
                                </Typing>
                                <br/>
                                <br />
                                {typing && ( <iframe src="../../../TraiTim.html"/> )}
                                
                            </>

                        )}
                        
                    </Box>
                    
                </Collapse>

            </Box>
        </Fade>
    );
}

export default TinNhan;
