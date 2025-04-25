import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GradientPill.css';

const GradientPill = ({ 
  children,
  icon,
  iconPosition = 'left', 
  width = 'auto',
  minWidth = 212,
  height = 38,
  padding = '10px 20px',
  gap = 6,
  borderRadius = 48,
  className = '',
  style = {},
  ...props
}) => {
  const pillStyle = {
    minWidth: `${minWidth}px`,
    width,
    height: `${height}px`,
    padding,
    gap: `${gap}px`,
    borderRadius: `${borderRadius}px`,
    ...style
  };

  return (
    <div 
      className={`gradient-pill ${className}`} 
      style={pillStyle}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="gradient-pill-icon">{icon}</span>
      )}
      <span className="gradient-pill-text">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="gradient-pill-icon">{icon}</span>
      )}
    </div>
  );
};

GradientPill.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.string,
  gap: PropTypes.number,
  borderRadius: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
};

export default GradientPill;