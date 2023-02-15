// import Container from "./components/Container";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Fade from '@mui/material/Fade';

const TinNhan = () => {
    const [clicked, setClicked] = useState(true)
    const text = ["Chuc", "Em", "Valentine", "Vui", "Ve", "Nha", "Vo ba =)))"]
    const [disc, setDisc] = useState("")
    const [ci, setCi] = useState(0)

    const nhap = () => {
        var i = ci + 1;
        setCi(i)
        setClicked(false);
        setTimeout(() => {
            setClicked(true);
        }, 100)

        if (ci === text.length - 2) {
            console.log("true")
        setTimeout(() => {
            setDisc("Sorry tre qua lan dau lam cai nay =)))")
        }, 1500)
    }
    }

    return (
        <Fade in={clicked} timeout={500}>
            <Box display="flex" width="100vw" height={"100vh"} flexDirection="column" justifyContent={"center"} alignItems="center" style={{ backgroundColor: "#371B1B", color: "white" }}>
                
                {text[ci]}
                <Button onClick={nhap}>Tiep tuc</Button>
                {ci === text.length - 1 && (
                    <>
                        {disc}
                    </>
                )}
            </Box>
        </Fade>
    );
}

export default TinNhan;
