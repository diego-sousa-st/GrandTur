package br.ufla.dcc.diegosousa.grandtur.serializers;

import flexjson.JSONSerializer;

public class UsuarioSerializer {

    public static JSONSerializer find;

    static {

        find = new JSONSerializer()
            .include(
                    "email",
                    "nome",
                    "cpf",
                    "credito"
            )
            .exclude("*")
            .prettyPrint(true);

    }

}
