package com.agriloan.agriloan.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.agriloan.agriloan.Entity.UserInfo;
import com.agriloan.agriloan.Repository.UserInfoRepository;
import com.agriloan.agriloan.Service.JwtService;
import com.agriloan.agriloan.dto.AuthRequest;
import com.agriloan.agriloan.dto.AuthResponse;

@RestController
public class SignUpController {
  

    @Autowired
    private UserInfoRepository userRepo;

    @Autowired
    private JwtService jwtService;

    // @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    

    @PostMapping("/register")
    public String addUser(@RequestBody UserInfo userInfo) 
    {
        userInfo.setPassword(passwordEncoder().encode(userInfo.getPassword()));
        userRepo.save(userInfo);
        return "user added to system ";
    }

    @PostMapping("/authenticate")
    public AuthResponse authenticate(@RequestBody AuthRequest authRequest) {
        AuthResponse res = jwtService.createJwtToken(authRequest);
        System.out.println(authRequest.getUsername() + " " + authRequest.getPassword() + "=> ");
        return jwtService.createJwtToken(authRequest);
    }


    // Additional controller methods if needed
}