package br.ufla.dcc.diegosousa.grandtur.controllers;

import br.ufla.dcc.diegosousa.grandtur.models.Usuario;
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

}