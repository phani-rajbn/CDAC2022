package com.phanitraining.CDACDemo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class EmployeeService implements IEmployeeService {
	private List<Employee> _employees = new ArrayList<Employee>();
	
	public EmployeeService(){
		_employees.add(new Employee(111, "Phaniraj", "Bangalore", 56000));
		_employees.add(new Employee(112, "Gopal", "Pune", 46000));
		_employees.add(new Employee(113, "Amit", "Hyderabad", 46000));
		_employees.add(new Employee(114, "Sanju", "Mysore", 36000));
		_employees.add(new Employee(115, "Somnath", "Chennai", 50000));
		_employees.add(new Employee(116, "Rashmi", "Bhopal", 25000));
	}
	
	@Override
	public List<Employee> getAllEmployees() {
		return _employees;
	}
	
	@Override
	public Employee findEmployee(int id) {
		for (Employee employee : _employees) {
			if(employee.getEmpId() == id) {
				return employee;
			}
		}
		return null;
	}

}
