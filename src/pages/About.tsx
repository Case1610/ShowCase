import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ProfileAvatar from '../components/ProfileAvatar';
import profileData from './profile.json';
import { transformProfileForDisplay, type ProfileData } from '../utils/profileDisplay';

function About() {
  // Apply privacy controls to profile data
  const displayedProfile = transformProfileForDisplay(profileData as ProfileData);
  const { basicInfo, biography, interests, strengths_finder, values, goals, career, education, certifications, skills } = displayedProfile;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  const calculateAge = (birthday: string) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* プロフィールヘッダー */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <ProfileAvatar
            size={120}
            borderColor="transparent"
            borderWidth={0}
            fallbackText={`${basicInfo.name.ja.first[0]}${basicInfo.name.ja.last[0]}`}
            sx={{
              mr: { md: 4 },
              mb: { xs: 2, md: 0 },
              backgroundColor: 'primary.main',
            }}
          />
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3" component="h1" gutterBottom>
              {basicInfo.name.ja.last} {basicInfo.name.ja.first}
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {basicInfo.name.en.first} {basicInfo.name.en.last}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {calculateAge(basicInfo.birthday)}歳 / {basicInfo.nationality}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'primary.main', mb: 2 }}>
          "{biography.short}"
        </Typography>
        <Typography variant="body1" paragraph>
          {biography.long}
        </Typography>
      </Paper>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 4 }}>
        {/* メインコンテンツ */}
        <Box>
          {/* 経歴 */}
          <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom color="primary">
              <WorkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              職歴
            </Typography>
            <List>
              {career.map((job, index) => (
                <ListItem key={index} sx={{ mb: 2, flexDirection: 'column', alignItems: 'flex-start' }}>
                  <ListItemText
                    primary={
                      <Typography variant="h6" component="div">
                        {job.organization}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Typography variant="subtitle1" color="primary">
                          {job.department}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {formatDate(job.start_date)} - {job.end_date ? formatDate(job.end_date) : '現在'}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {job.description}
                        </Typography>
                      </Box>
                    }
                  />
                  {index < career.length - 1 && <Divider sx={{ width: '100%', mt: 2 }} />}
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* 学歴 */}
          <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom color="primary">
              <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              学歴
            </Typography>
            <List>
              {education.map((edu, index) => (
                <ListItem key={index} sx={{ mb: 2, flexDirection: 'column', alignItems: 'flex-start' }}>
                  <ListItemText
                    primary={
                      <Typography variant="h6" component="div">
                        {edu.organization}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Typography variant="subtitle1" color="primary">
                          {edu.department}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {formatDate(edu.start_date)} - {edu.end_date ? formatDate(edu.end_date) : '現在'}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {edu.description}
                        </Typography>
                      </Box>
                    }
                  />
                  {index < education.length - 1 && <Divider sx={{ width: '100%', mt: 2 }} />}
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* 資格・受賞歴 */}
          <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom color="primary">
              <EmojiEventsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              資格・受賞歴
            </Typography>
            <List>
              {certifications.map((cert, index) => (
                <ListItem key={index} sx={{ mb: 2 }}>
                  <ListItemText
                    primary={cert.name}
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          取得日: {cert.date}
                        </Typography>
                        {cert.description && typeof cert.description === 'object' && (
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            {cert.description.description}
                          </Typography>
                        )}
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* サイドバー */}
        <Box>
          {/* 価値観 */}
          <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              価値観
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {values.map((value, index) => (
                <Chip key={index} label={value} color="primary" variant="outlined" />
              ))}
            </Box>
          </Paper>

          {/* 目標 */}
          <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              目標
            </Typography>
            <List dense>
              {goals.map((goal, index) => (
                <ListItem key={index}>
                  <ListItemText primary={goal} />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* 強み */}
          <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              強みトップ5
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              StrengthsFinder 2.0
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {strengths_finder.top_5.map((strength, index) => (
                <Chip 
                  key={index} 
                  label={`${index + 1}. ${strength}`} 
                  color="secondary" 
                  variant="outlined" 
                  size="small"
                />
              ))}
            </Box>
          </Paper>

          {/* 興味・関心 */}
          <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              興味・関心
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {interests.map((interest, index) => (
                <Chip 
                  key={index} 
                  label={interest} 
                  color="info" 
                  variant="outlined" 
                  size="small"
                />
              ))}
            </Box>
          </Paper>

          {/* スキル */}
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
              技術スキル
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill, index) => (
                <Chip 
                  key={index} 
                  label={skill.name} 
                  color="primary" 
                  variant="outlined" 
                  size="small"
                />
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
