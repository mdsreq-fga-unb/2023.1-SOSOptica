package sosoptica.controller.resource;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class IndexController {
  @GetMapping("/")
    public ResponseEntity cadastrarUsuario(){
      return ResponseEntity.ok().body("SOS Óptica");
    }

}
