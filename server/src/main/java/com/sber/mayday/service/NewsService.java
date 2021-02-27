package com.sber.mayday.service;


import com.sber.mayday.model.News;

import java.util.List;

public interface NewsService {
    List<News> allNews();
    void add(News news);
    void delete(News news);
    void edit(News news);
    News getById(int id);
}