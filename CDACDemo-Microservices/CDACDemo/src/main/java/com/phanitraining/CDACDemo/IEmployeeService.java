package com.phanitraining.CDACDemo;

import java.util.List;

public interface IEmployeeService {
    List<Employee> getAllEmployees();
    Employee findEmployee(int id);
}
