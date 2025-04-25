import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined, SnippetsOutlined, UserOutlined, CarryOutOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Button, Typography, Space } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Pie, Column } from '@ant-design/plots';


const { Title, Paragraph } = Typography;

const AdminStatistic = () => {

  const navigate = useNavigate();

  const [userRoleData, setUserRoleData] = useState([
    { type: 'manager', value: 0 },
    { type: 'user', value: 0 },
  ])

  const [progressData, setProgressData] = useState([
    { type: '0-25%', value: 0 },
    { type: '25-50%', value: 0 },
    { type: '50-75%', value: 0 },
    { type: '75-100%', value: 0 },
    { type: '100%', value: 0 },
  ])


  const [statisticData, setStatisticData] = useState({
    totalUsers: 0,
    totalTargets: 0,
    processingTargets: 0,
    completedTargets: 0
  });

  useEffect(() => {
    const fetchTargets = async () => {
      try {
        // Fetch all users
        const response_users = await axios.get('http://localhost:4000/user');
        console.log('用户信息', response_users)
        const count_users = response_users.data.length;
        const managers = response_users.data.filter(user => user.role === 'manager').length;
        const users = response_users.data.filter(user => user.role === 'user').length;
        console.log('管理员数量', managers)
        console.log('普通用户数量', users)

        setUserRoleData([
          { type: 'manager', value: managers },
          { type: 'user', value: users },
        ])
        console.log('用户角色数据', userRoleData)
        
        // Fetch all targets
        const response = await axios.get('http://localhost:4000/targets');
        const count_targets = response.data.length;

        const extractTotal = (str) => {
          if (!str) return 1; // Default to 1 if the string is empty or undefined
          const match = str.match(/\d+/);
          return match ? parseInt(match[0], 10) : 1; // Default to 1 if no numbers are found
        };
      
        // Calculate the progress percentage for a target.
        const getProgressPercentage = (target) => {
          const targetsSetField = target.fields.find(field => field.id === 'target-targets_set');
          const total = extractTotal(targetsSetField?.value);
          const progress = target.progress || 0;
          return total > 0 ? Math.min((progress / total) * 100, 100) : 0;
        };

        const count_processing_targets = response.data.filter(target => getProgressPercentage(target) !== 100).length;
        const count_completed_targets = response.data.filter(target => getProgressPercentage(target) === 100).length;

        setStatisticData({
          totalUsers: count_users,
          totalTargets: count_targets,
          processingTargets: count_processing_targets,
          completedTargets: count_completed_targets
        });

  
      } catch (error) {
        console.error("Error fetching targets:", error);
      }
    };
  
    fetchTargets();
  }, [])

  const handleBackToDashboardClicked = () => {
    navigate(-1);
  }

    return (
      <div style={{padding: '20px', background:'#f5f5f5', minHeight: '100vh'}}>
        <Button type='primary' onClick={handleBackToDashboardClicked} style={{ marginBottom: '20px' }}>
          Back to Dashboard
        </Button>
        <Typography style={{ marginBottom: '20px' }}>
          <Title level={2}>System data statistics</Title>
          <Paragraph>Real time statistics on the completion status of users and targets</Paragraph>
        </Typography>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col span={6}>
            <Card variant="borderless" hoverable>
              <Statistic
                title={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Total users</span>}
                value={statisticData.totalUsers}
                valueStyle={{ color: '#faad14' }}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card variant="borderless" hoverable>
              <Statistic
                title={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Total targets</span>}
                value={statisticData.totalTargets}
                valueStyle={{ color: '#1890ff' }}
                prefix={<SnippetsOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card variant="borderless" hoverable>
              <Statistic
                title={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Processing targets</span>}
                value={statisticData.processingTargets}
                valueStyle={{ color: '#cf1322' }}
                prefix={<FieldTimeOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card variant="borderless" hoverable>
              <Statistic
                title={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Completed targets</span>}
                value={statisticData.completedTargets}
                valueStyle={{ color: '#3f8600' }}
                prefix={<CarryOutOutlined />}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col span={12} style={{ marginTop: '20px' }}>
            <Card title="User Role Distribution" variant="borderless" hoverable style={{ background: '#fff', padding: '20px' }}>
              <Pie
                angleField={'value'}
                colorField={'type'}
                data={userRoleData}
                radius={0.8}
                style={{ height: '400px' }}
                lengend={{
                  position: 'bottom',
                }}
                tooltip={false}
              />
            </Card>
          </Col>
        </Row>
        {/* <Button type='primary' onClick={()=>{console.log(userRoleData)}} style={{ marginTop: '20px' }}>console</Button> */}
      </div>
      )
};
export default AdminStatistic;