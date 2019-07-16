import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
  },
  // media: {
  //   height: 270,
  // },
});

const File = ({
  file: { title, thumb_360, thumb_360_h, url_private, url_private_download },
  handleDelete,
}) => {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <CardMedia
          style={{ height: `${thumb_360_h}px` }}
          image={thumb_360}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={url_private_download}>
          Download
        </Button>
        <Button size="small" color="primary" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
      <Modal
        open={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
      >
        <Paper>
          <img src={url_private} alt={title} style={{ maxWidth: '80vw' }} />
        </Paper>
      </Modal>
    </Card>
  );
};

export default File;
