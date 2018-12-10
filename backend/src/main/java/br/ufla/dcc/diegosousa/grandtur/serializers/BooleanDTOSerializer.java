package br.ufla.dcc.diegosousa.grandtur.serializers;

import flexjson.JSONSerializer;

public class BooleanDTOSerializer {

    public static JSONSerializer result;

    static {

        result = new JSONSerializer()
                .include(
                        "result"
                )
                .exclude("*")
                .prettyPrint(true);

    }

}
