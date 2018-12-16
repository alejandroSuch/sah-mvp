package com.veamospues.sahmvp.query.property;

import com.veamospues.sahmvp.model.Property;
import com.veamospues.sahmvp.repository.Page;
import com.veamospues.sahmvp.repository.PropertyRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class FindAllPropertiesPaginatedQueryHandler {
  private static final int PAGE_SIZE = 25;
  private PropertyRepository propertyRepository;

  public Page<Property> handle(FindAllPropertiesPaginatedQueryRequest request) {
    return propertyRepository.getProperties(request.getPage(), PAGE_SIZE, request.getSortBy(), request.getDirection());
  }
}
