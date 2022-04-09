import React, { Component } from 'react'
import styles from './Body.module.css'
import About from './About/About'
import { Loading } from 'carbon-components-react'
import { FileUploader } from 'carbon-components-react'
import { CProgressBar, CProgress, CButton,CBadge } from '@coreui/react';
import { useRef,useState } from "react";
import  DragDrops  from '../Body/file-upload/fileUpload'
import axios from 'axios';

const Body = () =>{
    const [aboutRef, MainRef] = useRef()
    const [files, setFiles]=useState([])
    var [genreList, setgenreList]=useState([])
    var fileList = files
    var isEmpty= fileList.length > 0 ? false : true
    const sectionStyle = {
    
        paddingTop: '100px',
        alignItems: "center",
        justifyContent: "center"
    };
    
    const uploadToServer = async (event) => {
        let url = 'http://localhost:8000/upload/';
        let form_data = new FormData();
        console.log(fileList);
        console.log(fileList[0]);
        form_data.append('title', fileList[0].name);
        form_data.append('file', fileList[0]);
        axios.post(url, form_data, {
            headers: {
            'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res.data);
            setgenreList(res.data.prediction);
        })
        .catch(err => console.log(err))
    }
    const RemoveFileToClient= (event) => {
        console.log(event.nativeEvent.path[3].innerText);
        fileList = fileList.filter(item => item.name !== event.nativeEvent.path[3].innerText)
        setFiles(fileList);
        console.log(fileList);
        isEmpty= fileList.length > 0 ? false : true
    }
    const uploadFileToClient = (event) => {
        console.log(event.target.files[0]);
        if (event) {
            fileList.push(event.target.files[0]);
            //urlList.push(URL.createObjectURL(event))
            setFiles(fileList);
            //setFileURLS(urlList);
            isEmpty= fileList.length > 0 ? false : true
        }
        console.log(fileList);
    }
    return (
        <div className={styles.container}>
        {/*<DragDrops />*/}
        
        <section ref={MainRef} id="analyzer" style={{ ...sectionStyle }}>
        <div className="bx--file__container" style={{padding:'10px', marginBottom:'10px', backgroundColor:'#fff', 
        border:'3px dashed black', margin:'0px'}}>
            <FileUploader
            accept={[
                '.mp3',
                '.wav'
            ]}
            buttonKind="primary"
            buttonLabel="Add files"
            filenameStatus="edit"
            iconDescription="Clear file"
            labelDescription="only .mp3 files at 500mb or less"
            labelTitle="Upload"
            multiple={true}
            style={{marginLeft:'35%'}}
            onChange={uploadFileToClient}
            onDelete={RemoveFileToClient}
            />
            {/* <p>{JSON.stringify(fileList)}</p>
            <p>{JSON.stringify(genreList)}</p> */}
            <CButton type="submit" className={styles.btn_grad} onClick={uploadToServer} disabled={isEmpty}  style={{marginLeft:'30%'}} shape="rounded-pill">Analyze music file(s)</CButton>      
            <CProgress className="center">
                <CProgressBar color="success" variant="striped" animated  value={100} >Analysing...</CProgressBar>
            </CProgress>
            <h5>Genre : <CBadge color="primary">{JSON.stringify(genreList)}</CBadge></h5>
            {/* {genres.map(genre => (
              <h6>{`${genre}`}</h6>
            ))} */}
        </div>
        
        </section>
        {/* <Loading description="Loading indicator" withOverlay={false} style={{marginLeft:'35%'}} /> */}
        <section ref={aboutRef} id="about" style={{ ...sectionStyle }}>
            <About />
        </section>
        </div>
       
    )
    
}


export default Body
