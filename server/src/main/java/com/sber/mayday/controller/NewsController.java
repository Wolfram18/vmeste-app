package com.sber.mayday.controller;

import com.sber.mayday.dao.NewsDAOImpl;
import com.sber.mayday.model.News;
import com.sber.mayday.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.stream.Collectors;

@Controller
public class NewsController {

    @Autowired
    private NewsDAOImpl newsDAOImpl;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String showBankAccounts(Model model) {
        System.out.println();
        model.addAttribute("accountInfos", newsDAOImpl.getById(1));

        return "accountsPage";
    }
}
