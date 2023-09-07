package com.nama.springdianno.beans;

import org.springframework.stereotype.Component;

@Component("service")
public class MyServiceImpl2 implements MyService {

	@Override
	public String getInfo() {
		return "Service 2's Info";
	}

}
