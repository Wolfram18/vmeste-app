import React, { Component } from 'react';
import './CreatePost.css';
import CreatePostCard from '../CreatePostCard/CreatePostCard';

class CreatePost extends Component {
         
    constructor(props) {
        super(props);
        this.state = {
            tags: ["Нейросети", "Web разработка", "IOS разработка", "AV/VR разработка"],
            type: false,
            elements: [],
            count: 1,
            news: [],
            isLoading: false
        }
        
    }

    render() {
        return (            
            <div>
                <CreatePostCard />
            </div>
        );
    }
}

export default CreatePost;