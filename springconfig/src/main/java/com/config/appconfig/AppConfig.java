package com.config.appconfig;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

import com.config.beans.*;

@Configuration
@ComponentScan(basePackages = "com.config")
@PropertySource(value = { "classpath:application.properties" })
public class AppConfig {
	
//	@Value("20")
//	int deptId;
	
	@Value("${dept.deptid}")
	int deptId;
	
	
//	@Value("HR")
//	String deptName;
	
	@Value("${dept.deptname}")
	String deptName;
	
//	@Value("2")
//	int empId;
	
//	@Value("Shyam")
//	String empName;
	
	@Value("${emp.empid}")
	int empId;
	
	@Value("${emp.empname}")
	String empName;
	
	
	@Bean("dept")
	public DeptIntf dept()
	{
		return new Dept();
	}
	
	@Bean("dept1")
	public DeptIntf dept1()
	{
		return new Dept(10,"Accounts");
	}
	
	@Bean("dept2")
	public DeptIntf dept2()
	{
		
		return new Dept(deptId,deptName);
	}
	
	
	
	@Bean
	public EmpIntf emp1()
	{
		return new Emp(1,"Ram",dept1());
	}
	
	@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
	@Bean
	public EmpIntf emp2()
	{
		
		return new Emp(empId,empName,dept2());
	}
	
}
