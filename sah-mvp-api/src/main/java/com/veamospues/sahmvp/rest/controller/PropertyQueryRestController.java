package com.veamospues.sahmvp.rest.controller;

import com.veamospues.sahmvp.model.Property;
import com.veamospues.sahmvp.query.property.FindAllPropertiesPaginatedQueryHandler;
import com.veamospues.sahmvp.query.property.FindAllPropertiesPaginatedQueryRequest;
import com.veamospues.sahmvp.repository.Page;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static java.util.Objects.isNull;

@RestController
@AllArgsConstructor
@RequestMapping("properties")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PropertyQueryRestController {

  private static final String DEFAULT_SORT_BY = "id";
  private static final String DEFAULT_SORT_DIRECTION = "asc";

  FindAllPropertiesPaginatedQueryHandler handler;


  @GetMapping
  public Page<Property> getProperties(
    @RequestParam(value = "page", required = false) Integer page,
    @RequestParam(value = "sortBy", required = false) String sortBy,
    @RequestParam(value = "direction", required = false) String direction
  ) {
    return handler.handle(queryFrom(page, sortBy, direction));
  }

  private FindAllPropertiesPaginatedQueryRequest queryFrom(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "sortBy", required = false) String sortBy, @RequestParam(value = "direction", required = false) String direction) {
    //@formatter:off
    return FindAllPropertiesPaginatedQueryRequest
      .builder()
        .page(isNull(page) ? 1 : page)
        .sortBy(isNull(sortBy) ? DEFAULT_SORT_BY : sortBy)
        .direction(isNull(direction) ? DEFAULT_SORT_DIRECTION : direction)
      .build();
    //@formatter:on
  }
}
