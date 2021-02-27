package com.sber.mayday.dao;

import com.sber.mayday.model.News;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class NewsDAOImpl implements NewsDAO {

    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<News> allNews() {
        Session session = sessionFactory.getCurrentSession();
        List<News> news = session.createQuery("from News").getResultList();
        List<News> sortedUsers = news.stream()
                .sorted(Comparator.comparing(News::getMain_rating).reversed())
                .collect(Collectors.toList());
        return sortedUsers;
    }

    @Override
    public void add(News news) {
        Session session = sessionFactory.getCurrentSession();
        session.persist(news);
    }

    @Override
    public void delete(News news) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(news);
    }

    @Override
    public void edit(News news) {
        Session session = sessionFactory.getCurrentSession();
        session.update(news);
    }

    @Override
    @SuppressWarnings("unchecked")
    public News getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from News where id = :id");
        query.setParameter("id", id);
        return ((List<News>) query.getResultList()).get(0);
    }

}