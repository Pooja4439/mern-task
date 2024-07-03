// src/components/FlowChart.js
import React from 'react';
import ReactFlow from 'react-flow-renderer';

const FlowChart = ({ elements, onElementsRemove, onConnect }) => {
  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
    />
  );
};

export default FlowChart;
