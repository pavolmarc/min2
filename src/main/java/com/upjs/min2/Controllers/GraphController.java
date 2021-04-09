package com.upjs.min2.Controllers;

import com.upjs.min2.Classes.Graph;
import org.json.JSONObject;
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
        Graph graph = new Graph("https://data.korona.gov.sk/api/hospitals");
        String information = graph.data;
        return information;
    }

}
