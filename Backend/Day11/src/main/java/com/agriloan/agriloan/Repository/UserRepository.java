package com.agriloan.agriloan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agriloan.agriloan.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Additional query methods if needed
}


