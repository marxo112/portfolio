import net from "net";

function checkPort(host, port, timeout = 1000) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const status = { online: false };

    socket.setTimeout(timeout);

    socket.on("connect", () => {
      status.online = true;
      socket.destroy();
    });

    socket.on("timeout", () => {
      socket.destroy();
    });

    socket.on("error", () => {
      socket.destroy();
    });

    socket.on("close", () => {
      resolve(status);
    });

    socket.connect(port, host);
  });
}

export async function GET() {
  const services = {
    webserver: await checkPort("marco-giehmann.de", 443),
    nextcloud: await checkPort("cloud.marco-giehmann.de", 443),
    vaultwarden: await checkPort("vault.marxo.de", 443),
    proxy: await checkPort("proxy.marxo.de", 443),
    windows_vm: await checkPort("win1.marxo.de", 443),
    docker: await checkPort("docker.marxo.de", 443)
  };

  return Response.json(services);
}
