package org.kiborgi.parkingsport.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@Slf4j
public class InitController {

  @RequestMapping(value = {"/emitfile"}, method = RequestMethod.POST)
  @ResponseBody
  String emitfile(@RequestParam MultipartFile file) {
    log.info(String.format("Emit file %s to exchange-test", file.getName()));
    CloseableHttpClient client = HttpClients.createDefault();
    HttpPost httpPost = new HttpPost("https://localhost:5000/api/v1/detectCars");

    MultipartEntityBuilder builder = MultipartEntityBuilder.create();
    try {
      builder.addBinaryBody("data", file.getInputStream());
      builder.addBinaryBody(
          "data",
          file.getBytes(),
          ContentType.APPLICATION_OCTET_STREAM,
          file.getName()
      );
    } catch (IOException e) {
      e.printStackTrace();
    }

    HttpEntity multipart = builder.build();
    httpPost.setEntity(multipart);

    CloseableHttpResponse response = null;
    try {
      response = client.execute(httpPost);
      String json = EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8);
      System.out.println(json);
      log.info(json);
    } catch (IOException e) {
      e.printStackTrace();
    }
    try {
      client.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
    return "Emit to exchange-test";
  }
}
