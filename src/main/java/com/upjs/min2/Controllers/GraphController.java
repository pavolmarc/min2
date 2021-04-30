package com.upjs.min2.Controllers;

import com.upjs.min2.Classes.Graph;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;


@RestController
public class GraphController {

    @RequestMapping("/graph")
    @CrossOrigin(origins = "http://localhost:3000")
    public String data() throws IOException {
        System.out.println("==== get string ====");
        Graph graph = new Graph("https://data.korona.gov.sk/api/hospital-patients/by-region");
        String information = graph.data;
        return information;
    }

}
