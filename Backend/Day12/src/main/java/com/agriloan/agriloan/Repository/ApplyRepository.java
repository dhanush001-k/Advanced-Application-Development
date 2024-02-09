package com.agriloan.agriloan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agriloan.agriloan.Entity.Application;

@Repository
public interface ApplyRepository extends JpaRepository<Application, Long>{

}
