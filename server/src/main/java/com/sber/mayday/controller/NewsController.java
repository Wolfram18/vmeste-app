package com.sber.mayday.controller;

import com.sber.mayday.model.AjaxResponseBody;
import com.sber.mayday.model.News;
import com.sber.mayday.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    public AjaxResponseBody selectAllNewsFromDB() {

        AjaxResponseBody result = new AjaxResponseBody();

        List<News> news = newsService.allNews();

        if (!news.isEmpty()) {
            result.setCode("200");
            result.setMsg("");
            result.setNews(news);
        } else {
            result.setCode("204");
            result.setMsg("No user!");
        }

        return result;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/api/create/post")
    public AjaxResponseBody createNews(String nameNews, String authorNews,String textNews, String dateNews,
                                       String tagsNews, String ratingNews, String imageNews) {

        AjaxResponseBody result = new AjaxResponseBody();

        News news =new News(nameNews, authorNews, textNews, dateNews,
                5, tagsNews, "", imageNews, "",  ratingNews);

        newsService.add(news);

        if (!news.getName().equals("")) {
            result.setCode("200");
            result.setMsg("");
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
