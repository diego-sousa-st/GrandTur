package br.ufla.dcc.diegosousa.grandtur.services;

import br.ufla.dcc.diegosousa.grandtur.models.BalancoFinanceiro;

public interface BalancoFinanceiroService {

    BalancoFinanceiro getBalancoFinanceiroCompleto();

    BalancoFinanceiro getBalancoFinanceiroAtual();

}
