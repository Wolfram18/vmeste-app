import React, { Component } from 'react';
import PostCard from '../PostCard/PostCard';
import './Home.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

            post: [
                {
                    theme: "Нейросети",
                    author: "Петров Иван",
                    tags: ["Нейросети", "Глубокое обучение"],
                    text: "В этой статье я хочу поделиться с Вами моим опытом в изучении нейронных сетей и, как следствие, их реализации, с помощью языка программирования Java, на платформе Android. Мое знакомство с нейронными сетями произошло, когда вышло приложение Prisma. Оно обрабатывает любую фотографию, с помощью нейронных сетей, и воспроизводит ее с нуля, используя выбранный стиль. Заинтересовавшись этим, я бросился искать статьи и «туториалы», в первую очередь, на Хабре. И к моему великому удивлению, я не нашел ни одну статью, которая четко и поэтапно расписывала алгоритм работы нейронных сетей. Информация была разрознена и в ней отсутствовали ключевые моменты. Также, большинство авторов бросается показывать код на том или ином языке программирования, не прибегая к детальным объяснениям.    ",
                    date: "27.02.2021",
                    position: "Разработчик",
                    marks: {
                        actual: "7 / 10",
                        profit: "5 / 10",
                        interest: "4 / 10"
                    },
                    img: "images/user.jpg"
                },
                {
                    theme: "Java разработка",
                    author: "Игорь Сухоруков",
                    tags: ["Java", "Программирование"],
                    text: "Знакомство с Java было в университете и при воспоминаниях об этом бросает в холодный пот. Кроме нового незнакомого языка, приходилось устанавливать какой-то JDK, потом IDE, потом создавать первый проект и вручную добавлять в него библиотеки. Делать по аналогии с готовыми программами и ловить неизведанные java.lang.ClassNotFoundException и java.lang.NoSuchMethodException и тому подобный ужас. Когда знал как работать только в операционной системе Windows и доступ в интернет был по модему через телефонную линию. Надеюсь интересно будет как тем, кто делает первые шаги в java и тем, кто помнит jdk 1.4.Попробуем online IDE Eclipse Che. Оговорюсь про главное условие — сейчас у вас должен быть стабильный доступ в интернет.И конечно же после прочтении статьи вы не получите работу Java архитектором в Нью- Йорке за 180 000 $ в год и даже не выучите Java за 21 день.Просто разработаем в современном окружении свой Hello world в несколько строчек кода, но с веб сервером.",
                    date: "20.02.2021",
                    position: "Java разработчик",
                    marks: {
                        actual: "8 / 10",
                        profit: "7 / 10",
                        interest: "6 / 10"
                    },
                    img: "images/user2.png"
                },
            ],

            posts: [],
        }
    }

    componentDidMount() {
        var array = [];
        axios.get('/api/select/all')
            .then(response => response.data)
            .then(data => {
                console.log(data);
                array.push(data);
                console.log(data.news);                
                this.setState({ posts: data.news })
            });
    }

    render() {
        return (
            <div className="container-home">
                <Button style={{ fontFamily: "Yanone Kaffeesatz, sans-serif", fontSize: "25px", width: (window.screen.availWidth > 320) ? "600px" : "280px", marginBottom: "20px" }} variant="contained" color="secondary" onClick={() => this.props.history.push("/createpost")}>Создать новость</Button>
                {
                    this.state.posts.map((post, index) => {
                        return <PostCard key={index} post={post} />
                    })
                }
            </div>
        );
    }
}
