package com.hnjtzy.ordersystemsever.pojo;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class Goods {
    private Integer id;               // 主键
    private String name;              // 商品名称
    private BigDecimal price;         // 商品价格
    private Integer count;            // 库存数量
    private String imgSrc;            // 商品图片
    private Byte status;              // 商品状态（0下架，1上架）
    private LocalDateTime createdAt;  // 创建时间
    private LocalDateTime updatedAt;  // 修改时间
}
