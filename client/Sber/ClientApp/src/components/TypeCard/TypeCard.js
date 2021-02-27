import React, { Component } from 'react';
import './TypeCard.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";

class TypeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: ["Нейросети", "Web разработка", "IOS разработка", "AV/VR разработка"]
        }
    }

    handleClick = (event) => {
        var arr = [...this.props.content, event.target.id]
        this.props.onContent(arr)
        console.log(this.props.content)
    }

    render() {
        return (
            <div className="type-card">
                <div className="container-type-post">
                    <div className="type-post-header">
                        <h3>ДОБАВЬТЕ КОНТЕНТ</h3>
                    </div>
                    <div className="card-padding">
                        <div className="container-add-content">
                            <div onClick={this.handleClick} id="video" className="content-type-video">
                                ВИДЕО
                            </div>
                            <div onClick={this.handleClick} id="audio" className="content-type-audio">
                                АУДИО
                            </div>
                            <div onClick={this.handleClick} id="text" className="content-type-text">
                                ТЕКСТ
                            </div>
                            <div onClick={this.handleClick} id="img" className="content-type-img">
                                ИЗОБРАЖЕНИЕ
                            </div>
                            <div onClick={this.handleClick} id="doc" className="content-type-doc">
                                ДОКУМЕНТЫ
                            </div>
                            <div onClick={this.handleClick} id="vote" className="content-type-vote">
                                ОПРОС
                            </div>
                            <div onClick={this.handleClick} id="graph" className="content-type-graph">
                                ГРАФИК
                            </div>
                            <div onClick={this.handleClick} id="a" className="content-type-a">
                                ССЫЛКА
                            </div>
                            <div onClick={this.handleClick} id="sticker" className="content-type-sticker">
                                СТИКЕР
                            </div>
                            <div onClick={this.handleClick} id="geo" className="content-type-geo">
                                ГЕОМЕТКА
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        content: state.content,
    };
};

const mapDispachToProps = dispatch => {
    return {
        onContent: value => dispatch({ type: "content", value: value }),
    };
};

export default connect(mapStateToProps, mapDispachToProps)(TypeCard);