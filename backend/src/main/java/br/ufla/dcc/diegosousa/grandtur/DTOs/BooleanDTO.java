package br.ufla.dcc.diegosousa.grandtur.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BooleanDTO {

    private Boolean result;

    public BooleanDTO() {

        super();

    }

    public BooleanDTO(Boolean result) {

        this.result = result;

    }

}
