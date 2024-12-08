package com.tour.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//Base
@MappedSuperclass // class level annotation to specify following is a base class from which other
// entities will inherit , no separate table !
//getter setter by lombok
@Getter
@Setter
@ToString
public class BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//Auto id generation

	@Id //this is auto incremented id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Long id;
	@CreationTimestamp
	@Column(name="created_on")
	private LocalDate createdOn;
	@UpdateTimestamp
	@Column(name="updated_on")
	private LocalDateTime updatedOn;
}
