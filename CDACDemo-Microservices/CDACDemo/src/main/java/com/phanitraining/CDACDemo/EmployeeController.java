package com.phanitraining.CDACDemo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	@Autowired
	private IEmployeeService service;
	
	@GetMapping(value = "/EmpList")
	@CrossOrigin(origins = "*")
	public List<Employee> getAll(){
		List<Employee> empList = service.getAllEmployees();
		return empList;
	}
	
	@GetMapping(value = "/EmpList/{id}")
	@CrossOrigin(origins = "*")
	public Employee find(@PathVariable int id) { //Query string data from the Url....
		Employee emp = service.findEmployee(id);
		return emp;
	}
}
