package br.ufla.dcc.diegosousa.grandtur.controllers;

import br.ufla.dcc.diegosousa.grandtur.models.PontoTuristico;
import br.ufla.dcc.diegosousa.grandtur.serializers.PontoTuristicoSerializer;
import br.ufla.dcc.diegosousa.grandtur.services.PontoTuristicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PontosTuristicos extends BaseController {

    @Autowired
    private PontoTuristicoService pontoTuristicoService;

    @GetMapping("pontosTuristicos/10ultimosCadastrados/{cpfUsuario}")
    public String find10UltimosCadastrados(@PathVariable("cpfUsuario") String cpfUsuario) {

        return renderJSON(this.pontoTuristicoService.findUltimos10PontosCadastrados(cpfUsuario), PontoTuristicoSerializer.find);

    }

    @PostMapping("pontosTuristicos")
    public void save(@RequestBody PontoTuristico pontoTuristico) {

        this.pontoTuristicoService.save(pontoTuristico);

    }

    @GetMapping("pontosTuristicos/search/{termo}")
    public String search(@PathVariable("termo") String termo) {

        return renderJSON(this.pontoTuristicoService.search(termo), PontoTuristicoSerializer.find);

    }

    @GetMapping("pontosTuristicos/delete/{id}")
    public void delete(@PathVariable("id") Integer id) {

        this.pontoTuristicoService.delete(id);

    }

    @GetMapping("pontosTuristicos/{id}")
    public String find(@PathVariable("id") Integer id) {

        return renderJSON(this.pontoTuristicoService.find(id), PontoTuristicoSerializer.find);

    }

}
