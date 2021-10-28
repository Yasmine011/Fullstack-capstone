package com.example.demo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table (name = "groomclientlist")
public class Groomers {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)

	private int id;
	private String ownername;
	private String petname;
	private String petbreed;
	private int petage;
	
	
	public Groomers() {
		
	}
	public Groomers(int id, String ownername, String petname , String petbreed, int petage) {
		super();
		this.id = id;
		this.ownername = ownername;
		this.petname = petname;
		this.petbreed = petbreed;
		this.petage = petage;
	}
	public String getOwnername() {
		return ownername;
	}
	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}
	public String getPetname() {
		return petname;
	}
	public void setPetname(String petname) {
		this.petname = petname;
	}
	public String getPetbreed() {
		return petbreed;
	}
	public void setPetbreed(String petbreed) {
		this.petbreed = petbreed;
	}
	public int getPetage() {
		return petage;
	}
	public void setPetage(int petage) {
		this.petage = petage;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	
	
}

