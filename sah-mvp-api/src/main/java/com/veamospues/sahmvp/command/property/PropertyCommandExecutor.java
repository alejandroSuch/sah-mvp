package com.veamospues.sahmvp.command.property;

import com.veamospues.sahmvp.command.Command;
import com.veamospues.sahmvp.command.CommandExecutor;
import com.veamospues.sahmvp.exception.UnknownCommandException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PropertyCommandExecutor implements CommandExecutor {
  CreatePropertyCommandExecutor createPropertyCommandExecutor;


  @Override
  public void execute(Command command) {

    if (executeCreateCommand(command)) return;

    throw new UnknownCommandException(command);
  }

  private boolean executeCreateCommand(Command command) {
    if (command instanceof CreatePropertyCommand) {
      createPropertyCommandExecutor.execute((CreatePropertyCommand) command);
      return true;
    }

    return false;
  }
}
