package br.ufla.dcc.diegosousa.grandtur.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BalancoFinanceiro {

    private Integer numeroUsuarios;

    private Integer numeroPontosTuristicos;

    private Integer numeroVendas;

    private Double mediaGastoPorUsuario;

    private Double receita;

    public BalancoFinanceiro() {

        super();

    }

}
