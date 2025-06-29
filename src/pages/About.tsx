

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

function About() {
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
          自己紹介
        </Typography>
        <Typography variant="body1" paragraph>
          このポートフォリオサイトは、写真ギャラリーや自己紹介、連絡先などを掲載するために作成しています。
        </Typography>
        <Box sx={{ mt: 4, mb: 4 }}>
          <List>
            <ListItem>
              <ListItemText primary="ギャラリー：撮影した写真を一覧表示" />
            </ListItem>
            <ListItem>
              <ListItemText primary="404ページ：存在しないページへの案内" />
            </ListItem>
            <ListItem>
              <ListItemText primary="自己紹介・連絡先ページ" />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ mt: 4, width: '100%' }}>
          <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
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
        </Box>
      </Paper>
    </Box>
  );
}

export default About;
