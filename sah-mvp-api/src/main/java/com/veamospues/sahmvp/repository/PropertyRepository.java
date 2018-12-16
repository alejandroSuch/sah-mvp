package com.veamospues.sahmvp.repository;

import com.veamospues.sahmvp.model.Property;

public interface PropertyRepository {
  void save(Property property);

  Page<Property> getProperties(Integer page, Integer pageSize, String sortBy, String direction);
}
