import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({config}) {
  return (  
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=> window.open(config.url)}>
        <CardMedia
          component="img"
          height="220"
          image={config.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {config.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {config.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
