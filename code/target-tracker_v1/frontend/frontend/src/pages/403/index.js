import React from 'react';
import { Button, Result } from 'antd';
import {useNavigate} from "react-router-dom";
const Forbidden = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/home')
    }

    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" onClick={onClick}>Back Home</Button>}
        />
    )
}

export default Forbidden;