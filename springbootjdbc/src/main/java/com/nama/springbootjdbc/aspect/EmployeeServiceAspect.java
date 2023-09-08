package com.nama.springbootjdbc.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.nama.springbootjdbc.beans.Emp;
import com.nama.springbootjdbc.service.EmployeeService;

@Aspect
@Component
public class EmployeeServiceAspect {

	Logger log = LoggerFactory.getLogger(EmployeeService.class);
	
	@Before(value = "execution(* com.nama.springbootjdbc.service.EmployeeService.*(..)) "
			+ "and args(empId,empName)")
	public void beforeAdvice(JoinPoint joinPoint, int empId,String empName) {
		log.info("aspect:Before method:" + joinPoint.getSignature());

		log.info("aspect:Creating Employee with name - " + empName + " and id - " + empId);
	}

		
	@AfterReturning(pointcut="execution(* com.nama.springbootjdbc.service.EmployeeService.*(..))", returning="emp") 
	public void logReturnValue(JoinPoint joinPoint,Emp emp)
	{
		log.info("aspect:emp return from service.EmployeeService"+emp);
	}
}
