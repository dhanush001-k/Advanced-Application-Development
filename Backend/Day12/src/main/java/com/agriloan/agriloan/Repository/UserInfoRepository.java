package com.agriloan.agriloan.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agriloan.agriloan.Entity.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, String> {

}