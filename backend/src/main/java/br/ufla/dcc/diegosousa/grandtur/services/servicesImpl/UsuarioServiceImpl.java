package br.ufla.dcc.diegosousa.grandtur.services.servicesImpl;

import br.ufla.dcc.diegosousa.grandtur.DTOs.BooleanDTO;
import br.ufla.dcc.diegosousa.grandtur.models.Compra;
import br.ufla.dcc.diegosousa.grandtur.models.PontoTuristico;
import br.ufla.dcc.diegosousa.grandtur.models.Usuario;
import br.ufla.dcc.diegosousa.grandtur.repositories.CompraRepository;
import br.ufla.dcc.diegosousa.grandtur.repositories.UsuarioRepository;
import br.ufla.dcc.diegosousa.grandtur.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CompraRepository compraRepository;

    @Override
    public Usuario findByCpf(String cpf) {

        return this.usuarioRepository.findByCpf(cpf);

    }

    @Override
    public void save(Usuario usuario) {

        this.usuarioRepository.save(usuario);

    }

    @Override
    public BooleanDTO login(Usuario usuario) {

        Usuario usuarioSalvo = this.usuarioRepository.findByEmail(usuario.getEmail());

        if(usuarioSalvo != null) {

            if(usuarioSalvo.getSenha().equals(usuario.getSenha())) {

                return new BooleanDTO(true);

            }

            return new BooleanDTO(false);

        }

        return new BooleanDTO(false);

    }

    @Override
    public Integer getNumeroUsuariosAtivos() {

        return this.usuarioRepository.countAllUsers();

    }

    @Override
    public void comprarCredito(String cpfUsuario, Integer valor) {

        Usuario usuarioSalvo = this.usuarioRepository.findByCpf(cpfUsuario);

        if(usuarioSalvo != null) {

            usuarioSalvo.comprarCredito(valor);

        }

        this.usuarioRepository.save(usuarioSalvo);

    }

    @Override
    public void comprar(Compra compra) {

        compra.setData(new Date());
        this.compraRepository.save(compra);

    }

    @Override
    public Set<PontoTuristico> getPontosTuristicosVisitados(String cpfUsuario) {

        Usuario usuarioSalvo = this.usuarioRepository.findByCpf(cpfUsuario);

        Set<PontoTuristico> pontoTuristicosVisitados = new HashSet<PontoTuristico>();

        if(usuarioSalvo != null) {

            Set<Compra> compras = usuarioSalvo.getCompras();
            compras.forEach(compra -> pontoTuristicosVisitados.add(compra.getPontoTuristico()));

        }

        return pontoTuristicosVisitados;

    }

}
