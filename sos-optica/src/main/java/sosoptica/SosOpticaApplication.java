package sosoptica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SosOpticaApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(SosOpticaApplication.class, args);
	}

}
