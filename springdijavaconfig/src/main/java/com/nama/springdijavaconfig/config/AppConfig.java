package com.nama.springdijavaconfig.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.nama.springdijavaconfig.beans.*;

@Configuration
public class AppConfig {
	
	@Bean("client1")
	public Client getClient1(Service service1) {
		return new ClientImpl(service1);
	}
	
	@Bean("service1")
	public Service getService1() {
		return new ServiceImpl1();
	}

	@Bean
	public Client client2() {
		return new ClientImpl(service2());
	}
	
	@Bean
	public Service service2() {
		return new ServiceImpl2();
	}
	
	@Bean({"service", "srv", "SRV"})
	public Service service3() {
		return new ServiceImpl3();
	}
}
