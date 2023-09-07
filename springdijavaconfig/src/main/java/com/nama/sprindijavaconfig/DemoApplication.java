package com.nama.sprindijavaconfig;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.nama.springdijavaconfig.beans.*;
import com.nama.springdijavaconfig.config.AppConfig;






//@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
     ApplicationContext appContext = new AnnotationConfigApplicationContext(AppConfig.class); 
		
		Client client1 = (Client) appContext.getBean("client1");
		client1.doSomething();
		
		Client client2 = (Client) appContext.getBean("client2");
		client2.doSomething();
		
		Service service = (Service) appContext.getBean("srv");
		System.out.println(service.getInfo());
	
	}

}
