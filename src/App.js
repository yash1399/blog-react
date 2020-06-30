import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import BlogCreation from './components/BlogCreation';
import BlogList from './components/BlogsList'; 

import './App.css';


import { Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  EditOutlined
  
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class BlogMenu extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<EditOutlined/>} title="Create Blog">
              <Link to='/'>
                Create Blog
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />} title="View Blogs">
              <Link to='/view-blog'>
                View Blog
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route exact path='/'> 
                <div className="App-header">
                  <BlogCreation ></BlogCreation>
                </div>`
              </Route>
              <Route path='/view-blog'>
                <BlogList></BlogList>
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Its Lit Designs @2020</Footer>
        </Layout>
      </Layout>
    );
  }
}

function App() {
  return (
    
    <div className="App">
     <BlogMenu/>
    </div>
  );
}

export default App;
