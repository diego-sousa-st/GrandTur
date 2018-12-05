package br.ufla.dcc.diegosousa.grandtur.services;

import br.ufla.dcc.diegosousa.grandtur.models.Usuario;

public interface UsuarioService {

    Usuario findByCpf(String cpf);

    void save(Usuario usuario);
}
