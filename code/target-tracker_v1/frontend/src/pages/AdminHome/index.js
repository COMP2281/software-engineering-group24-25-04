import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const imgStyle = {
    display: 'block',
    width: 42,
    height: 42,
};

const AdminDashboard = () => {
    const [responsive, setResponsive] = useState(false);

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const navigate = useNavigate()

    const onTargetManagementClick = () =>{
        navigate('/admin/target')
    }

    return (
        <div style={{ padding: '20px' }}>
            <RcResizeObserver
                key="resize-observer"
                onResize={(offset) => {
                    setResponsive(offset.width < 596);
                }}
            >
                <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
                    <StatisticCard
                        statistic={{
                            title: 'Payment Amount',
                            value: 2176,
                            icon: (
                                <img
                                    style={imgStyle}
                                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                                    alt="icon"
                                />
                            ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                            title: 'Visitor Count',
                            value: 475,
                            icon: (
                                <img
                                    style={imgStyle}
                                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                                    alt="icon"
                                />
                            ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                            title: 'Successful Orders',
                            value: 87,
                            icon: (
                                <img
                                    style={imgStyle}
                                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                                    alt="icon"
                                />
                            ),
                        }}
                    />
                    <StatisticCard
                        statistic={{
                            title: 'Page Views',
                            value: 1754,
                            icon: (
                                <img
                                    style={imgStyle}
                                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                                    alt="icon"
                                />
                            ),
                        }}
                    />
                </StatisticCard.Group>
            </RcResizeObserver>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Welcome to the Admin Dashboard
            </h1>

            <div style={{
                padding: '10px',
                background: '#f5f5f5',
                border: '1px solid #ddd',
                marginBottom: '20px',
            }}>
                <p style={{ margin: 0, textAlign: 'center' }}>
                    System Announcement: Please note that the system will undergo maintenance at 12 AM tonight.
                </p>
            </div>

            <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                Today is {currentDate}, and the current time is {currentTime}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <button style={{ margin: '0 10px' }}>User Management</button>
                <button style={{ margin: '0 10px' }}>Data Analysis</button>
                <button style={{ margin: '0 10px' }} onClick={onTargetManagementClick}>Target Management</button>
                <button style={{ margin: '0 10px' }}>System Settings</button>
            </div>
        </div>
    );
};

export default AdminDashboard;
