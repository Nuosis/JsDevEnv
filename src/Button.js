import React from 'react';
import Button from '@mui/material/Button';

// Props could include `label`, `onClick`, `color`, `variant`, `disabled`, etc.
const CustomButton = ({ label, onClick, color = 'primary', variant = 'contained', disabled = false, size = 'small', startIcon = null }) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
