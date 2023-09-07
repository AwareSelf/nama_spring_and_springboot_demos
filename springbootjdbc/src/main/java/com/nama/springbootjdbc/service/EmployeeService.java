package com.nama.springbootjdbc.service;
import java.util.*;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.nama.springbootjdbc.beans.Emp;
import com.nama.springbootjdbc.controller.EmpRestController;
import com.nama.springbootjdbc.repository.JdbcBookRepository;

@Service
public class EmployeeService {
	
	@Autowired
	JdbcBookRepository dao;
	Logger log = LoggerFactory.getLogger(EmployeeService.class);
	List<Emp> lst;
	
	public EmployeeService()
	{
		this.lst =  new ArrayList<Emp>();
	}
	
	public Emp createEmp(int empId,String empName) {

		log.debug("inside service createEmp:empId:"+empId+", "
				+ "empName:"+empName);
		
		Emp emp = new Emp();
		emp.setEmpId(empId);
		emp.setName(empName);
		
		dao.save(emp);
		this.lst.add(emp);
		
		log.debug("emp added to list");
		return emp;
	}

	public String deleteEmp(int empId) {
		
		log.debug("inside service deleteEmp:empId="+empId);
		long count = dao.deleteById(empId);
		log.debug("emp count"+count);
		if(count>=1)
		{
		this.lst = this.lst.stream()
				           .filter(ex->ex.getEmpId()!=empId)
				           .collect(Collectors.toList());
	
		log.debug("emp deleted from list"+this.lst);
		return "emp with empId"+empId+" is removed";
		}
		else
		{
			log.debug("emp with empId: "+empId+" not present in the table");
			return "emp with empId "+empId+" not found";
		}
	}
	
	
}
