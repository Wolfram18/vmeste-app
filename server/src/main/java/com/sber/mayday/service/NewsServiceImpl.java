package com.sber.mayday.service;

import com.sber.mayday.dao.NewsDAO;
import com.sber.mayday.model.News;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    private final NewsDAO newsDAO;

    public NewsServiceImpl(NewsDAO newsDAO) {
        this.newsDAO = newsDAO;
    }

    @Transactional
    public List<News> allNews() {
        return newsDAO.allNews();
    }

    @Transactional
    public void add(News news) {
        newsDAO.add(news);
    }

    @Transactional
    public void delete(News news) {
        newsDAO.delete(news);
    }

    @Transactional
    public void edit(News news) {
        newsDAO.edit(news);
    }

    @Transactional
    public News getById(int id) {
        return newsDAO.getById(id);
    }

}