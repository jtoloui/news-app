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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import '../scss/main.scss'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '100%',
        marginBottom: '5vh',
        [theme.breakpoints.up('md')]: {
            // width: '100%',
            position: 'relative',
            marginRight: '25%',
            marginLeft: '25%',
            marginBottom: '10vh',
        },
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
    main: {
        marginTop: '84px',
    }
}));


const Table = ({ news }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    let key;

    const list = news.map((data, index) => {
        key = `article-${index}`
        const name = !data.author ? "" : `${data.author} from`;
        const intro = data.content !== null ? data.content.replace(/[\\+[0-9]{0,10} chars]$/gi, '') : 'Please visit page to see content';
        const sourceName = data.source.name.match(/^\S/);
        const time = data.publishedAt.replace(/(T\d{0,2}.\d{0,2}.\d{0,2}.\d{0,100}Z)$/, '').split('-').reverse().join('-');
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let img;
        const handleExpandClick = (e) => {
            setExpanded(!expanded);
        }
        if (data.urlToImage) {
            if (!data.urlToImage.match(/https/)) {
                img = data.urlToImage.replace(/(http)/, 'https');
            }
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
        if (data.urlToImage === null) {
            data.urlToImage = 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjYxNjQ5fQ';
        }
        return (
            <Card className={classes.card} key={key}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Source" style={{ backgroundColor: `#${randomColor}` }}>
                            {sourceName}
                        </Avatar>
                    }
                    title={data.title}
                    subheader={`${name} ${data.source.name} - Published at ${time}`}
                />
                <CardMedia
                    className={classes.media}
                    image={img || data.urlToImage}
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
        <div className={classes.main}>
            <Grid container>
                <Grid item xs={12} md={12}>
                    {list}
                </Grid>
            </Grid>
        </div>
    )
}

export default Table;