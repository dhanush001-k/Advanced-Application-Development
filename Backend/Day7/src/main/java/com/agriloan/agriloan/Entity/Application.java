package com.agriloan.agriloan.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String gender;
    private String maritalStatus;
    private String email;
    private Long phoneNumber;
    private String address;
    private Long aadharNumber;
    private String loanType;
    private Long loanAmount;
    private String loanPurpose;
    private Long farmSize;
    private String location;
    private Long income;
    private String document;
    public Application(Long id, String fullName, String gender, String maritalStatus, String email, Long phoneNumber,
            String address,Long aadharNumber, String loanType, Long loanAmount, String loanPurpose, Long farmSize, String location,
            Long income, String document) {
                this.id = id;
                this.fullName = fullName;
                this.gender = gender;
                this.maritalStatus = maritalStatus;
                this.email = email;
                this.phoneNumber = phoneNumber;
                this.address = address;
                this.aadharNumber=aadharNumber;
                this.loanType = loanType;
                this.loanAmount = loanAmount;
                this.loanPurpose = loanPurpose;
                this.farmSize = farmSize;
                this.location = location;
                this.income = income;
                this.document = document;
            }
            public Long getId() {
                return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getMaritalStatus() {
        return maritalStatus;
    }
    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Long getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public Long getAadharNumber() {
        return aadharNumber;
    }
    public void setAadharNumber(Long aadharNumber) {
        this.aadharNumber = aadharNumber;
    }
    public String getLoanType() {
        return loanType;
    }
    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }
    public Long getLoanAmount() {
        return loanAmount;
    }
    public void setLoanAmount(Long loanAmount) {
        this.loanAmount = loanAmount;
    }
    public String getLoanPurpose() {
        return loanPurpose;
    }
    public void setLoanPurpose(String loanPurpose) {
        this.loanPurpose = loanPurpose;
    }
    public Long getFarmSize() {
        return farmSize;
    }
    public void setFarmSize(Long farmSize) {
        this.farmSize = farmSize;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public Long getIncome() {
        return income;
    }
    public void setIncome(Long income) {
        this.income = income;
    }
    public String getDocument() {
        return document;
    }
    public void setDocument(String document) {
        this.document = document;
    }
    public Application(){
        
    }

}
