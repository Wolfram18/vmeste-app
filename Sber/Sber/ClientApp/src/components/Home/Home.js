import React, { Component } from 'react';
import './Home.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: ["Нейросети", "Web разработка", "IOS разработка", "AV/VR разработка"]
        }
    }

    render() {
        return (
            <div>
                <h3 className="header">Создание поста</h3>
                <div className="container-create-post">
                    <h5>ВЫБЕРИТЕ ТИП ОСНОВНОГО КОНТЕНТА</h5>
                    <div className="container-content">
                        <div className="content-type-video">
                            ВИДЕО
                        </div>
                        <div className="content-type-audio">
                            АУДИО   
                        </div>
                        <div className="content-type-text">
                            ТЕКСТ
                        </div>
                        <div className="content-type-img">
                            ИЗОБРАЖЕНИЕ
                        </div>
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
                        <Button className="button-create-post" variant="contained" color="primary">
                            создать пост
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
