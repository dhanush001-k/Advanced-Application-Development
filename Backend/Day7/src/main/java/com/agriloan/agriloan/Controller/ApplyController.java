package com.agriloan.agriloan.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agriloan.agriloan.Entity.Application;
import com.agriloan.agriloan.Entity.User;
import com.agriloan.agriloan.Service.ApplyService;
import com.agriloan.agriloan.Service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApplyController {
    private final ApplyService applyService;

    @Autowired
    public ApplyController(ApplyService applyService) {
        this.applyService = applyService;
    }


      @PostMapping("/applications") // endpoint to handle form submissions
    public ResponseEntity<Application> addApplication(@RequestBody Application application) {
        Application savedApplication = applyService.addApply(application);
        return new ResponseEntity<>(savedApplication, HttpStatus.CREATED);
    }

    
    @GetMapping("/getapply")
    public List<Application> getApply() {
        return applyService.getApply();
    }

    @DeleteMapping("/deleteloan/{id}")
    public String deleteloan(@PathVariable int id){
        applyService.deleteDetails(id);
        return "Loan Deleted Successfully";
    }



}

// @PostMapping("/add")
// public Application addApply(@RequestBody Application application) {
//     return applyService.addApply(application);
// }