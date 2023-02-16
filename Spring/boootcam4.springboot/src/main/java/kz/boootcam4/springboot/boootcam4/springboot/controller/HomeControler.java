package kz.boootcam4.springboot.boootcam4.springboot.controller;

import kz.boootcam4.springboot.boootcam4.springboot.db.DBManager;
import kz.boootcam4.springboot.boootcam4.springboot.db.Item;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

@Controller
public class HomeControler {

    @GetMapping(value = "/")
    public String index(Model model){
        ArrayList<Item> items = DBManager.getItems();
        model.addAttribute("tovary", items);

        Item best = new Item(777L, "Iphone 20", 5, 2000000);
        model.addAttribute("superTovar", best);

        return "indexpage";
    }

    @GetMapping(value = "/about")
    public String about(){
        return "about";
    }

    @PostMapping(value = "/add-item")
    public String additem(@RequestParam("item_name")String name,
                          @RequestParam("item_price")double price,
                          @RequestParam("item_amount")int amount){

        Item item = new Item();
        item.setName(name);
        item.setPrice(price);
        item.setAmount(amount);

        DBManager.addItem(item);
        return "redirect:/";
    }

}
