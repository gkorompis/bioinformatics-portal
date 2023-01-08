import React from 'react';
import Header from '../components/Header';
import {Accordion, Container} from 'react-bootstrap';
import ChunksTable from '../components/ChunksTable';

const AnalysisPage = () => {

    const page_content= {
        abundance: [
            {Kingdom: "Bacteria", Phylum: "Proteobacteria", Class: "alpha-proteobacteria", Order: "Rhodospirales", Family: "Rhodosprilacea", Genus: "Telmatosprillium", Species: "sibiriense", Hits: "41782"},
            {Kingdom: "Bacteria", Phylum: "Proteobacteria", Class: "alpha-proteobacteria", Order: "Rhodospirales", Family: "Rhodosprilacea", Genus: "Telmatosprillium", Species: "sibiriense", Hits: "41782"},
            {Kingdom: "Bacteria", Phylum: "Proteobacteria", Class: "alpha-proteobacteria", Order: "Rhodospirales", Family: "Rhodosprilacea", Genus: "Telmatosprillium", Species: "sibiriense", Hits: "41782"},
            {Kingdom: "Bacteria", Phylum: "Proteobacteria", Class: "alpha-proteobacteria", Order: "Rhodospirales", Family: "Rhodosprilacea", Genus: "Telmatosprillium", Species: "sibiriense", Hits: "41782"},
            {Kingdom: "Bacteria", Phylum: "Proteobacteria", Class: "alpha-proteobacteria", Order: "Rhodospirales", Family: "Rhodosprilacea", Genus: "Telmatosprillium", Species: "sibiriense", Hits: "41782"},
            {Kingdom: "Bacteria", Phylum: "Proteobacteria", Class: "alpha-proteobacteria", Order: "Rhodospirales", Family: "Rhodosprilacea", Genus: "Telmatosprillium", Species: "sibiriense", Hits: "41782"},
            {Kingdom: "Bacteria", Phylum: "Proteobacteria", Class: "alpha-proteobacteria", Order: "Rhodospirales", Family: "Rhodosprilacea", Genus: "Telmatosprillium", Species: "sibiriense", Hits: "41782"},
            {Kingdom: "Bacteria", Phylum: "Proteobacteria", Class: "alpha-proteobacteria", Order: "Rhodospirales", Family: "Rhodosprilacea", Genus: "Telmatosprillium", Species: "sibiriense", Hits: "41782"},
        ]
    }
    return (
        <>
            <Header/>
            <Container>
<div className="content-wrapper">
                <h1>Metagenomic Analysis</h1>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Alpha Diversity</Accordion.Header>
                    <Accordion.Body>
                        <p>Shannon index: -</p>
                        <p>Simpson index: -</p>
                        <p>Chao1: -</p>
                        <p>Otu: -</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Beta Diversity</Accordion.Header>
                    <Accordion.Body>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Accuracy: 0.5</p>
                    <p> p-value: 0.97</p>
                   
                    </Accordion.Body>
                </Accordion.Item>
                 <Accordion.Item eventKey="3">
                    <Accordion.Header>PCA Plot</Accordion.Header>
                    <Accordion.Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="pca.jpeg" style={{width: "60vh", height: "60vh"}} alt="genomic"/>
                    </Accordion.Body>
                </Accordion.Item>
                 <Accordion.Item eventKey="0">
                    <Accordion.Header>OTU Abundance</Accordion.Header>
                    <Accordion.Body>
                        <ChunksTable data={page_content.abundance}></ChunksTable>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
            </Container>
            
            
            
        </>
        
    )
};

export default AnalysisPage;

