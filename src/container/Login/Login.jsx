import React from "react";
import styled from "styled-components";
import loginImg from "image/login-img.png";
import { Logo } from "components/Logo";
import { colors } from "colors";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';



const StyledLogin = styled.div`
  height: 100%;
  background-image: linear-gradient(90deg, #ffffff 0%, #bbaaff 66.67%);
  display: flex;
  .content-left {
    margin-top: 40px;
    margin-left: 200px;
    display: flex;
    flex-direction: column;
    width: 450px;
  }
  .content-right {
    canvas {
      width: 1000px;
    }
    background-image: url("${loginImg}");
  }
  .input_group_label {
    margin-bottom: 10px;
    min-width: 120px;
    display: inline-block;
  }
  .input_group {
    margin-bottom: 30px;
  }
  .input_group_pass {
    position: relative;
  }
  .forgot-label {
    position: absolute;
    color: #ccc;
    top: -20px;
    right: 28%;
  }
  .input_pass::before {
    content: "";
    display: inline-block;
    background: url("./images/clarity_eye-hide-line.svg") center no-repeat
      transparent;

    height: 30px;
    width: 30px;
    position: relative;
    top: -6px;
    right: 40px;
  }
  .input_group input {
    width: 420px;
    height: 46px;
    border-radius: 5px;
    border: #c0dbea solid 1px;
    padding-left: 10px;
    font-weight: 600;
  }
  .title-login {
    font-size: 40px;
    font-weight: 700;
  }
  .social {
    display: flex;
    justify-content: space-between;
    width: 72%;
    margin-top: 16px;
  }
  .social-btn {
    text-align: center;
    border: #c0dbea solid 1px;
    border-radius: 40px;
    width: 125px;
    height: 50px;
    background-color: #fff;
    cursor: pointer;
  }
  .social-btn:hover {
    transform: scale(1.1);
  }
  .para-with {
    /* margin-left: 150px; */
    color: ${colors.primary};
  }
  .signup {
    width: 70%;
    display: flex;
    justify-content: center;
  }
  .signup1 {
    color: #ccc;
    margin-right: 10px;
  }
  .signup2 {
    color: ${colors.primary};
    cursor: pointer;
  }
  .image {
    display: flex;
  }
`;


const Login = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch.auth.setUsername(values.username);
        navigate('/');

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <StyledLogin>
            <div className="content-left">
                <Logo />
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                <div className="social">
                    <button className="social-btn">
                        <img src="./asset/images/Google.svg" alt="" />
                    </button>
                    <button className="social-btn">
                        <img src="./asset/images/Vector (6).svg" alt="" />
                    </button>
                    <button className="social-btn">
                        <img src="./asset/images/Vector (7).svg" alt="" />
                    </button>
                </div>
                <div className="signup">
                    <p className="signup1">Don't have an account yet?</p>
                    <p className="signup2">Sign up for free</p>
                </div>
            </div>
            <div className="content-right">
            </div>
        </StyledLogin>
    );
};
export default Login;