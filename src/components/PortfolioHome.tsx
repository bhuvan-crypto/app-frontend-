import React from 'react';
import { Card, CardContent, Avatar, Typography, Grid, Chip, Box, Divider, Link, Stack, IconButton, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'Vite', 'PostgreSQL', 'Socket.IO', 'MongoDB', 'Twilio', 'Redis', 'Express', 'JWT', 'LLM', 'Google Maps', 'Mocha', 'Chai'
];

const projects = [
  {
    name: 'Dynamic React Table',
    desc: 'Built a dynamic React table with sorting, global and column-based search, and editable fields for text, date, and dropdowns. Added dynamic columns and advanced filtering for efficient data management.',
    link: 'https://helpful-ponyy-b1ff7c.netlify.app/',
  },
  {
    name: 'Video Uploader And Frame Extractor',
    desc: 'Developed a real-time video processing app that allows users to upload videos, extract frames every 3 seconds, and stream them dynamically to a React frontend using Socket.IO.',
    link: 'https://hazel-lemon-picture.glitch.me/',
  },
  {
    name: 'Real-Time Collaborative Editor',
    desc: 'Built a collaborative editor allowing multiple users to make synchronized edits in real-time.',
    link: 'https://wild-nosy-hat-le.glitch.me/',
  },
];

const socials = [
  { icon: <GitHubIcon />, url: 'https://github.com/bhuvan-crypto', label: 'GitHub' },
  { icon: <LinkedInIcon />, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <EmailIcon />, url: 'mailto:bhuvansjosh1992@gmail.com', label: 'Email' },
];

const PortfolioHome: React.FC = () => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(120deg, #23272f 0%, #18181b 100%)', pb: 8 }}>
    {/* Hero Section */}
    <Box sx={{ width: '100%', py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(120deg, #23272f 0%, #18181b 100%)' }}>
      <Avatar src="/logo192.png" sx={{ width: 120, height: 120, boxShadow: 4, bgcolor: '#4f8cff', mb: 2 }} />
      <Typography variant="h3" fontWeight={800} color="#6ee7b7" sx={{ mb: 1, letterSpacing: 2 }}>
        Bhuvan Chandra Joshi
      </Typography>
      <Typography variant="h5" color="#e5e7eb" fontWeight={500} sx={{ mb: 2 }}>
        Software Engineer & Web Developer
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        {socials.map(social => (
          <IconButton key={social.label} component="a" href={social.url} target="_blank" rel="noopener" sx={{ color: '#4f8cff', bgcolor: '#23272f', boxShadow: 2 }}>
            {social.icon}
          </IconButton>
        ))}
      </Stack>
      <Typography variant="subtitle1" color="#b3b3b3" sx={{ maxWidth: 600, textAlign: 'center', mb: 2 }}>
        Dedicated Software Engineer with a strong background in building scalable web applications and real-time communication systems. MERN stack, TypeScript, PostgreSQL, and more.
      </Typography>
    </Box>
    {/* Main Content Sections */}
    <Grid container justifyContent="center" spacing={4} sx={{ mt: 0 }}>
      <Grid  size={{xs:12 ,md:6}}>
        <Paper elevation={6} sx={{ borderRadius: 4, bgcolor: 'rgba(36,39,47,0.95)', color: '#e5e7eb', p: 4, mb: 4 }}>
          <Typography variant="h6" color="#6ee7b7" fontWeight={700} gutterBottom>Skills</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent="center" mb={2}>
            {skills.map(skill => (
              <Chip key={skill} label={skill} sx={{ bgcolor: '#4f8cff', color: '#fff', fontWeight: 600, fontSize: '1rem', mb: 1 }} />
            ))}
          </Stack>
        </Paper>
        <Paper elevation={6} sx={{ borderRadius: 4, bgcolor: 'rgba(36,39,47,0.95)', color: '#e5e7eb', p: 4, mb: 4 }}>
          <Typography variant="h6" color="#6ee7b7" fontWeight={700} gutterBottom>Projects</Typography>
          <Stack spacing={2}>
            {projects.map(project => (
              <Card key={project.name} sx={{ bgcolor: '#23272f', color: '#e5e7eb', borderRadius: 3, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700} color="#4f8cff">
                    {project.name}
                    {project.link && (
                      <Link href={project.link} target="_blank" rel="noopener" sx={{ ml: 1, color: '#6ee7b7' }}>
                        <WebIcon fontSize="small" />
                      </Link>
                    )}
                  </Typography>
                  <Typography variant="body2" color="#b3b3b3">
                    {project.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Paper>
      </Grid>
      <Grid  size={{xs:12 ,md:6}}>
        <Paper elevation={6} sx={{ borderRadius: 4, bgcolor: 'rgba(36,39,47,0.95)', color: '#e5e7eb', p: 4, mb: 4 }}>
          <Typography variant="h6" color="#6ee7b7" fontWeight={700} gutterBottom>Experience</Typography>
          <Typography variant="subtitle1" fontWeight={700} color="#4f8cff" sx={{ mb: 1 }}>
            Software Engineer @ Softsensor.ai
          </Typography>
          <Typography variant="body2" color="#b3b3b3" sx={{ mb: 1 }}>
            Gurgaon, India (Remote) | 01/2022 - Present
          </Typography>
          <ul style={{margin:'1rem 0 0 1.2rem', textAlign:'left', color:'#e5e7eb', fontSize: '1rem'}}>
            <li>Developed scalable applications using the MERN stack</li>
            <li>Designed and managed PostgreSQL databases for efficient data storage and retrieval</li>
            <li>Implemented real-time communication features with Socket.IO</li>
            <li>Integrated Google Maps API for location-based services</li>
            <li>Created dynamic and interactive interfaces using React and TypeScript</li>
            <li>Built and maintained unit test cases with Mocha and Chai</li>
            <li>Proactively identified and resolved technical issues, minimizing downtime</li>
            <li>Refactored code for readability and introduced new language features</li>
            <li>Developed custom workflows for SMS notifications using Twilio</li>
            <li>Created backend services using Node.js and Express</li>
          </ul>
        </Paper>
        <Paper elevation={6} sx={{ borderRadius: 4, bgcolor: 'rgba(36,39,47,0.95)', color: '#e5e7eb', p: 4, mb: 4 }}>
          <Typography variant="h6" color="#6ee7b7" fontWeight={700} gutterBottom>Contact</Typography>
          <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" mt={2}>
            <Link href="mailto:bhuvansjosh1992@gmail.com" sx={{ color: '#4f8cff', display: 'flex', alignItems: 'center', fontWeight: 600 }}>
              <EmailIcon sx={{ mr: 0.5 }} /> bhuvansjosh1992@gmail.com
            </Link>
            <Link href="https://github.com/bhuvan-crypto" target="_blank" rel="noopener" sx={{ color: '#4f8cff', display: 'flex', alignItems: 'center', fontWeight: 600 }}>
              <GitHubIcon sx={{ mr: 0.5 }} /> GitHub
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener" sx={{ color: '#4f8cff', display: 'flex', alignItems: 'center', fontWeight: 600 }}>
              <LinkedInIcon sx={{ mr: 0.5 }} /> LinkedIn
            </Link>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default PortfolioHome;