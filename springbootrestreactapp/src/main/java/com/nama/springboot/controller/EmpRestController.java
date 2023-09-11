package com.nama.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.nama.springboot.beans.Emp;
import com.nama.springboot.exception.EmpNotFoundException;
import com.nama.springboot.service.EmpService;
import java.util.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmpRestController {
	
	Logger log = LoggerFactory.getLogger(EmpRestController.class);
	
	@Autowired
	EmpService ser;

	
	
	@PostMapping("/emp")
	public ResponseEntity<Emp> postEmp(@RequestBody Emp e)
	{
		 log.info("controller post:Emp:"+e);
		this.ser.addEmp(e);
		return new ResponseEntity<>(e, HttpStatus.CREATED);
		
	}
	
	@PutMapping("/emp")
	public ResponseEntity<Emp> putEmp(@RequestBody Emp e)
	{
		 log.info("controller put:Emp:"+e);
		String status = this.ser.updateEmp(e);
		
		if(status.equals("updated"))
		  return new ResponseEntity<>(e, HttpStatus.OK);
		else if(status.equals("added"))
		  return new ResponseEntity<>(e, HttpStatus.CREATED);
		else
		 return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);	
		
	}
	
	

	@GetMapping("/emp/{id}")
	public Emp getEmp(@PathVariable int id)
	{
		 log.info("controller get Emp:id"+id);
		 try
		 {
		  Emp e = this.ser.getEmp(id);
		  log.info("controller get Emp:id"+id+",emp:"+e);
		 /*
		 if (e == null) {
			    throw new EmpNotFoundException(
			        "Emp not found, empId: " + id);
			  }
			  */
		  return e;
		 }
		 catch(EmpNotFoundException e)
		 {
			//support above spring 5 and above
			//https://www.baeldung.com/exception-handling-for-rest-with-spring
			 
		         throw new ResponseStatusException(
		           HttpStatus.NOT_FOUND, "Emp With Id="+id+" Not Found", e);
		    
		 }
	}
	
	
	@GetMapping("/isemp/{id}")
	public ResponseEntity<Boolean> findEmp(@PathVariable int id)
	{
		 log.info("controller find Emp:id"+id);
		 
		  boolean b = this.ser.findEmp(id);
		  
		  if(b)
		  log.info("controller Emp with:id"+id+"is present");
		  else
		  log.info("controller Emp with:id"+id+"is not present");  
		 	
		  return new ResponseEntity<>(b, HttpStatus.OK);
	}
	
	@GetMapping("/emps")
	public Set<Emp> getAllEmps()
	{
		 log.info("controller inside get all emps");
		
		  Set<Emp> lst = this.ser.getAllEmps();
		  log.info("controller all emps"+lst);
		
		 return lst;
		
	}
	
	@DeleteMapping("/emp/{id}")
	public ResponseEntity<String> deleteEmp(@PathVariable int id)
	{
		 log.info("controller inside delete emp with id:"+id);
		
		  this.ser.removeEmp(id);
		  log.info("emp removed");
		
		  String msg = "emp with empId="+id+"deleted";
			return new ResponseEntity<>(msg,HttpStatus.OK);	
	}
	
	
	@GetMapping("/emp/{id}/{bonus}")
	public Emp calcAnnSal(@PathVariable int id,
			              @PathVariable int bonus) {

	
        log.info("Id="+id+",bonus:"+bonus);
        
        Emp e = ser.getEmp(id);
        
        if(e!=null)
        {
        	e.setEmpYearlyBonus(bonus);
        	e.setEmpTotAnnSalary((e.getEmpSalary()*12)+bonus);
        }
        log.info("emp:"+e);
		return e;
	}
}
