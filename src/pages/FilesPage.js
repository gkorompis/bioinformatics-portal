import React from 'react'
import Header from '../components/Header';
import ChunksTable from '../components/ChunksTable';
import {Container} from 'react-bootstrap';


const FilesPage = () => {
    const page_content = {
        fileList: [
            {Filename: "Abundance.xlsx", Created_Date:"2023-01-01", size: "10mb", Link: "download"},
            {Filename: "PCA_0.jpeg",Created_Date:"2023-01-01", size: "5mb", Link: "download"},
            {Filename: "PCA_1.jpeg",Created_Date:"2023-01-01", size: "5mb", Link: "download"},
            {Filename: "PCA_2.jpeg",Created_Date:"2023-01-01", size: "5mb", Link: "download"},
            {Filename: "PCA_3.jpeg",Created_Date:"2023-01-01", size: "5mb", Link: "download"},
            {Filename: "AlphaDiversity.xlsx",Created_Date:"2023-01-01", size: "7mb", Link: "download"},
            {Filename: "BetaDiversity.xlsx",Created_Date:"2023-01-01", size: "7mb", Link: "download"},
        ]
    };
    return (
        <>
        
            <Header/>
            <Container>
                <div className="content-wrapper">
                    <h1>Output Collections</h1>
                    <ChunksTable data={page_content.fileList}/>
                </div>
             </Container>
            
            
        </>
    )
}

export default FilesPage;