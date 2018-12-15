package br.ufla.dcc.diegosousa.grandtur.services.servicesImpl;

import br.ufla.dcc.diegosousa.grandtur.models.PontoTuristico;
import br.ufla.dcc.diegosousa.grandtur.models.Usuario;
import br.ufla.dcc.diegosousa.grandtur.repositories.PontoTuristicoRepository;
import br.ufla.dcc.diegosousa.grandtur.services.PontoTuristicoService;
import br.ufla.dcc.diegosousa.grandtur.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class PontoTuristicoServiceImpl implements PontoTuristicoService {


    @Autowired
    private PontoTuristicoRepository pontoTuristicoRepository;

    @Autowired
    private UsuarioService usuarioService;

    @Override
    public Set<PontoTuristico> findUltimos10PontosCadastrados(String cpfUsuario) {

        Set<PontoTuristico> pontoTuristicosValidos = new HashSet<>();

        Set<PontoTuristico> pontoTuristicosSalvo = this.pontoTuristicoRepository.findFirst10ByOrderByIdDesc();

        pontoTuristicosSalvo.forEach(pontoTuristico -> {

            if(pontoTuristico.getAtivo()) {

                pontoTuristicosValidos.add(pontoTuristico);

            }

        });

        return pontoTuristicosValidos;

    }

    @Override
    public void save(PontoTuristico pontoTuristico) {

//        TODO talvez criar update no model - verificar caso imagens
        if(pontoTuristico.getId() == null) {

            pontoTuristico.setAtivo(true);

        }

        this.pontoTuristicoRepository.save(pontoTuristico);


    }

    @Override
    public Set<PontoTuristico> search(String termo) {

        Set<PontoTuristico> pontoTuristicosValidos = new HashSet<>();

        Set<PontoTuristico> pontoTuristicosSalvo = this.pontoTuristicoRepository.findAllByNomeOrCidadeOrComplementoOrDescricao(termo, termo, termo, termo);

        pontoTuristicosSalvo.forEach(pontoTuristico -> {

            if(pontoTuristico.getAtivo()) {

                pontoTuristicosValidos.add(pontoTuristico);

            }

        });

        return pontoTuristicosValidos;

    }

    @Override
    public void delete(Integer id) {

        Optional<PontoTuristico> pontoTuristicoSalvo = this.pontoTuristicoRepository.findById(id);

        pontoTuristicoSalvo.ifPresent(pontoTuristico -> {

            pontoTuristico.setAtivo(false);
            this.pontoTuristicoRepository.save(pontoTuristico);

        });

    }

    @Override
    public PontoTuristico find(Integer id) {

        Optional<PontoTuristico> pontoTuristicoSalvo = this.pontoTuristicoRepository.findById(id);

        return pontoTuristicoSalvo.get();

    }

    @Override
    public Integer getNumeroPontosTuristicosAtivos() {

        return this.pontoTuristicoRepository.countAllPontosTuristicosAtivos();

    }

    @Override
    public Set<PontoTuristico> getPontosTuristicosVisitados(String cpfUsuario) {

        return this.usuarioService.getPontosTuristicosVisitados(cpfUsuario);

    }

}
