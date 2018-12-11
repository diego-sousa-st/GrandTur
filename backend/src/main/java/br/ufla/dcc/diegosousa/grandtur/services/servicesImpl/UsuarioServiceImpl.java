package br.ufla.dcc.diegosousa.grandtur.services.servicesImpl;

import br.ufla.dcc.diegosousa.grandtur.DTOs.BooleanDTO;
import br.ufla.dcc.diegosousa.grandtur.models.Usuario;
import br.ufla.dcc.diegosousa.grandtur.repositories.UsuarioRepository;
import br.ufla.dcc.diegosousa.grandtur.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

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

            if(usuarioSalvo.getSenha() == usuario.getSenha()) {

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

}
