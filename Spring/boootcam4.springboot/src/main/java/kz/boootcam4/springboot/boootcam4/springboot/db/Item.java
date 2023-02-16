package kz.boootcam4.springboot.boootcam4.springboot.db;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class Item {
    private Long id;
    private String name;
    private int amount;
    private double price;

}
