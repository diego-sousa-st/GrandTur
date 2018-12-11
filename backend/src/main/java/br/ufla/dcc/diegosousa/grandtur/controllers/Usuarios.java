package br.ufla.dcc.diegosousa.grandtur.controllers;

import br.ufla.dcc.diegosousa.grandtur.models.Usuario;
import br.ufla.dcc.diegosousa.grandtur.serializers.BooleanDTOSerializer;
import br.ufla.dcc.diegosousa.grandtur.serializers.UsuarioSerializer;
import br.ufla.dcc.diegosousa.grandtur.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Usuarios extends BaseController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("usuarios/{cpf}")
    public String find(@PathVariable("cpf") String cpf) {

        return renderJSON(this.usuarioService.findByCpf(cpf), UsuarioSerializer.find);

    }


    @PostMapping("usuarios")
    public void save(@RequestBody Usuario usuario) {

        this.usuarioService.save(usuario);

    }

    @PostMapping("usuarios/login")
    public String login(@RequestBody Usuario usuario) {

        return renderJSON(this.usuarioService.login(usuario), BooleanDTOSerializer.result);

    }

    @GetMapping("usuarios/comprarCredito/{cpfUsuario}/{valor}")
    public void comprarCredito(@PathVariable("cpfUsuario") String cpfUsuario, @PathVariable("valor") Integer valor) {

        this.usuarioService.comprarCredito(cpfUsuario, valor);

    }

}
