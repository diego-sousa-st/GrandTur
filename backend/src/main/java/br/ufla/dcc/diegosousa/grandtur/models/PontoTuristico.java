package br.ufla.dcc.diegosousa.grandtur.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "ponto_turistico")
public class PontoTuristico {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @Column
    private String nome;

    @Column
    private String pais;

    @Column
    private String cidade;

    @Column
    private String complemento;

    @Column
    private String descricao;

    @Column
    private Integer valor;

    @Column
    private Integer ativo;

    @ManyToOne
    @JoinColumn(name = "usuario_cpf")
    private Usuario usuario;

    @OneToMany(mappedBy = "pontoTuristico", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Imagem> imagens;

    public PontoTuristico() {

        super();
        
    }

}
