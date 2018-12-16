package com.veamospues.sahmvp.command.property;

import com.veamospues.sahmvp.command.CommandExecutor;
import com.veamospues.sahmvp.model.Property;
import com.veamospues.sahmvp.repository.PropertyRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CreatePropertyCommandExecutor implements CommandExecutor<CreatePropertyCommand> {
  PropertyRepository propertyRepository;

  @Override
  public void execute(CreatePropertyCommand command) {
    propertyRepository.save(propertyFrom(command));
  }

  private Property propertyFrom(CreatePropertyCommand command) {
    //@formatter:off
    return Property.builder()
        .id(command.getId())
        .title(command.getTitle())
        .link(command.getLink())
        .city(command.getCity())
        .mainPicture(command.getMainPicture())
      .build();
    //@formatter:on
  }
}
