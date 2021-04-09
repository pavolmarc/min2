package com.upjs.min2.Classes;

import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONException;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.ParseException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import java.util.*;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.Iterator;

import org.json.JSONObject;
import org.springframework.boot.json.JsonParser;

public class Graph {

    public String data;

    public Graph(String url) throws IOException {
        data = executeGet(url);
    }


    public String executeGet(String urlcka) throws IOException {
        String output = "abc";
        String result = "";
        try {
            URL url = new URL(urlcka);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            conn.setRequestProperty("User-Agent", "Mozilla/5.0");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + conn.getResponseCode());
            }
            BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
            while ((output = br.readLine()) != null) {
                result += output;
                System.out.println(output);
            }
            conn.disconnect();
        } finally {

        }

        return result;
    }


}
