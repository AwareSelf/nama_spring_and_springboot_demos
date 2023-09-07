package com.nama.springbootjdbc.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import com.nama.springbootjdbc.beans.Emp;

import java.util.List;



@Repository
public class JdbcBookRepository implements EmpRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;
      
    
    @Override
    public long count() {
    	
        return jdbcTemplate
                .queryForObject("select count(*) from emp", Integer.class);
    }

    @Override
    public long save(Emp e) {
    	
    	     return jdbcTemplate.update(
                "insert into emp (empid,name) values(?,?)",
                e.getEmpId(),e.getName());
    	     
    	   
    }

    @Override
    public long update(Emp e) {
        return jdbcTemplate.update(
                "update emp set name = ? where empid = ?",
                e.getName(), e.getEmpId());
    }


    @Override
    public long deleteById(int id) {
        return jdbcTemplate.update(
                "delete from emp where empid = ?",
                id);
    }

    @Override
    public List<Emp> findAll() {
        return jdbcTemplate.query(
                "select * from emp",
                (rs, rowNum) ->
                        new Emp(rs.getInt("id"),
                                rs.getString("name"))                     
                        
        );
    }
    
 // jdbcTemplate.queryForObject, populates a single object
    @Override
    public Emp findById(Long id) {
        return jdbcTemplate.queryForObject(
                         "select * from emp where empid = ?",
                         (rs, rowNum) -> 
                           new Emp( rs.getInt("empid"),
                        		    rs.getString("name") ),
                           id);                           
                       
         }
}