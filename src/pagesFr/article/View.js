import React from 'react';
import BasicLayout from '../components/BasicLayout';
import Article from '../components/Article';
import { Card } from 'antd';
export default props => {
  console.log('props', props);
  const BreadcrumbList = [{ name: '首页', href: '/home' }, { name: '博文' }];
  return (
    <BasicLayout BreadcrumbList={BreadcrumbList}>
      <Card
        bordered={false}
        size="small"
        style={{ marginBottom: 4, padding: 0, opacity: 0.8 }}
        className="componentWillCreate"
      >
        qq
      </Card>
      <Article></Article>
    </BasicLayout>
  );
};
