const LogisticaRepository = require('../../data/repositories/logistica.repository');

class LogisticaService {

  static registrar(data, callback) {
    if (data.temperatura > 10) {
      console.log('⚠️ Temperatura fuera del rango recomendado');
    }
    LogisticaRepository.crear(data, callback);
  }

  // 🔹 NUEVO
  static obtenerPorLote(lote) {
    return new Promise((resolve, reject) => {
      LogisticaRepository.obtenerPorLote(lote, (err, resultado) => {
        if (err) reject(err);
        else resolve(resultado);
      });
    });
  }
}

module.exports = LogisticaService;
