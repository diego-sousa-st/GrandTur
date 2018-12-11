package br.ufla.dcc.diegosousa.grandtur.repositories;

import br.ufla.dcc.diegosousa.grandtur.models.PontoTuristico;
import br.ufla.dcc.diegosousa.grandtur.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {

    Usuario findByCpf(String cpf);

    Usuario findByEmail(String email);

    @Query(value = "SELECT COUNT(*) FROM usuarios WHERE id IS NOT NULL AND e_admin = FALSE", nativeQuery = true)
    Integer countAllUsers();

}
