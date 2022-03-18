import React, { Component } from 'react'
import styles from './Body.module.css'
import About from './About/About'
import FileUpload from '../file-upload/file-upload.component'
import Events from './Events/Events'
import NewsLetter from './NewsLetter/NewsLetter'

class Body extends Component {
    render() {
        return (
            <div className={styles.container}>
                <FileUpload />
                <About />
                <Events />
                <NewsLetter />
            </div>
        )
    }
}

export default Body
