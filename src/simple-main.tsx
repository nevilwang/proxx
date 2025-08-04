import { h, render } from 'preact';

// 简化的主组件，用于测试预览
function SimpleApp() {
  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to bottom, rgb(54, 49, 176), rgb(14, 16, 62))',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace'
    }}>
      <h1 style={{ fontSize: '3rem', margin: '0 0 2rem 0' }}>PROXX</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6' }}>
        A game of proximity - Help your crew navigate space by marking out the black holes using proxx, your proximity scanner.
      </p>
      <div style={{ 
        marginTop: '2rem',
        padding: '1rem 2rem',
        border: '2px solid white',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = 'transparent';
      }}>
        Start Game (Coming Soon)
      </div>
    </div>
  );
}

// 渲染应用
const container = document.querySelector('.app');
if (container) {
  render(<SimpleApp />, container);
}