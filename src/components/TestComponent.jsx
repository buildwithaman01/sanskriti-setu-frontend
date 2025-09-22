import React from 'react';

const TestComponent = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ color: '#E98A19' }}>SanskritiSetu Test</h1>
      <p>✅ React is working!</p>
      <p>✅ Development server is running!</p>
      <p>✅ Components are loading!</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/marketplace" style={{ color: '#E98A19', textDecoration: 'none', fontWeight: 'bold' }}>
          → Go to Marketplace
        </a>
      </div>
      <div style={{ marginTop: '10px' }}>
        <a href="/community" style={{ color: '#E98A19', textDecoration: 'none', fontWeight: 'bold' }}>
          → Go to Community
        </a>
      </div>
    </div>
  );
};

export default TestComponent;
