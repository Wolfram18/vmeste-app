package com.sber.mayday.model;

import java.util.Date;

public class AjaxResponseBody {

    String msg;
    String code;

    int idNews;
    String nameNews;
    String authorNews;
    String textNews;
    Date dateNews;
    String tagsNews;
    String ratingNews;
    String imageNews;

    @Override
    public String toString() {
        return "AjaxResponseBody{" +
                "msg='" + msg + '\'' +
                ", code='" + code + '\'' +
                ", idNews=" + idNews +
                ", nameNews='" + nameNews + '\'' +
                ", authorNews='" + authorNews + '\'' +
                ", textNews='" + textNews + '\'' +
                ", dateNews=" + dateNews +
                ", tagsNews='" + tagsNews + '\'' +
                ", ratingNews='" + ratingNews + '\'' +
                ", imageNews='" + imageNews + '\'' +
                '}';
    }

    public int getIdNews() {
        return idNews;
    }

    public void setIdNews(int idNews) {
        this.idNews = idNews;
    }

    public String getImageNews() {
        return imageNews;
    }

    public void setImageNews(String imageNews) {
        this.imageNews = imageNews;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getNameNews() {
        return nameNews;
    }

    public void setNameNews(String nameNews) {
        this.nameNews = nameNews;
    }

    public String getAuthorNews() {
        return authorNews;
    }

    public void setAuthorNews(String authorNews) {
        this.authorNews = authorNews;
    }

    public String getTextNews() {
        return textNews;
    }

    public void setTextNews(String textNews) {
        this.textNews = textNews;
    }

    public Date getDateNews() {
        return dateNews;
    }

    public void setDateNews(Date dateNews) {
        this.dateNews = dateNews;
    }

    public String getTagsNews() {
        return tagsNews;
    }

    public void setTagsNews(String tagsNews) {
        this.tagsNews = tagsNews;
    }

    public String getRatingNews() {
        return ratingNews;
    }

    public void setRatingNews(String ratingNews) {
        this.ratingNews = ratingNews;
    }
}
