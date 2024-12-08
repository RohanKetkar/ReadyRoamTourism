package com.tour.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class User extends BaseEntity {

	private String name;
	private String email;
	private String password;
	private userRole role;
	
}
