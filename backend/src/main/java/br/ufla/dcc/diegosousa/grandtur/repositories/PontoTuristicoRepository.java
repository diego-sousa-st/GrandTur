package br.ufla.dcc.diegosousa.grandtur.repositories;

import br.ufla.dcc.diegosousa.grandtur.models.PontoTuristico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface PontoTuristicoRepository extends JpaRepository<PontoTuristico, Integer> {

    Set<PontoTuristico> findFirst10ByOrderByIdDesc();

    Set<PontoTuristico> findAllByNomeOrCidadeOrComplementoOrDescricao(String termoNome, String termoCidade, String termoComplemento, String termoDescricao);

    @Query(value = "SELECT COUNT(*) FROM ponto_turistico WHERE ID IS NOT NULL AND ativo = TRUE", nativeQuery = true)
    Integer countAllPontosTuristicosAtivos();

}
