// loginController.js
import Admin from "../models/Admin.js"; 

export const login = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    // Verificación directa
    if (usuario === "palomar" && password === "palomar") {
      return res.json({ msg: "Login exitoso", tipo: "directo" });
    }
    
    // Verificación en la base de datos
    const validar = await Admin.findOne({ usuario, password });
    if (!validar) {
      return res.status(400).json({ msg: "Usuario o contraseña no válidos" });
    }
    
    console.log("Login exitoso desde base de datos");
    return res.json({ msg: "Login exitoso desde base de datos", tipo: "baseDatos" });
  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};