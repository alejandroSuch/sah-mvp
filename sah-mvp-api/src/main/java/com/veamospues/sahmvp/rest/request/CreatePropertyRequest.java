package com.veamospues.sahmvp.rest.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreatePropertyRequest {
  @NotNull
  Long id;

  @NotBlank
  String title;

  @URL
  @NotBlank
  String link;

  @NotBlank
  String city;

  @URL
  String mainPicture;
}
