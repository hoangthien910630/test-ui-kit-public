import React from 'react';
import { Input } from 'antd';

const InputComponent = ({ onChange, value }) => {
  return (
    <Input
      placeholder="Input data"
      value={value}
      onChange={onChange}
      data-testid="ant-input"
    />
  );
};

export default InputComponent;
