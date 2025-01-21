
import email_icon from "../../assets/email.png"
import password_icon from '../../assets/password.png'
import "./index.scss"
import {Button, Form, message} from "antd"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLoginStatus, setUserInfo, setUserRole} from "../../store/modules/user";
import {request} from "../../utils"

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const finishHandler = (values) =>{
        console.log("values", values)
        const data = {
            username:values.email,
            password:values.password
        }
        request.post("/login", data)
            .then((res) => {
                if(res.status === 200){
                    // console.log("请求成功")
                    // console.log("res", res)
                    const userRole = res.data?.user.role
                    if(userRole === 'admin'){
                        navigate('/admin/home')
                    }else{
                        navigate("/home")
                    }
                    message.success("登录成功")
                    // dispatch(setUserInfo(res.data?.user))
                    dispatch(setLoginStatus('true'))
                    dispatch(setUserRole(userRole))
                }else{
                    message.error(res.data.message || "登录失败")
                }
            })
            .catch((err) => {
                message.error("登录失败，请重试")
                console.log('登录失败，错误信息', err)
            })

    }
    const clickHandler = () =>{
        // console.log("click")
        navigate('/register')
    }

    return (
        <div className='login'>
            <div className='background'></div>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Log In</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <Form onFinish={finishHandler}>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <div className='input'>
                                <img src={email_icon} alt='' />
                                <input id = "email" type='email' placeholder='Email ID'/>
                            </div>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <div className='input'>
                                <img src={password_icon} alt='' />
                                <input id = "password" type='password' placeholder='Password'/>
                            </div>
                        </Form.Item>
                        <Form.Item label={null}>
                            <div className="submit-container">
                                <Button type="primary" htmlType="submit" className={"submit"}>
                                    Login
                                </Button>
                            </div>

                            {/*<div className="submit-container">*/}
                            {/*    <div className={"submit"}>Sign Up</div>*/}
                            {/*    <div className={"submit"}>Login</div>*/}
                            {/*    /!*<div className="submit">Submit</div>*!/*/}
                            {/*</div>*/}
                        </Form.Item>
                    </Form>
                </div>


                <div className="forgot-password">
                    Forgot Password?
                    <span onClick={clickHandler}>Click Here</span>
                </div>




            </div>
        </div>
    )
}

export default Login
