import React, { Component } from 'react';
import './Home.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreatePostCard from '../CreatePostCard/CreatePostCard'

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: ["Нейросети", "Web разработка", "IOS разработка", "AV/VR разработка"]
        }
    }

    render() {
        return (
            <div className="container-home">
                <CreatePostCard />
            </div>
        );
    }
}
