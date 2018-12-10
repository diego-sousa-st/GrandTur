package br.ufla.dcc.diegosousa.grandtur.controllers;

import br.ufla.dcc.diegosousa.grandtur.serializers.PontoTuristicoSerializer;
import br.ufla.dcc.diegosousa.grandtur.services.PontoTuristicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class PontosTuristicos extends BaseController {

    @Autowired
    private PontoTuristicoService pontoTuristicoService;

    @GetMapping("pontosTuristicos/10ultimosCadastrados/{cpfUsuario}")
    public String find10UltimosCadastrados(@PathVariable String cpfUsuario) {

        return renderJSON(this.pontoTuristicoService.findUltimos10PontosCadastrados(cpfUsuario), PontoTuristicoSerializer.find);

    }

    @GetMapping("pontosTuristicos/search/{termo}")
    public String search(@PathVariable String termo) {

        return renderJSON(this.pontoTuristicoService.search(termo), PontoTuristicoSerializer.find);

    }

}
