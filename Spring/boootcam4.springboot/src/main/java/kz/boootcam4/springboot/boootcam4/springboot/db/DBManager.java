package kz.boootcam4.springboot.boootcam4.springboot.db;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class DBManager {
    private static final ArrayList<Item> items = new ArrayList<>();
    private static Long id = 5l;

    static {
        items.add(new Item(1L, "Iphone 13",50, 550000));
        items.add(new Item(2L, "Iphone 14",60, 750000));
        items.add(new Item(3L, "Iphone 12",40, 450000));
        items.add(new Item(4L, "Iphone 11",35, 350000));
    }

    public static void addItem(Item item){
        item.setId(id);
        items.add(item);
        id++;
    }

    public static ArrayList<Item> getItems(){
        return items;
    }

}
