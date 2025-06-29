import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ToolsNavigation from './ToolsNavigation';
import MarkdownSandbox from './MarkdownSandbox';
import SocialStyleTest from './SocialStyleTest';

function ToolsIndex() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <IconButton 
          onClick={toggleSidebar}
          sx={{ 
            p: 1,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1
          }}
        >
          {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        {sidebarOpen && <ToolsNavigation />}
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="markdown" element={<MarkdownSandbox />} />
            <Route path="social-style" element={<SocialStyleTest />} />
            <Route path="*" element={<Navigate to="markdown" replace />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default ToolsIndex;
