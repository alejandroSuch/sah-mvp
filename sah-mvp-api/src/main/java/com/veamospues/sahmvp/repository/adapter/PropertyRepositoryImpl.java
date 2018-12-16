package com.veamospues.sahmvp.repository.adapter;

import com.veamospues.sahmvp.model.Property;
import com.veamospues.sahmvp.repository.Page;
import com.veamospues.sahmvp.repository.PropertyRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PropertyRepositoryImpl implements PropertyRepository {
  SpringDataPropertyRepository springDataPropertyRepository;

  @Override
  public void save(Property property) {
    if (!springDataPropertyRepository.findById(property.getId()).isPresent()) {
      springDataPropertyRepository.save(property);
    }
  }

  @Override
  public Page<Property> getProperties(Integer page, Integer pageSize, String sortBy, String direction) {
    return pageFrom(springDataPropertyRepository.findAll(PageRequest.of(page, pageSize, getSortDirection(direction), sortBy)));
  }

  private Page<Property> pageFrom(org.springframework.data.domain.Page<Property> all) {
    Page<Property> result = new Page<>();

    result.setElements(all.getContent());
    result.setNumberOfElements(all.getTotalElements());

    return result;
  }

  private Sort.Direction getSortDirection(String direction) {
    return "ASC".equalsIgnoreCase(direction) ? Sort.Direction.ASC : Sort.Direction.DESC;
  }
}
