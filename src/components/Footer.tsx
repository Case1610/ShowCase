
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box component="footer" py={4} textAlign="center" color="text.secondary" mt="auto">
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} My Portfolio
    </Typography>
  </Box>
);

export default Footer;
