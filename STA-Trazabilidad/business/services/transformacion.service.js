const TransformacionRepository = require('../../data/repositories/transformacion.repository');

class TransformacionService {

  static registrar(data, callback) {
    TransformacionRepository.crear(data, callback);
  }

  // 🔹 NUEVO
  static obtenerPorLote(lote) {
    return new Promise((resolve, reject) => {
      TransformacionRepository.obtenerPorLote(lote, (err, resultado) => {
        if (err) reject(err);
        else resolve(resultado);
      });
    });
  }
}

module.exports = TransformacionService;
