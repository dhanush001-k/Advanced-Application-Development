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
import org.springframework.web.bind.annotation.PutMapping;


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




    @PutMapping("/update/{id}") // Endpoint to handle updating loan application
public ResponseEntity<String> updateApplication(@PathVariable Long id, @RequestBody Application updatedApplication) {
    try {
        // Get the application by ID
        Application existingApplication = applyService.findById(id);
        if (existingApplication != null) {
            // Update the existing application with the data from the updated application
            // This will overwrite all existing fields with the new values
            // existingApplication.setLoanType(updatedApplication.getLoanType());
            // existingApplication.setFullName(updatedApplication.getFullName());
            // existingApplication.setGender(updatedApplication.getGender());
            // existingApplication.setMaritalStatus(updatedApplication.getMaritalStatus());
            // existingApplication.setEmail(updatedApplication.getEmail());
            // existingApplication.setPhoneNumber(updatedApplication.getPhoneNumber());
            // existingApplication.setAddress(updatedApplication.getAddress());
            // existingApplication.setLoanAmount(updatedApplication.getLoanAmount());
            // existingApplication.setLoanPurpose(updatedApplication.getLoanPurpose());
            // existingApplication.setFarmSize(updatedApplication.getFarmSize());
            // existingApplication.setLocation(updatedApplication.getLocation());
            // existingApplication.setIncome(updatedApplication.getIncome());
            // existingApplication.setDocument(updatedApplication.getDocument());
            existingApplication.setStatus(updatedApplication.getStatus());

            // Save the updated application
            applyService.addApply(existingApplication);

            return ResponseEntity.ok("Loan application " + id + " updated successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body("Error updating loan application: " + e.getMessage());
    }
}



    @GetMapping("/getapply")
    public List<Application> getApply() {
        return applyService.getApply();
    }
    


    @GetMapping("/getapply/{id}")
    public ResponseEntity<Application> getApplyById(@PathVariable Long id) {
        try {
            Application application = applyService.findById(id);
            if (application != null) {
                return ResponseEntity.ok(application);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null);
        }
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


    // @PutMapping("update/{id}")
    // public String updateInfo(@PathVariable int id, @RequestBody String Application) {
    //     applyService.updateDetails(id);
    //     return "Updated Successfully";
        
    // }