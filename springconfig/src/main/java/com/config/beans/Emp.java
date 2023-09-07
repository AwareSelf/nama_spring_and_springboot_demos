package com.config.beans;

public class Emp implements EmpIntf {
	
	private int empId;
	private String empName;
	private DeptIntf dept;
	
	
	
	public Emp() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Emp(int empId, String empName, DeptIntf dept) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.dept = dept;
	}


	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public DeptIntf getDept() {
		return dept;
	}
	public void setDept(DeptIntf dept) {
		this.dept = dept;
	}
	@Override
	public String toString() {
		return "Emp [empId=" + empId + ", empName=" + empName + ", dept=" + dept + "]";
	}
	
	

}
