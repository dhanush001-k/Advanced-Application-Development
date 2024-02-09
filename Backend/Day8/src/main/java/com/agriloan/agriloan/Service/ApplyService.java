package com.agriloan.agriloan.Service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agriloan.agriloan.Entity.Application;
import com.agriloan.agriloan.Repository.ApplyRepository;

@Service
public class ApplyService {
     private final ApplyRepository applyRepository;

    @Autowired
    public ApplyService(ApplyRepository applyRepository) {
        this.applyRepository = applyRepository;
    }

    public Application addApply(Application application) {
        // Additional validation logic if needed
        return applyRepository.save(application);
    }

    public List <Application> getApply() {
        return applyRepository.findAll();
    }

    public void deleteDetails(long id){
        applyRepository.deleteById(id);
    }
}
