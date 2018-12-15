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

        Usuario usuarioSalvo = usuario;

        if(!usuario.getCpf().isEmpty()) {

            usuarioSalvo = this.usuarioRepository.findByCpf(usuario.getCpf());

            if(usuarioSalvo != null) {

                usuarioSalvo.update(usuario);

            } else {

                usuarioSalvo = usuario;

            }

        }

        this.usuarioRepository.save(usuarioSalvo);

    }

    @Override
    public Usuario login(Usuario usuario) {

        Usuario usuarioSalvo = this.usuarioRepository.findByEmail(usuario.getEmail());

        if(usuarioSalvo != null) {

            if(usuarioSalvo.getSenha().equals(usuario.getSenha())) {

                return usuarioSalvo;

            }

            return new Usuario();

        }

        return new Usuario();

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

        Usuario usuarioSalvo = this.usuarioRepository.findByCpf(compra.getUsuario().getCpf());

        Integer saldoRestante = usuarioSalvo.getCredito() - compra.getValor().intValue();

        usuarioSalvo.setCredito(saldoRestante);

        this.usuarioRepository.save(usuarioSalvo);

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
