package br.ufla.dcc.diegosousa.grandtur.repositories;

import br.ufla.dcc.diegosousa.grandtur.models.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Integer> {

}
