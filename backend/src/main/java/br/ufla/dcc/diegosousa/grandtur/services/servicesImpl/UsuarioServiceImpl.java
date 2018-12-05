package br.ufla.dcc.diegosousa.grandtur.services.servicesImpl;

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
}
