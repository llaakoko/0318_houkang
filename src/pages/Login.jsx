import React from 'react'
import {Route,Switch} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import img from './img/logo.png'
import './login.less'
 class Login extends React.Component{




  handleSubmit = e =>{
    //阻止事件默认行为：阻止表单的提交
    e.preventDefault()



    //取出输入的相关数据
  //  const form = this.props.form
  //  const values = form.getFieldsValue()
  //  const username = form.getFieldValue('username')
  //  const password = form.getFieldValue('password')
  //  console.log(values,username,password)


  //对表单所有字段进行统一验证
  this.props.form.validateFields((err, {username,password}) => {
    if (!err) {
      alert(`登录的ajax请求，username = ${username},password=${password}`)
    }else{
     // alert('验证失败！')
    }
  })
  }

validatePwd = (rule, value, callback) =>{
   value = value.trim()
  if(!value){
    callback('武当山密码必须输入')
  }else if (value.length<4){
    callback('武当山密码不能小于4位')
  }else if (value.length>12){
    callback('武当山密码不能大于12位')
  }else if (!/^[a-zA-Z0-9_]+$/.test(value)){
    callback('武当山密码必须是英文丶数字或下划线组成')
  }else{
    callback()//验证通过
  }
}

    render(){


      const { getFieldDecorator } = this.props.form;
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
        {
          getFieldDecorator('username',{//配置对象：属性名是一些特定的名称
            initialValue: '', //初始值
            rules: [//声明式验证：使用插件已定义好的规则进行验证
              { required: true, whitespace:true, message: '武当山用户名必须'},
              {min:4,message:'武当山用户名不能小于4位'},
              {max:12,message:'武当山用户名不能小大于12位'},
              {pattern:/^[a-zA-Z0-9_]+$/,message:'武当山用户名必须是英文丶数字或下划线组成'},
                   ]
        })(
          <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="武当山用户"
            />
        )
        }
        
        </Form.Item>
        <Form.Item>
        {
          getFieldDecorator('password',{
            initialValue: '', //初始值
            rules: [
              {
                validator:this.validatePwd
              }
            ]
        })(
          <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="武当山密码"
        />
        )
        }
        
         
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


    const WrapperForm = Form.create()(Login)

    export default WrapperForm