package com.veamospues.sahmvp.query.property;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FindAllPropertiesPaginatedQueryRequest {
  Integer page;
  String sortBy;
  String direction;
}
