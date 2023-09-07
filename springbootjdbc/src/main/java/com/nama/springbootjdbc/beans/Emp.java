package com.nama.springbootjdbc.beans;


import org.springframework.stereotype.Component;

@Component("emp")
public class Emp {
	
	private int empId;
	private String name;
	
	
	public Emp() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Emp(int empId, String name) {
		super();
		this.empId = empId;
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	@Override
	public String toString() {
		return "Emp [name=" + name + ", empId=" + empId + "]";
	}
	
	
	
}
