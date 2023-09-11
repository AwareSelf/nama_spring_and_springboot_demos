package com.nama.springboot.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(
	    value = HttpStatus.NOT_FOUND, 
	    reason = "Requested Emp does not exist"
	)
	public class EmpNotFoundException 
	    extends RuntimeException {
	 
	
	  public EmpNotFoundException(String msg) {
		    super(msg);
		  }
	}