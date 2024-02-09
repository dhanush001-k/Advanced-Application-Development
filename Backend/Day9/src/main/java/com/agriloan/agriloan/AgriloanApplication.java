package com.agriloan.agriloan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication

@OpenAPIDefinition(
		info =@Info(
				title = "Agro Finance Pro",
				version = "1.1.2",
				description = "Agriculture loan",
				contact = @Contact(
						name = "Author Name",
						email = "Author Email"
						)
				)
		)
public class AgriloanApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgriloanApplication.class, args);
	}

}
