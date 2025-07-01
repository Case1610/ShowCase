import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import type { SxProps, Theme } from '@mui/material/styles';

interface ProfileAvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  borderColor?: string;
  borderWidth?: number;
  fallbackText?: string;
  sx?: SxProps<Theme>;
  clickable?: boolean;
}

function ProfileAvatar({
  src = "/profile/avatar.jpg",
  alt = "Profile picture",
  size = 120,
  borderColor = 'white',
  borderWidth = 4,
  fallbackText = "HK",
  sx = {},
  clickable = true,
  ...props
}: ProfileAvatarProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const avatarSx = {
    width: size,
    height: size,
    border: `${borderWidth}px solid ${borderColor}`,
    fontSize: `${size / 4}rem`,
    cursor: clickable ? 'pointer' : 'default',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': clickable ? {
      transform: 'scale(1.05)',
    } : {},
    '& img': {
      objectFit: 'cover',
      objectPosition: 'center top',
    },
    ...sx,
  };

  const handleClick = () => {
    if (clickable) {
      setModalOpen(true);
    }
  };

  return (
    <>
      <Avatar
        src={src}
        alt={alt}
        sx={avatarSx}
        onClick={handleClick}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
        {...props}
      >
        {fallbackText}
      </Avatar>

      {clickable && (
        <Dialog 
          open={modalOpen} 
          onClose={() => setModalOpen(false)} 
          maxWidth="xl" 
          PaperProps={{ 
            sx: { 
              bgcolor: 'black', 
              p: 0,
              maxWidth: '90vw',
              maxHeight: '90vh',
            } 
          }}
        >
          <IconButton 
            onClick={() => setModalOpen(false)} 
            sx={{ 
              position: 'absolute', 
              top: 8, 
              right: 8, 
              color: 'white', 
              zIndex: 10,
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              }
            }} 
            aria-label="閉じる"
          >
            <CloseIcon />
          </IconButton>
          <Box 
            component="img" 
            src={src} 
            alt="プロフィール画像（拡大）" 
            sx={{ 
              maxWidth: '90vw', 
              maxHeight: '90vh', 
              objectFit: 'contain', 
              bgcolor: 'black',
              display: 'block',
            }} 
          />
        </Dialog>
      )}
    </>
  );
}

export default ProfileAvatar;
