package com.sber.mayday.dao;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.sber.mayday.model.News;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class NewsDAOImpl implements NewsDAO {

    @Autowired
    private SessionFactory sessionFactory;

    public NewsDAOImpl() {
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<News> allNews() {
        Session session = sessionFactory.getCurrentSession();
        List<News> news = session.createQuery("from News").getResultList();
        List<News> sortedUsers = news.stream()
                .sorted(Comparator.comparing(News::getName).reversed())
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
        Session session = this.sessionFactory.getCurrentSession();
        return session.get(News.class, id);

//        Query query = session.createQuery("from News where id = :id");
//        query.setParameter("id", id);
//        return ((List<News>) query.getResultList()).get(0);
    }

}