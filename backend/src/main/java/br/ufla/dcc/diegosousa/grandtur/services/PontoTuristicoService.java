package br.ufla.dcc.diegosousa.grandtur.services;

import br.ufla.dcc.diegosousa.grandtur.models.PontoTuristico;

import java.util.Set;

public interface PontoTuristicoService {

    Set<PontoTuristico> findUltimos10PontosCadastrados(String cpfUsuario);

    void save(PontoTuristico pontoTuristico);

    Set<PontoTuristico> search(String termo);

    void delete(Integer id);

    PontoTuristico find(Integer id);

    Integer getNumeroPontosTuristicosAtivos();

}
