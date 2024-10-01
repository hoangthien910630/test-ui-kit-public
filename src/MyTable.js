import React from 'react';
import { Table } from 'antd';

export const MyTable = ({ columns, dataSource }) => {
  if (!columns || columns.length === 0 || !dataSource || dataSource.length === 0) {
    return <div>No data</div>;
  }

  return (
    <Table columns={columns} dataSource={dataSource} />
  );
};
