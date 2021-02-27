package com.sber.mayday.model;

public class AjaxResponseBody {

    String msg;

    String code;

    int id;

    String name;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "AjaxResponseBody{" +
                "msg='" + msg + '\'' +
                ", code='" + code + '\'' +
                ", id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
