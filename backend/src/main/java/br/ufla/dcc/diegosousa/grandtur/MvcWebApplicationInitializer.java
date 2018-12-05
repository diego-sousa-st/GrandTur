package br.ufla.dcc.diegosousa.grandtur;

import br.ufla.dcc.diegosousa.grandtur.security.WebSecurityConfig;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class MvcWebApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {

        return new Class[] {WebSecurityConfig.class };

    }

    @Override
    protected Class<?>[] getServletConfigClasses() {

        return new Class[] {WebSecurityConfig.class };

    }

    @Override
    protected String[] getServletMappings() {

        return new String[0];

    }
}
