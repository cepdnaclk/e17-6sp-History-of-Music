import React,{useState} from "react";
import { FileUploader } from "react-drag-drop-files"
import { CProgressBar, CProgress, CButton } from '@coreui/react';
import axios from 'axios';

const fileTypes=['mp3'];
const DragDrops=(props)=> {
  let [state, setState]=useState([]);
        state = {
          title: '',
          content: '',
          image: null
        };

        //this.uploadFileToClient = this.uploadFileToClient.bind(this);
    
    
    const [files, setFiles]=useState([]);
    const [fileURLS, setFileURLS] = useState([]);
    var fileList = files 
    var urlList = fileURLS
    const uploadFileToClient = (event) => {
        setState({
          //log(event)
          // [event.target.id]: event.target.value,
          // image: event.target.files[0]
        })
        console.log(event)
        if (event) {
          fileList.push(event);
          urlList.push(URL.createObjectURL(event))
          setFiles(fileList);
          setFileURLS(urlList);
    
        }
        console.log(fileList)
        fileList.map((file, index) => {
            return (
            <div class="row ">
              
              <h6>{file.name}</h6>
              
            
            </div>);
          })
    };

    React.state = {
        file: null
    }
    const fileObj = [];
    const fileArray = [];
    const handleChange= file=>{
        setFile(file);
        console.log(file);
        fileObj.push(file);
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
       // setState({ file: fileArray })

        console.log(fileArray);
    };
    const uploadToServer = async (event) => {
        // const body = new FormData()
        // files.map((file, index) => {
        //   body.append(`file${index}`, file);
        // });
        
        // const response = await fetch("http://localhost:8000/api/posts/", {
        //   method: "POST",
        //   body
        // });
        console.log(state);
        let form_data = new FormData();
        form_data.append('image', state.image);
        form_data.append('title', state.title);
        form_data.append('content', state.content);
        let url = 'http://localhost:8000/api/posts/';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err))
    };
    return(
        <div id="upload_div">
            <FileUploader 
            handleChange={uploadFileToClient}
            name='file'
            types = {fileTypes} />
        <CButton type="submit" onClick={uploadToServer}  style={{marginLeft:'30%'}} shape="rounded-pill">Analyze music file(s)</CButton>      
          </div>
          
    )
}

export default DragDrops;