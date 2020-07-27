import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardMedia } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 5px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function OutlinedCard(props) {
  const classes = useStyles();
  const { avatarSrc, title, subtitle, description, imgSrc } = props

  return (
    <Card className={classes.root} variant="outlined"> 

      <CardHeader
        avatar={
          <Avatar src={avatarSrc} >
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />    

      <CardMedia style={{ height: '150px' }} image={imgSrc} />

      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Buy now  </Button>
      </CardActions>
    </Card>
  );
}


export default OutlinedCard