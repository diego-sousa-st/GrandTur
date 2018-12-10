package br.ufla.dcc.diegosousa.grandtur.serializers;

import flexjson.JSONSerializer;

public class PontoTuristicoSerializer {

    public static JSONSerializer find;

    static {

        find = new JSONSerializer()
                .include(
                        "id",
                        "nome",
                        "pais",
                        "cidade",
                        "complemento",
                        "descricao",
                        "valor",
                        "ativo",
                        "imagens.caminho",
                        "imagens.ePrincipal"
                )
                .exclude("*")
                .prettyPrint(true);

    }

}
