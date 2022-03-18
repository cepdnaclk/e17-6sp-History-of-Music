import React, { Component } from 'react'
import styles from './Body.module.css'
import About from './About/About'
import { Loading } from 'carbon-components-react'
import { FileUploader } from 'carbon-components-react'
import { CProgressBar, CProgress, CButton } from '@coreui/react';
// import { MultipleFileUploadField } from './file-upload/MultipleFileUploadField.tsx'
class Body extends Component {
    render() {
        return (
            <div className={styles.container}>
            {/* <DragDrop /> */}
            {/* <MultipleFileUploadField name="files" /> */}
            <div className="bx--file__container" style={{padding:'40px', marginBottom:'20px', backgroundColor:'#fff', 
            border:'3px dashed black'}}>
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
                />
                <CButton type="submit" className={styles.btn_grad} style={{marginLeft:'30%'}} shape="rounded-pill">Analyze music file(s)</CButton>      
                <CProgress className="center">
                    <CProgressBar value={25}>25%</CProgressBar>
                </CProgress>
            </div>
            {/* <Loading description="Loading indicator" withOverlay={false} style={{marginLeft:'35%'}} /> */}
            
                <About />

            </div>
        )
    }
}

export default Body
