import Stack from 'react-bootstrap/Stack';
//import {Link,NavLink,Navbar,Nav} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Cards } from 'react-bootstrap';
import React from 'react';
import EngCollegeCard from './EngCollegeCard';
import Feedback from '../Feedback';
import Footer from '../Footer'


function EngineeringList() {
    const List = [
        {
            id: 1,
            collegeName: 'Puducherry Technological University',
            collegeDesc: 'Deebak Studies here!'
        },
        {
            id: 2,
            collegeName: 'Manakular Vinayagar Institute of Technology',
            collegeDesc: 'Santhosh Studies here!'
        },
        // {
        //     id: 3,
        //     collegeName: 'Manakular Vinayagar Institute of Technology',
        //     collegeDesc: 'Santhosh Studies here!'
        // },

        // {
        //     id: 4,
        //     collegeName: 'Manakular Vinayagar Institute of Technology',
        //     collegeDesc: 'Santhosh Studies here!'
        // }
    ]

    return (
        <>
            <div className='products'>
                {
                    List.map((item) => {
                        return (
                            <EngCollegeCard data={item} key={item.id} />
                        )
                    })
                }
                <Feedback />
                <Footer />
            </div>
        </>
    );
}
export default EngineeringList;