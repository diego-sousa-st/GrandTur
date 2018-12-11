package br.ufla.dcc.diegosousa.grandtur.controllers;

import br.ufla.dcc.diegosousa.grandtur.serializers.BalancoFinanceiroSerializer;
import br.ufla.dcc.diegosousa.grandtur.services.BalancoFinanceiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BalancosFinanceiros extends BaseController {

    @Autowired
    private BalancoFinanceiroService balancoFinanceiroService;

    @GetMapping("balancoFinanceiro/completo")
    private String getBalancoFinanceiroCompleto() {

        return renderJSON(this.balancoFinanceiroService.getBalancoFinanceiroCompleto(), BalancoFinanceiroSerializer.find);

    }

    @GetMapping("balancoFinanceiro/atual")
    private String getBalancoFinanceiroAtual() {

        return renderJSON(this.balancoFinanceiroService.getBalancoFinanceiroAtual(), BalancoFinanceiroSerializer.find);

    }

}
