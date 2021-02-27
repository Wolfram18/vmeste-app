package com.sber.mayday.controller;

import com.sber.mayday.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class NewsController {

    @Autowired
    private NewsService newsService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String showBankAccounts(Model model) {
        System.out.println(newsService.getById(1).getName());
        //model.addAttribute("accountInfos", newsServiceImpl.getById(1));

        return "accountsPage";
    }
}
