package com.sber.mayday.model;


import java.util.List;

public class AjaxResponseBody {

    String msg;
    String code;

    List<News> news;

    @Override
    public String toString() {
        return "AjaxResponseBody{" +
                "msg='" + msg + '\'' +
                ", code='" + code + '\'' +
                ", news=" + news +
                '}';
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

    public List<News> getNews() {
        return news;
    }

    public void setNews(List<News> news) {
        this.news = news;
    }
}
