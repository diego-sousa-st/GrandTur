package br.ufla.dcc.diegosousa.grandtur.serializers;

import flexjson.JSONSerializer;

public class BalancoFinanceiroSerializer {

    public static JSONSerializer find;

    static {

        find = new JSONSerializer()
                .include(
                        "numeroUsuarios",
                        "numeroPontosTuristicos",
                        "numeroVendas",
                        "mediaGastoPorUsuario",
                        "receita"
                )
                .exclude("*")
                .prettyPrint(true);

    }

}
