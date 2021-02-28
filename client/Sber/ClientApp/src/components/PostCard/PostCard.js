import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./PostCard.css";
import { useDispatch} from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tag from "../Tag/Tag";
//import {setIcon} from '../../services/icons';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        width: (window.screen.availWidth > 320) ? "600px" : "280px",
        margin: "5px",
        zIndex: 0,
        display: "inline-block",
        borderRadius: "10px"
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    cardHeader: {
        "&:hover": {
            cursor: "pointer",
        },
    },
    message: {
        backgroundColor: "white",
        width: "95%",
        borderRadius: "10px",
        boxShadow: "0px 2px 2px #c2bebe",
        margin: "auto",
        paddingTop: "19px",
        paddingBottom: "10px",
        textAlign: "center",
    },
}));

function PostCard(props) {
    //const imgPath = `images/${setIcon(props.vacancy.sphere)}.png`;
    const [isLiked, setIsLiked] = useState(false);
    const classes = useStyles();
    const likeIconRef = React.useRef(null);
    const [expanded, setExpanded] = React.useState(false);
    const [state, setState] = React.useState(null);
    const history = useHistory();
    const [flag, setFlag] = React.useState(true);
    //const favouriteVacancies = useSelector(selectFavouriteVacancies);

    //const getCount = () => {
    //    axios
    //        .get(`${APP_URL_DEV}/api/vacancies/${props.vacancy.id}`)
    //        .then(response => {
    //            setLikesCount(response.data.likesCount)
    //        })
    //}

    //const updateCount = (c) => {
    //    if (props.user !== null && props.user.profile.role === "Student") {
    //        const vacancy = {
    //            Name: props.vacancy.name,
    //            Description: props.vacancy.description,
    //            Sphere: props.vacancy.sphere,
    //            RequiredSkills: props.vacancy.requiredSkills,
    //            Salary: props.vacancy.salary,
    //            City: props.vacancy.city,
    //            TypeOfEmployment: props.vacancy.typeOfEmployment,
    //            CompanyInfoId: props.vacancy.companyInfoId,
    //            DateOfCreation: new Date(),
    //            LikesCount: c,
    //            Id: props.vacancy.id
    //        }
    //        axios
    //            .put(`${APP_URL_DEV}/api/vacancies`, vacancy)
    //            .then(response => {
    //                getCount()
    //            })
    //    }
    //}

    //useEffect(() => {
    //    if (props.user !== null && props.user.profile.role === "Student") {
    //        getFavouriteVacancies(props.user.profile.sub, ({data}) => {
    //            setIsLiked(isInFavourites(data, props.vacancy.id));
    //        })
    //    }
    //}, []);
    //useEffect(() => {
    //    getCount();
    //}, []);
    //useEffect(() => {
    //    if (isLiked) {
    //        likeIconRef.current.style = 'color:#FF3265';
    //    } else {
    //        likeIconRef.current.style = 'color:gray';
    //    }

    //}, [isLiked]);

    const handleClickLike = () => {

        if (!isLiked) {
            likeIconRef.current.style = 'color:#FF3265';
        } else {
            likeIconRef.current.style = 'color:gray';
            
        }
        setIsLiked(!isLiked);

    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleMenuClose = () => {
        setState(null);
    };

    //const handleDelete = () => {
    //    deleteVacancy(props.vacancy.id, () => {
    //        setFlag(false);
    //    })
    //};

    //const handleDesign = () => {
    //    props.onPagePurpose("change");
    //    props.history.push(`/createvacancy/${props.vacancy.id}`);
    //}

    //const unlikeVacancy = () => {
    //    removeFavouriteVacancy(
    //        {studentId: props.user.profile.userInfoId, vacancyId: props.vacancy.id},
    //        (response) => {
    //            if (response.status === 200) {
    //                const newFavourites = favouriteVacancies.filter((v) => v.id !== props.vacancy.id);
    //                dispatch({
    //                    type: SET_FAVOURITE_VACANCIES,
    //                    value: newFavourites,
    //                });
    //                console.log(`removed vacancy from favourites`);
    //            }
    //        },
    //        (error) => {
    //            console.log(`could not remove vacancy from favourites`)
    //        }
    //    );
    //};

    const renderOptions = (
        <Menu
            anchorEl={state}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            id="primary-search-account-menu"
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(state)}
            onClose={handleMenuClose}
        >
            <MenuItem >Удалить</MenuItem>
            <MenuItem >Редактировать</MenuItem>
        </Menu>
    );

    //const handleChange = (event) => {
    //    if (props.user !== null) {
    //        if ((props.user.profile.role === "Company") && (props.pagePurpose === "profile")) {
    //            setState(event.currentTarget);
    //        }
    //    }
    //}

    const [starsActual, setStarsActual] = React.useState(null);
    const [starsProfit, setStarsProfit] = React.useState(null);
    const [starsInterest, setStarsInterest] = React.useState(null);

    const setCountStars = (count, type) => {
        var arr = []
        for (var i = 0; i < count; i++) {
            arr.push(<StarIcon key={Math.random() * 100} />)
        }
        if (count < 10) {
            for (var i = 0; i < 10 - count; i++) {
                arr.push(<StarBorderIcon key={Math.random()*100} />)
            }
        }
        if (type === "actual")
            setStarsActual(arr)
        if (type === "profit")
            setStarsProfit(arr)
        if (type === "interest")
            setStarsInterest(arr)
    }


    useEffect(() => {
        setCountStars(props.post.marks.actual.slice(0, 2), "actual")
        setCountStars(props.post.marks.profit.slice(0, 2), "profit")
        setCountStars(props.post.marks.interest.slice(0, 2), "interest")
    }, []);

    return (
        <>
            {flag === true ? (
                <>
                    <Card className={classes.root} id="card">
                        <CardHeader
                            style={{ paddingBottom: "5px" }}
                            className={classes.cardHeader}
                            avatar={
                                <Avatar aria-label="recipe" src={props.post.img} className={classes.avatar}>

                                </Avatar>
                            }
                            title={
                                <Typography
                                    onClick={() => history.push(`/`)}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {
                                        props.post.position ?
                                            props.post.position + " "
                                            : null
                                    }
                                    {props.post.author !== null
                                        ? props.post.author
                                        : null}
                                    <br />
                                    {props.post.date}
                                </Typography>
                            }
                        />
                        <CardHeader style={{ paddingBottom: "5px", paddingTop: "5px" }}
                            className={classes.cardHeader}
                            onClick={() => history.push(`/`)}
                            title={
                                <Typography variant="h6" component="p">
                                    {props.post.theme.length > 20
                                        ? props.post.theme.slice(0, 16) + "..."
                                        : props.post.theme}
                                </Typography>
                            }
                        />
                        <div
                            onClick={() => history.push(`/`)}
                            className="card-content"
                        >
                            <CardContent style={{ paddingBottom: "5px", paddingTop: "5px" }}>
                                <Typography variant="body2" component="p">
                                    Тэги: {props.post.tags ?
                                        props.post.tags.map((tag, index) => {
                                            return <Tag key={index} tag={tag} />
                                        })
                                        : "Не указаны"}
                                </Typography>
                            </CardContent>
                            <CardContent style={{ paddingBottom: "0" }}>
                                <Typography variant="body2" component="p">
                                    {props.post.text ? props.post.text.length >= 780 ?
                                        <>
                                            {props.post.text.slice(0, 780)}
                                            <label className="read-article">Читать далее</label>
                                        </> : props.post.text : null}
                                </Typography>
                            </CardContent>
                        </div>
                        <CardActions style={{ paddingTop: "0" }} disableSpacing>
                            <IconButton
                                aria-label="add to favorites"
                                classes={{ root: classes.likeOff }}
                                ref={likeIconRef}
                                onClick={handleClickLike}
                            >
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent style={{ paddingTop: "0", paddingBottom: "0" }}>
                                <Typography paragraph>
                                    Актуальность: {starsActual}

                                    <br />
                                    Полезность: {starsProfit}<br />
                                    Интересность: {starsInterest}<br />
                                </Typography>
                            </CardContent>
                        </Collapse>
                        {renderOptions}
                    </Card>
                </>
            ) : null}
        </>
    );
}

export default withRouter(
    (PostCard)
);
