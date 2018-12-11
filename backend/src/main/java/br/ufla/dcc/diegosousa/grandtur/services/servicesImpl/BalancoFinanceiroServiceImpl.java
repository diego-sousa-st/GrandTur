package br.ufla.dcc.diegosousa.grandtur.services.servicesImpl;

import br.ufla.dcc.diegosousa.grandtur.models.BalancoFinanceiro;
import br.ufla.dcc.diegosousa.grandtur.services.BalancoFinanceiroService;
import br.ufla.dcc.diegosousa.grandtur.services.PontoTuristicoService;
import br.ufla.dcc.diegosousa.grandtur.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BalancoFinanceiroServiceImpl implements BalancoFinanceiroService {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PontoTuristicoService pontoTuristicoService;

    @Override
    public BalancoFinanceiro getBalancoFinanceiroCompleto() {

        BalancoFinanceiro balancoFinanceiro = new BalancoFinanceiro();

        balancoFinanceiro.setNumeroUsuarios(this.usuarioService.getNumeroUsuariosAtivos());
        balancoFinanceiro.setNumeroUsuarios(this.pontoTuristicoService.getNumeroPontosTuristicosAtivos());
//        TODO calcular numero de vendas realizada

//        TODO calcular media de gasto por cada usuario

//        TODO calcular receita total

        return balancoFinanceiro;

    }

    @Override
    public BalancoFinanceiro getBalancoFinanceiroAtual() {

//        novos usuarios e novos pontos não vai ser possível calcular
//        TODO calcular numero de vendas e receita do mês
        return new BalancoFinanceiro();

    }
}
