package br.ufla.dcc.diegosousa.grandtur.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "imagem")
public class Imagem {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Column
    private String caminho;

    @Column(name = "e_principal")
    private Boolean ePrincipal;

    @ManyToOne()
    @JoinColumn(name = "ponto_turistico_id")
    private PontoTuristico pontoTuristico;

    public Imagem() {

        super();

    }

}
