package com.sber.mayday.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "news")
public class News {
    @Override
    public String toString() {
        return "News{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", text='" + text + '\'' +
                ", date=" + date +
                ", main_rating=" + main_rating +
                ", tags='" + tags + '\'' +
                ", video='" + video + '\'' +
                ", image='" + image + '\'' +
                ", sound='" + sound + '\'' +
                ", ratings='" + ratings + '\'' +
                '}';
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nameNews")
    private String name;

    @Column(name = "authorNews")
    private String author;

    @Column(name = "textNews")
    private String text;

    @Column(name = "dateNews")
    private Date date;

    @Column(name = "mainRatingNews")
    private int main_rating;

    @Column(name = "tagsNews")
    private String tags;

    @Column(name = "videoNews")
    private String video;

    @Column(name = "imageNews")
    private String image;

    @Column(name = "soundNews")
    private String sound;

    @Column(name = "ratingsNews")
    private String ratings;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getMain_rating() {
        return main_rating;
    }

    public void setMain_rating(int main_rating) {
        this.main_rating = main_rating;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getSound() {
        return sound;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }

    public String getRatings() {
        return ratings;
    }

    public void setRatings(String ratings) {
        this.ratings = ratings;
    }
}
