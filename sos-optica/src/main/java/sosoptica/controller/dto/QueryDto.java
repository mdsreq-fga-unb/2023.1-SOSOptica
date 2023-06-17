package sosoptica.controller.dto;

import lombok.*;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QueryDto {

    int Pagina;
    int Tamanho;
}
