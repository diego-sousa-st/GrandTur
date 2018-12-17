package br.ufla.dcc.diegosousa.grandtur.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    private String cpf;

    @Column
    private String email;

    @Column
    private String nome;

    @Column
    private String senha;

    @Column
    private Integer credito;

    @Column(name = "e_admin")
    private Boolean admin;

    @OneToMany(mappedBy = "usuario")
    private Set<PontoTuristico> pontosTuristicos;

    @OneToMany(mappedBy = "usuario")
    private Set<Compra> compras;

    public Usuario() {

        super();

    }

    public void comprarCredito(Integer valor) {

        this.credito += valor;

    }

    public void update(Usuario usuario) {

        email = usuario.getEmail();
        nome = usuario.getNome();
        senha = usuario.getSenha();

    }
}
