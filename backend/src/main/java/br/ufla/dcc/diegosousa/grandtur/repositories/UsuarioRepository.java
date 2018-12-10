package br.ufla.dcc.diegosousa.grandtur.repositories;

import br.ufla.dcc.diegosousa.grandtur.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {

    Usuario findByCpf(String cpf);

    Usuario findByEmail(String email);

}
