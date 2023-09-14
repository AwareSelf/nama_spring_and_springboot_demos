package com.nama.springboot;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.nama.springboot.beans.Emp;






@SpringBootApplication
public class DemoApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	
		
	
	}

	@Override
	public void run(String... args) throws Exception {
		
		//using RestTemplate - get request to get emp
		ResponseEntity<Emp> responseEntity = new RestTemplate()
			    .getForEntity("http://localhost:8085/emp/"+1,Emp.class);
			
			Emp e = responseEntity.getBody();
			System.out.println("RestTemplate Get Request:"+e);
			
			
		//using RestTemplate- post request to post emp
			
		Emp e1 = new Emp(20,"Shina",7000);
		ResponseEntity<Emp> responseEntity1 = 
			new RestTemplate().postForEntity("http://localhost:8085/emp",e1,Emp.class);

System.out.println("RestTemplate post response status code"+responseEntity1.getStatusCode());
			
			    Emp ex =responseEntity1.getBody();
			    System.out.println("posted emp:"+ex);
//**********************************************************************************************************************************/
		//for HttpClient we have done separate example in HttpClientJava11 project	
			//using HttpClient - get request to get emp
			 HttpClient httpClient = HttpClient.newBuilder()
			         .version(HttpClient.Version.HTTP_2)
			         .connectTimeout(Duration.ofSeconds(10))
			         .build(); 
    	   
    	   String uri = "http://localhost:8085/emp/"+1;
			      
			            HttpRequest request = HttpRequest.newBuilder()
			            .GET()
			            .uri(URI.create(uri))
			            .build();                              
			            HttpResponse<String> response = httpClient.send(request,
			            HttpResponse.BodyHandlers.ofString()); 

			         System.out.println("HttpClient Get Request:Status code: " + response.statusCode());                            
			         System.out.println("HttpClient Get Request:Headers: " + response.headers().allValues("content-type"));
			         System.out.println("HttpClient Get Request:response body:"+response.body());
	
			         
			         
		//using HttpClient to post emp
			   // json formatted data
			         
			int empId=13; String empName="Tina"; double empSalary=17000;
	        String json = new StringBuilder()
	        			.append("{")
				        .append("\"empId\":\"").append(empId).append("\",")
				        .append("\"empName\":\"").append(empName).append("\",")
				        .append("\"empSalary\":\"").append(empSalary).append("\"")
				        .append("}").toString();

		    HttpClient client = HttpClient.newHttpClient();

	        HttpRequest request1 = HttpRequest.newBuilder()
	                .header("Content-Type", "application/json")
	                .uri(URI.create("http://localhost:8085/emp"))
	                .POST(HttpRequest.BodyPublishers.ofString(json))
	                .build();

	        HttpResponse<String> response1 = client.send(request1, HttpResponse.BodyHandlers.ofString());
	        System.out.println("HttpClient Post request:Status code: " + response1.statusCode());
	        System.out.println("\n HttpClient Post request:Body: " + response1.body());
				              	
		
		
	}

}
