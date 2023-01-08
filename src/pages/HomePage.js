import React from 'react'
import Header from '../components/Header';

import {Container, Row, Col} from 'react-bootstrap';



const HomePage = () =>{
    const page_content = [
        {title: "Summary", document: {
            Name: "dr. Lorem",
            Project: "Metagenomic 34 samples home sapiens",
            Submission_Date: "2023-01-01",
            Completed_Date: "2023-01-01",
            Notes: "-"
        }, image:""},
         {title: "Run Information", document: {
            Experiment_Name: "20221020_Trial_DirectRNA",
            Run_ID: "cad23c7d-a18b-44d7-82eb-45cd60febfd9",
            Flow_Cell_ID: "FAU38631",
            Start_Time: "20 October 2022, 07:16",
            Run_Length: "5 Hours 32 Minutes"
        }, image:""},
        {title: "Sequencing Output", document: {
            Reads_Generated: "460.16 k",
            Passed_Bases: "301.25 Mb",
            Failed_Bases: "10.86 Mb",
            Estimated_Bases: "366.85 Mb"
        }},
        // {title: "Data Output", document, image: {
        //     path: "sequence_output.png",
        // }},
        //  {title: "Cumulative Output", document, image: {
        //     path: "cumulative_output.png",
        // }},
        //  {title: "Cumulative Output", document, image: {
        //     path: "cumulative_output.png",
        // }},

    ]
    
    return (
        <>
            <Header/>
            <Container>
                <Row>
                {
                    page_content.map(content => {
                        return (
                            <Col md={12} xs={12}>
                                
                                <div className="content-wrapper">
                                    <h1>{content.title}</h1>
                                    {
                                        content.image ? (<img src={content.image.path} style={{width: "60vh", height: "40vh"}} alt="home genomic"/>) 
                                        : 
                                        (Object.keys(content.document).map(document_property =>{
                                            return <p>{document_property}: {content.document[document_property]}</p>
                                        }))
                                    }
                                        {/* {Object.keys(content.document).map(document_property =>{
                                            return <p>{document_property}: {content.document[document_property]}</p>
                                        })
                                        } */}
                                    
                                </div>
                            </Col>
                        )
                    })
                }
                </Row>
            </Container>
            
           
            
          
        </>
    )
}

export default HomePage;