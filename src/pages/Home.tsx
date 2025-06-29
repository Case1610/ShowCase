
import { useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const galleryItems = [
  { type: 'image' as const, src: '/gallery/DSC_0824.JPG', large: true },
  { type: 'image' as const, src: '/gallery/A64_2023-08-16_13.26.18.000_+0900.jpg' },
  { type: 'image' as const, src: '/gallery/A64_2024-04-07_12.03.22.000_+0900_.jpg' },
  { type: 'image' as const, src: '/gallery/A64_2024-04-14_13.39.20-.jpg' },
  { type: 'image' as const, src: '/gallery/A64_2024-11-04_11.38.41_2.jpg' },
  { type: 'image' as const, src: '/gallery/A64_2024-11-16_16.49.24_1.jpg' },
  { type: 'image' as const, src: '/gallery/A64_2024-11-24_16.58.20_1.jpg' },
  { type: 'image' as const, src: '/gallery/A64_2024-11-24_17.02.44_1.jpg' },
  { type: 'image' as const, src: '/gallery/A64_2024-11-24_17.08.08_1.jpg' },
  { type: 'video' as const, src: '/gallery/IMG_7505.MOV' },
];


function Home() {
  const [modal, setModal] = useState<{ open: boolean; src: string; type: 'image' | 'video' } | null>(null);

  return (
    <Box sx={{ mt: 4 }}>
      <Box component="section" mb={4}>
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={3}
        >
          {galleryItems.map((item, idx) => (
            <Card key={idx} sx={{ borderRadius: 3, boxShadow: 3, overflow: 'hidden', mb: 2 }}>
              <CardActionArea onClick={() => setModal({ open: true, src: item.src, type: item.type })}>
                {item.type === 'image' ? (
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={`Gallery ${idx + 1}`}
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <CardMedia
                    component="video"
                    src={item.src}
                    controls
                    sx={{ width: '100%', height: 320, objectFit: 'cover' }}
                  />
                )}
              </CardActionArea>
            </Card>
          ))}
        </Masonry>
      </Box>
      {/* モーダル表示 */}
      <Dialog open={!!modal} onClose={() => setModal(null)} maxWidth="xl" PaperProps={{ sx: { bgcolor: 'black', p: 0 } }}>
        <IconButton onClick={() => setModal(null)} sx={{ position: 'absolute', top: 8, right: 8, color: 'white', zIndex: 10 }} aria-label="閉じる">
          <CloseIcon />
        </IconButton>
        {modal?.type === 'image' ? (
          <Box component="img" src={modal.src} alt="拡大画像" sx={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', bgcolor: 'black' }} />
        ) : modal?.type === 'video' ? (
          <Box component="video" src={modal.src} controls autoPlay sx={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', bgcolor: 'black' }} />
        ) : null}
      </Dialog>
    </Box>
  );
}

export default Home;
