// import Container from "./components/Container";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Typing from 'react-typing-animation'
import { useEffect, useState } from "react";
import Fade from '@mui/material/Fade';
import Collapse from '@mui/material/Collapse';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TraiTim = () => {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(true)
    const [traitim, setTraitim] = useState(true)

    useEffect(() => {
        const handler = (event: { data: string; }) => {
            console.log(event.data)
            if (event.data === "Test") {
                console.log(event.data)
                setClicked(false)
                navigate('/traitimtanvo')
            }
        }

        window.addEventListener("message", handler)

        // clean up
        return () => window.removeEventListener("message", handler)
    }, []) // empty array => run only once

    return (
        <Fade in={clicked} timeout={2000}>
            <Box display="flex" width="100vw" height={"100vh"} flexDirection="column" justifyContent={"center"} alignItems="center" style={{ backgroundColor: "#371B1B", color: "white" }}>

                <Typing className='typing'>
                    <Typing.Speed ms={50} />
                    <span>Cham vao trai tim tui di</span>
                </Typing>
                <br />
                <Collapse in={clicked} timeout={1000} orientation="horizontal"> 
                    <iframe src="./Traitim.html" className={`${clicked && "animate-wiggle"} border-4 border-white-1500 cursor-pointer 
  py-6 rounded-lg transform 
  transition duration-500 hover:scale-110`}
                    />
                </Collapse>


            </Box>
        </Fade>
    );
    // <Container>
    //   <Navbar />
    //   <Header />
    //   <Footer />

    // </Container>
}

export default TraiTim;
