package com.nama.springbootjdbc.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class EmployeeServiceAspect {

	@Before(value = "execution(* com.nama.springbootjdbc.service.EmployeeService.*(..)) "
			+ "and args(empId,empName)")
	public void beforeAdvice(JoinPoint joinPoint, int empId,String empName) {
		System.out.println("Before method:" + joinPoint.getSignature());

		System.out.println("Creating Employee with name - " + empName + " and id - " + empId);
	}

	@After(value = "execution(* com.nama.springbootjdbc.service.EmployeeService.*(..)) "
			+ "and args(empId,empName)")
	public void afterAdvice(JoinPoint joinPoint, int empId,String empName) {
		System.out.println("After method:" + joinPoint.getSignature());

		System.out.println("Successfully created Employee with name - " + empName + " and id - " + empId);
	}
}
