import React,{useState} from "react";
import { FileUploader } from "react-drag-drop-files"
import { CProgressBar, CProgress, CButton } from '@coreui/react';
import axios from 'axios';

export async function getServerSideProps() {
  const { data } = await axios.get('https://cepdnaclk.github.io/e17-co328-History-of-Music/data/index.json',{
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    },
  })
  const genres = await data.json()

  // Pass data to the page via props
  return { props: { genres } }
  
}
const fileTypes=['mp3'];
const DragDrops=({genres})=> {
  const [ title, setTitle ] = useState("");
  const [ cover, setCover ] = useState();

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
          fileList.push(event.target.files[0]);
          //urlList.push(URL.createObjectURL(event))
          setFiles(fileList);
          //setFileURLS(urlList);
    
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
    const handleChange= (event)=>{
        setFile(file);
        setTitle(event.name)
        //setCover
        // console.log(file);
        // fileObj.push(file);
        // for (let i = 0; i < fileObj[0].length; i++) {
        //     fileArray.push(URL.createObjectURL(fileObj[0][i]))
        // }
       // setState({ file: fileArray })

        console.log(event.target.files);
    };
    const uploadToServer = async (event) => {
        // const body = new FormData()
        // files.map((file, index) => {
        //   body.append(`file${index}`, file);
        // });
        
        // const response = await fetch("http://localhost:8000/api/posts/1", {
        //   method: "GET",
        // });
        // console.log(response);
        const token = localStorage.getItem('token');
        for (let i = 0; i < fileList.length; i++) {
          let uploadData = new FormData();
          console.log(fileList[i]);
          uploadData.append('title', "test");
         // uploadData.append('cover', fileList[i]);
      
        //   fetch('http://localhost:8000/api/posts/', {
        //     method: 'POST',
        //     body: uploadData,
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //       authorization: token
        //   }
        //   })
        //   .then( res => console.log(res))
        //   .catch(error => console.log(error))
    
        }
        let url = 'http://localhost:8000/api/posts/';
        //axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        //axios.defaults.xsrfCookieName = "csrftoken";
        // axios.post(url , { title: 'user', password: 'asdasdasd'})
        //   .then(rv => {
        //     console.log('Login', rv)
            
        //   })
        //   .catch(err => {
        //     console.log('Login error', err.response)
        //   })
        axios.get('http://127.0.0.1:8000/api/posts/1',{
          // headers: {
          //   'Access-Control-Allow-Origin' : '*',
          // },
        }).then(resp => {
          console.log('Response', resp)
        }).catch(err => {
          console.log('Error', err.response)
        });

        //console.log(cover);
        
        // 
        // axios.post(url, form_data, {
        //   headers: {
        //     'content-type': 'multipart/form-data'
        //   }
        // })
        //     .then(res => {
        //       console.log(res.data);
        //     })
        //     .catch(err => console.log(err))
    };
    return(
        <div id="upload_div">
        <input type="file" id="file-selector" onChange={uploadFileToClient} accept=".mp3" multiple />
            <FileUploader 
            handleChange={handleChange}
            name='file'
            types = {fileTypes} />
            {/* {genres.map(genre => (
              <h6>{`${genre}`}</h6>
            ))} */}
            <h6>{`${genres}`}</h6>
            <CButton type="submit" onClick={uploadToServer}  style={{marginLeft:'30%'}} shape="rounded-pill">Analyze music file(s)</CButton>      
        </div>
          
    )
}
// (evt) => setCover(evt.target.files[0])


export default DragDrops;