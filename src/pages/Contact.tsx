import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Contact() {
  return (
    <Box 
      sx={{ 
        maxWidth: 700, 
        width: '100%', 
        mx: 'auto', 
        mt: 4, 
        p: 4 
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          minHeight: '60vh', 
          borderRadius: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center' 
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          お問い合わせ
        </Typography>
        <Typography variant="body1" paragraph>
          ご質問・ご連絡は下記メールアドレスまでお願いします。
        </Typography>
        <Typography variant="h6" component="p" gutterBottom fontWeight="bold">
          sample@example.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ※実際の運用時はフォームやSNSリンクも追加可能です。
        </Typography>
      </Paper>
    </Box>
  );
}

export default Contact;
