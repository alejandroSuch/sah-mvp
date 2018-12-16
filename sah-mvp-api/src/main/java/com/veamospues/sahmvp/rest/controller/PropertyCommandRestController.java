package com.veamospues.sahmvp.rest.controller;

import com.veamospues.sahmvp.command.property.CreatePropertyCommand;
import com.veamospues.sahmvp.command.property.PropertyCommandExecutor;
import com.veamospues.sahmvp.rest.request.CreatePropertyRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.net.URI;

@RestController
@AllArgsConstructor
@RequestMapping("/properties")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PropertyCommandRestController {

  PropertyCommandExecutor propertyCommandExecutor;

  @PostMapping
  public ResponseEntity<Void> create(@Valid @RequestBody CreatePropertyRequest request, UriComponentsBuilder uriComponentsBuilder) {
    propertyCommandExecutor.execute(commandFrom(request));

    return response(uriComponentsBuilder, request.getId());
  }

  private CreatePropertyCommand commandFrom(@Valid CreatePropertyRequest request) {
    //@formatter:off
    return CreatePropertyCommand
      .builder()
        .id(request.getId())
        .title(request.getTitle())
        .link(request.getLink())
        .city(request.getCity())
        .mainPicture(request.getMainPicture())
      .build();
    //@formatter:on
  }

  private ResponseEntity<Void> response(UriComponentsBuilder uriComponentsBuilder, @NotBlank Long id) {
    URI location = uriComponentsBuilder.path("/properties/" + id).build().toUri();
    return ResponseEntity.created(location).build();
  }

}
