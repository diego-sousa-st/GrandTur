package br.ufla.dcc.diegosousa.grandtur.controllers;

import br.ufla.dcc.diegosousa.grandtur.results.Json;
import flexjson.JSONSerializer;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public abstract class BaseController {

    /**
     * Render a 200 OK application/json response.
     *
     * @param model
     *            The Java object to serialize
     *
     */
    protected static Json renderJSON(Object model) {

        return new Json(model);

    }

    /**
     * Render a 200 OK application/json response.
     *
     * @param model
     *            The Java object to serialize
     * @param jsonSerializer
     *            A Flexjson serializers to use
     *
     */
    protected static String renderJSON(Object model, JSONSerializer jsonSerializer) {

        return jsonSerializer.serialize(model);

    }

}

