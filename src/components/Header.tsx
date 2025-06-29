
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Navigation from './Navigation';
import caseLogo from '/caselogo.svg';

// テーマ切り替え用のpropsを受け取る（App.tsxで渡す想定）
const Header = ({ mode, setMode }: { mode: 'light' | 'dark'; setMode: (m: 'light' | 'dark') => void }) => (
  <AppBar
    position="fixed"
    color="default"
    elevation={2}
    sx={{ mb: 4, height: 44, minHeight: 44, justifyContent: 'center', zIndex: 1201 }}
  >
    <Toolbar
      sx={{
        minHeight: 44,
        height: 44,
        justifyContent: 'space-between',
        alignItems: 'center',
        px: { xs: 1, sm: 2 },
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Box component="img" src={caseLogo} alt="Logo" sx={{ width: 32, height: 32 }} />
        <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: 18 }}>ShowCase</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Navigation muiMode={true} />
        <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit" size="small">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Toolbar>
    {/* ヘッダー分の余白をbody上部に追加する場合は、Layout側で <Toolbar /> を挿入してください */}
  </AppBar>
);

export default Header;
