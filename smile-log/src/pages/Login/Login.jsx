import React, { Component } from 'react'
import {Card,Form, Icon, Input, Button, Checkbox,message} from 'antd'
import './Login.less'
export class Login extends Component {
   login=(e)=>{
      // this.props.history.push("/admin/456")
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (err) {
               message.error('用户信息错误 请重试', 1, ()=>{
            })
         }else{
            message.success('登陆成功3s后自动跳转',3,()=>{
               // console.log(this)
               this.props.history.push("/home/goods")
            })
        }
      })
   }
  render() {
     const { getFieldDecorator } = this.props.form;
    return (
      <Card title='Login' style={{width:'300px'}} id="card">
         <Form>
            <Form.Item>
               {getFieldDecorator(
                  "username",{
                     rules:[{required:true,message:'用户名不能为空'},
                      {min:3,message:'不能少于3位'},
                      {max:10,message:'不能大于10位'}
                    ]
                  }
               )(
               <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
               )}
            </Form.Item>
            <Form.Item>
               {getFieldDecorator(
                  "password",{
                     rules:[{required:true,message:'密码不能为空'},
                      {min:3,message:'不能少于3位'},
                      {max:10,message:'不能大于10位'}
                    ]
                  }
               )(
               <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
               )}
            </Form.Item>
            <Form.Item>
               <Button onClick={this.login}>登陆</Button>
            </Form.Item>
         </Form>
      </Card>
    )
  }
}

export default Form.create({ name: 'normal_login' })(Login)
