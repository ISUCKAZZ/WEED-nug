import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './styles.css';

const generateMatrixChars = () => {
  const chars = '0123456789ABCDEF';
  let lines = [];

  for (let i = 0; i < 10; i++) {
    let line = '';
    for (let j = 0; j < 10; j++) {
      line += chars[Math.floor(Math.random() * chars.length)];
    }
    lines.push(line);
  }

  return lines.join('\n');
};

const MatrixPanel = ({ colorClass }) => {
  const [text, setText] = useState(generateMatrixChars());

  useEffect(() => {
    const interval = setInterval(() => {
      setText(generateMatrixChars());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`matrix-panel ${colorClass}`}>
      <pre className="matrix-chars">{text}</pre>
    </div>
  );
};

export default function SpinningNug() {
  return (
    <div className="nug-container">
      <motion.div
        className="nug-grid"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        <MatrixPanel colorClass="red" />
        <MatrixPanel colorClass="green" />
        <MatrixPanel colorClass="blue" />
        <MatrixPanel colorClass="yellow" />
      </motion.div>
    </div>
  );
}
