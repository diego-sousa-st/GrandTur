package br.ufla.dcc.diegosousa.grandtur.services.servicesImpl;

import br.ufla.dcc.diegosousa.grandtur.models.BalancoFinanceiro;
import br.ufla.dcc.diegosousa.grandtur.repositories.CompraRepository;
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

    @Autowired
    private CompraRepository compraRepository;

    @Override
    public BalancoFinanceiro getBalancoFinanceiroCompleto() {

        BalancoFinanceiro balancoFinanceiro = new BalancoFinanceiro();

        Integer numeroUsuariosAtivos = this.usuarioService.getNumeroUsuariosAtivos();

        balancoFinanceiro.setNumeroUsuarios(numeroUsuariosAtivos);

        Double receitaTotal = this.compraRepository.calculateReceita();

        balancoFinanceiro.setReceita(receitaTotal);

        balancoFinanceiro.setNumeroPontosTuristicos(this.pontoTuristicoService.getNumeroPontosTuristicosAtivos());
        balancoFinanceiro.setNumeroVendas(this.compraRepository.countCompras());
        balancoFinanceiro.setMediaGastoPorUsuario(receitaTotal/numeroUsuariosAtivos);

        return balancoFinanceiro;

    }

    @Override
    public BalancoFinanceiro getBalancoFinanceiroAtual() {

//        novos usuarios e novos pontos não vai ser possível calcular
//        TODO calcular numero de vendas e receita do mês
        return new BalancoFinanceiro();

    }
}
