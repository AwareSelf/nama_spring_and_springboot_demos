package com.nama.springbootjdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.jdbc.core.JdbcTemplate;



@SpringBootApplication
@EnableAspectJAutoProxy(proxyTargetClass=true)
public class DemoApplication implements CommandLineRunner{

	@Autowired
	private JdbcTemplate jdbcTemplate;
	  
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	
		
	
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
	
    	   this.jdbcTemplate.execute("DROP TABLE IF EXISTS emp");
           this.jdbcTemplate.execute("CREATE TABLE emp(" +
                  "empid int, name VARCHAR(255))");
       
		
	}

}
