export const normalizePort = (port: string) => {
  const portNumber = parseInt(port, 10);

  if (isNaN(portNumber)) {
    // named pipe
    return port;
  }

  if (portNumber >= 0) {
    // port number
    return portNumber;
  }

  return false;
};
