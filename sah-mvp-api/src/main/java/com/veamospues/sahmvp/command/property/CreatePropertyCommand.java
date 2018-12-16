package com.veamospues.sahmvp.command.property;

import com.veamospues.sahmvp.command.Command;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreatePropertyCommand implements Command {
  Long id;
  String title;
  String link;
  String city;
  String mainPicture;
}
