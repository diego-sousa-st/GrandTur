package br.ufla.dcc.diegosousa.grandtur.services;

import br.ufla.dcc.diegosousa.grandtur.DTOs.BooleanDTO;
import br.ufla.dcc.diegosousa.grandtur.models.Usuario;

public interface UsuarioService {

    Usuario findByCpf(String cpf);

    void save(Usuario usuario);

    BooleanDTO login(Usuario usuario);

    Integer getNumeroUsuariosAtivos();

    void comprarCredito(String cpfUsuario, Integer valor);

}
