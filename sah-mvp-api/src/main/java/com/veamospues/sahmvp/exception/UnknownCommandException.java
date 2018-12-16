package com.veamospues.sahmvp.exception;

import com.veamospues.sahmvp.command.Command;

public class UnknownCommandException extends RuntimeException {
  public UnknownCommandException(Command command) {
    super("Unknown command " + command.getClass().getSimpleName());
  }
}
