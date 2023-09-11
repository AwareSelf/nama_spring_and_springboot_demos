package com.namrata.microservices.currencyexchangeservice;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CurrencyExchangeServiceApplication implements CommandLineRunner {

	@Autowired
	private CurrencyExchangeRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(CurrencyExchangeServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		BigDecimal bd = BigDecimal.valueOf(65L);
		CurrencyExchange c1 = new CurrencyExchange(10001L,"USD","INR",bd,"");
		//10002,'EUR','INR',75,''
		repository.save(c1);
		
		bd = BigDecimal.valueOf(75L);
		CurrencyExchange c2 = new CurrencyExchange(10002L,"EUR","INR",bd,"");
		repository.save(c2);
		
		//10003,'AUD','INR',25,''
		bd = BigDecimal.valueOf(25L);
		CurrencyExchange c3 = new CurrencyExchange(10003L,"AUD","INR",bd,"");
		repository.save(c3);
		
	}

}
