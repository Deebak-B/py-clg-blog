import React from "react";
// import {Stack,Link} from 'react-bootstrap';
// import Link from 'react-bootstrap/Link';
import Stack from 'react-bootstrap/Stack';
import { Link, useNavigate } from "react-router-dom";

 export default function Divisions(){
    return (
        <Stack gap={3}>
            {/* Engineering */}
        <div className="bg-light border">
        <Stack direction="horizontal" gap={3}>
            <div className="bg-light p-3">
                <img src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
            <div className="bg-light p-5">
                <h3>
                    <Link to='/engineering'>Engineering</Link>
                 </h3>
                    
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit commodi culpa veniam, odit repellendus dolores voluptatem aperiam inventore eveniet. Nam quo ullam iure facilis nisi beatae atque aut vero cupiditate!</p>
            </div>

        </Stack>        
        </div>
        {/* Medical and Paramedical  */}
        <div className="bg-light border">
        <Stack direction="horizontal" gap={3}>
            <div className="bg-light p-3">
                <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
            <div className="bg-light p-5">
                <h3>Medical and Paramedical</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit commodi culpa veniam, odit repellendus dolores voluptatem aperiam inventore eveniet. Nam quo ullam iure facilis nisi beatae atque aut vero cupiditate!</p>
            </div>

        </Stack>    
        </div>

        {/* Arts and Sciences */}
        <div className="bg-light border fluid">
        <Stack direction="horizontal" gap={3}>
            <div className="bg-light p-3">
                <img src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
            <div className="bg-light p-5">
                <h3>Arts and Sciences</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit commodi culpa veniam, odit repellendus dolores voluptatem aperiam inventore eveniet. Nam quo ullam iure facilis nisi beatae atque aut vero cupiditate!</p>
            </div>

        </Stack> 




        </div>
      </Stack>
        );
    }