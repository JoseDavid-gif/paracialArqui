const OrigenRepository = require('../../data/repositories/origen.repository');

class OrigenService {

  static registrar(origen, callback) {
    if (!origen.lote || !origen.fecha_cosecha) {
      return callback(new Error('Datos de origen incompletos'));
    }
    OrigenRepository.crear(origen, callback);
  }

  // 🔹 NUEVO: usado para consultar trazabilidad
  static obtenerPorLote(lote) {
    return new Promise((resolve, reject) => {
      OrigenRepository.obtenerPorLote(lote, (err, resultado) => {
        if (err) reject(err);
        else resolve(resultado);
      });
    });
  }
}

module.exports = OrigenService;
