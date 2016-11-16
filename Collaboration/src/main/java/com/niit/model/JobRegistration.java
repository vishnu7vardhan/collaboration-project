package com.niit.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Component
public class JobRegistration {
	@Id@GeneratedValue
	private int dummy;

private int jobId;
private String registrationNumber;
private String studentId;
private String certificateNumber;
public int getJobId() {
	return jobId;
}
public void setJobId(int jobId) {
	this.jobId = jobId;
}
public String getRegistrationNumber() {
	return registrationNumber;
}
public void setRegistrationNumber(String registrationNumber) {
	this.registrationNumber = registrationNumber;
}
public String getStudentId() {
	return studentId;
}
public void setStudentId(String studentId) {
	this.studentId = studentId;
}
public String getCertificateNumber() {
	return certificateNumber;
}
public void setCertificateNumber(String certificateNumber) {
	this.certificateNumber = certificateNumber;
}

}
