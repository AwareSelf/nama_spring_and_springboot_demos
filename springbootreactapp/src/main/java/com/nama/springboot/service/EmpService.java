package com.nama.springboot.service;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import com.nama.springboot.beans.Emp;
import com.nama.springboot.exception.EmpNotFoundException;


@Service
public class EmpService {
	
	Logger log = LoggerFactory.getLogger(EmpService.class);
	
	Set<Emp> lst;
	
	public EmpService()
	{
		this.lst = new HashSet<Emp>();
		lst.add(new Emp(1,"Ram",5000));
		lst.add(new Emp(2,"Shyam",6000));
		lst.add(new Emp(3,"Mita",7000));
	}
	
	
	public Set<Emp> getAllEmps() {

        return this.lst;
	}
	
	public void addEmp(Emp e)
	{
		this.lst.add(e);
	}
	
	public void removeEmp(int id)
	{
		this.lst.removeIf(e->e.getEmpId()==id);
	}
	
	public String updateEmp(Emp e)
	{
		String status ="";
		if(this.lst.contains(e))
		{
			this.lst.remove(e);
			this.lst.add(e);
			status = "updated";
		}
		else
		{
			log.info("emp :"+e+" not found in list so adding it..");
			this.lst.add(e);
			status = "added";
		}
		log.info("after updating emp, emp-lst"+this.lst);
		return status;
	}
	
	public Emp getEmp(int id)
	{
		   log.info("service:Id="+id);
		Emp e1 = this.lst.stream()
				       .filter(e->e.getEmpId()==id)
				       .findFirst()
				       .orElse(null);
		
		 if (e1 == null) {
			    throw new EmpNotFoundException(
			        "Emp not found, empId: " + id);
			  }
		 else
			 return e1;
	}
	
	public boolean findEmp(int id)
	{
		   log.info("service:Id="+id);
		Emp e1 = this.lst.stream()
				       .filter(e->e.getEmpId()==id)
				       .findFirst()
				       .orElse(null);
		
		 if (e1 == null) {
			 return false;
			  }
		 else
			 return true;
	}
}
