import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined, SnippetsOutlined, UserOutlined, CarryOutOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminStatistic = () => {


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
          return total > 0 ? `${Math.min((progress / total) * 100, 100).toFixed(2)}%` : "0.00%";
        };

        const count_processing_targets = response.data.filter(target => getProgressPercentage(target) !== "100.00%").length;

        const count_completed_targets = response.data.filter(target => getProgressPercentage(target) === "100.00%").length;


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

  

    return (
        <Row gutter={16}>
          <Col span={6}>
            <Card variant="borderless">
              <Statistic
                title="Total users"
                value={statisticData.totalUsers}
                valueStyle={{ color: '#faad14' }}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card variant="borderless">
              <Statistic
                title="Total targets"
                value={statisticData.totalTargets}
                valueStyle={{ color: '#1890ff' }}
                prefix={<SnippetsOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card variant="borderless">
              <Statistic
                title="processing targets"
                value={statisticData.processingTargets}
                valueStyle={{ color: '#cf1322' }}
                prefix={<FieldTimeOutlined />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card variant="borderless">
              <Statistic
                title="completed targets"
                value={statisticData.completedTargets}
                valueStyle={{ color: '#3f8600' }}
                prefix={<CarryOutOutlined />}
              />
            </Card>
          </Col>
        </Row>
      )
};
export default AdminStatistic;