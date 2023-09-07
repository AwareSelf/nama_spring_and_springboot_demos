package com.nama.springdijavaconfig.beans;

public class ClientImpl implements Client {

	private Service service;
	
	public ClientImpl(Service b) {
		this.service = b;
	}

	@Override
	public void doSomething() {
		String info = service.getInfo();
		System.out.println(info);
	}


}
