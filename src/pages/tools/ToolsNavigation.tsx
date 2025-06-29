import { Link, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const toolLinks = [
  { to: '/tools/markdown', label: 'Markdownサンドボックス' },
  { to: '/tools/social-style', label: 'ソーシャルスタイル診断' },
];

const ToolsNavigation = () => {
  const location = useLocation();
  return (
    <Paper 
      elevation={1} 
      sx={{ 
        width: 250, 
        minHeight: '60vh',
        p: 2
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        ツール一覧
      </Typography>
      <List disablePadding>
        {toolLinks.map((link) => (
          <ListItem key={link.to} disablePadding>
            <ListItemButton
              component={Link}
              to={link.to}
              selected={location.pathname === link.to}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemText 
                primary={link.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: location.pathname === link.to ? 'bold' : 'normal'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ToolsNavigation;
