package com.nama.springboot.beans;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("emp")
public class Emp {
	
		
	private int empId;
	private String empName;
	private double empSalary;
	private double empYearlyBonus;
	private double empTotAnnSalary;
	
	
	
	public Emp() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Emp(int empId, String empName, double empSalary, double empYearlyBonus, double empTotAnnSalary) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.empSalary = empSalary;
		this.empYearlyBonus = empYearlyBonus;
		this.empTotAnnSalary = empTotAnnSalary;
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



	public double getEmpSalary() {
		return empSalary;
	}



	public void setEmpSalary(double empSalary) {
		this.empSalary = empSalary;
	}



	public double getEmpYearlyBonus() {
		return empYearlyBonus;
	}



	public void setEmpYearlyBonus(double empYearlyBonus) {
		this.empYearlyBonus = empYearlyBonus;
	}



	public double getEmpTotAnnSalary() {
		return empTotAnnSalary;
	}



	public void setEmpTotAnnSalary(double empTotAnnSalary) {
		this.empTotAnnSalary = empTotAnnSalary;
	}

    

	@Override
	public int hashCode() {
		if(this.empId >=1 && this.empId<=5)
		{
			return 1;
		}
		else if(this.empId >5 && this.empId<=10)
		{
			return 2;
		}
		else
			return 3;
	}



	@Override
	public boolean equals(Object obj) {
		
		return this.empId==((Emp)obj).empId;
	}



	@Override
	public String toString() {
		return "Emp [empId=" + empId + ", empName=" + empName + ", empSalary=" + empSalary + ", empYearlyBonus="
				+ empYearlyBonus + ", empTotAnnSalary=" + empTotAnnSalary + "]";
	}
	
	
	
	
	
}
