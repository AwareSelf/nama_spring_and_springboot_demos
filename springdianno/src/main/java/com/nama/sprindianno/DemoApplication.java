package com.nama.sprindianno;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


import com.nama.springdianno.beans.MyClient;



//@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		//SpringApplication.run(DemoApplication.class, args);
	
		AnnotationConfigApplicationContext appContext = 
				new AnnotationConfigApplicationContext(); 
		appContext.scan("com.nama.springdianno");
		appContext.refresh();
		
		MyClient client = (MyClient) appContext.getBean("client1");
		client.doSomething();
	
	}

}
