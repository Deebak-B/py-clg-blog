import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Feedback from '../Feedback';

const EngCollegeCard = ({ data }) => {

    return (
        <>
            <Stack gap={3}>
                <div className="bg-light border m-4">
                    <Card>
                        <Card.Body>
                            <h2 style={{ color: "blue", fontFamily: "san francis", padding: 25 }}>{data.collegeName}</h2>

                            <p >{data.collegeDesc}</p>
                        </Card.Body>
                    </Card>

                </div>

            </Stack>

        </>

    )
}

export default EngCollegeCard;

