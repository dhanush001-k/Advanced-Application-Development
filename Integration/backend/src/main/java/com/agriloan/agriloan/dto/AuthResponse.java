package com.agriloan.agriloan.dto;

import com.agriloan.agriloan.Entity.UserInfo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    
    UserInfo user;
    String jwtToken;

}