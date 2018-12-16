package com.veamospues.sahmvp.command;

public interface CommandExecutor<C extends Command> {
  void execute(C command);
}
