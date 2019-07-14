import React from 'react'
import {Route,Switch} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import img from './img/logo.png'
import './login.less'
export default class Login extends React.Component{
    render(){
    return(
    <div className='hou1'>
        <div className='hou2'>
        <img src={img} alt="11"/>
        <h1>你好傻侯</h1>
        </div>
        <div className='hou3'>
            <div className='hou4'>
            <h1>武当山螳螂腿</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
        <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户"
            />
        </Form.Item>
        <Form.Item>
           <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
        </Form.Item>
        <Form.Item>
        
          <Button type="primary" htmlType="submit" className="login-form-button">
         登录
          </Button>
       
        </Form.Item>
      </Form>
            </div>

        </div>
    </div>
    )
    }
    }