package br.ufla.dcc.diegosousa.grandtur.services;

import br.ufla.dcc.diegosousa.grandtur.DTOs.BooleanDTO;
import br.ufla.dcc.diegosousa.grandtur.models.Compra;
import br.ufla.dcc.diegosousa.grandtur.models.PontoTuristico;
import br.ufla.dcc.diegosousa.grandtur.models.Usuario;

import java.util.Set;

public interface UsuarioService {

    Usuario findByCpf(String cpf);

    void save(Usuario usuario);

    BooleanDTO login(Usuario usuario);

    Integer getNumeroUsuariosAtivos();

    void comprarCredito(String cpfUsuario, Integer valor);

    void comprar(Compra compra);

    Set<PontoTuristico> getPontosTuristicosVisitados(String cpfUsuario);

}
