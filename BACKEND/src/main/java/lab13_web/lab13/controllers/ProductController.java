package lab13_web.lab13.controllers;

import lab13_web.lab13.entities.ProductEntity;
import lab13_web.lab13.services.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductServiceImpl productService;

    @GetMapping
    public List<ProductEntity> findAll() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public ProductEntity findById(@PathVariable Long id) {
        return productService.findById(id);
    }

    @PostMapping
    public ProductEntity save(@RequestBody ProductEntity product) {
        return productService.save(product);
    }
    
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        productService.deleteById(id);
    }

}
