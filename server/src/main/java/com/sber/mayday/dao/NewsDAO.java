package com.sber.mayday.dao;
import com.sber.mayday.model.News;

import java.util.List;

public interface NewsDAO {
    List<News> allNews();
    void add(News news);
    void delete(News news);
    void edit(News news);
    News getById(int id);
}