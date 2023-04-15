package net.themis.dogs.dogs.controller;

import net.themis.dogs.dogs.model.Reports;
import net.themis.dogs.dogs.service.ReportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/pugme")
public class ReportsController {

    @Autowired
    private ReportsService reportsService;

    @PostMapping("/report")
    public ResponseEntity<?> reportProfile(@RequestParam String username){
        return ResponseEntity.ok(reportsService.defineReports(username,"yes"));
    }

    @GetMapping("/reports")
    public List<Reports> getReports(){
        return reportsService.getAllReports();
    }
}
