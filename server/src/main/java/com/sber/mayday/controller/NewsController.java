package com.sber.mayday.controller;

import com.sber.mayday.model.AjaxResponseBody;
import com.sber.mayday.model.News;
import com.sber.mayday.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class NewsController {

    @Autowired
    private NewsService newsService;

//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String test(Model model) {
//        return newsService.getById(1).toString();
//    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/api/select/all")
    public AjaxResponseBody getSearchResultViaAjax() {

        AjaxResponseBody result = new AjaxResponseBody();

        News news = newsService.getById(1);

        if (!news.getName().equals("")) {
            result.setCode("200");
            result.setMsg("");
            result.setIdNews(news.getId());
            result.setNameNews(news.getName());
            result.setAuthorNews(news.getAuthor());
            result.setTextNews(news.getText());
            result.setDateNews(news.getDate());
            result.setTagsNews(news.getTags());
            result.setRatingNews(news.getRatings());
            result.setImageNews(news.getImage());
        } else {
            result.setCode("204");
            result.setMsg("No user!");
        }

        return result;
    }

//    @ResponseBody
//    @RequestMapping(value = "/api/create/news/", method = RequestMethod.POST)
//    public AjaxResponseBody getSearchResultViaAjax(News news1) {
//
//        AjaxResponseBody result = new AjaxResponseBody();
//
//        News news = newsService.getById(1);
//
//        if (!news.getName().equals("")) {
//            result.setCode("200");
//            result.setMsg("");
//            result.setResult(news.getName());
//        } else {
//            result.setCode("204");
//            result.setMsg("No user!");
//        }
//
//        return result;
//    }

}
