package com.nama.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


import com.nama.springboot.beans.Emp;


@Controller
public class EmpController {
	
	Logger log = LoggerFactory.getLogger(EmpController.class);
	
	@Autowired
	Emp e;
	
		
	@GetMapping("/emp/{empid}/{empname}")
	public String getEmp(@PathVariable int empid,
			          @PathVariable String empname,
			          ModelMap map)
	{
		log.info("empid="+empid+",empname="+empname);
		this.e.setEmpId(empid);
		this.e.setEmpName(empname);
		map.put("greet","Hello All!");
		map.put("emp",this.e);
		return "empdet";
	}

		
	
}
