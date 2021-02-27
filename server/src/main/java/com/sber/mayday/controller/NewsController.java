package com.sber.mayday.controller;

import com.sber.mayday.model.News;
import com.sber.mayday.service.NewsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class NewsController {

    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/main")
    public Collection<News> newses() {
        return newsService.allNews();
    }
}
