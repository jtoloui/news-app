import React from 'react';
import {
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    Button,
    IconButton,
    Typography,
    makeStyles
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '100%',
        marginBottom: '5%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    button: {

    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const Table = ({ news }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    let key;
    const list = news.map((data, index) => {
        key = `article-${index}`
        const name = !data.author ? "" : `${data.author} from`;
        const intro = data.content !== null ? data.content.replace(/[\+[0-9]{0,10} chars]$/gi, '') : 'Please visit page to see content';
        const handleExpandClick = (e) => {
            setExpanded(!expanded);
        }
        const socialShare = () => {
            if (navigator.share) {
                navigator.share({
                    title: `${data.title}`,
                    url: `${data.url}`
                })
            } else {
                console.log('n/a');

            }
        }
        return (
            <Card className={classes.card} key={key}>

                <CardHeader

                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            R
                                </Avatar>
                    }
                    title={data.title}
                    subheader={`${name} ${data.source.name}`}

                />
                <CardMedia
                    className={classes.media}
                    image={data.urlToImage}
                    title={data.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Share" onClick={socialShare}>
                        <ShareIcon />
                    </IconButton>
                    <Button
                        variant="outlined"
                        href={data.url}
                        target="_self"
                        className={classes.button}>
                        Visit page
                        </Button>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show more"
                    >

                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {intro}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    })
    return (
        <div className="">
            <Grid container>
                <Grid item xs={12} md={8}>
                    {list}
                </Grid>
            </Grid>
        </div>
    )
}

export default Table;