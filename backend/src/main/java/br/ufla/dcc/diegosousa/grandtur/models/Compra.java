package br.ufla.dcc.diegosousa.grandtur.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "compra")
public class Compra implements Serializable {

    private static final long serialVersionUID = 100L;

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "usuario_cpf")
    private Usuario usuario;

    @ManyToOne()
    @JoinColumn(name = "ponto_turistico_id")
    private PontoTuristico pontoTuristico;

    @Column
    private Double valor;

    @Column
    private Date data;

    public Compra() {

        super();

    }

}
