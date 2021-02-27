﻿import React, { Component } from 'react';
import './CreatePostCard.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TypeCard from '../TypeCard/TypeCard'
import { connect } from "react-redux";

class CreatePostCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: ["Нейросети", "Web разработка", "IOS разработка", "AV/VR разработка"],
            type: false,
            elements: []
        }
    }

    handleClick = () => {
        this.props.onContent(["a"]);
        console.log(this.props.content)
        this.setState({ flag: true })
    }

    setElements(item) {
        var arr;
        if (item === "text") {
            arr = [...this.state.elements,
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                className="theme-textfield"
            />
            ]
        }
        this.setState({ elements: arr })
    }

    handleChange = (event) => {
        var preview = document.getElementById('img-user' + event.target.name);
        var file = document.getElementById(event.target.id).files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    };

    render() {
        return (
            <div className="container-cards">
                <div className="create-post-card">
                    <div className="container-create-post">
                        <div className="container-header">
                            <h3>ВАША НОВОСТЬ</h3>
                        </div>
                        <div className="card-padding">
                            <div className="container-theme">
                                <TextField
                                    variant="outlined"
                                    label="Тема новости"
                                    placeholder="Введите тему новости"
                                    className="theme-textfield"
                                />
                            </div>
                            <h3>РАБОЧАЯ ОБЛАСТЬ</h3>
                            <div className="container-content">
                                {
                                    this.props.content ?
                                        this.props.content.map((item, index) => {
                                            var elem;
                                            if (item === "text") {
                                                elem =
                                                    <TextField
                                                        key={index}
                                                        id="outlined-textarea"
                                                        label="Текст к посту"
                                                        placeholder="Введите текст"
                                                        multiline
                                                        variant="outlined"
                                                        className="work-panel-item"
                                                        style={{ marginBottom: "15px" }}
                                                    />
                                            }
                                            if (item === "img") {
                                                var id = "contained-button-file" + index
                                                elem =
                                                    <div key={index} className="work-panel-img">
                                                        <img
                                                            src={'images/default-img.png'}
                                                            alt=""
                                                            className="img-user"
                                                            id={"img-user" + index}
                                                        />
                                                        <input
                                                            accept="image/*"
                                                            className="input-img"
                                                            id={id}
                                                            name={index}
                                                            multiple
                                                            type="file"
                                                            onChange={this.handleChange}
                                                        />
                                                        <label className="upload-button" htmlFor={id}>
                                                            <Button variant="contained" color="primary" component="span">
                                                                Загрузить фото
                                                            </Button>
                                                        </label>
                                                    </div>
                                            }
                                            return elem;
                                        })
                                        : null
                                }
                            </div>
                            <div className="container-tags">
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={this.state.tags}
                                    getOptionLabel={(option) => option}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Тэги"
                                            placeholder="Тэги"
                                        />
                                    )}
                                />
                            </div>
                            <div className="container-button-create">
                                <Button className="button-create-post" variant="contained" color="primary" style={{ fontFamily: "Yanone Kaffeesatz, sans-serif", fontSize: "25px" }}>
                                    опубликовать
                        </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <TypeCard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        content: state.content,
    };
};

export default connect(mapStateToProps, null)(CreatePostCard);