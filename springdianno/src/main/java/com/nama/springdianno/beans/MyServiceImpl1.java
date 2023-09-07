package com.nama.springdianno.beans;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Primary
@Component("service1")
public class MyServiceImpl1 implements MyService {

	@Override
	public String getInfo() {
		return "Service 1's Info";
	}

}
