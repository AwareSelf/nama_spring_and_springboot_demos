package com.nama.sprindixml;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.nama.springdixml.beans.Client;

//@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		//SpringApplication.run(DemoApplication.class, args);
	
   ApplicationContext appContext
		= new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
	
	Client client = (Client) appContext.getBean("client1");
	client.doSomething();
	
	}

}
