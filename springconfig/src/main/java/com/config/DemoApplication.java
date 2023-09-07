package com.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.config.appconfig.AppConfig;
import com.config.beans.*;






//@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
     ApplicationContext appContext = 
    		 new AnnotationConfigApplicationContext(AppConfig.class); 
		
		EmpIntf e1 = (EmpIntf)appContext.getBean("emp1");
		
		System.out.println(e1.getEmpName());
		System.out.println(e1.getDept().getDeptName());
		
		EmpIntf e2 = (EmpIntf)appContext.getBean("emp1");
		System.out.println(e1==e2);
		System.out.println(e1.equals(e2));
		
		EmpIntf e3 = (EmpIntf)appContext.getBean("emp2");
		System.out.println(e3.getEmpName());
		System.out.println(e3.getDept().getDeptName());
		
		EmpIntf e4 = (EmpIntf)appContext.getBean("emp2");
		System.out.println(e3==e4);
		System.out.println(e3.equals(e4));
		
		DeptIntf d = (DeptIntf)appContext.getBean("dept2");
		System.out.println(d.getDeptName());
	
	}

}
