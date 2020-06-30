import React, { Component } from 'react';
import axios from 'axios';
import { Card,Col, Row } from 'antd';
import './BlogList.css';

class BlogList extends Component {
    state = { 
        res: null,
        loading: true
    }

    componentDidMount() {
        axios.get('http://localhost:3012/bloglist')
        .then((res) => {
            console.log('Response', res.data); 
            this.setState({res: res.data, loading: false}); 
        })
        .catch((error) => {
            console.log('Error', error)
        })
    }

    render() {
        const {res, loading} =  this.state;
        if(loading){
            if(loading){
                return(
                    <p>Loading...</p>
                )
            }
        }
        return (
            <>
                {res.map( (blog) => {return(
                     <div className="site-card-wrapper margin">
                     <Row gutter={10}>
                       <Col span={6}>
                       <Card className="marign"title={<h1>{blog.title}</h1>} style={{ width: "100vh" }}>
                        <p>{blog.textArticle}</p>
                        </Card>
                       </Col>
                     </Row>
                   </div>
                    
                    
                )})}
       
        </>);
    }
}

export default BlogList;