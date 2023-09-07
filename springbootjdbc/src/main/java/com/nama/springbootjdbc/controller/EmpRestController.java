package com.nama.springbootjdbc.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nama.springbootjdbc.beans.Emp;
import com.nama.springbootjdbc.service.EmployeeService;

@RestController
public class EmpRestController {
	
	Logger log = LoggerFactory.getLogger(EmpRestController.class);
	
	
	@Autowired
	EmployeeService empser;
	
		
	@RequestMapping("/add/employee")
	public Emp addEmployee(@RequestParam("empid") int empId,
			               @RequestParam("empname") String empName) 
	{

		log.debug("requestparam:empId:"+empId+",empname:"+empName);
		return empser.createEmp(empId,empName);

	}

	@GetMapping("/remove/employee/{empid}")
	public String removeEmployee(@PathVariable int empid) {
		log.debug("pathparam:empid:"+empid);
		return empser.deleteEmp(empid);
       
	}
	
	
	
	
}
