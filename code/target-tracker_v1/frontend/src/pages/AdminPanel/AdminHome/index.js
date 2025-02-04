import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';

const imgStyle = {
    display: 'block',
    width: 42,
    height: 42,
};

const AdminDashboard = () => {
    const [responsive, setResponsive] = useState(false);

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

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
                            title: '支付金额',
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
                            title: '访客数',
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
                            title: '成功订单数',
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
                            title: '浏览量',
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
                欢迎来到管理员面板
            </h1>

            <div style={{
                padding: '10px',
                background: '#f5f5f5',
                border: '1px solid #ddd',
                marginBottom: '20px',
            }}>
                <p style={{ margin: 0, textAlign: 'center' }}>
                    系统公告：请注意系统将在今晚 12 点进行维护。
                </p>
            </div>

            <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                今天是 {currentDate}，当前时间 {currentTime}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <button style={{ margin: '0 10px' }}>用户管理</button>
                <button style={{ margin: '0 10px' }}>数据分析</button>
                <button style={{ margin: '0 10px' }}>系统设置</button>
            </div>
        </div>
    );
};

export default AdminDashboard;
