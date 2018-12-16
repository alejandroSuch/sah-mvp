package com.veamospues.sahmvp.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Property {
  @Id
  Long id;

  String title;

  String link;

  String city;

  String mainPicture;
}
