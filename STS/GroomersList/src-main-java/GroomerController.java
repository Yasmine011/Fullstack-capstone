package com.example.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.Model.Groomers;
import com.example.demo.Repository.GroomersRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class GroomerController {
	@Autowired
	private GroomersRepository groomersRepository ;
	
	//get all Groomers rest api
	
	@GetMapping("/groomers")
	public List <Groomers> getAllGroomers(){
		return groomersRepository.findAll();
	}
	//create Groomers rest api
		@PostMapping("/addgroomers")
		public Groomers createGroomers(Groomers Groomers) {
			return groomersRepository.save(Groomers);
		}
			
		// get employee by id rest api (read)
		
		@GetMapping("/groomers/{id}")
			public ResponseEntity<Groomers> getGroomersById(@PathVariable int id) {
				Groomers Groomers = groomersRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Groomers not exist with id :" + id));
				return ResponseEntity.ok(Groomers);
			}
		// update employee rest api
		
			@PutMapping("/groomers/{id}")
			public ResponseEntity<Groomers> updateGroomers(@PathVariable int id, @RequestBody Groomers groomerDetails){
				Groomers groomers = groomersRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Groomers not exist with id :" + id));
				
				groomers.setOwnername(groomerDetails.getOwnername());
				groomers.setPetname(groomerDetails.getPetname());
				groomers.setPetbreed(groomerDetails.getPetbreed());
				groomers.setPetage(groomerDetails.getPetage());
				
				Groomers updatedGroomers = groomersRepository.save(groomers);
				return ResponseEntity.ok(updatedGroomers);
			}
			@DeleteMapping("/groomers/{id}")
			public String deleteGroomer(@PathVariable int id)
			{
				groomersRepository.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Groom Client not found"));
			    groomersRepository.deleteById(id);
			    return "The Groom Client with id: "+ id +" is removed from the database.";
			}

			}
