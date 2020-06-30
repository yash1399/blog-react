import React, { useState} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button} from 'antd';
import axios from 'axios';  
import './BlogCreation.css';
const { TextArea } = Input;


const BlogCreation = () => {

    const [title, setTitle] = useState('');
    const [textArticle, settextArticle ] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault(); 
        const response = await axios.post('http://localhost:3012/blog', { 
            title,
            textArticle
        })
        console.log(response);
        alert("Blog created successfully!. To view it click on 'View Blog '")
        return(
            <p>Success</p>
        )
    }

    



    return (
        <div className= "box"> 
            <h1 style={{textAlign:"center"}}>Blog Creation</h1>
            <form onSubmit={onSubmit}>
                <Form>
                    <Form.Item
                        label="Blog Title "
                        name="title " 
                        rules={[{ required: true, message: 'Please input your blog title' }]}
                    >
                        <Input style={{width: 500 }} value={title}
                        onChange={(e) => {setTitle(e.target.value)}}/>
                    </Form.Item>

                    <Form.Item
                        label="Text-Contert"
                        name="Content"  
                        rules={[{ required: true, message: 'Please add your content' }]}
                    >
                        <TextArea  rows={4} value={textArticle}
                        onChange={(e) => {settextArticle(e.target.value)}}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={onSubmit}> Submit</Button>
                    </Form.Item>
                </Form>
            </form>  
        </div>
    );
}

export default BlogCreation;
