package com.phanitraining.CDACDemo;

public class Employee {
	private int empId, empSalary;
	private String empName, empAddress;
	
	public Employee(int id, String name, String address, int salary) {
		this.empId = id;
		this.empName = name;
		this.empAddress = address;
		this.empSalary = salary;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public int getEmpSalary() {
		return empSalary;
	}

	public void setEmpSalary(int empSalary) {
		this.empSalary = empSalary;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpAddress() {
		return empAddress;
	}

	public void setEmpAddress(String empAddress) {
		this.empAddress = empAddress;
	}
	
	
}
