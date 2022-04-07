import React, { Component } from 'react'
import styles from './Body.module.css'
import About from './About/About'
import { Loading } from 'carbon-components-react'
import { FileUploader } from 'carbon-components-react'
import { CProgressBar, CProgress, CButton } from '@coreui/react';
import { useRef,useState } from "react";
import  DragDrops  from '../Body/file-upload/fileUpload'
// import { MultipleFileUploadField } from './file-upload/MultipleFileUploadField.tsx'

const Body = () =>{
    const [aboutRef, MainRef] = useRef()
    const [file, setFile]=useState('')
    const sectionStyle = {
    
        paddingTop: '100px',
        alignItems: "center",
        justifyContent: "center"
      };
    return (
        <div className={styles.container}>
        <DragDrops />
        {/* <MultipleFileUploadField name="files" /> */}
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
            onChange={(e)=>setFile(e.target.value)}
            />
            <CButton type="submit" className={styles.btn_grad} onClick={submitFile}  style={{marginLeft:'30%'}} shape="rounded-pill">Analyze music file(s)</CButton>      
            <CProgress className="center">
                <CProgressBar value={25}>25%</CProgressBar>
            </CProgress>
        </div>
        </section>
        {/* <Loading description="Loading indicator" withOverlay={false} style={{marginLeft:'35%'}} /> */}
        <section ref={aboutRef} id="about" style={{ ...sectionStyle }}>
            <About />
        </section>
        </div>
       
    )
    
}
const submitFile= async()=>{
    const response= await fetch('http://localhost:8000/analyze',{
        method: 'POST',
        body: JSON.stringify({filename: 'test.mp3'}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
}

export default Body
