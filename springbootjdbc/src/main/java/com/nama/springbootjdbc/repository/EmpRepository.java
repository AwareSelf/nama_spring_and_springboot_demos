package com.nama.springbootjdbc.repository;

import java.io.File;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.nama.springbootjdbc.beans.*;

public interface EmpRepository {

    long count();

    long save(Emp e);

    long update(Emp e);

    long deleteById(int id);

    List<Emp> findAll();

	Emp findById(Long id);

 }
