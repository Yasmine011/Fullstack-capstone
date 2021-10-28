package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Model.Groomers;

import java.util.List;
@Repository
public interface GroomersRepository extends JpaRepository <Groomers, Integer> {
	
	
}
