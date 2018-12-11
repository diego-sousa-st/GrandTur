package br.ufla.dcc.diegosousa.grandtur.repositories;

import br.ufla.dcc.diegosousa.grandtur.models.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Integer> {

    @Query(value = "SELECT COUNT(*) FROM compra WHERE id IS NOT NULL", nativeQuery = true)
    Integer countCompras();

    @Query(value = "SELECT SUM(valor) FROM compra WHERE id IS NOT NULL", nativeQuery = true)
    Double calculateReceita();

}
