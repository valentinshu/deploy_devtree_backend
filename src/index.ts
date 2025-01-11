import colors from "colors";
import server from "./server";

const port = process.env.PORT || 4000; // asignamos valor por defecto, en el deployment se asignara port.
server.listen(port, () => {
  // configurando la instancia
  console.log(colors.cyan.italic("Servidor funcionando en el puerto: 4000"));
});
